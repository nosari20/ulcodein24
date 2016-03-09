Menu = class Menu extends React.Component {


    constructor (props) {
        super(props);

        this.state= {

        items : [
            {title: "Home", link: "/"},

            /*{title: "Pages", link: "#",
             submenu:{
             sub:[
             {title: "Home", link: "#"},
             {title: "Home", link: "#"},
             ]
             }},
             */

            {title: "Contact", link: "/contact"},

            {title: "News", link: "/news"},
        ],
        active : props.current,
        open : ""
        }
        this.toggle = this.toggle.bind(this)
    }
    render(){
        return (


            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggle}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>


                    <div className={"collapse navbar-collapse " + this.state.open}>
                        <ul className="nav navbar-nav">
                            {
                                this.state.items.map(function(item,i) {

                                    return (
                                        <MenuItem title={item.title} link={item.link}  submenu={item.submenu} click={this.update.bind(this)} key={i} active={(this.state.active == item.title) ? "active" : ""}/>
                                    );

                                }.bind(this))
                            }

                            <li></li>
                        </ul>

                    </div>
                </div>
            </nav>



        );
    }
    update(item){
        this.setState({
            active:item
        });
    }
    toggle(){
        this.setState({
            open:(this.state.open == "") ? "collapse-open" : ""
        });
    }






}


MenuItem = class MenuItem extends React.Component{


    constructor (props) {
        super(props)
        this.state={subs : props.submenu, click : props.click }
        this.toggle = this.toggle.bind(this)
    }

    render(){


        if(!this.state.subs) {

            return (
                <li onClick={this.toggle} className={this.props.active}>

                    <a href={FlowRouter.path(this.props.link)}>{this.props.title}</a>

                </li>
            );
        }else{

            return (
                <li onClick={this.toggle.bind(this)} className={this.props.active +' dropdown'}>

                    <a href={this.props.link}>{this.props.title}</a>

                    <ul className="dropdown-menu">
                        {
                            this.state.subs.sub.map(function(item,i) {

                                return (
                                    <MenuItemSub title={item.title} link={item.link} key={i}/>
                                );

                            })
                        }
                    </ul>


                </li>
            );
        }
    }
    toggle(){
        this.state.click(
            this.props.title
        );

        document.title = this.props.title
    }




}


MenuItemSub = class MenuItemSub extends React.Component{

    constructor (props) {
        super(props)
    }

    render(){
        return (
            <li>

                <a href={this.props.link}>{this.props.title}</a>

            </li>
        );
    }

}
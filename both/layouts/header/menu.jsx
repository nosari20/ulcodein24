Menu=React.createClass({


    getInitialState: function(){
        return {
            items: [
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
            active: "Home",
            open:""
        }

    },
    render: function(){
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
                                        <MenuItem title={item.title} link={item.link}  submenu={item.submenu} onClick={this.update} key={i} active={(this.state.active == item.title) ? "active" : ""}/>
                                    );

                                }.bind(this))
                            }

                            <li></li>
                        </ul>

                    </div>
                </div>
            </nav>



        );
    },
    update:function(item){
        this.setState({
            active:item
        });
    },
    toggle:function(){
        this.setState({
            open:(this.state.open == "") ? "collapse-open" : ""
        });
    }






});


MenuItem=React.createClass({


    getInitialState: function(){
        return {
            subs: this.props.submenu,
        }
    },
    render: function(){


        if(!this.state.subs) {

            return (
                <li onClick={this.toggle} className={this.props.active}>

                    <a href={FlowRouter.path(this.props.link)}>{this.props.title}</a>

                </li>
            );
        }else{

            return (
                <li onClick={this.toggle} className={this.props.active +' dropdown'}>

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
    },
    toggle:function(){
        this.props.onClick(
            this.props.title
        );

        document.title = this.props.title
    }




});


MenuItemSub=React.createClass({

    render: function(){
        return (
            <li>

                <a href={this.props.link}>{this.props.title}</a>

            </li>
        );
    },

});
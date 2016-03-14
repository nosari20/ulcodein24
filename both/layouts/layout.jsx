TransitionGroup = React.addons.TransitionGroup ;

Layout = class Layout extends React.Component{
    constructor (props) {
        super(props);
        this.state={current:this.props.current, animating:false, currentComp:this.props.content}
        this.transitionEndHandler = this.transitionEndHandler.bind(this)
    }

    componentDidUpdate() {



        if(!(this.props.current === this.state.current) && !this.state.animating){



            this.setState({animating:true})
            var pageEl = ReactDOM.findDOMNode(this);




            setTimeout(this.transitionEndHandler,1000)

            //pageEl.addEventListener('transitionend', function(){console.log('handled')})
            //pageEl.addEventListener('webkitTransitionEnd', this.transitionEndHandler)


        }







    }


    render() {


        var transOut=(this.state.animating == true) ? "transitionOut " : ""
        return(

            <div>
                    <Menu current={this.props.current}/>

                    <this.props.content animate={(this.state.animating == true) ? "transitionIn" : ""}/>
                    <this.state.currentComp animate={"previous "+transOut}/>



                    <Footer/>





            </div>
        )


    }

    transitionEndHandler(){
        var pageEl = ReactDOM.findDOMNode(this);
        pageEl.removeEventListener('webkitTransitionEnd',this.transitionEndHandler);
        this.setState(
            {
                animating: false,
                current: this.props.current,
                currentComp:this.props.content
            }
        );
    }

}

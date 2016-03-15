Contact = class Contact extends React.Component{
    render() {
        return (
            <div className={"page "+this.props.animate}>
                <div className="content">
                    <h1>Contact</h1>
                    <form className="form-horizontal" role="form" method="post" action="index.php">
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" name="name" placeholder="First & Last Name" value=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name="email" placeholder="example@domain.com" value=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="4" name="message"></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-2">
                                <input id="submit" name="submit" type="submit" value="Send" className="btn btn-primary"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-2">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

NewsList = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        const handle = Meteor.subscribe('news_list');
        const data = {};
        if (handle.ready()) {
            data.items = NewsCollection.find({}, {sort: {_id: 1}}).fetch();
        }

        return data;
    },

    getList() {
        return (
            <ul>
                {this.data.items.map(task => {
                    //const path = FlowRouter.path('post', {_id: task._id})
                    return(
                        <li key={task._id}><a href="#">{task.title}</a></li>
                    )
                })}
            </ul>
        );
    },

    render() {
        return (
            <div className={"page "+this.props.animate}>
                <div className="content">
                    <h1>News</h1>
                    {(this.data.items) ? this.getList() : "loading..."}
                </div>
            </div>

        )
    }

});
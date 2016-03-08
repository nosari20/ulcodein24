Layout = React.createClass({
  render() {
    return(

    <div>
      <Menu/>
      {this.props.content}
    </div>
    )
  }
});
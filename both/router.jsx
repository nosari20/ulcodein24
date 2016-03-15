FlowRouter.route("/", {
  name: "home",
  action() {
    ReactLayout.render(Layout, {
      content: Home,
      current: "Home",
    });
  }
});

FlowRouter.route("/news", {
  name: "News",
  action() {
    ReactLayout.render(Layout, {
      content: NewsList,
      current: "News",
    });
  }
});

FlowRouter.route("/contact", {
  name: "contact",
  action() {
    ReactLayout.render(Layout, {
      content: Contact,
      current: "Contact",

    });
  }
});



FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    ReactLayout.render(Layout, {
      content: <PostPage _id={params._id} />
    });
  }
});

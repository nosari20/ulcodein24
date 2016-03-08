FlowRouter.route("/", {
  name: "home",
  action() {
    ReactLayout.render(Layout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/news", {
  name: "home",
  action() {
    ReactLayout.render(Layout, {
      content: <News />
    });
  }
});

FlowRouter.route("/contact", {
  name: "home",
  action() {
    ReactLayout.render(Layout, {
      content: <Contact />
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

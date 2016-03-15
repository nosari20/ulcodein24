NewsCollection = new Meteor.Collection('newscollection');
if(Meteor.isServer) {
    NewsCollection.remove({});
    NewsCollection.insert({_id: '1', title: 'En toute pour le hackaton', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
    NewsCollection.insert({_id: '2', title: 'Meteor c\'est super', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
    NewsCollection.insert({_id: '3', title: 'React c\'est super', category: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
}
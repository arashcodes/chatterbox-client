var MessagesView = {

  $chats: $('#chats'),
  lastTimeStamp: '2019-10-02T03:06:19.586Z',

  initialize: function () {
    Parse.readAll((data) => {
      let results = data.results;
      for (let i = 0; i < results.length; i++) {
        if ((results[i].username && results[i].roomname) && results[i].text) {
          let message = new Messages(results[i].username, results[i].roomname, results[i].text);
          this.renderMessage(message);
        }
      }
    });

  },

  renderMessage: function (msg) {
    let html = '';
    html = MessageView.render(msg);
    $('#chats').append(html);
  }
};
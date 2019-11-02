var MessagesView = {

  $chats: $('#chats'),
  lastTimeStamp: '2019-10-02T03:06:19.586Z',

  initialize: function () {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log('Hello from MessagesView', data);

      this.renderMessage(data.results);
    });

  },

  renderMessage: function (results) {
    let html = '';
    for (let i = 0; i < results.length; i++) {
      if ((results[i].username && results[i].roomname) && results[i].text) {
        // if(   ) {
        //   break;
        // }
        html += MessageView.render(results[i]);
      }
      this.lastTimeStamp = results[0].createdAt;
      $('#chats').append(html);
    }
  }
};
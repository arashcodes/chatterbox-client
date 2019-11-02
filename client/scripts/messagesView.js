var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log('Hello from MessagesView', data);

      this.renderMessage(data.results);
    });

  },

  renderMessage: function(results) {
    let html = '';
    for (let i = 0; i < results.length; i++) {

      if ((results[i].username && results[i].roomname) && results[i].text) {
        console.log(results[i]);
        html += MessageView.render(results[i]);
      }


    }
    $('#chats').append(html);
  }

};
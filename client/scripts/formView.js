var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var inputText = $('#message').val();
    Parse.create({username: App.username, text: inputText, roomname: Rooms.currentRoom});
    Parse.readAll((data) => {
      MessagesView.renderMessage(data.results);
    });
    // Stop the browser from submitting the form
    inputText = '';
    event.preventDefault();
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

};
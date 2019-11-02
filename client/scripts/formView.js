var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var inputText = $('#message').val();
    console.log(App.username);
    Parse.create({username: App.username, text: inputText, roomname: 'E 5-6'});
    Parse.readAll((data) => {
      MessagesView.renderMessage(data.results);
    });
    event.preventDefault();
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
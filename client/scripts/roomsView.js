var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // $rooms: $('#add-me'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
  },

  renderRoom: function() {
    let input = $('#room-input').val();
    Rooms.addRoom(input);
    Rooms.currentRoom = input;
    RoomsView.$select.append('<option>' + input + '</option>');
    
    // event.preventDefault();
    console.log('add room clicked');
  }

};

var Rooms = {
  rooms: {},

  addRoom: function(roomname) {
    if (!this.rooms[roomname]) {
      this.rooms[roomname] = roomname;
    } else {
      alert('Room already exists!');
    }
  }
};
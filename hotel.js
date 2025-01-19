(roomNumber, type) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.isBooked = false;
}

bookRoom() {
    if (!this.isBooked) {
        this.isBooked = true;
        console.log(`Room ${this.roomNumber} (${this.type}) has been booked.`);
    } else {
        console.log(`Room ${this.roomNumber} is already booked.`);
    }
}

showDetails() {
    const status = this.isBooked ? "Booked" : "Available";
    return Room ${this.roomNumber} - ${this.type} - ${status};
}
}

// Guest Class
class Guest {
constructor(name, email) {
    this.name = name;
    this.email = email;
}

bookRoom(room) {
    room.bookRoom();
}
}

// Hotel Class
class Hotel {
constructor() {
    this.rooms = [];
}

addRoom(room) {
    this.rooms.push(room);
}

viewRooms() {
    console.log("Room Details:");
    this.rooms.forEach(room => console.log(room.showDetails()));
}
}

// Example Usage
const hotel = new Hotel();

// Add Rooms
hotel.addRoom(new Room(101, "Single"));
hotel.addRoom(new Room(102, "Double"));
hotel.addRoom(new Room(103, "Suite"));

// View Rooms
hotel.viewRooms();

// Create Guest
const guest = new Guest("Tolu", "tolu@example.com");

// Book Room
guest.bookRoom(hotel.rooms[0]);

// View Rooms After Booking
hotel.viewRooms();
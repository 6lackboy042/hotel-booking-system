# Hotel Booking System

A simple hotel booking system built using JavaScript.  
This project demonstrates basic object-oriented programming (OOP) concepts.

## Features
1. Guests can view room availability.
2. Guests can book rooms.
3. Rooms display details like type and availability.

## Usage
### Example Code:
```javascript
const hotel = new Hotel();

hotel.addRoom(new Room(101, "Single"));
hotel.viewRooms();


OUTPUT

Room 101 - Single - Available
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './roomsInterface';
import { RoomsList } from './rooms-list/rooms-list';
import { JsonPipe } from '@angular/common';
import { Header } from "../header/header";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  standalone: true,
  styleUrl: './rooms.scss',
  imports: [RoomsList, JsonPipe, Header],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rooms implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName: String = 'Hilton hotel';
  numberOfRooms: Number = 10;

  hideRooms: Boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  @ViewChild(Header, {static: true})
  headerComponent!: Header;


  title = "Room List"

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  ngOnInit(): void {
    console.log(this.headerComponent)


    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Mini Bar',
        price: 2000,
        photos:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        checkinTime: new Date('2023-01-01'),
        checkoutTime: new Date('2023-01-02'),
      },
      {
        roomNumber: 2,
        roomType: 'Standard Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        checkinTime: new Date('2023-01-01'),
        checkoutTime: new Date('2023-01-02'),
      },
    ];
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Mini Bar',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      checkinTime: new Date('2023-01-01'),
      checkoutTime: new Date('2023-01-02'),
    };
    this.roomList = [...this.roomList, room];
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  ngAfterViewChecked(): void {
    
  }
}

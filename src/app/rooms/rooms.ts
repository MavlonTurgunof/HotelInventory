import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Host, OnInit, QueryList, Self, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './roomsInterface';
import { RoomsList } from './rooms-list/rooms-list';
import { JsonPipe } from '@angular/common';
import { Header } from "../header/header";
import { RoomsService } from './services/rooms-service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  standalone: true,
  styleUrl: './rooms.scss',
  imports: [RoomsList, JsonPipe, Header],
})
export class Rooms implements OnInit {
  constructor(@SkipSelf() private roomsService: RoomsService){

  }
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

  // @ViewChild(Header, {static: true})
  // headerComponent!: Header;

  // @ViewChildren(Header) headerChildrenComponent!: QueryList<Header>


  title = "Room List"

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe(rooms=>{
      this.roomList = rooms
    })

    console.log(this.roomList)
    
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: "4",
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

  // ngAfterViewInit(): void {
  //   this.headerComponent.title = "Rooms View"
  //   this.headerChildrenComponent.last.title = "Last Title"
  //   console.log(this.headerChildrenComponent, this.headerComponent)
  // }

  // ngAfterViewChecked(): void {
    
  // }
}

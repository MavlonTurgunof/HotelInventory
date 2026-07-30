import { Injectable } from '@angular/core';
import { RoomList } from '../roomsInterface';
import {environment} from "../../../environments/environment"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
     {
        roomNumber: "1",
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Mini Bar',
        price: 2000,
        photos:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        checkinTime: new Date('2023-01-01'),
        checkoutTime: new Date('2023-01-02'),
      },
      {
        roomNumber: "2",
        roomType: 'Standard Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        checkinTime: new Date('2023-01-01'),
        checkoutTime: new Date('2023-01-02'),
      },
  ]

  constructor(private http: HttpClient) {
    console.log(environment.apiEndpoint)
    console.log('Rooms Service Initialized...')
  }

  getRooms(){
    return this.http.get<RoomList[]>('api/rooms');
  }
}

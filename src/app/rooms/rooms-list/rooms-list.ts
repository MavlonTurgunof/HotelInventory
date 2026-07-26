import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../roomsInterface';

@Component({
  selector: 'app-rooms-list',
  imports: [],
  standalone: true,
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss',
})
export class RoomsList {
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  @Input()  title: string = "Rooms List"


//  ngDoCheck(): void {
//    console.log("On Check is called")
//  }

//  ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes)
//   if(changes["title"]){
//     this.title = changes['title'].currentValue.toUpperCase()
//   }
//  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}

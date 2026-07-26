import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('hotelinventory');
  // role = 'user';

  @ViewChild("name", {static: true}) name!: ElementRef;

  ngOnInit(): void {
     this.name.nativeElement.innerText = "Hilton Hotel"
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(Rooms)
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

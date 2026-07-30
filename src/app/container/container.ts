import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container implements OnInit, AfterContentInit {

  @ContentChild(Employee) employee!: Employee;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "John"
  }


}

import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor() { 
    this.user = new User();
  }

  ngOnInit(): void {
    console.log(this.user);
    console.log(sessionStorage.getItem("id"));
    console.log(this.user.name);
    console.log(this.user.id);
  }

}

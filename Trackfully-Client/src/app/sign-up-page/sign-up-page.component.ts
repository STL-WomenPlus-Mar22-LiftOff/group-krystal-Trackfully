import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  user: User;
   
  constructor(private userService: UserService, 
              private router: Router, //connects component with URL
              private activatedRoute: ActivatedRoute ) { //provides access to info in this route/component pair such as path and URL params 
    this.user = new User; 
  }

  ngOnInit(): void {
  
  }

 goToDashboard() {
   this.router.navigate([`/dashboard`]); //when called will redirect to this URL path
 }

 setSessionInformation(result: any) {
  //Added this new method, which sets the session with any needed user information from the back end. User information from the front end is stored in User object, and should only be used to send information to backend.
  sessionStorage.setItem("name", result.name);
  sessionStorage.setItem("email", result.email);
  sessionStorage.setItem("id",result.id.toString());
  this.goToDashboard();
 }

 //on submitting, front end user info from the form would be sent to the back end. Once that's completed, we will pull back end user information to the front and store in session.
  onSubmit(password: String, confirmPassword: String) {
    if(password === confirmPassword) {
      this.userService.save(this.user).subscribe((result) => this.userService.getUserInfo(this.user.email).subscribe((result) => this.setSessionInformation(result))); //this calls the save function in the user.service.ts file
      
    }
 }

}

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/Router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  error : string;
  constructor(private route: Router) {}
  ngOnInit() {}



validate(username, password) {
    if(username==="admin") {
      console.log("validated");
      this.route.navigate(['newpath']);
      
    }
}

}

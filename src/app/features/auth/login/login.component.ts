import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  // Input model
  loginModel = {
    userInput: '',
    passwordInput: ''
  };

  ngOnInit(): void {
  }

  public onSubmit(value) {
    console.log(value);
    this.loginSession();
    this.router.navigateByUrl('/dashboard');
  }

  private loginSession() {

  }


}

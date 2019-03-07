import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';

  @ViewChild('f') signupForm: NgForm;

  onSubmit() {
    console.log('email is ' + this.signupForm.value.email);
    console.log('subscription is ' + this.signupForm.value.subscription);
    console.log('password is ' + this.signupForm.value.password);
  }
}

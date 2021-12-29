import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-login-validation',
  templateUrl: './login-validation.component.html',
  styleUrls: ['./login-validation.component.css']
})
export class LoginValidationComponent implements OnInit {

  constructor(private login: FormBuilder) {
  }


  infoUser = this.login.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.min(6)]]
  });

  get lg() {
    return this.infoUser.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.infoUser.value);
  }

}

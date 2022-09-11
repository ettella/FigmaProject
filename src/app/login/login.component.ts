import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get username(): FormControl{
    return this.myForm.get('username') as FormControl
  }

  get password(): FormControl{
    return this.myForm.get('password') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
  role = new FormControl('', [Validators.required]);

  addUser = new FormGroup({
    name : this.name,
    email : this.email,
    password : this.password,
    role : this.role
  });

  constructor(private addedData:UserdataService, private router:Router) {}
  ngOnInit(): void {}

  addData(){
    this.addedData.postData(this.addUser.value).subscribe((result)=>{
      this.router.navigateByUrl('/');
    })
  }
}

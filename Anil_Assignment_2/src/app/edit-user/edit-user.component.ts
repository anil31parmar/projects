import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  getId: any;
  editDataForm!: FormGroup;

  constructor( public formBuilder: FormBuilder,
              private data:UserdataService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.editDataForm = this.formBuilder.group({
      name: [''],
      email: ['']
    })
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId);
    this.data.GetId(this.getId).subscribe(res => {
      this.editDataForm.patchValue({
        name: res.name,
        email: res.email,
      });
    });
  }

  editData() {
      this.data.updateData(this.getId, this.editDataForm.value).subscribe(() => {
          console.log('Data updated successfully!')
          this.router.navigateByUrl('/')
        })
    }
}

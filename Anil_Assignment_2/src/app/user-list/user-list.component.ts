import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  getUsersData:any;

  ngOnInit(): void {
  }

  constructor(private userData:UserdataService){
    this.userData.getUserData().subscribe((data)=>{
      this.getUsersData = data.results;
    });
  }

  deleteData(data:any, id:any){
    if(window.confirm('are you sure')){
    this.userData.deteleUser(data.id).subscribe((res)=>{
      console.log(res);
      this.getUsersData.splice(id, 1);
      });
    }
  }
}

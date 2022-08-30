import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-show-user-detail',
  templateUrl: './show-user-detail.component.html',
  styleUrls: ['./show-user-detail.component.scss']
})
export class ShowUserDetailComponent implements OnInit {

  arr:any = [];
  constructor(private activatedRoute:ActivatedRoute, private router:Router,
     private data:UserdataService,  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.GetId(id).subscribe(res => {
      console.log(res);
      this.arr = res;

    });
  }



}

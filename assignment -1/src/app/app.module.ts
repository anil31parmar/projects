import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })


// export class AppComponent implements OnInit {
//   title = 'Assignment_1';

//     ngOnInit(): void{
//       this.empArr = this.arr;

//     }

//     sum:any;
//     empArr:any = [];
//     arr = [
//       {
//         "id": 1,
//         "first_name": "Kellie",
//         "last_name": "Hales",
//         "email": "khales0@clickbank.net",
//         "gender": "Female",
//         "wealth": 1392712
//       },
//         {
//           "id": 2,
//           "first_name": "Sargent",
//         "last_name": "Hawken",
//         "email": "shawken1@phoca.cz",
//         "gender": "Male",
//         "wealth": 5526470
//         },
//         {
//         "id": 3,
//         "first_name": "Emmanuel",
//         "last_name": "Gertz",
//         "email": "egertz2@tinypic.com",
//         "gender": "Male",
//         "wealth": 3963981
//       },
//       {
//         "id": 4,
//         "first_name": "Gui",
//         "last_name": "Farnill",
//         "email": "gfarnill3@ocn.ne.jp",
//         "gender": "Agender",
//         "wealth": 2761092
//       },
//       {
//         "id": 5,
//         "first_name": "Fee",
//         "last_name": "Leigh",
//         "email": "fleigh4@telegraph.co.uk",
//         "gender": "Male",
//         "wealth": 1127429
//       },
//         {
//           "id": 6,
//           "first_name": "Eduino",
//           "last_name": "Tomasz",
//           "email": "etomasz5@vistaprint.com",
//           "gender": "Male",
//           "wealth": 665198
//         },
//         {
//           "id": 7,
//           "first_name": "Andria",
//           "last_name": "Petley",
//           "email": "apetley6@wikia.com",
//           "gender": "Female",
//           "wealth": 7612223
//         },
//         {
//         "id": 8,
//         "first_name": "Gamaliel",
//         "last_name": "Littlefield",
//         "email": "glittlefield7@sciencedaily.com",
//         "gender": "Male",
//         "wealth": 5729549
//       },
//       {
//         "id": 9,
//         "first_name": "Quintana",
//         "last_name": "Fidoe",
//         "email": "qfidoe8@spiegel.de",
//         "gender": "Female",
//         "wealth": 864577
//       },
//       {
//         "id": 10,
//         "first_name": "Bertine",
//         "last_name": "Yoodall",
//         "email": "byoodall9@wsj.com",
//         "gender": "Female",
//         "wealth": 2581295
//       }
//     ];




//     // display(){
//     //   this.empArr = this.arr;
//     //   return this.empArr ;
//     // }

//     doubleMoney(){


//         const newArr = this.arr.map(item =>{
//           item.wealth *=2;
//           console.log(item)
//           return item.wealth;
//         })

//         // this.empArr = [];
//         // console.log(this.empArr);
//         // this.empArr = this.arr.filter(item =>{
//         //     item.wealth = item.wealth *2;
//         //     // return item.wealth;
//         //     // if(c > item.wealth){
//         //       // console.log(item)
//         //     return this.empArr.push(item)
//         //     // }

//         // })
//         // console.log(this.empArr)


//     }

//     onlyMillionaires(){
//       this.empArr = [];
//       this.arr.filter((data) => {
//         let a = data.wealth > 1000000;
//         if(a == true){
//           // console.log(data);
//           return this.empArr.push(data);
//         }
//       });

//     };

//     // compare(a: { wealth: number; },b: { wealh: number; wealth: number; }) {
//     //   if ( a.wealth < b.wealth ){
//     //     return -1;
//     //   }
//     //   if ( a.wealth > b.wealth ){
//     //     return 1;
//     //   }
//     //   return 0;
//     // }

//     sortByRichest(){
//       const sortArr = this.arr.sort((a, b) => (a.wealth < b.wealth ? 1 : -1));
//       console.log(sortArr)
//       return sortArr;
//     }


//     calculateEntireWealth(){
//       // this.empArr = [];
//       // // let sum = 0;

//       // this.arr.forEach(item => {
//       //   this.sum += item.wealth;
//       // });
//       // return this.sum;


//       const result = this.arr.reduce((acc, current) => {
//         return acc + current.wealth;
//       }, 0);

//       this.sum = result;


//     }


// }


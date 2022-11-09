import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
// users:User[]=[];
users:any;
constructor(private apiService: ApiService) { }

ngOnInit(): void {
  this.userDetails();
}

userDetails(){
  this.apiService.getUsers().subscribe((response:any) => {
    // console.log(response);
    // this.users.push(response);
    // console.log('**',this.users[0]);
    this.users = response;
    console.log('&&',this.users[1]);
  });
  // for(let i = 0; i < this.users.lenght; i++){
  //   console.log('**', this.users[i]);
  // }
  // console.log('user data ==> ',this.users);
}
}

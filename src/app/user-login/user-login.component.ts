import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService, private route:Router){}
  username=""
  password=""

  readValues = ()=>{
    let data:any = {
      "username":this.username,
      "password":this.password
    }

    this.api.loginUser(data).subscribe(
      (response:any)=>{
        this.username=""
          this.password=""
        if(response.status == "success"){
          alert(response.message)
          this.route.navigate(["/"])
        }else{
          alert(response.message)
        }
      }
    )
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-admin-product',
  templateUrl: './view-admin-product.component.html',
  styleUrls: ['./view-admin-product.component.css']
})
export class ViewAdminProductComponent {
  constructor(private api:ApiService){
      api.getProduct().subscribe(
        (response)=>{
          this.loading = false
          this.products = response
          console.log(response)
        }
      )
  }
  products:any = []
  loading:boolean = true
}

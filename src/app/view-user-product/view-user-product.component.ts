import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-product',
  templateUrl: './view-user-product.component.html',
  styleUrls: ['./view-user-product.component.css']
})
export class ViewUserProductComponent {
  constructor(private api: ApiService) {
    api.getProduct().subscribe(
      (response) => {
        this.loading = false
        this.products = response
        console.log(response)
      }
    )
  }
  products: any = []
  loading: boolean = true
}

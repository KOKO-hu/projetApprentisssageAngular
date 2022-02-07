import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  ProductformGroup!:FormGroup

  constructor(private fb:FormBuilder,private productService:ProductService) { }

  ngOnInit(): void {
    this.ProductformGroup=this.fb.group({
      nom: ["", Validators.required],
      prix: [0, Validators.required],
      quantite:["", Validators.required]
    })
  }
  onSaveProduct() {
    this.productService.SaveProducts(this.ProductformGroup.value).subscribe(data => {
      alert("success")
    })
  }

}

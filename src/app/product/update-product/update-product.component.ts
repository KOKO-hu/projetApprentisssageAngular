import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId!: number
  productGroup!: FormGroup
  constructor(private activatedRouter: ActivatedRoute,
    private router:Router,
    private productService: ProductService,
    private fb:FormBuilder
  ) { 
    this.productId = activatedRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.GetProducts(this.productId).subscribe(
      (data) => {
        this.productGroup = this.fb.group({
          id: [data.id, Validators.required],
          nom: [data.nom, Validators.required],
          quantite: [data.quantite, Validators.required],
          prix: [data.prix, Validators.required]
        })
      }
    )
  }
  onUpdateProduct() {
    this.productService.UpdateProducts(this.productGroup.value).subscribe(
      data => {
        alert("sucess")
        this.router.navigateByUrl("/product")
      }
    )
  }
}

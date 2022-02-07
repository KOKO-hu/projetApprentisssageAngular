import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ProductModule } from '../models/product/product.module';
import { ProductService } from '../services/product.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from '../state/state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products$: Observable<AppDataState<ProductModule[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts() {
    this.products$=this.productService.getAllProducts().pipe(
      map(data => {
        console.log(data)
        return ({ dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err =>of({ dataState: DataStateEnum.ERROR, errorMessage:err.message}))
     )
    

  }
  getSelectProducts() {
    this.products$ = this.productService.getSelectProducts().pipe(
      map(data => {
        console.log(data)
        return ({ dataState: DataStateEnum.LOADED, data: data })
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }

  onSearch(dataform: any) {
    this.products$ = this.productService.getsearchProducts(dataform.keyword).pipe(
      map(data => {
        console.log(data)
        return ({ dataState: DataStateEnum.LOADED, data: data })
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }
  deleteProduit(produit: ProductModule) {
    
    this.productService.DeleteProducts(produit).subscribe(data => {
      console.log("valeur"+data)
      this.onGetAllProducts()
    })
  }

  onNewProducts() {
    this.router.navigateByUrl("/newproduct")
  }
  onEdit(p: ProductModule) {
    this.router.navigateByUrl("/updateproduct/"+p.id)
  }
/* une fonction de product nav-bar */
  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS: this.onGetAllProducts(); break
      case ProductActionsTypes.GET_SELECTED_PRODUCTS: this.getSelectProducts(); break
      case ProductActionsTypes.SEARCH_PRODUCTS: this.onSearch($event.payload); break  
      case ProductActionsTypes.EDIT_PRODUCT: this.onEdit($event.payload); break
      case ProductActionsTypes.DELECT_PRODUCT: this.deleteProduit($event.payload); break 
      case ProductActionsTypes.NEW_PRODUCT: this.onNewProducts(); break     
     
}
  }
}

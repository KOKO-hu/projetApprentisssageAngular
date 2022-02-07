import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

 @Output() eventEmitter: EventEmitter<ActionEvent>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onGetAllProducts() {
    this.eventEmitter.emit({
      type: ProductActionsTypes.GET_ALL_PRODUCTS,
      payload:null
    })
  }
  getSelectProducts() {
    this.eventEmitter.emit({
      type: ProductActionsTypes.GET_IVAILABLE_PRODUCTS,
      payload: null
    })
  }
  onNewProducts() {
    this.eventEmitter.emit({
      type: ProductActionsTypes.NEW_PRODUCT,
      payload: null
    })
  }
  onSearch(dataform: any) {
    this.eventEmitter.emit({
      type: ProductActionsTypes.SEARCH_PRODUCTS, payload:dataform
   
    })
  }
}

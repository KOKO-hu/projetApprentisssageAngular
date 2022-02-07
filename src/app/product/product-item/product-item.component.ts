import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/state';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModule;
  @Output() eventsEmitter:EventEmitter<ActionEvent>= new EventEmitter<ActionEvent>()
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(product: ProductModule) {
    this.eventsEmitter.emit({ type: ProductActionsTypes.EDIT_PRODUCT, payload: product })
  }
  deleteProduit(product: ProductModule) {
    this.eventsEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:product})
   }
  

}

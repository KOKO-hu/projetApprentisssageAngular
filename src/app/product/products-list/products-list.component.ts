import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModule } from 'src/app/models/product/product.module';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/state';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products$: Observable<AppDataState<ProductModule[]>> | null = null;
  @Output() productsEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()
  readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }
  deleteProduit(p: ProductModule) {
    this.productsEventEmitter.emit({
      type: ProductActionsTypes.DELECT_PRODUCT, payload: p
    });
   }
  onEdit(p: ProductModule) {
    this.productsEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCT, payload: p
    })
  }
  onActionEvent($event: ActionEvent) {
     this.productsEventEmitter.emit($event)
  }
}

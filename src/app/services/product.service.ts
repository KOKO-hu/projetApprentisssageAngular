import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModule } from '../models/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    
  }
  getAllProducts(): Observable<ProductModule[]> {
    /* declaration de la route au niveau de environnement */
    let host = environment.host;
    return this.http.get<ProductModule[]>(host+"/product");
  }
  getSelectProducts(): Observable<ProductModule[]> {
    let host = environment.host;
    return this.http.get<ProductModule[]>(host + "/product?id=1");
  }

  getAvailableProducts(): Observable<ProductModule[]> {
    let host = environment.host;
    return this.http.get<ProductModule[]>(host + "/products?id=1");
  }
  getsearchProducts(keyword:string): Observable<ProductModule[]> {
    let host = environment.host;
    return this.http.get<ProductModule[]>(host + "/product?nom="+ keyword);
  }

  DeleteProducts(product: ProductModule): Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + "/product?id="+product.id );
  }

  SaveProducts(product: ProductModule): Observable<ProductModule> {
    let host = environment.host;
    return this.http.post<ProductModule>(host + "/product",product);
  }

  GetProducts(id:number): Observable<ProductModule> {
    let host = environment.host;
    return this.http.get<ProductModule>(host + "/product/"+id);
  }

  UpdateProducts(product: ProductModule): Observable<ProductModule> {
    let host = environment.host;
    return this.http.put<ProductModule>(host + "/product/" + product.id, product);
  }
}

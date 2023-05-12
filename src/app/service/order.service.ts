import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaderCreator} from "../common/constants/httpHeaderCreator";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient
  ) { }

  getOrders(){
    let headers = new HttpHeaderCreator().createHeader();
    return this.http.get("http://localhost:8080/api/v1/orders/get", {headers})
  }
}

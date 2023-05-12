import { Component } from '@angular/core';
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public orderService: OrderService) {
    this.getOrders()
  }

  orders:Array<any> = [5,9, 10]

  getOrders(){
    this.orderService.getOrders().subscribe(
      next => {
        // @ts-ignore
        console.log(next.body)
        // @ts-ignore
        for (const bodyElement of next.body) {
          this.orders.push(bodyElement)
        }
      }
    )
  }
}

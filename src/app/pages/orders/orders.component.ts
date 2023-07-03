import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orders = this.orderService.orders$;
  currentBalance = this.paymentService.paymentBalance$;

  constructor(private orderService: OrdersService, private paymentService: PaymentsService){}

  ngOnInit(): void {
  }

  addOrder(order: HTMLInputElement){
    if(order.value){
      this.orderService.addOrder(order.valueAsNumber);
      this.paymentService.updateBalance(2);
      order.value = '';
    }
  }


}

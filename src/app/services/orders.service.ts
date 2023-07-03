import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersSubject = new BehaviorSubject<number[]>([]);
  public orders$ = this.ordersSubject.asObservable();


  constructor() { }

  public addOrder(orderId: number){
    const orders = [...this.ordersSubject.value, orderId];
    this.ordersSubject.next(orders);
  }

}

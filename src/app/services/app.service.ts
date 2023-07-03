import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { OrdersService } from './orders.service';
import { PaymentsService } from './payments.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public customerAndBalance$ = combineLatest([
    this.paymentService.paymentBalance$,
    this.orderService.orders$,
    this.profileService.name$,
  ]).pipe(
    map(([balance, orders, profileName]) => ({ balance, orders, profileName }))
  );

  customer$ = this.profileService.name$;
  orders$ = this.orderService.orders$;
  balance$ = this.paymentService.paymentBalance$;

  constructor(
    private paymentService: PaymentsService,
    private orderService: OrdersService,
    private profileService: ProfileService
  ) {}


  addOrder(order: number){
    this.orderService.addOrder(order)
    this.paymentService.updateBalance(1);
  }
}

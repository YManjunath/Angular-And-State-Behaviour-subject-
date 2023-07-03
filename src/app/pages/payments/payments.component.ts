import { Component } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  balance = this.paymentService.paymentBalance$;

  constructor(private paymentService: PaymentsService){

  }

  updateBalance(balance: HTMLInputElement){
    this.paymentService.addBalance(balance.valueAsNumber);
  }


}

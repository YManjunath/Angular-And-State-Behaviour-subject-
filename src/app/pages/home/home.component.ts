import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  customerStatus$ = this.appService.customerAndBalance$;

  constructor(private appService: AppService) {}

  ngOnInit() {
    
  }
}

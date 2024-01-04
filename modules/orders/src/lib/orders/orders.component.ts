import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@ecommerce-angular/shared-ui';

@Component({
  selector: 'ecommerce-angular-orders',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}

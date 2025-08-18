import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Order } from '../../models/order.model';
import { OrderConfig } from '../../models/order-config.model';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapBoxFill,
  bootstrapPencilFill,
  bootstrapSearch,
  bootstrapTrashFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-orders-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIcon],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.scss',
  viewProviders: [
    provideIcons({ bootstrapBoxFill, bootstrapSearch, bootstrapPencilFill, bootstrapTrashFill }),
  ],
})
export class OrdersList implements OnInit, OnDestroy, OnChanges {
  @Input()
  orders!: Order[];

  @Output()
  editAction = new EventEmitter<Order>();

  @Output()
  deleteAction = new EventEmitter<Order>();

  public config: OrderConfig = {
    title: 'Orders',
  };

  public searchControl: FormControl = new FormControl('');
  public filteredOrders: Order[] = [];

  private subscription?: Subscription;

  ngOnInit(): void {
    this.internalInit();
  }

  // mata la subscription la busqueda
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.internalInit();
  }

  public internalInit(): void {
    this.setupEvents();
    this.filteredOrders = this.orders;
  }

  public setupEvents(): void {
    this.listenInput();
  }

  public listenInput(): void {
    this.subscription = this.searchControl.valueChanges.subscribe((value) => {
      this.applyFilter(value || '');
    });
  }

  public applyFilter(value: string): void {
    const text = value.toLowerCase().trim();

    this.filteredOrders = this.orders.filter((order) => {
      const orderNumber = order.orderNumber?.toString() ?? '';
      const customer = order.customerName?.toLowerCase() ?? '';
      const date = new Date(order.orderDate).toISOString().split('T')[0];
      const status = order.status?.toLowerCase() ?? '';

      return (
        orderNumber.includes(text) ||
        customer.includes(text) ||
        date.includes(text) ||
        status.includes(text)
      );
    });
  }

  public onEditOrder(order: Order): void {
    this.editOrder(order);
  }

  public onDeleteOrder(order: Order) {
    this.deleteOrder(order);
  }

  private editOrder(order: Order): void {
    this.editAction.emit(order);
  }

  private deleteOrder(order: Order): void {
    this.deleteAction.emit(order);
  }
}

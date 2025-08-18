import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { bootstrapPlusCircleFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ModalAction } from '../../../shared/components/modal/enums/modal-action.enum';
import { Modal } from '../../../shared/components/modal/modal';
import { CustomersForm } from '../../components/customers-form/customers-form';
import { CustomersList } from '../../components/customers-list/customers-list';
import { MOCK_CUSTOMERS } from '../../mocks/customer-data-mock';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customers-container',
  imports: [CustomersList, CustomersForm, Modal, HttpClientModule, NgIcon],
  templateUrl: './template/customers-container.html',
  styleUrl: './customers-container.scss',
  viewProviders: [provideIcons({ bootstrapPlusCircleFill })],
})
export class CustomersContainer implements OnInit {
  @ViewChild(CustomersForm)
  customerFormComponent!: CustomersForm;

  public isModalOpen: boolean = false;
  public isNewCustomer: boolean = false;
  public currentCustomer: Customer = this.emptyCustomer();
  public customers: Customer[] = [];
  public config = {
    title: 'Manage Customers',
    newButtonLabel: 'New',
  };

  constructor(/*private customerService: CustomerService*/) {}

  ngOnInit(): void {
    this.internalinit();
  }

  private internalinit(): void {
    this.loadCustomers();
  }

  public onNewCustomer(): void {
    this.currentCustomer = this.emptyCustomer();
    this.showModal(true);
    this.isNewCustomer = true;
  }

  public handleModalAction(modalAction: ModalAction): void {
    if (modalAction === ModalAction.PrimaryButton) {
      this.submitForm();
    }
    if (modalAction === ModalAction.SecondaryButton) {
      this.showModal(false);
    }
  }

  private submitForm(): void {
    this.customerFormComponent.onSubmit();
  }

  public handleSaveAction(customer: Customer): void {
    if (!customer) return;

    if (this.isNewCustomer) {
      this.handleCreateCustomer(customer);
    } else if (customer.id) {
      this.handleUpdateCustomer(customer);
    }

    this.showModal(false);
  }

  private handleCreateCustomer(customer: Customer): void {
    // this.customerService.create(customer).subscribe({
    //   next: () => this.onCustomerActionSuccess(true),
    //   error: (err) => this.handleError(err, 'create'),
    // });
  }

  private handleUpdateCustomer(customer: Customer): void {
    if (!customer.id) return;

    // this.customerService.update(customer.id, customer).subscribe({
    //   next: () => this.onCustomerActionSuccess(false),
    //   error: (err) => this.handleError(err, 'update'),
    // });
  }

  private onCustomerActionSuccess(isNew: boolean): void {
    this.loadCustomers();
    if (isNew) {
      this.resetCustomerForm();
    }
  }

  private resetCustomerForm(): void {
    this.showModal(false);
    this.currentCustomer = this.emptyCustomer();
  }

  private handleError(error: any, action: string): void {
    console.error(`Error al ${action} cliente`, error);
  }

  public handleEditAction(customer: Customer): void {
    this.isNewCustomer = false;
    this.currentCustomer = customer;
    this.showModal(true);
  }

  public handleDeleteAction(customer: Customer): void {
    // this.customerService.delete(customer.id).subscribe({
    //   next: () => this.loadCustomers(),
    //   error: (err) => this.handleError(err, 'Delete'),
    // });
  }

  private loadCustomers() {
    // Todo: Mock data for demonstration purposes
    this.customers = MOCK_CUSTOMERS;
    // this.customerService.getAll().subscribe({
    //   next: (data) => (this.customers = data),
    //   error: (err) => console.error('Error al cargar clientes', err),
    // });
  }

  private emptyCustomer(): Customer {
    return {
      id: '00000000-0000-0000-0000-000000000000',
      name: '',
      email: '',
      phone: '',
      address: '',
      ruc: '',
    };
  }

  private showModal(flag: boolean) {
    this.isModalOpen = flag;
  }
}

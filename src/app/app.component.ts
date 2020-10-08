import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromStore from './store'
import { Customer } from 'src/app/modules/customer.model';
import { CustomerService } from './services/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  customers: Customer[] = []
  display: string = 'none'
  isEditModeEnabled: boolean = false
  person: Customer = {}

  constructor(private store: Store<fromStore.AppState>, private customerService: CustomerService) {
    store.select(fromStore.getCustomers).subscribe(rs => {
      console.log(rs)
      this.customers = rs
    })
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCustomer())
  }

  /**
   *
   */
  openModalDialog() {
    this.display = 'block'
    this.isEditModeEnabled = false
  }

  /**
   *
   * @param myForm
   */
  closeModal(myForm: NgForm) {
    this.display = 'none'
    // Reset Form

    myForm.reset()
  }

  /**
   *
   * @param Customer
   */
  editClient(customer: Customer) {
    this.isEditModeEnabled = true
    this.person = { ...customer }
    this.display = 'block'
  }

  updateCustomer(myForm: NgForm) {
    this.store.dispatch(new fromStore.UpdateCustomer(myForm.value))
    this.closeModal(myForm)
  }

  addCustomer(myForm: NgForm) {
    // Simulate Id generation
    let userId = new Date().getTime()
    let newCustomer = myForm.value
    newCustomer['id'] = userId

    console.log(myForm.value)
    //validations
    if (newCustomer.name !== null && newCustomer !== undefined) {
      this.store.dispatch(new fromStore.CreateCustomer(newCustomer))
      this.closeModal(myForm)
    }
  }

  removeClient(customerId: number) {
    if (customerId !== undefined) {
      if (confirm('¿Estás seguro que deseas borrar este usuario?'))
        this.store.dispatch(new fromStore.DeleteCustomer(customerId))
    }
  }

}

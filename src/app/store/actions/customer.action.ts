import { Action }from '@ngrx/store'
import { Customer } from 'src/app/modules/customer.model';

export const LOAD_CUSTOMERS = "[Customer] Load customers"
export const LOAD_CUSTOMERS_SUCCESS = "[Customer] Load Customer success"
export const LOAD_CUSTOMERS_FAIL = "[Customer] Load Customer fail"


/* LOAD CUSTOMER */
export class LoadCustomer implements Action {
  readonly type = LOAD_CUSTOMERS
}

export class LoadCustomerSuccss implements Action {
  readonly type = LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: Customer[]) { }
}

export class LoadCustomerFail implements Action {
  readonly type = LOAD_CUSTOMERS_FAIL;
  constructor(public payload: any) { }
}

/* UPDATE CUSTOMER */
export const UPDATE_CUSTOMER = '[Customer] update customer'
export const UPDATE_CUSTOMER_SUCCESS = '[Customer] update customer success'
export const UPDATE_CUSTOMER_FAIL = '[Customer] update customer fail'


export class UpdateCustomer implements Action {
  readonly type = UPDATE_CUSTOMER;
  constructor(public payload: Customer) { }
}

export class UpdateCustomerSuccess implements Action {
  readonly type = UPDATE_CUSTOMER_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateCustomerFail implements Action {
  readonly type = UPDATE_CUSTOMER_FAIL;
  constructor(public payload: any) { }
}

/* CREATE CUSTOMER */
export const CREATE_CUSTOMER = '[Customer] create customer'
export const CREATE_CUSTOMER_SUCCESS = '[Customer] create customer success'
export const CREATE_CUSTOMER_FAIL = '[Customer] create customer fail'

export class CreateCustomer implements Action {
  readonly type = CREATE_CUSTOMER;
  constructor(public payload: Customer) { }
}

export class CreateCustomerSuccess implements Action {
  readonly type = CREATE_CUSTOMER_SUCCESS;
  constructor(public payload: any) { }
}

export class CreateCustomerFail implements Action {
  readonly type = CREATE_CUSTOMER_FAIL;
  constructor(public payload: any) { }
}

/* DELETE CUSTOMER */
export const DELETE_CUSTOMER = '[Customer] delete customer'
export const DELETE_CUSTOMER_SUCCESS = '[Customer] delete customer success'
export const DELETE_CUSTOMER_FAIL = '[Customer] delete customer fail'

export class DeleteCustomer implements Action {
  readonly type = DELETE_CUSTOMER;
  constructor(public payload: number) { }
}

export class DeleteCustomerSuccess implements Action {
  readonly type = DELETE_CUSTOMER_SUCCESS;
  constructor(public payload: any) { }
}

export class DeleteCustomerFail implements Action {
  readonly type = DELETE_CUSTOMER_FAIL;
  constructor(public payload: any) { }
}

export type CustomerActions =
LoadCustomer |
LoadCustomerSuccss |
LoadCustomerFail |
UpdateCustomer |
UpdateCustomerSuccess |
UpdateCustomerFail |
CreateCustomer |
CreateCustomerSuccess |
CreateCustomerFail  |
DeleteCustomer  |
DeleteCustomerSuccess|
DeleteCustomerFail

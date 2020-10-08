import { state } from '@angular/animations'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromCustomerReducer from './app.reducer'

export interface AppState {
  customers: fromCustomerReducer.CustomerState
}

export const reducers = {
  customers: fromCustomerReducer.reducer
}

// Customer Selectors
export const getState = (state) => state
export const getCustomersState = createFeatureSelector<fromCustomerReducer.CustomerState>('customers')
export const getCustomers = createSelector(getCustomersState, fromCustomerReducer.getCustomers)
export const getCustomerById = (id) => createSelector(getCustomers, (customers) => {

  return customers.filter(x => x.id === id)
})

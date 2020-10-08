import { Customer } from 'src/app/modules/customer.model';
import * as fromCustomerActions from '../actions/customer.action'

export interface CustomerState {
  data: Customer[]
  loaded: boolean
  loading: boolean
  error: string
}

export const initialState: CustomerState = {
  data: [],
  loaded: false,
  loading: false,
  error: ''
}

export function reducer(state = initialState, action: fromCustomerActions.CustomerActions) {
  switch (action.type) {
    // LOAD CUSTOMER CASE
    case fromCustomerActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromCustomerActions.LOAD_CUSTOMERS_SUCCESS: {
      const data = action.payload
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      }
    }

    case fromCustomerActions.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      }
    }

    // UPDATE CUSTOMER CASE
    case fromCustomerActions.UPDATE_CUSTOMER_SUCCESS: {
      let data = state.data.map(customer => {
        return customer.id === action.payload.id ? action.payload : customer
      })

      return {
        ...state,
        data,
        loading: false,
        loaded: true
      }
    }

    case fromCustomerActions.UPDATE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }

    // CREATE CUSTOMER CASE
    case fromCustomerActions.CREATE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload]
        // --> This causes readding the data again
        // loading: false,
        // loaded: true
      }
    }

    case fromCustomerActions.CREATE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }

     // DELETE CUSTOMER CASE
     case fromCustomerActions.DELETE_CUSTOMER_SUCCESS: {
       const userId = action.payload
       const data = [...state.data.filter(cust => cust.id !== userId)]
       console.log("data", data)
      return {
        ...state,
        data
      }
    }

    case fromCustomerActions.DELETE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }

    default: {
      return state
    }
  }
}

// Selectors
export const getCustomers = (state: CustomerState) => state.data
export const getcustomersLoaded = (state: CustomerState) => state.loaded
export const getCustomerLoading = (state: CustomerState) => state.loading
export const getCustomersError = (state: CustomerState) => state.error

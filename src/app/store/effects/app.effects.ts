import { Injectable } from '@angular/core';
import { Actions, Effect, EffectsModule, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromCustomerActions from '../actions/customer.action'
import { catchError, map, switchMap } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { error } from 'protractor';

@Injectable()
export class CustomerEffects {
  constructor(private action$: Actions, private customerService: CustomerService) { }

  // Load Customer
  @Effect()
  loadCustomers$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.LOAD_CUSTOMERS),
    switchMap(() => this.customerService.getCustomers()
      .pipe(
        map(response => {
          return new fromCustomerActions.LoadCustomerSuccss(response)
        }),
        catchError(error => of(new fromCustomerActions.LoadCustomerFail(error)))
        //dispatch action with payload in `map`
        //dispatch action with error in `catchError`
      )
    )
  )

  // Update Customer
  @Effect()
  updateCustomer$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.UPDATE_CUSTOMER),
    map((action: fromCustomerActions.UpdateCustomer) => action.payload),
    switchMap((payload) => this.customerService.updateCustomer(payload)
      .pipe(
        map(response => new fromCustomerActions.UpdateCustomerSuccess(response)
        ),
        catchError(error => of(new fromCustomerActions.UpdateCustomerFail(error))
        ))
    )
  )

  // Add Customer
  @Effect()
  addCustomer$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.CREATE_CUSTOMER),
    map((action: fromCustomerActions.CreateCustomer) => action.payload),
    switchMap((payload) => this.customerService.addCustomer(payload)
      .pipe(
        map(response => new fromCustomerActions.CreateCustomerSuccess(response)
        ),
        catchError(error => of(new fromCustomerActions.CreateCustomerFail(error))
        ))
    )
  )

  // Delete Customer
  @Effect()
  deleteCustomer$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.DELETE_CUSTOMER),
    map((action: fromCustomerActions.DeleteCustomer) => action.payload),
    switchMap((payload: number) => this.customerService.deleteCustomer(payload)
      .pipe(
        map(() => new fromCustomerActions.DeleteCustomerSuccess(payload)
        ),
        catchError(error => of(new fromCustomerActions.DeleteCustomerFail(error))
        ))
    )
  )
}

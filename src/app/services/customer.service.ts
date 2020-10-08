import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Customer } from '../modules/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/usuarios'
  public httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain'
    })
  }

  constructor(private http: HttpClient) { }

  /**
   *
   */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}`)
  }

  /**
   *
   * @param customer
   */
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${customer.id}`, JSON.stringify(customer), this.httpOpt)
  }

  /**
   *
   * @param customer
   */
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}`, JSON.stringify(customer), this.httpOpt)
  }

  /**
   *
   * @param customerId
   */
  deleteCustomer(customerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${customerId}`, this.httpOpt)
  }
}

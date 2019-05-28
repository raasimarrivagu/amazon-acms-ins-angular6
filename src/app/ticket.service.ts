import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';
import { MainTicket } from './main-ticket';
import { CheckStatus } from './check-status';

/**
 * @author Mounica
 */

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  private endPoint = "http://localhost:8080/ticket";

  createTicket(ticket : Object) : Observable<any>{
    return this.http.post<any>(this.endPoint+"/createTicket",ticket);
  }

  getStatus(ticket : Object): Observable<any> {
    return this.http.post<any>(this.endPoint+"/getStatus", ticket);
  }

  getTicketsByUserName(userName : String) : Observable<any> {
    return this.http.get<any>(this.endPoint+"/getAllTickets/"+userName);
  }

  getPendingTickets(userName : String) :Observable<any> {
    return this.http.get<any>(this.endPoint+"/getUserTicketsByStatus/pending/"+userName);
  }

  getResolvedTickets(userName : String) : Observable<any> {
    return this.http.get<any>(this.endPoint+"/getUserTicketsByStatus/resolved/"+userName);
  }

  getCountOfTicketsByStatus(userName : String) : Observable<any> {
    return this.http.get<any>(this.endPoint+"/getCountOfTicketsByStatus/"+userName);
  }
}

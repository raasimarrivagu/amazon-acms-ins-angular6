import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MainTicket } from '../main-ticket';
import { HttpClient } from '@angular/common/http';

/**
 * @authors Nishita, Raasi
 */

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  submitted = false;

createTicketForm:FormGroup;

  issuesList : string[];

 constructor(private ticketService:TicketService) { 
 }

  ngOnInit() {
  }

  ticket: Ticket = new Ticket();
  
  finalTicket : MainTicket=new MainTicket();

  raiseTicket():void{
    
    this.ticketService
    .createTicket(this.ticket)
    .subscribe(
      data => {
        this.finalTicket=data;
      }, 
      error => console.log(error)
      );

  }

}

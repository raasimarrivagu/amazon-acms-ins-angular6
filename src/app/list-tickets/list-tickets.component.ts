import { Component, OnInit } from '@angular/core';
import { MainTicket } from '../main-ticket';
import { Observable } from 'rxjs';
import { TicketService } from '../ticket.service';
import { CheckStatus } from '../check-status';

/**
 * @authors Nishita, Raasi
 */

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
  }

  tickets : Object[];

  checkStatus : CheckStatus = new CheckStatus();

  userName : String;

  listTickets():void{
    this.ticketService.getTicketsByUserName(this.userName)
    .subscribe(
      data =>{
        this.tickets=data;
      },
      error => {
        console.log(error);
      }
    )
  }
}

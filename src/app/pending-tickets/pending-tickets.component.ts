import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

/**
 * @authors Nishita, Raasi
 */

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent implements OnInit {

  constructor(private ticketService : TicketService) { }

  ngOnInit() {
  }

  tickets : Object[];

  userName : String;

  pendingTickets():void{
    this.ticketService.getPendingTickets(this.userName)
    .subscribe(
      data => {
        this.tickets = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}

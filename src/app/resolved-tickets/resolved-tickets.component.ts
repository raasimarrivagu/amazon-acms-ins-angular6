import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

/**
 * @authors Nishita, Raasi
 */

@Component({
  selector: 'app-resolved-tickets',
  templateUrl: './resolved-tickets.component.html',
  styleUrls: ['./resolved-tickets.component.css']
})
export class ResolvedTicketsComponent implements OnInit {

  constructor(private ticketService : TicketService) { }

  ngOnInit() {
  }

  userName : String;

  tickets : Object[];

  resolvedTickets() : void {
    this.ticketService.getResolvedTickets(this.userName)
    .subscribe(
      data => {
        this.tickets=data;
      },
      error => {
        console.log(error);
      }
    )
  }

}

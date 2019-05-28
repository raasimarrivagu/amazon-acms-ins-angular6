import { Component, OnInit } from '@angular/core';
import { CheckStatus } from '../check-status';
import { TicketService } from '../ticket.service';
import { MainTicket } from '../main-ticket';

/**
 * @author Nishita, Raasi
 */

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  constructor(private ticketService : TicketService) { }

  ngOnInit() {
  }

  checkStatus : CheckStatus = new CheckStatus();

  finalTicket : MainTicket = new MainTicket();

  checkStatusOfTicket() : void {
    this.ticketService.getStatus(this.checkStatus)
    .subscribe(
      data => {
        this.finalTicket=data;
      },
      error => console.log(error)
    )
  }
}

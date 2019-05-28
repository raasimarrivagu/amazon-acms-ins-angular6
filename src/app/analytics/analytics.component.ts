import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

/**
 * @author Raasi
 */

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private ticketService : TicketService) { }

  ngOnInit() {
  } 

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartColors = [{
    backgroundColor:"#884EA0",
    hoverBackgroundColor:"#BB8FCE",
    borderColor:"#884EA0",
    hoverBorderColor:"#884EA0"
}];

  countArray : any[];

  barChartData : any[];

  public barChartLabels = ['started','in-progress','resolved'];

  userName : String;

  getData():void{
    this.ticketService.getCountOfTicketsByStatus(this.userName).
    subscribe(
      response => {
        this.barChartData = [
          {data : response, label: "status"}
        ];
        
      },
      error => {
        console.log(error);
      }
    )
  }
}

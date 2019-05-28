import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { ResolvedTicketsComponent } from './resolved-tickets/resolved-tickets.component';
import { AnalyticsComponent } from './analytics/analytics.component';

/**
 * @author Raasi
 */

const routes: Routes = [
  { path : 'createTicket', component : CreateTicketComponent },
  { path : 'checkStatus' , component : CheckStatusComponent },
  { path : 'listTickets' , component : ListTicketsComponent },
  { path : 'pendingTickets' , component : PendingTicketsComponent },
  { path : 'resolvedTickets' , component : ResolvedTicketsComponent },
  { path : 'analytics' , component : AnalyticsComponent },
  { path : '' , component : CreateTicketComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'courses',
  component: CoursesComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckStatusComponent } from './check-status/check-status.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { ResolvedTicketsComponent } from './resolved-tickets/resolved-tickets.component';
import { ChartsModule } from 'ng2-charts';
import { AnalyticsComponent } from './analytics/analytics.component';

/**
 * @author Raasi
 */
@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    CheckStatusComponent,
    ListTicketsComponent,
    PendingTicketsComponent,
    ResolvedTicketsComponent,
    AnalyticsComponent
  ],
  imports: [
    ReactiveFormsModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

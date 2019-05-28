import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTicketsComponent } from './pending-tickets.component';

describe('PendingTicketsComponent', () => {
  let component: PendingTicketsComponent;
  let fixture: ComponentFixture<PendingTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

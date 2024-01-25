import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingMessageComponent } from './incoming-message.component';

describe('IncomingMessageComponent', () => {
  let component: IncomingMessageComponent;
  let fixture: ComponentFixture<IncomingMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomingMessageComponent]
    });
    fixture = TestBed.createComponent(IncomingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitChatLayoutComponent } from './chit-chat-layout.component';

describe('ChitChatLayoutComponent', () => {
  let component: ChitChatLayoutComponent;
  let fixture: ComponentFixture<ChitChatLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitChatLayoutComponent]
    });
    fixture = TestBed.createComponent(ChitChatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

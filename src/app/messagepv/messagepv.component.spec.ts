import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagepvComponent } from './messagepv.component';

describe('MessagepvComponent', () => {
  let component: MessagepvComponent;
  let fixture: ComponentFixture<MessagepvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagepvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagepvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

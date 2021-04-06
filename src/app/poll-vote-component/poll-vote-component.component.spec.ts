import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVoteComponentComponent } from './poll-vote-component.component';

describe('PollVoteComponentComponent', () => {
  let component: PollVoteComponentComponent;
  let fixture: ComponentFixture<PollVoteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollVoteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollVoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

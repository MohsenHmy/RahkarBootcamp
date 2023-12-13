import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelBotComponent } from './tel-bot.component';

describe('TelBotComponent', () => {
  let component: TelBotComponent;
  let fixture: ComponentFixture<TelBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstParagraphComponent } from './first-paragraph.component';

describe('FirstParagraphComponent', () => {
  let component: FirstParagraphComponent;
  let fixture: ComponentFixture<FirstParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

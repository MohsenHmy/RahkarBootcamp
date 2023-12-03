import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondParagraphComponent } from './second-paragraph.component';

describe('SecondParagraphComponent', () => {
  let component: SecondParagraphComponent;
  let fixture: ComponentFixture<SecondParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

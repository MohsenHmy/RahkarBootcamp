import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdParagraphComponent } from './third-paragraph.component';

describe('ThirdParagraphComponent', () => {
  let component: ThirdParagraphComponent;
  let fixture: ComponentFixture<ThirdParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

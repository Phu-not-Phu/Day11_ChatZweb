import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleTextComponent } from './bubble-text.component';

describe('BubbleTextComponent', () => {
  let component: BubbleTextComponent;
  let fixture: ComponentFixture<BubbleTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleTextComponent]
    });
    fixture = TestBed.createComponent(BubbleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

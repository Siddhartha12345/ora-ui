import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisturizerComponent } from './moisturizer.component';

describe('MoisturizerComponent', () => {
  let component: MoisturizerComponent;
  let fixture: ComponentFixture<MoisturizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoisturizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoisturizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWashComponent } from './body-wash.component';

describe('BodyWashComponent', () => {
  let component: BodyWashComponent;
  let fixture: ComponentFixture<BodyWashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyWashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

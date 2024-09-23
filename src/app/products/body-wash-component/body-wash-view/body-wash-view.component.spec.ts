import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWashViewComponent } from './body-wash-view.component';

describe('BodyWashViewComponent', () => {
  let component: BodyWashViewComponent;
  let fixture: ComponentFixture<BodyWashViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyWashViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyWashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

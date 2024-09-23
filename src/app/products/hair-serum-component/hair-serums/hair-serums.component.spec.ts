import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairSerumsComponent } from './hair-serums.component';

describe('HairSerumsComponent', () => {
  let component: HairSerumsComponent;
  let fixture: ComponentFixture<HairSerumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairSerumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairSerumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

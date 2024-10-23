import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEgyptComponent } from './about-egypt.component';

describe('AboutEgyptComponent', () => {
  let component: AboutEgyptComponent;
  let fixture: ComponentFixture<AboutEgyptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEgyptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEgyptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

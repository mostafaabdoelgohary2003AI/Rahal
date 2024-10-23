import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlogComponent } from './all-plog.component';

describe('AllPlogComponent', () => {
  let component: AllPlogComponent;
  let fixture: ComponentFixture<AllPlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

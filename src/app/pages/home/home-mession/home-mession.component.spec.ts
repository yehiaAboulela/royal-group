import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessionComponent } from './home-mession.component';

describe('HomeMessionComponent', () => {
  let component: HomeMessionComponent;
  let fixture: ComponentFixture<HomeMessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

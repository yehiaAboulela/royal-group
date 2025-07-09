import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFactsComponent } from './home-facts.component';

describe('HomeFactsComponent', () => {
  let component: HomeFactsComponent;
  let fixture: ComponentFixture<HomeFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

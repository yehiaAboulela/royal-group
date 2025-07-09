import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutroComponent } from './home-outro.component';

describe('HomeOutroComponent', () => {
  let component: HomeOutroComponent;
  let fixture: ComponentFixture<HomeOutroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOutroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

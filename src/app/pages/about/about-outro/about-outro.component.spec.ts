import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOutroComponent } from './about-outro.component';

describe('AboutOutroComponent', () => {
  let component: AboutOutroComponent;
  let fixture: ComponentFixture<AboutOutroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOutroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

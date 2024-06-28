import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionBannerComponent } from './cancion-banner.component';

describe('CancionBannerComponent', () => {
  let component: CancionBannerComponent;
  let fixture: ComponentFixture<CancionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancionBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

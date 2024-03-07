import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemanagerComponent } from './imagemanager.component';

describe('AlbumManagerComponent', () => {
  let component: ImagemanagerComponent;
  let fixture: ComponentFixture<ImagemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagemanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

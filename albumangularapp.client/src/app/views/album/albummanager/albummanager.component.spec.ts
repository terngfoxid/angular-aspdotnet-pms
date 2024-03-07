import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumManagerComponent } from './albummanager.component';

describe('AlbumManagerComponent', () => {
  let component: AlbumManagerComponent;
  let fixture: ComponentFixture<AlbumManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

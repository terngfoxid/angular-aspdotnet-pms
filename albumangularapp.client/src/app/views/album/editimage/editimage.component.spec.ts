import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageComponent } from './editimage.component';

describe('AddImageComponent', () => {
  let component: EditImageComponent;
  let fixture: ComponentFixture<EditImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

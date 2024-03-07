import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProject_ModifyComponent } from './editproject-modify.component';

describe('EditProjectComponent', () => {
  let component: EditProject_ModifyComponent;
  let fixture: ComponentFixture<EditProject_ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProject_ModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProject_ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

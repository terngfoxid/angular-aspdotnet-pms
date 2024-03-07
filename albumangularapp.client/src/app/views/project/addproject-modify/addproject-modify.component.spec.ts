import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProject_ModifyComponent } from './addproject-modify.component';

describe('AddProject_ModifyComponent', () => {
  let component: AddProject_ModifyComponent;
  let fixture: ComponentFixture<AddProject_ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProject_ModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProject_ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

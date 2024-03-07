import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEditorComponent } from './activityeditor.component';

describe('ActivityEditorComponent', () => {
  let component: ActivityEditorComponent;
  let fixture: ComponentFixture<ActivityEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

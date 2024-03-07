import { Component, Input} from '@angular/core';
import { Activity, Project } from '../../../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-activityeditor',
  templateUrl: './activityeditor.component.html',
  styleUrl: './activityeditor.component.css'
})
export class ActivityEditorComponent{
  @Input() Activity:Activity = new Activity();

  CreateForm = new FormGroup({
    Detail: new FormControl('', Validators.required),
  });
  
  ngOnInit() {
    this.CreateForm.setValue({
      Detail: this.Activity.detail || null
    });
    this.Activity.project = new Project();
  }

  addActivity(lv:number){
    let newActivity:Activity  = new Activity();
    newActivity.project = new Project();
    newActivity.lv = lv+1;
    this.Activity.inverseParent?.push(newActivity);
  }

  remove(){
    this.Activity.isDelete = true;
  }
  
  changeValue(){
    this.Activity.detail = this.CreateForm.value.Detail;
  }
}

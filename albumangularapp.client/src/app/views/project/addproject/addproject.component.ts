import { Component} from '@angular/core';
import { Activity, Project } from '../../../models';
import { ProjectService } from '../../../services/project.service';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrl: './addproject.component.css'
})
export class AddProjectComponent {
  title: string = 'Add Project';

  public Project: Project = new Project();
  constructor(private projectService: ProjectService) { }
  
  addActivity(){
    let newActivity:Activity  = new Activity();
    newActivity.project = new Project();
    newActivity.lv = 1;
    this.Project.activities?.push(newActivity)
    console.log(this.Project);
  }

  onSubmit(){
    this.projectService.postProject(this.Project).subscribe(
      (result) => {
        document.location.href="/edit_project";
      },
      (error) => {
        console.error(error);
        alert("เพิ่ม Project ไม่สำเร็จ");
      }
    )
  }
}

import { Component} from '@angular/core';
import { Activity, Project } from '../../../models';
import { ProjectService } from '../../../services/project.service';


@Component({
  selector: 'app-addproject-modify',
  templateUrl: './addproject-modify.component.html',
  styleUrl: './addproject-modify.component.css'
})
export class AddProject_ModifyComponent {
  title: string = 'Add Project';

  public Project: Project = new Project();
  constructor(private projectService: ProjectService) { }

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

import { Component} from '@angular/core';
import { Project } from '../../../models';
import { ProjectService } from '../../../services/project.service';


@Component({
  selector: 'app-projectmanager',
  templateUrl: './projectmanager.component.html',
  styleUrl: './projectmanager.component.css'
})
export class ProjectManagerComponent {
  title: string = 'Project Manager';

  public AllProject : Project[] = [];

  constructor(private projectService: ProjectService) { }

  async ngOnInit() {
    await this.projectService.getAllProject().subscribe(
      (result) => {
        this.AllProject = result.projects;
        console.log(this.AllProject)
      },
      (error) => {
        console.error(error);
      }
    )
  }

  confirmDelete(name: string,id:number|string|null|undefined) {
    if(confirm("ยืนยันการลบ Project "+name)) {
      this.projectService.deleteProject(id||null).subscribe(
        (result) => {
          location.reload();
        },
        (error) => {
          console.error(error);
          alert("ลบ Project ไม่สำเร็จ");
        }
      )
    }
  }
}

import { Component} from '@angular/core';
import { Activity, Project } from '../../../models';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrl: './editproject.component.css'
})
export class EditProjectComponent {
  title: string = 'Edit Project';
  startDate:string = "";
  endDate:string = "";
  public Project: Project = new Project();
  constructor(private projectService: ProjectService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.projectService.getProject(this.route.snapshot.paramMap.get('id')).subscribe(
      (result) => {
        this.Project = result.projects[0];
        
        const x = (String(this.Project.startDate)).split('T');
        const y = (String(this.Project.endDate)).split('T');
        console.log(x[0])
        this.startDate = x[0];
        this.endDate = y[0];
      },
      (error) => {
        console.error(error);
        alert("ไม่พบ Album");
        document.location.href="/edit_album";
      }
    )
  }

  addActivity(){
    let newActivity:Activity  = new Activity();
    newActivity.project = new Project();
    newActivity.lv = 1;
    this.Project.activities?.push(newActivity)
    console.log(this.Project);
  }

  changeValueStartDate(event:Event){
    this.Project.startDate = new Date((event.target as HTMLInputElement).value)
  }

  changeValueEndDate(event:Event){
    this.Project.endDate = new Date((event.target as HTMLInputElement).value)
  }

  onSubmit(){
    this.projectService.putProject(this.Project).subscribe(
      (result) => {
        document.location.href="/edit_project";
      },
      (error) => {
        console.error(error);
        alert("แก้ไข Project ไม่สำเร็จ");
      }
    )
  }
}

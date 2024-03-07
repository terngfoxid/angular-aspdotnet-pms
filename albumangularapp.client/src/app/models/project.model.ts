import { Activity } from "./activity.model";

export class Project {
    id: string | number | null | undefined = 0;
    name: string | null | undefined = null;
    startDate: Date | null | undefined = null;
    endDate: Date | null | undefined = null;
    createDate: Date | null | undefined = null;
    updateDate: Date | null | undefined = null;
    isDelete: boolean | null | undefined = null;

    activities: Activity[] | null | undefined = [];

    addNewActivity() {
        let newActivity: Activity = new Activity();
        newActivity.project = new Project();
        newActivity.lv = 1;
        this.activities?.push(newActivity)
    }

    init(project:Project) {
        this.id = project.id;
        this.name = project.name;
        this.startDate = project.startDate;
        this.endDate = project.endDate;
        this.createDate = project.createDate;
        this.updateDate = project.updateDate;
        this.isDelete = project.isDelete;

        project.activities?.forEach(
            (activity) =>{
                let newActivity: Activity = new Activity();
                newActivity.init(activity);
                this.activities?.push(newActivity)
            }
        )
    }
}
import { Project } from "./project.model";

export class Activity {
    id: string | number | null | undefined = 0;
    projectId: string | number | null | undefined = 0;
    parentId: string | number | null | undefined = null;
    detail: string | null | undefined = null;
    lv: number = 1;
    createDate: Date | null | undefined = null;
    updateDate: Date | null | undefined = null;
    isDelete: boolean | null | undefined = null;

    project: Project | null | undefined = null;
    parent: Activity | null | undefined = null;
    inverseParent: Activity[] | null | undefined = [];

    addNewActivity() {
        let newActivity: Activity = new Activity();
        newActivity.project = new Project();
        newActivity.lv = this.lv + 1;
        this.inverseParent?.push(newActivity)
    }

    deleteActivity() {
        this.isDelete = true;
    }

    changeValue(event: Event) {
        this.detail = (event.target as HTMLInputElement).value;

    }

    init(activity:Activity){
        this.id = activity.id
        this.projectId = activity.projectId
        this.parentId = activity.parentId
        this.detail = activity.detail
        this.lv = activity.lv
        this.createDate = activity.createDate
        this.updateDate = activity.updateDate
        this.isDelete = activity.isDelete

        this.project = new Project();

        activity.inverseParent?.forEach(
            (activity) => {
                let newActivity: Activity = new Activity();
                newActivity.init(activity);
                this.inverseParent?.push(newActivity)
            }
        )
    }
}
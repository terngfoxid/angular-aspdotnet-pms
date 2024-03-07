using AlbumAngularApp.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Models
{
    public class ActivityMetadata
    {
    }

    public partial class Activity
    {
        public void Create(DateTime? updateDate)
        {
            this.InverseParent = this.InverseParent.Where(q => q.IsDelete != true).ToList();
            foreach (Activity activity in this.InverseParent)
            {
                activity.Create(updateDate);
            }

            this.UpdateDate = updateDate;
            this.CreateDate = updateDate;
            this.IsDelete = false;
        }

        public void GetChildren(AlbumContext db)
        {
            this.InverseParent = db.Activities.Where(q => q.ParentId == this.Id && q.Lv == this.Lv+1 && q.IsDelete != true).ToList();
            foreach (Activity activity in this.InverseParent)
            {
                activity.GetChildren(db);
            }
        }

        /*public void Create(DbContext db)
        {
            this.UpdateDate = DateTime.Now;
            this.CreateDate = this.UpdateDate;
            this.IsDelete = false;
            db.Add(this);
        }*/

        /*public void Update(DbContext db)
        {
            this.UpdateDate = DateTime.Now;
            db.Update(this);
        }*/

        public void Update(DateTime? updateDate)
        {
            this.InverseParent = this.InverseParent.Where(q => !(q.IsDelete == true && q.Id == 0)).ToList();

            this.UpdateDate = updateDate;

            foreach (Activity activity in this.InverseParent)
            {
                if (activity.Id == 0)
                {
                    activity.Create(updateDate);
                }
                else
                {
                    if (this.IsDelete == true)
                    {
                        activity.IsDelete = true;
                    }
                    activity.Update(updateDate);
                }
            }
        }

        public void Delete(DbContext db)
        {
            this.IsDelete=true;
            this.UpdateDate = DateTime.Now;
            db.Update(this);
        }

        public void ClearDuplicateObject(Project project,Activity? parent) {
            foreach (Activity activity in this.InverseParent)
            {
                activity.ClearDuplicateObject(project,this);
            }
            this.Project = project;
            this.Parent = parent;
            this.ProjectId = project.Id;
        }
    }
}

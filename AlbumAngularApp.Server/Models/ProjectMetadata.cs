using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Models
{
    public class ProjectMetadata
    {
    }

    public partial class Project
    {
        public void Create(DbContext db)
        {
            this.ClearDuplicateObject();
            this.Activities = this.Activities.Where(q => q.IsDelete != true).ToList();

            this.UpdateDate = DateTime.Now;
            this.CreateDate = this.UpdateDate;
            this.IsDelete = false;
            foreach (Activity activity in this.Activities)
            {
                activity.Create(this.UpdateDate);
            }
            db.Add(this);
        }

        public void Update(DbContext db)
        {
            this.ClearDuplicateObject();
            this.Activities = this.Activities.Where(q => !(q.IsDelete == true && q.Id == 0) == true ).ToList();

            this.UpdateDate = DateTime.Now;

            foreach (Activity activity in this.Activities)
            {
                if (activity.Id == 0)
                {
                    activity.Create(this.UpdateDate);
                }
                else
                {
                    activity.Update(this.UpdateDate);
                }
            }
            db.Update(this);
        }

        public void Delete(DbContext db)
        {
            this.IsDelete=true;
            this.UpdateDate = DateTime.Now;
            foreach (Activity activity in this.Activities)
            {
                activity.IsDelete = true;
                activity.UpdateDate = this.UpdateDate;
            }
            db.Update(this);
        }

        public void ClearDuplicateObject() { 
            foreach(Activity activity in this.Activities)
            {
                activity.ClearDuplicateObject(this,null);
            }
        }
    }
}

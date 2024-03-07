using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Models
{
    public class AlbumMetadata
    {
    }

    public partial class Album
    {
        public void Create(DbContext db)
        {
            this.UpdateDate = DateTime.Now;
            this.CreateDate = this.UpdateDate;
            this.IsDelete = false;
            db.Add(this);
        }

        public void Update(DbContext db)
        {
            this.UpdateDate = DateTime.Now;
            db.Update(this);
        }

        public void Delete(DbContext db)
        {
            foreach(Image image in this.Images)
            {
                image.Delete(db);
            }
            this.IsDelete=true;
            this.UpdateDate = DateTime.Now;
            db.Update(this);
        }
    }
}

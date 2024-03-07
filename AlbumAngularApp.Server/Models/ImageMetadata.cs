using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Models
{
    public class ImageMetadata
    {
    }

    public partial class Image
    {
        public void Create(DbContext db)
        {
            this.UpdateDate = DateTime.Now;
            this.CreateDate = this.UpdateDate;
            this.IsDelete = false;
            this.Album = null;
            db.Add(this);
        }

        public void Update(DbContext db)
        {
            this.UpdateDate = DateTime.Now;
            this.Album = null;
            db.Update(this);
        }

        public void Delete(DbContext db)
        {
            this.IsDelete=true;
            this.UpdateDate = DateTime.Now;
            db.Update(this);
        }
    }
}

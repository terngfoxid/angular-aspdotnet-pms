using AlbumAngularApp.Server.Data;
using AlbumAngularApp.Server.Models;
using AlbumAngularApp.Server.Models.Res;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase
    {
        public readonly AlbumContext db = new AlbumContext();

        [HttpGet(Name = "GetAllAlbum")]
        public ActionResult<ResAllAlbum> Get()
        {
            try
            {
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = db.Albums.Where(q => q.IsDelete != true).ToList()
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Albums = []
                });
            }
        }

        [HttpGet("{id}")]
        public ActionResult<ResAllAlbum> GetAlbum(int ID)
        {
            try
            {
                Album? album = db.Albums.Where(q => q.Id == ID && q.IsDelete != true).Include(q => q.Images.Where(q=>q.IsDelete != true)).First();
                if (album == null) return NotFound(
                    new ResAllAlbum()
                    {
                        StatusCode = 404,
                        Message = "Not Found",
                        Albums = []
                    });
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = [album]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Albums = []
                });
            }
        }

        [HttpPost(Name = "CreateAlbum")]
        public ActionResult<ResAllAlbum> Post(Album album)
        {
            try
            {
                album.Create(db);
                db.SaveChanges();
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = [album]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to create new object from Entity Framework",
                    Albums = []
                });
            }
        }

        [HttpPut(Name = "EditAlbum")]
        public ActionResult<ResAllAlbum> Put(Album album)
        {
            try
            {
                album.Update(db);
                db.SaveChanges();
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = [album]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to create new object from Entity Framework",
                    Albums = []
                });
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<ResAllAlbum> Delete(int ID)
        {
            try
            {
                Album? album = db.Albums.Where(q => q.Id == ID && q.IsDelete != true).Include(q => q.Images.Where(q => q.IsDelete != true)).First();
                if (album == null) return NotFound(
                    new ResAllAlbum()
                    {
                        StatusCode = 404,
                        Message = "Not Found",
                        Albums = []
                    });
                album.Delete(db);
                db.SaveChanges();
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = [album]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Albums = []
                });
            }
        }
        //---------Image
        [HttpPost("image")]
        public ActionResult<ResAllAlbum> PostImage(Image image)
        {
            try
            {
                image.Create(db);
                db.SaveChanges();
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = [image.Album]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to create new object from Entity Framework",
                    Albums = []
                });
            }
        }

        [HttpPut("image")]
        public ActionResult<ResAllAlbum> PutImage(Image image)
        {
            try
            {
                image.Update(db);
                db.SaveChanges();
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = [image.Album]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to create new object from Entity Framework",
                    Albums = []
                });
            }
        }

        [HttpDelete("image/{id}")]
        public ActionResult<ResAllAlbum> DeleteImage(int ID)
        {
            try
            {
                Image? image = db.Images.Find(ID);
                if (image == null) return NotFound(
                    new ResAllAlbum()
                    {
                        StatusCode = 404,
                        Message = "Not Found",
                        Albums = []
                    });
                image.Delete(db);
                db.SaveChanges();
                return new ResAllAlbum()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Albums = []
                };
            }
            catch
            {
                return StatusCode(500, new ResAllAlbum()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Albums = []
                });
            }
        }
    }
}

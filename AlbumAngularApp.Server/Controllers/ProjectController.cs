using AlbumAngularApp.Server.Data;
using AlbumAngularApp.Server.Models;
using AlbumAngularApp.Server.Models.Res;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProjectController : ControllerBase
    {
        public readonly AlbumContext db = new AlbumContext();

        [HttpGet(Name = "GetAllProject")]
        public ActionResult<ResAllProject> Get()
        {
            try
            {
                return new ResAllProject()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Projects = db.Projects.Where(q => q.IsDelete != true).ToList()
                };
            }
            catch
            {
                return StatusCode(500, new ResAllProject()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Projects = []
                });
            }
        }

        [HttpGet("{id}")]
        public ActionResult<ResAllProject> GetProject(int ID)
        {
            Project? project = db.Projects.Where(q => q.Id == ID && q.IsDelete != true).Include(q => q.Activities.Where(q => q.IsDelete != true && q.Lv == 1)).AsNoTracking().First();
            if(project == null)
            {
                return NotFound(new ResAllProject()
                {
                    StatusCode = 404,
                    Message = "NotFound",
                    Projects = []
                });
            }
            foreach(Activity activity in project.Activities)
            {
                activity.GetChildren(db);
            }

            try
            {
                return new ResAllProject()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Projects = [project]
                };
            }
            catch
            {
                return StatusCode(500, new ResAllProject()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Projects = []
                });
            }
        }

        [HttpPost(Name = "CreateProject")]
        public ActionResult<ResAllProject> Post(Project project)
        {
            project.Create(db);
            db.SaveChanges();
            try
            {
                return new ResAllProject()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Projects = []
                };
            }
            catch
            {
                return StatusCode(500, new ResAllProject()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Projects = []
                });
            }
        }

        [HttpPut(Name = "EditProject")]
        public ActionResult<ResAllProject> Put(Project project)
        {
            project.Update(db);
            db.SaveChanges();
            try
            {
                return new ResAllProject()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Projects = []
                };
            }
            catch
            {
                return StatusCode(500, new ResAllProject()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Projects = []
                });
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<ResAllProject> DeleteProject(int ID)
        {
            Project? project = db.Projects.Where(q => q.Id == ID && q.IsDelete != true).Include(q => q.Activities.Where(q => q.IsDelete != true)).AsNoTracking().First();
            if (project == null)
            {
                return NotFound(new ResAllProject()
                {
                    StatusCode = 404,
                    Message = "NotFound",
                    Projects = []
                });
            }
            project.Delete(db);
            db.SaveChanges();

            try
            {
                return new ResAllProject()
                {
                    StatusCode = 200,
                    Message = "OK",
                    Projects = []
                };
            }
            catch
            {
                return StatusCode(500, new ResAllProject()
                {
                    StatusCode = 500,
                    Message = "Internal Server Error when try to get object from Entity Framework",
                    Projects = []
                });
            }
        }
    }
}

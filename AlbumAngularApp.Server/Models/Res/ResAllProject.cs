namespace AlbumAngularApp.Server.Models.Res
{
    public class ResAllProject
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } = "";

        public List<Project> Projects { get; set; } = new List<Project>();
    }
}

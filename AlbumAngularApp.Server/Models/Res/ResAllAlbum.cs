namespace AlbumAngularApp.Server.Models.Res
{
    public class ResAllAlbum
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } = "";

        public List<Album> Albums { get; set; } = new List<Album>();
    }
}

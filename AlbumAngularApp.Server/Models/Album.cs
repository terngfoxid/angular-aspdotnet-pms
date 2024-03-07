using System;
using System.Collections.Generic;

namespace AlbumAngularApp.Server.Models;

public partial class Album
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? CoverImageUrl { get; set; }

    public DateTime? CreateDate { get; set; }

    public DateTime? UpdateDate { get; set; }

    public bool? IsDelete { get; set; }

    public virtual ICollection<Image> Images { get; set; } = new List<Image>();
}

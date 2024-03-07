using System;
using System.Collections.Generic;

namespace AlbumAngularApp.Server.Models;

public partial class Image
{
    public int Id { get; set; }

    public int AlbumId { get; set; }

    public string? ImageUrl { get; set; }

    public DateTime? CreateDate { get; set; }

    public DateTime? UpdateDate { get; set; }

    public bool? IsDelete { get; set; }

    public virtual Album Album { get; set; } = null!;
}

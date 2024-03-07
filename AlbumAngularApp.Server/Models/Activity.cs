using System;
using System.Collections.Generic;

namespace AlbumAngularApp.Server.Models;

public partial class Activity
{
    public int Id { get; set; }

    public int ProjectId { get; set; }

    public int? ParentId { get; set; }

    public DateTime? CreateDate { get; set; }

    public DateTime? UpdateDate { get; set; }

    public bool? IsDelete { get; set; }

    public string? Detail { get; set; }

    public int? Lv { get; set; }

    public virtual ICollection<Activity> InverseParent { get; set; } = new List<Activity>();

    public virtual Activity? Parent { get; set; }

    public virtual Project Project { get; set; } = null!;
}

using System;
using System.Collections.Generic;
using AlbumAngularApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AlbumAngularApp.Server.Data;

public partial class AlbumContext : DbContext
{
    public AlbumContext()
    {
    }

    public AlbumContext(DbContextOptions<AlbumContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Activity> Activities { get; set; }

    public virtual DbSet<Album> Albums { get; set; }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
        optionsBuilder.UseSqlServer(configuration.GetConnectionString("LocalDB"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Activity>(entity =>
        {
            entity.ToTable("activity");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CreateDate).HasColumnType("datetime");
            entity.Property(e => e.ParentId).HasColumnName("ParentID");
            entity.Property(e => e.ProjectId).HasColumnName("ProjectID");
            entity.Property(e => e.UpdateDate).HasColumnType("datetime");

            entity.HasOne(d => d.Parent).WithMany(p => p.InverseParent)
                .HasForeignKey(d => d.ParentId)
                .HasConstraintName("FK_activity_activity");

            entity.HasOne(d => d.Project).WithMany(p => p.Activities)
                .HasForeignKey(d => d.ProjectId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_activity_project");
        });

        modelBuilder.Entity<Album>(entity =>
        {
            entity.ToTable("album");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CoverImageUrl)
                .IsUnicode(false)
                .HasColumnName("CoverImageURL");
            entity.Property(e => e.CreateDate).HasColumnType("datetime");
            entity.Property(e => e.Name).IsUnicode(false);
            entity.Property(e => e.UpdateDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<Image>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_Image");

            entity.ToTable("image");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.AlbumId).HasColumnName("AlbumID");
            entity.Property(e => e.CreateDate).HasColumnType("datetime");
            entity.Property(e => e.ImageUrl)
                .IsUnicode(false)
                .HasColumnName("ImageURL");
            entity.Property(e => e.UpdateDate).HasColumnType("datetime");

            entity.HasOne(d => d.Album).WithMany(p => p.Images)
                .HasForeignKey(d => d.AlbumId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Image_AlbumID");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.ToTable("project");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CreateDate).HasColumnType("datetime");
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.StartDate).HasColumnType("datetime");
            entity.Property(e => e.UpdateDate).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

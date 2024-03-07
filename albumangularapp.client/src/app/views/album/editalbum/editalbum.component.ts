import { Component} from '@angular/core';
import { Album } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editalbum',
  templateUrl: './editalbum.component.html',
  styleUrl: './editalbum.component.css'
})
export class EditAlbumComponent {
  title: string = 'Edit Album';

  public Album : Album = new Album();

  EditForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    CoverImageUrl: new FormControl('', Validators.required)
  });

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumService.getAlbum(this.route.snapshot.paramMap.get('id')).subscribe(
      (result) => {
        this.Album = result.albums[0];
        this.EditForm.setValue({
          Name: this.Album.name || null, 
          CoverImageUrl: this.Album.coverImageUrl || null
        });
      },
      (error) => {
        console.error(error);
        alert("ไม่พบ Album");
        document.location.href="/edit_album";
      }
    )
  }

  async onSubmit() {
    this.Album.name = this.EditForm.value.Name
    this.Album.coverImageUrl = this.EditForm.value.CoverImageUrl

    await this.albumService.putAlbum(this.Album).subscribe(
      (result) => {
        document.location.href="/edit_album";
      },
      (error) => {
        console.error(error);
        alert("แก้ไข Album ไม่สำเร็จ");
      }
    );
  }

}

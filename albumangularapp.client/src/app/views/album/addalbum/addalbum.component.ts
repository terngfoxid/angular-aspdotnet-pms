import { Component} from '@angular/core';
import { Album } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrl: './addalbum.component.css'
})
export class AddAlbumComponent {
  title: string = 'Add Album';

  public Album : Album = new Album();

  CreateForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    CoverImageUrl: new FormControl('', Validators.required),
  });

  constructor(private albumService: AlbumService) { }

  async onSubmit() {
    this.Album.name = this.CreateForm.value.Name
    this.Album.coverImageUrl = this.CreateForm.value.CoverImageUrl
    await this.albumService.postAlbum(this.Album).subscribe(
      (result) => {
        document.location.href="/edit_album";
      },
      (error) => {
        console.error(error);
        alert("เพิ่ม Album ไม่สำเร็จ");
      }
    );
  }

}

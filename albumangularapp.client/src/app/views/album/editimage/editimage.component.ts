import { Component} from '@angular/core';
import { Album, Image } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.component.html',
  styleUrl: './editimage.component.css'
})
export class EditImageComponent {
  title: string = 'Edit Image';

  public Image : Image = new Image();
  public Album : Album = new Album();

  EditForm = new FormGroup({
    ImageUrl: new FormControl('', Validators.required),
  });

  constructor(private albumService: AlbumService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumService.getAlbum(this.route.snapshot.paramMap.get('id')).subscribe(
      (result) => {
        this.Album = result.albums[0];
        this.Album.images?.forEach((image) => {
          if(image.id?.toString() == this.route.snapshot.paramMap.get('imageid')){
            this.Image = image;
          }
        });

        if(this.Image?.id == 0){
          alert("ไม่พบ Image");
        document.location.href="/edit_album/"+this.Album.id;
        }
        else{
          this.EditForm.setValue({
            ImageUrl: this.Image.imageUrl || null
          });
          this.Image.album = new Album();
        }
      },
      (error) => {
        console.error(error);
        alert("ไม่พบ Album");
        document.location.href="/edit_album";
      }
    )
  }

  async onSubmit() {
      this.Image.imageUrl = this.EditForm.value.ImageUrl;
      await this.albumService.putImage(this.Image).subscribe(
        (result) => {
          document.location.href="/edit_album/"+this.Image.albumId+"/edit_image";
        },
        (error) => {
          console.error(error);
          alert("แก้ไข Image ไม่สำเร็จ");
        }
      );
  }

}

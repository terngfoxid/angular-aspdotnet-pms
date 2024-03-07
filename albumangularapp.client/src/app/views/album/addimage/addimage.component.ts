import { Component} from '@angular/core';
import { Album, Image } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrl: './addimage.component.css'
})
export class AddImageComponent {
  title: string = 'Add Image';

  public Image : Image = new Image();

  CreateForm = new FormGroup({
    ImageUrl: new FormControl('', Validators.required),
  });

  constructor(private albumService: AlbumService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.Image.albumId = this.route.snapshot.paramMap.get('id')
    this.Image.album = new Album();
  }

  async onSubmit() {
    this.Image.imageUrl = this.CreateForm.value.ImageUrl;
    await this.albumService.postImage(this.Image).subscribe(
      (result) => {
        document.location.href="/edit_album/"+this.Image.albumId+"/edit_image";
      },
      (error) => {
        console.error(error);
        alert("เพิ่ม Image ไม่สำเร็จ");
      }
    );
  }

}

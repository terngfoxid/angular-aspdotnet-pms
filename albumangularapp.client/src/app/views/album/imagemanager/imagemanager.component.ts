import { Component} from '@angular/core';
import { Album } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-imagemanager',
  templateUrl: './imagemanager.component.html',
  styleUrl: './imagemanager.component.css'
})
export class ImagemanagerComponent {
  title: string = 'Image Manager';

  public Album : Album = new Album();

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumService.getAlbum(this.route.snapshot.paramMap.get('id')).subscribe(
      (result) => {
        this.Album = result.albums[0];
      },
      (error) => {
        console.error(error);
        alert("ไม่พบ Album");
        document.location.href="/edit_album";
      }
    )
  }

  confirmDelete(name: string,id:number|string|null|undefined) {
    if(confirm("ยืนยันการลบรูปภาพนี้")) {
      this.albumService.deleteImage(id||null).subscribe(
        (result) => {
          location.reload();
        },
        (error) => {
          console.error(error);
          alert("ลบรูปภาพไม่สำเร็จ");
        }
      )
    }
  }
}

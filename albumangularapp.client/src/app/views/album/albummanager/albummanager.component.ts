import { Component} from '@angular/core';
import { Album } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-albummanager',
  templateUrl: './albummanager.component.html',
  styleUrl: './albummanager.component.css'
})
export class AlbumManagerComponent {
  title: string = 'Album Manager';

  public AllAlbum : Album[] = [];

  constructor(private albumService: AlbumService) { }

  async ngOnInit() {
    await this.albumService.getAllAlbum().subscribe(
      (result) => {
        this.AllAlbum = result.albums;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  confirmDelete(name: string,id:number|string|null|undefined) {
    if(confirm("ยืนยันการลบ Album "+name)) {
      this.albumService.deleteAlbum(id||null).subscribe(
        (result) => {
          location.reload();
        },
        (error) => {
          console.error(error);
          alert("ลบ Album ไม่สำเร็จ");
        }
      )
    }
  }
}

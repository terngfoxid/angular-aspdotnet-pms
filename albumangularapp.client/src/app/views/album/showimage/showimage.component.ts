import { Component} from '@angular/core';
import { Album } from '../../../models';
import { AlbumService } from '../../../services/album.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrl: './showimage.component.css'
})
export class ShowImageComponent {
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
}

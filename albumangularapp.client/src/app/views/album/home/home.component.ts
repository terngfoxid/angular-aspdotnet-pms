import { Component} from '@angular/core';
import { Album } from '../../../models';
import { AlbumService } from '../../../services/album.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'Home';

  public AllALbum : Album[] = [];

  constructor(private albumService: AlbumService) { }

  async ngOnInit() {
    await this.albumService.getAllAlbum().subscribe(
      (result) => {
        this.AllALbum = result.albums;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/album/home/home.component';
import { AlbumManagerComponent } from './views/album/albummanager/albummanager.component';
import { AddAlbumComponent } from './views/album/addalbum/addalbum.component';
import { EditAlbumComponent } from './views/album/editalbum/editalbum.component';
import { ImagemanagerComponent } from './views/album/imagemanager/imagemanager.component';
import { AddImageComponent } from './views/album/addimage/addimage.component';
import { EditImageComponent } from './views/album/editimage/editimage.component';
import { ProjectManagerComponent } from './views/project/projectmanager/projectmanager.component';
import { AddProjectComponent } from './views/project/addproject/addproject.component';
import { EditProjectComponent } from './views/project/editproject/editproject.component';
import { ShowImageComponent } from './views/album/showimage/showimage.component';
import { AddProject_ModifyComponent } from './views/project/addproject-modify/addproject-modify.component';
import { EditProject_ModifyComponent } from './views/project/editproject-modify/editproject-modify.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'add_album',component: AddAlbumComponent},
  {path:'edit_album',component: AlbumManagerComponent},
  {path: 'edit_album/:id', component: EditAlbumComponent },
  {path: 'edit_album/:id/edit_image',component:ImagemanagerComponent},
  {path: 'edit_album/:id/add_image',component:AddImageComponent},
  {path: 'edit_album/:id/edit_image/:imageid',component:EditImageComponent},
  {path: 'show_album/:id', component: ShowImageComponent },

  {path: 'add_project',component:AddProjectComponent},
  {path: 'edit_project',component:ProjectManagerComponent},
  {path: 'edit_project/:id',component:EditProjectComponent},
  
  {path:'add_project2',component: AddProject_ModifyComponent},
  {path: 'edit_project2/:id',component:EditProject_ModifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

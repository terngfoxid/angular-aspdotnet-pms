import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/album/home/home.component';
import { AlbumManagerComponent } from './views/album/albummanager/albummanager.component';
import { AddAlbumComponent } from './views/album/addalbum/addalbum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAlbumComponent } from './views/album/editalbum/editalbum.component';
import { ImagemanagerComponent } from './views/album/imagemanager/imagemanager.component';
import { AddImageComponent } from './views/album/addimage/addimage.component';
import { EditImageComponent } from './views/album/editimage/editimage.component';
import { ProjectManagerComponent } from './views/project/projectmanager/projectmanager.component';
import { AddProjectComponent } from './views/project/addproject/addproject.component';
import { ActivityEditorComponent } from './views/project/share/activityeditor/activityeditor.component';
import { EditProjectComponent } from './views/project/editproject/editproject.component';
import { ShowImageComponent } from './views/album/showimage/showimage.component';
import { AddProject_ModifyComponent } from './views/project/addproject-modify/addproject-modify.component';
import { EditProject_ModifyComponent } from './views/project/editproject-modify/editproject-modify.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,AlbumManagerComponent,
    AddAlbumComponent,EditAlbumComponent,ImagemanagerComponent,
    AddImageComponent,EditImageComponent,ShowImageComponent,

    AddProject_ModifyComponent,EditProject_ModifyComponent,

    ProjectManagerComponent,AddProjectComponent,EditProjectComponent,

    ActivityEditorComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

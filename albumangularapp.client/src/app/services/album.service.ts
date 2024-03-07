import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { Album,Image } from "../models";

@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    constructor(private http: HttpClient) { }

    readonly baseURL = 'https://localhost:7044/album';

    getAllAlbum() {
        return this.http.get<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}`).pipe(
            catchError(this.errorHandler)
          );
    }

    getAlbum(id:number|string|null) {
        return this.http.get<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}/${id}`).pipe(
            catchError(this.errorHandler)
          );
    }

    postAlbum(thisform: Album){
        return this.http.post<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}`,thisform).pipe(
            catchError(this.errorHandler)
          );
    }

    putAlbum(thisform: Album){
        return this.http.put<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}`,thisform).pipe(
            catchError(this.errorHandler)
          );
    }

    deleteAlbum(id:number|string|null){
        return this.http.delete<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}/${id}`).pipe(
            catchError(this.errorHandler)
          );
    }

    //-----------------

    postImage(thisform: Image){
        return this.http.post<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}/image`,thisform).pipe(
            catchError(this.errorHandler)
          );
    }

    putImage(thisform: Image){
        return this.http.put<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}/image`,thisform).pipe(
            catchError(this.errorHandler)
          );
    }

    deleteImage(id:number|string|null){
        return this.http.delete<{statusCode:number, message: string, albums: Album[] }>(`${this.baseURL}/image/${id}`).pipe(
            catchError(this.errorHandler)
          );
    }

    errorHandler(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}

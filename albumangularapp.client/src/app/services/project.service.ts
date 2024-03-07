import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { Project } from "../models";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

    readonly baseURL = 'https://localhost:7044/project';

    getAllProject() {
        return this.http.get<{statusCode:number, message: string, projects: Project[] }>(`${this.baseURL}`).pipe(
            catchError(this.errorHandler)
          );
    }

    getProject(id:number|string|null) {
        return this.http.get<{statusCode:number, message: string, projects: Project[] }>(`${this.baseURL}/${id}`).pipe(
            catchError(this.errorHandler)
          );
    }

    postProject(thisform:Project){
        return this.http.post<{statusCode:number, message: string, projects: Project[] }>(`${this.baseURL}`,thisform).pipe(
            catchError(this.errorHandler)
          );
    }

    putProject(thisform:Project){
        return this.http.put<{statusCode:number, message: string, projects: Project[] }>(`${this.baseURL}`,thisform).pipe(
            catchError(this.errorHandler)
          );
    }

    deleteProject(id:number|string|null) {
        return this.http.delete<{statusCode:number, message: string, projects: Project[] }>(`${this.baseURL}/${id}`).pipe(
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

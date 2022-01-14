

  import { Injectable } from '@angular/core';
  import { HttpClient } from "@angular/common/http";
  import { Observable } from "rxjs";
  import { Video } from '../models/video.model';
  import { environment } from '../../environments/environment';
  
  @Injectable({
    providedIn: 'root'
  })
  export class VideosHttpService {
  
    private readonly videosUrl: string;
  
    constructor(private http: HttpClient) {
      this.videosUrl = environment.apiUrl;
    }
  
    public getAllVideos(): Observable<Video[]> {
      return this.http.get<Video[]>(this.videosUrl);
    }
  
    public deleteVideo(id: string) {
      return this.http.delete(this.videosUrl + "/" + id);
    }
    
  }
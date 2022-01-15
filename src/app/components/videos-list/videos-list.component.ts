import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Video } from 'src/app/models/video.model';
import { VideosHttpService } from 'src/app/services/videos-http.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
})
export class VideosListComponent implements OnInit {

  videos: Video[] = [];
  selectedVideoId!: string;
  isLoading!: boolean;

  constructor(
    private videosHttpService: VideosHttpService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    if (!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.videosHttpService.getAllVideos().subscribe(videos => {
      this.videos = videos
      this.isLoading = false;
    });
  }

  deleteVideo(id: string) {
    this.videosHttpService.deleteVideo(id).subscribe({
      next: data => {
        this.videos = this.videos.filter(v => v.id !== id);
      }
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideosHttpService } from 'src/app/services/videos-http.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
})
export class VideosListComponent implements OnInit {

  videos: Video[] = [];
  selectedVideoId!: string;

  constructor(private videosHttpService: VideosHttpService) { }

  ngOnInit(): void {
    this.videosHttpService.getAllVideos().subscribe(videos => this.videos = videos);
  }

  deleteVideo(id: string) {
    this.videosHttpService.deleteVideo(id).subscribe({
        next: data => {
          this.videos = this.videos.filter(v => v.id !== id);
        }
    });
  }

}
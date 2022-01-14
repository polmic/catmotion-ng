import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit {

  videoSrc!: string;

  private _videoId!: string;
  @Input() set videoId(value: string) {
     this._videoId = value;
     this.setVideoSrc(this._videoId);
  }
  
  get videoId(): string {
      return this._videoId;
  }

  setVideoSrc(_videoId: string) {
    this.videoSrc = `${environment.apiUrl}/stream/${_videoId}`
  }

  constructor() { }

  ngOnInit(): void {
  }

}

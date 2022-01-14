import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'videos', pathMatch: 'full'},
  {path: 'videos', component: VideosListComponent},
  {path: 'videos/:id', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

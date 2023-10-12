import { Component } from '@angular/core';
import { videoData } from 'src/app/common/fetchData';
import { IVideo } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  videoData: IVideo[] = videoData

  ngOnInit(): void {
    console.log(videoData);
  }
}

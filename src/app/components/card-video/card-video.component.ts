import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/interfaces';
import { formatViews } from 'src/app/shared/format-views.util';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss']
})
export class CardVideoComponent {
  @Input() video!: IVideo;
  formattedViews!: string;

  constructor() { }

  ngOnInit(): void {
    this.formattedViews = formatViews(this.video.views);
  }
}

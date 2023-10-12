import { Component } from '@angular/core';
import { paths } from 'src/assets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  avatarPath: string = paths.avatar
}

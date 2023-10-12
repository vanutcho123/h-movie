import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebars, ISubscription } from 'src/app/interfaces';
import { IChannels } from 'src/app/interfaces'; // Đảm bảo định nghĩa IChannels

import { sidebars } from 'src/app/common/sidebars';
import { channels } from 'src/app/common/channels';
import { subscriptions } from '../../common/subscriptions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebars: ISidebars[] = sidebars;
  channels: IChannels[] = channels;
  subscriptions: ISubscription[] = subscriptions;


  constructor(private router: Router) { }

  setActive(selectedSidebar: ISidebars): void {
    this.sidebars.forEach(sidebar => {
      sidebar.isActive = sidebar === selectedSidebar;
    });
    this.router.navigate([selectedSidebar.routerLink]);
  }

  setActiveChannel(selectedChannel: IChannels): void {
    this.channels.forEach(channel => {
      channel.isActive = channel === selectedChannel;
    });
    this.router.navigate([selectedChannel.routerLink]);
  }
}

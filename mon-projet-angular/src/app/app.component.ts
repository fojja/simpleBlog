import { Component } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      created_at : new Date,
      loveIts: 0,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      title: 'Mon deuxieme post',
      created_at : new Date,
      loveIts: 0,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      title: 'Encore un post',
      created_at : new Date,
      loveIts: 0,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
  ];
  constructor() {
}
}

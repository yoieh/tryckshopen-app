import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'This is a titel!';
  text1 = 'Hi Hannes!';

  constructor() { }

  ngOnInit() {
  }

}

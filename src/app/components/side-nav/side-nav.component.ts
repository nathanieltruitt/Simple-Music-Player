import { Component, OnInit } from '@angular/core';
import { faHouse, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  faList = faList;
  faHouse = faHouse;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent implements OnInit {
  @Input() icon!: IconProp;
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}

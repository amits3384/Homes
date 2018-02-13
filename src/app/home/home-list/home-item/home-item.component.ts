import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../../home.model';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  @Input() home: Home[];
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

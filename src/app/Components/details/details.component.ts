import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  gameRating = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    }
    if (value > 50) {
      return '#fffa50';
    }
    if (value > 30) {
      return '#f7aa38';
    }
    return '#ef4655';
  }

}

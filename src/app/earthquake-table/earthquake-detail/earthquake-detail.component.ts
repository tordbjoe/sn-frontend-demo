import {Component, Input, OnInit} from '@angular/core';
import {Earthquake} from '../../model/earthquake';

@Component({
  selector: 'app-earthquake-detail',
  templateUrl: './earthquake-detail.component.html',
  styleUrls: ['./earthquake-detail.component.css']
})
export class EarthquakeDetailComponent implements OnInit {

  constructor() { }

  @Input() earthquake: Earthquake;

  ngOnInit(): void {
  }

}

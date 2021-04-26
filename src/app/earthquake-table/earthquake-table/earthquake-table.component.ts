import {Component, OnInit, ViewChild} from '@angular/core';
import {Earthquake} from '../../model/earthquake';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../service/api.service';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-earthquake-table',
  templateUrl: './earthquake-table.component.html',
  styleUrls: ['./earthquake-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class EarthquakeTableComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  earthquakes: Earthquake[];
  displayedColumns = ['place', 'magnitude', 'time'];
  dataSource = new MatTableDataSource<Earthquake>();
  expandedEarthquake: Earthquake | null;
  isLoading = false;

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getEarthquakes().subscribe(earthquakes => {
      this.earthquakes = earthquakes;
      },
      error => {
        console.log('An error occurred: {}', error);
        this.isLoading = false;
      },
      () => {
        this.dataSource = new MatTableDataSource<Earthquake>(this.earthquakes);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      });
  }

}

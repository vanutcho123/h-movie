import { Component } from '@angular/core';
import { filterData } from '../../common/filterData';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterData: string[] = filterData
}

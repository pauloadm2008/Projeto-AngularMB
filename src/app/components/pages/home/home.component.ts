import { Component } from '@angular/core';

import { MomentService } from 'src/app/service/moment.service';

import { Moment } from 'src/app/Moment';

import { environment } from 'src/assets/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {}
  
search(e:Event): void {
  const target =e.target as HTMLInputElement;
  const value = target.value;

  this.moments = this.allMoments.filter((moment) =>
    moment.title.toLowerCase().includes(value)
  );
}
  
}
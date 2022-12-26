import { Component, OnInit } from '@angular/core';
import { Ifeature } from '../../models/features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
featureArray:Ifeature[] = [
  {
  icon:'<i class="fa-brands fa-aws fa-3x"></i>',
  heading:'fully responsive',
  info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
  },
  {
    icon:'<i class="far fa-lemon fa-3x"></i>',
    heading:'Fully Layered PSD',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
  },
  {
      icon:'<i class="far fa-folder fa-3x"></i>',
      heading:'Font Awesome Icons',
      info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
  },
  {
    icon:'<i class="fas fa-code fa-3x"></i>',
    heading:'HTML3 & CSS3',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
  },
  {
    icon:'<i class="far fa-envelope fa-3x"></i>',
    heading:'Email Template',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
  },
  {
    icon:'<i class="far fa-bookmark fa-3x"></i>',
    heading:'Free to download',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

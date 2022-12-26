import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../models/socialIcons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  socialIcons:Iicons[] = [
  {
    icon:'<i class="fab fa-facebook-square fa-2x"></i>',
    link:'https://facebook.com/',
    target:'_blank'
  },
  {
    icon: '<i class="fab fa-twitter-square fa-2x"></i>',
    link:'https://twitter.com/',
    target:'_blank'
  },
  {
    icon:'<i class="fab fa-google-plus-square fa-2x"></i>',
    link:'https://www.google.com/',
    target:'_blank'
  },
{
  icon:'<i class="fab fa-pinterest-square fa-2x"></i>',
  link:'https://www.pinterest.com/',
  target:'-blank'
}]
  constructor() { }  

  ngOnInit(): void {
  }

}

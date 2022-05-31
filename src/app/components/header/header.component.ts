import { Component, OnInit } from '@angular/core';
import { Iheader } from './models/iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerContent: Iheader; 

  constructor() {
    this.headerContent = {
        logo: {
          title: 'Pez beta',
          img: 'https://i.pinimg.com/originals/77/68/49/776849067fa4646fd1ea31c8810fd4fd.png'
        }, 
        links: ["Orígen", "Cuidado", "Características"]
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Igallery } from '../models/iBeta';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
public galleryContent : Igallery; 
  constructor() {
    this.galleryContent = {
      imgGallery : ['https://img.freepik.com/foto-gratis/pez-luchador-rojo-azul-betta-saimese-aletas-onduladas-fondo-negro_127090-1481.jpg','https://www.plantas-acuario.es/wp-content/uploads/2019/09/betta-de-doble-cola.jpg', 'http://pecesdelmar.com/wp-content/uploads/2020/10/Pez-betta.jpg', 'https://verdecora.es/blog/wp-content/uploads/2020/03/tipos-pez-betta-cola-rosa.jpg','https://cuantoviven.b-cdn.net/wp-content/uploads/2021/02/439-nombres-asombrosos-de-peces-betta.jpg',   'https://i.pinimg.com/originals/7e/33/49/7e3349402d17fe0a097da22975bbf592.jpg']

    }
  }

  ngOnInit(): void {
  }

}


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
      imgGallery : ['https://descubrir.online/wp-content/uploads/2022/03/Pez-Betta-2.jpg','https://www.plantas-acuario.es/wp-content/uploads/2019/09/betta-de-doble-cola.jpg', 'http://pecesdelmar.com/wp-content/uploads/2020/10/Pez-betta.jpg', 'https://cuantoviven.b-cdn.net/wp-content/uploads/2021/02/439-nombres-asombrosos-de-peces-betta.jpg', 'https://atlasanimal.com/wp-content/uploads/2021/02/pez-betta.jpg.webp', 'https://img.freepik.com/foto-gratis/pez-luchador-rojo-azul-betta-saimese-aletas-onduladas-fondo-negro_127090-1481.jpg', 'https://verdecora.es/blog/wp-content/uploads/2020/03/tipos-pez-betta-cola-rosa.jpg', 'https://media.nidux.net/pull/2000/2000/14358/455-product-60c63f57844ee-bettas-media-luna.jpg' ]

    }
  }

  ngOnInit(): void {
  }

}

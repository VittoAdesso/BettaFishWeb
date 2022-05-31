import { Component, OnInit } from '@angular/core';
import { Ibeta } from './models/iBeta';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroContent : Ibeta; 

  constructor() { 
    this.heroContent = {
      title: 'Pez Betta', 
      history: 'Si deseas un pez bonito, llamativo y elegante, no busques más, el pez Betta (Betta splendens) es lo que necesitas en tu hogar. Su nombre proviene de un clan de guerreros antiguos que se conocían por el nombre de Bettah; esto se debe a que la especie, especialmente los machos, pueden llegar a ser muy violentos entre ellos, de ahí que uno de sus sobrenombres sea ‘luchador de Siam’. Por este motivo, es importante conocer los cuidados y recomendaciones sobre esta especie antes de añadirla a nuestro acuario.',
      img: ['https://img.freepik.com/foto-gratis/pez-betta-media-luna-dorada-sobre-negro-tailandia-lucha-contra-peces-color-dorado-sobre-negro-aislado_192913-473.jpg?w=2000', 'https://verdecora.es/blog/wp-content/uploads/2020/03/tipos-pez-betta-media-luna.jpg']
    }
  }


  ngOnInit(): void {
  }

}
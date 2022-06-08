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
      history: 'Su nombre proviene de un clan de guerreros antiguos que se conocían por el nombre de Bettah; esto se debe a que la especie, especialmente los machos, pueden llegar a ser muy violentos entre ellos, de ahí que uno de sus sobrenombres sea ‘luchador de Siam’. Por este motivo, es importante conocer los cuidados y recomendaciones sobre esta especie antes de añadirla a nuestro acuario. Si deseas un pez bonito, llamativo y elegante, no busques más, el pez Betta (Betta splendens) es lo que necesitas en tu hogar. ',
      img: ['https://th.bing.com/th/id/R.d2e69e1da3aff51a23ab9ae715aeefad?rik=bkr5RGbWkfxNPg&pid=ImgRaw&r=0&sres=1&sresct=1']
    }
  }


  ngOnInit(): void {
  }

}
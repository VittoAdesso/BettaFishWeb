import { Component, OnInit } from '@angular/core';
import { Iextras } from './models/Iextras';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {
public extraContent : Iextras; 
  constructor() {
    this.extraContent = {
      importantInfo : [
      {
        title: 'El pez matón ☠️', 
        text: 'La convivencia del pez betta con otros ejemplares de su especie o con peces de otras características muy diferentes a las suyas es muy particular. Su tendencia  a hábitats reducidos lo hacen un pez muy territorial, así que hay que tener cierto cuidado en cuanto a la convivencia. Si juntas dos peces betta macho es muy probable que se enfrenten a muerte por su territorio, aunque también puede surgir la polémica si residen en peceras diferentes que compartan cristal. La mejor alternativa para compartir pecera es la proporción de un pez betta macho y varias pez betta hembra. Con una sola, el peculiar instinto reproductor del macho iba a estresar a la fémina, pero si son varias la convivencia puede ser llevadera.'
      }
    ]
    };
  }

  ngOnInit(): void {
  }

}

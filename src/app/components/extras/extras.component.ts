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
      }, 
      {
      title: 'Curiosidades del pez betta 👀',
      text: 'Cuando el pez betta es padre saca el verdadero luchador que lleva dentro, ya que construyen los nidos para sus retoños con sus propias bocas y los protegen ante cualquier ataque. El pez betta es un animal diurno, así que evita dejarles la luz de la pecera encendida de noche porque no descansará correctamente.Este tipo de peces puede sentirse deprimido, o frustrado, si no vive en un ambiente lo suficientemente enriquecido con cuevas, plantas y zonas donde explorar.'
    }
    ]
    };
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Ihabitat } from '../models/Imain';

@Component({
  selector: 'app-betta-habitat',
  templateUrl: './betta-habitat.component.html',
  styleUrls: ['./betta-habitat.component.scss']
})
export class BettaHabitatComponent implements OnInit {
public habitatContent : Ihabitat; 
  // public items: any; 

  constructor() {
    this.habitatContent = {
      habitat : [
        { title: 'La pecera del pez betta', 
          text: 'El pez betta es un animal que nada lento y se desliza sinuosamente bajo las aguas. Sus particulares aletas hacen que sea todo un espectáculo verlos nadar. Aunque se dice que el pez betta es capaz de sobrevivir en espacios reducidos, ya que se trata de su hábitat natural, no conviene que su acuario sea especialmente pequeño.Se suele decir de ellos que un betta puede vivir hasta en el charco de una huella de búfalo.Anécdotas aparte, si bien un espacio medio será suficiente, sobrevivir no es lo mismo que vivir, así que apórtale un acuario para pez betta confortable donde pasar toda suvida en el que al menos disponga de entre 20 y 30 litros de espacio.'
        }, 
        { title: 'El agua de la pecera del betta', 
          text: 'Los peces betta son animales con bastante resistencia a los cambios de temperatura del agua. Pero que sea resistente no significa que no le guste vivir en un ambiente agradable, así que lo mejor para que su hábitat reúna las mejores condiciones es que el agua ronde los 26º a los 28º C.'
        }, 
        { title: 'Los accesorios de la pecera del pez betta', 
          text: 'Por su tendencia a posarse, los peces betta preferirán una pecera en la que hayas colocado diversas plantas para acuario o incluso accesorios y complementos para decorar el acuario. Además, se trata de una especie sumamente curiosa que se mantendrá estimulada con los accesorios para acuario de pez betta adecuados. Un acuario con plantas naturales y grava fina es el lugar perfecto para que la reina del carnaval de los acuarios pose sus grandes aletas y descanse. Evita incorporar accesorios para acuario que puedan dañar sus aletas, ya que al ser tan grandes y frágiles pueden rozar contra los complementos y causarle heridas. Las rocas decorativas, la arena puntiaguda, los lugares estrechos y las plantas punzantes son grandes enemigos para los peces betta.'
        }
      ], 
      img: ['https://socav.com/wp-content/uploads/2018/04/emotios-pro-100-negro-con-mesa.png', 
      'https://www.fluvalaquatics.com/us/wp-content/uploads/2018/12/Flex-32-Product.png', 
      'https://www.tropicanmascotas.com/media/catalog/product/cache/23/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/e/h/eheim_incpiria_400_3.png']
    }
  }

  ngOnInit(): void {
  }

}

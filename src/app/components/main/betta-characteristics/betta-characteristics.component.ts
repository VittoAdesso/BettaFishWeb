import { Component, OnInit } from '@angular/core';
import { Icharacteristic } from '../models/Imain';

@Component({
  selector: 'app-betta-characteristics',
  templateUrl: './betta-characteristics.component.html',
  styleUrls: ['./betta-characteristics.component.scss']
})
export class BettaCharacteristicsComponent implements OnInit {

public bettaCharacteristics: Icharacteristic; 
  constructor() { 
    this.bettaCharacteristics = {
      box :
      [ 
        { 
        title: "Características del pez betta", 
        text: "Aunque no es un pez especialmente delicado, sí posee cierta sensibilidad, por lo que sus cuidados deberán ceñirse a sus características. Los peces betta pertenecen a la subespecie de los laberíntidos, que significa que respiran oxígeno del aire a través de un órgano llamado laberinto. Y no se trata de una respiración parcial o secundaria, sino que el pez betta necesita salir a respirar para vivir. El sistema de respiración doble del pez betta le obliga a sacar la cabeza del agua y tomar aire, boqueando, de ahí que sea importante que elijas un modelo de pecera con tapa para evitar accidentes (recuerda separarla un par de centímetros del agua para que pueda respirar), ya que tiene cierta tendencia a saltar para salir a coger oxígeno."}
        , 
        { title: "Cómo nada un pez pez betta", 
        text: "Para disfrutar de ese efecto hipnótico y especialmente visual de las peceras, nada mejor que introducir un pez betta. Sin duda, no vas a encontrarte al Michael Phelps de las peceras, ya que su forma de nadar es lenta debido a sus particulares aletas. En contra de lo que pueda parecer, el manto de sus aletas dificulta su desplazamiento y no le sirve para alcanzar grandes velocidades, así que no es extraño que lo encuentres parado sobre alguna planta o incluso apoyado en el fondo."
        }
      ],
      remember: " Recuerda!!! su dificultad para nadar lo hace especialmente torpe ante grandes dimensiones o corrientes, así que elige un filtro de agua de baja potencia para que las burbujas o el efecto del chorro no lo moleste demasiado."
    }
    

  }

  ngOnInit(): void {
  }

}

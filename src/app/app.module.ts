import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/hero/gallery/gallery.component';
import { MainComponent } from './components/main/main.component';
import { BettaCharacteristicsComponent } from './components/main/betta-characteristics/betta-characteristics.component';
import { BettaHabitatComponent } from './components/main/betta-habitat/betta-habitat.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtrasComponent } from './components/extras/extras.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    MainComponent,
    BettaCharacteristicsComponent,
    BettaHabitatComponent,
    FooterComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    AccordionModule,
    FieldsetModule,
    TabViewModule,
    ImageModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

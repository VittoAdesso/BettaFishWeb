import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtrasComponent } from './components/extras/extras.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/hero/gallery/gallery.component';
import { HeroComponent } from './components/hero/hero.component';
import { BettaCharacteristicsComponent } from './components/main/betta-characteristics/betta-characteristics.component';
import { BettaHabitatComponent } from './components/main/betta-habitat/betta-habitat.component';




const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'origin', component: HeroComponent },
  { path: 'characters', component: BettaCharacteristicsComponent },
  { path: 'home', component: BettaHabitatComponent },
  { path: 'curioso', component: ExtrasComponent },

  { path: 'gallery', component: GalleryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

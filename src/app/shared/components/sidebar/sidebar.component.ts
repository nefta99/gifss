import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

   public datosServicio : string[] =[];


  constructor(private gifsServicio : GifsService){

  }


  get tags(): string[] {
    return this.gifsServicio.tagsHistory;
  }


  searchTag(tag : string){
    this.gifsServicio.searchTag(tag);
  }






}

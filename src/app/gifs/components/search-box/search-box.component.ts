import { Component, ElementRef,  ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsservices : GifsService) { }


  searchTag( ){

    const newTag  = this.tagInput.nativeElement.value;
    this.gifsservices.searchTag(newTag);
    //Para limpiar el cuadro
    this.tagInput.nativeElement.value ='';

  }

}

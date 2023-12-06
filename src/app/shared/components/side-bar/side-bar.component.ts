import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor( public gifsService: GifsService){}

  get tags() {
    return this.gifsService.tagsHistory
  }

  @ViewChild('tagButton')
  public tagInput!: ElementRef<HTMLButtonElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
  }



}

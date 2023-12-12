import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViBook';
  logoBlanco = [
    {
      src: './assets/img/ViBook(Blanco).png',
      titulo: 'Logo ViBook Blanco',
    }
  ];
  logoNegro = [
    {
      src: './assets/img/ViBook.png',
      titulo: 'Logo ViBook Negro',
    }
  ];
  logoLila = [
    {
      src: './assets/img/ViBook_lila.png',
      titulo: 'Logo ViBook Lila',
    }
  ];
  background = {
    src: './assets/img/wallpapersden.com_abstract-neon-circle-shapes_3840x2160_animation (1).webm',

  }
  backgroundimg = {
    src: './assets/img/123.png',
  }
  instagram = {
    src: './assets/img/logoInstagram.png',
    titulo: 'Logo Instagram',
  }
  twitter = {
    src: './assets/img/logoTwitter.png',
    titulo: 'Logo Twitter',
  }
  gmail = {
    src: './assets/img/logoGmail.png',
    titulo: 'Logo Gmail',
  }

  public pageData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.pageData = this.dataService.initialPageData;
  }

}

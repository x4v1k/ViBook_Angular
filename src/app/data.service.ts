import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public initialPageData = [
    {
      title: 'About Us',
      description: 'Somos una empresa dedicada a la venta de libros de ilustración creados a partir de inteligencia artificial. Nuestra idea se basa en ofrecer una variedad de libros personalizables por el usuario en función de sus preferencias. Cada libro contendrá una variedad de etiquetas seleccionables donde el usuario podrá escoger cómo quiere ambientar su libro.'
    }
    // Agrega más elementos según sea necesario
  ];
}

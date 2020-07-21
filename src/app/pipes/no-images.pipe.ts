import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages',
})
export class NoImagesPipe implements PipeTransform {
  transform(images: any[]): string {
    if (!images) return 'assets/img/noimage.png';
    //la aplicacion corre en el index, de ahi que no se coloque ../../
    if (images.length > 0) return images[0].url;
    else return 'assets/img/noimage.png';
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true}) cssClass!: string;

  constructor() {

    // Código bloqueante para poder ver el poder de @defer
    const start = Date.now();
    while( Date.now() -  start < 3000 );

    console.log('Cargado');

  }

}

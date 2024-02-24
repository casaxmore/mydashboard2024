import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@share/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersFastComponent,
    TitleComponent
  ],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }

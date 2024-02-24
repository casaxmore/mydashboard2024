import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@share/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <app-title  [title]="titleLabel()" />

    @if (user()) {
      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
          />
          <div>
            <h3>{{ user()?.first_name}} {{ user()?.last_name }}</h3>
            <p>{{ user()?.email }}</p>
          </div>
      </section>

    }@else {
      <p>Cargando información</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  /* public user = signal<User| undefined>(undefined); */

  // to Signal lo que es una función que coge un observable y regresar un señal
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserById(id) )
    )
  )
  public titleLabel = computed(() => {
    if ( this.user() ) {
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'Información del usuario'
  })


/*   constructor() {
    this.route.params.subscribe(params => {
      console.log(params)
    })
  } */

 }

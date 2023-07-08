import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { MainComponent } from '../main/main.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';

const routes: Routes = [
  {
    path: 'add-theme',
    component: NewThemeComponent,
  },
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}

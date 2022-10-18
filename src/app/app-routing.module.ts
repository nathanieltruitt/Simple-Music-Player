import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearcherComponent } from './components/searcher/searcher.component';

const routes: Routes = [
  {
    path: 'searcher',
    component: SearcherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [SearcherComponent];

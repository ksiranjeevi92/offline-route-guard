import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dashboar.component';
import { OfflineModeRouteGuard } from './offline-mode-route-guard';
const routes: Routes = [


        {
    path: 'dashboard',
    component: DashBoardComponent,
    canActivate: [OfflineModeRouteGuard]
  }
  
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent,DashBoardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [OfflineModeRouteGuard]
})
export class AppModule { }

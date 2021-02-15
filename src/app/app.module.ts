import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoinsComponent } from './components/coins/coins.component';
import { CoinComponent } from './components/coin/coin.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { ProgressComponent } from './components/progress/progress.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { ReportsComponent } from './components/reports/reports.component';



const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'coins',component:CoinsComponent},
  {path: 'AboutUs',component:AboutUsComponent},
  {path: 'reports',component:ReportsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CoinsComponent,
    CoinComponent,
    InfoComponent,
    SearchComponent,
    ProgressComponent,
    CheckBoxComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

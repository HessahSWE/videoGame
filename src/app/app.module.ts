import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GaugeModule } from 'angular-gauge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { DetailsComponent } from './Components/details/details.component';
import { GameTabComponent } from './Components/game-tab/game-tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    GameTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule.forRoot(),
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AngularPaginatorModule } from 'angular-paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserFilterPipePipe } from './user-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AngularPaginatorModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './shared/inmemory-db/inmemory-db.service';
import { SetupComponent } from './views/setup/setup.component';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [AppComponent, SetupComponent],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

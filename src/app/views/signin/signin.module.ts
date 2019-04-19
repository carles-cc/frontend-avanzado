import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '../../shared/states/user/reducers/user.reducer';
import {SigninService} from '../../shared/services/signin.service';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../../shared/states/user/effects/user.effects';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    SigninRoutingModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [SigninService]
})
export class SigninModule {}

import { CanActivateFn } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const loginGaurdGuard: CanActivateFn = 
(route: ProfileComponent, state) => {
  return true;
};

import { Routes} from '@angular/router';
import { AuthGuard } from './_helpers';

import { HomeComponent } from './home';
import { LoginComponent, RegisterComponent } from './account';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsContentComponent } from './components/starships-content/starships-content.component';



export const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starships-content', component: StarshipsContentComponent },
  
  { path: '**', redirectTo: '' }
];

export class AppRouting {

 }

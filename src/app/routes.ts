import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    },
    {
        path: 'aboutus',
        component: AboutusComponent,
        title: 'About Us'
    }
];
export default routeConfig;
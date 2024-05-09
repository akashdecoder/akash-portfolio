import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ExtraCurricularComponent } from './components/extra-curricular/extra-curricular.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'extras', component: EducationComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'extraCurricular', component: ExtraCurricularComponent },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
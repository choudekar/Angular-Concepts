import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormspracticeComponent } from './formspractice/formspractice.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UseridComponent } from './userid/userid.component';
import { PracticeComponent } from './practice/practice.component';
import { RoutingComponent } from './routing/routing.component';
import { canActivateGuard } from './can.activate.guard';
import { canDeactivateGuard } from './can.Deactivate.guard';
import { TaskComponent } from './task/task.component';
import { resolverFunction } from './resolver.service';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { SharedModule } from './shared.module';
import { SharedComponent } from './shared/shared.component';
import { CustomPreloadingStrategy } from './custom.preload.strategy';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
//import { LazyoneComponent } from './lazyone/lazyone.component';


const routes: Routes = [
  { path: 'forms', component: FormspracticeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: "", component: HomeComponent },
  {
    path: "user", component: UserComponent, data: { api: "www.google.com" }, resolve: { usersData: resolverFunction }
    //, canDeactivate: [canDeactivateGuard]
    , children: [{
      path: ":id", component: UseridComponent //, canActivate: [canActivateGuard]
    }]
  },
  { path: "practice", component: PracticeComponent },
  { path: "routing", component: RoutingComponent },
  { path: "quiz", component: QuizAppComponent },
  //{ path: "sub", component: SharedComponent },
  //{  path: 'news', component: HomeComponent, pathMatch: "full" },
  //{ path: "user/:id", component: UseridComponent },
  { path: "lazyone", data: { preload: true }, loadChildren: () => import("./lazyone.module").then(m => m.LazyoneModule) },
  { path: "lazyTwo", loadChildren: () => import("./lazytwo.module").then(m => m.LazytwoModule) },
  { path: "pipes", component: PipesComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , { preloadingStrategy: CustomPreloadingStrategy }
  ), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

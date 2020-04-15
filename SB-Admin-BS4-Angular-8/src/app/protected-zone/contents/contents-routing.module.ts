import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { KnowledgeBasesComponent } from './knowledge-bases/knowledge-bases.component';
import { CommentsComponent } from './comments/comments.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
    { path: '', component: KnowledgeBasesComponent },
    { path: 'knowledge-base', component: KnowledgeBasesComponent},
    { path: 'categories', component: CategoriesComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'reports', component: ReportsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule {}

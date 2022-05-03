import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { OrderContainerComponent } from "./order-container/order-container.component";
import { UserContainerComponent } from "./user-container/user-container.component";

const routes: Routes= [
    {path: "users", component:UserContainerComponent},
    {path: "order", component: OrderContainerComponent}
]
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

} 
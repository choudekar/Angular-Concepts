import { UserComponent } from "./user/user.component";

export function canDeactivateGuard(component: UserComponent) {
    if (component.canLeave()) {
        return true;
    } else {
        return window.confirm("are sure to deactivate ?")
    }

}
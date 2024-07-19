import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

export function canActivateGuard(route: ActivatedRouteSnapshot) {

    const router: Router = inject(Router);

    if (route.paramMap.get("id") === "admin") {
        return true;
    } else {
        router.navigate(['/']);
        return false;
    }



    return window.confirm("Are you sure ?");
    //return true;
    //return false;

}
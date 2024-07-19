import { inject } from "@angular/core";
import { AppService } from "./app.service";

export function resolverFunction() {
    const appService: AppService = inject(AppService);
    return appService.getUser();
}
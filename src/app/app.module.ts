import { NgModule } from "@angular/core";
import { DwvModule } from "./dwv/dwv.module";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent],
  imports: [
    DwvModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

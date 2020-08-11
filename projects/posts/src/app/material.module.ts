import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_COMPONENTS = [MatToolbarModule];

@NgModule({
  imports: [...MATERIAL_COMPONENTS],
  exports: [...MATERIAL_COMPONENTS],
})
export class MaterialModule {}

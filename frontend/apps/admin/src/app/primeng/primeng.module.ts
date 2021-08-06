import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
  exports: [
    CardModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
})
export class PrimengModule {}

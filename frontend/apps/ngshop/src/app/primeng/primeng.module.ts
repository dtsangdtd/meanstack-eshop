import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    RatingModule,
    InputNumberModule,
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    RatingModule,
    InputNumberModule,
  ],
})
export class PrimengModule {}

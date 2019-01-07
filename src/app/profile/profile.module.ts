import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberComponent } from './containers/random-number/random-number.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [RandomNumberComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule
  ]
})
export class ProfileModule { }

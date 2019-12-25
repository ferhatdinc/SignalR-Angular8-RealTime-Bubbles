import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { MessageService } from './services/message.service';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenderChartComponent } from './gender-chart/gender-chart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ColorPickerModule } from 'ngx-color-picker';

//material angular
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatIconModule,
  MatRadioModule,
  MatSliderModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatTabsModule,
  MatBadgeModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule,
  MatCardModule,
  MatChipsModule,
  MatRippleModule,
  MatTableModule,
  MatBottomSheetModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatRadioGroup
} from "@angular/material";
import { FormsModule } from '@angular/forms';
import { OsChartComponent } from './os-chart/os-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BubblesComponent,
    GenderChartComponent,
    SignInComponent,
    OsChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule, MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatRippleModule,
    MatTableModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatGridListModule,
    ColorPickerModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { SidenavService } from './sidenav.service';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
	PostViewerComponent,
	TagViewerComponent
} from './blogposts';

import 'hammerjs';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PostViewerComponent,
		TagViewerComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MaterialModule,
		AppRouting,
		FlexLayoutModule
	],
	providers: [
		SidenavService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

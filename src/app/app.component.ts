import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'blog-app',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	@ViewChild('sidenav') sidenav: MatSidenav;
	@ViewChild('postsSidenav') postsSidenav: MatSidenav;
	posts: any;
	constructor(
		private sidenavService: SidenavService,
		private http: HttpClient
	) {
	}
	ngOnInit() {
		this.sidenavService.postsSidenav = this.postsSidenav;
		this.sidenavService.sidenav = this.sidenav;
		this.http.get('assets/blogposts.json').subscribe(result => {
			this.posts = result;
		});
	}
}

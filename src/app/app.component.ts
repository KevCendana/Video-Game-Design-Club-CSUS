import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./sections/navigation-bar/navigation-bar.component";
import { HomeComponent } from "./sections/home/home.component";
import { AboutComponent } from "./sections/about/about.component";
import { OfficersComponent } from './sections/officers/officers.component';
import { GamesComponent } from "./sections/games/games.component";
import { CurrentProjectComponent } from "./sections/current-project/current-project.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NavigationBarComponent, HomeComponent, AboutComponent, OfficersComponent, GamesComponent, CurrentProjectComponent]
})
export class AppComponent {
  title = 'video-game-design-club';
}

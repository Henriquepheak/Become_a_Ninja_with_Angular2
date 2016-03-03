import {Component} from "angular2/core";
import {RacesCmp} from './races_cmp';

@Component({
  selector: 'ponyracer-app',
  template: `
    <h1>PonyRacer</h1>
    <races-cmp></races-cmp>
    `,
    directives: [RacesCmp]
})
export class PonyRacerApp {

}

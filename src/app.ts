import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Threejs App';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Threejs App' },
      { route: ['','cabinet'], name: 'cabinet', moduleId: './cabinet-view', nav: true, title: 'Threejs App - Cabinet' }
    ]);

    this.router = router;
  }
    
  onToggleClicked() {
      //$('#toogle-menu').show();
  }   
}

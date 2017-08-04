export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Application Title';
        config.map([
            { route: ['', 'main'], name: 'main', moduleId: 'views/main/main', nav: true, title: 'Main' }
        ]);

        this.router = router;
    }
}
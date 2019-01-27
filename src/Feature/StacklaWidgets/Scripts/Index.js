import LoadStacklaWidget from 'StacklaWidget';

class App {

    constructor(config) {
        this.mount = document.querySelector(config.mount) || '';
        this.components = config.components || {};
        this.initComponents();
    }
    initComponents(target = this.mount) {
    }
  
}
const app = new App({
    components: {
        loadStacklaWidget: LoadStacklaWidget
    },
    mount: '#mount'
});

export default app;


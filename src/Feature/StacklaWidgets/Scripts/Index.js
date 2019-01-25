import LoadStacklaWidget from 'StacklaWidget';

class App {

    constructor(config) {
        this.mount = document.querySelector(config.mount) || '';
        this.components = config.components || {};     
    }
    initComponents(target = this.mount) {
    }
  
}


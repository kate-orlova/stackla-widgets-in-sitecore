import LoadStacklaWidget from 'StacklaWidget';

class App {

    constructor(config) {
        this.mount = document.querySelector(config.mount) || '';
        this.components = config.components || {};
        this.initComponents();
    }

    initComponents(container = this.mount) {
        const elementNodes = [
            ...container.querySelectorAll(`[data-component]`)
        ];

        elementNodes.forEach((elementNode) => {
            const element = elementNode;

            const requiredComponents = element.dataset.component.split(' ');

            requiredComponents.forEach((component) => {
                const Module = this.components[component];
                if (Module) {

                    const moduleInstance = new Module({
                        mount: this.mount,
                        root: element
                    });
                    element.initalisedComponents[component] = moduleInstance;
                    element.components.push(moduleInstance);
                }
            });

        });
    }
}

const app = new App({
    components: {
        loadStacklaWidget: LoadStacklaWidget
    },
    mount: '#mount'
});

export default app;


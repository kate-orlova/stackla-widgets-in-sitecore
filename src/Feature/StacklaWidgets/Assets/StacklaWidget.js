import React, { Component } from 'react';

class StacklaWidget extends Component {
    componentDidMount() {
        const clickableParentElements = ['A', 'BUTTON'];
        const rootIsClickable = clickableParentElements.indexOf(this.root.nodeName) > -1;
        if (rootIsClickable) {
            this.root.addEventListener('click',
                () => {
                    this.loadWidget(document, 'stacklafw-js');
                });
        } else {
            this.loadStacklaWidget(document, 'stacklafw-js');
        }
    }

    loadStacklaWidget(d, id) {
        if (d.getElementById(id)) return;
        var t = d.createElement('script');
        t.type = 'text/javascript';
        t.src = 'https://assetscdn.stackla.com/media/js/widget/fluid-embed.js';
        t.id = id;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(t);
    }
}

export default StacklaWidget;
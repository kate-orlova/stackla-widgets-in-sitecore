import React, { Component } from 'react';

class StacklaWidget extends Component {
    componentDidMount() {
        this.loadStacklaWidget(document, 'stacklafw-js');
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
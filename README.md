![GitHub release (latest by date)](https://img.shields.io/github/v/release/kate-orlova/stackla-widgets-in-sitecore)
[![GitHub release](https://img.shields.io/github/release-date/kate-orlova/stackla-widgets-in-sitecore.svg?style=flat)](https://github.com/kate-orlova/stackla-widgets-in-sitecore/releases/tag/MVPRelease)
[![GitHub license](https://img.shields.io/github/license/kate-orlova/stackla-widgets-in-sitecore.svg)](https://github.com/kate-orlova/stackla-widgets-in-sitecore/blob/master/LICENSE)
![GitHub language count](https://img.shields.io/github/languages/count/kate-orlova/stackla-widgets-in-sitecore.svg?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/kate-orlova/stackla-widgets-in-sitecore.svg?style=flat)
![GitHub repo size](https://img.shields.io/github/repo-size/kate-orlova/stackla-widgets-in-sitecore.svg?style=flat)
![GitHub contributors](https://img.shields.io/github/contributors/kate-orlova/stackla-widgets-in-sitecore)

# Stackla Widgets in Sitecore
Stackla widgets in Sitecore project helps you to bring a user-generated content on social networks to a Sitecore-powered website via integration with [Stackla](https://stackla.com/) - a world leading visual content engine aggregating the selected content from Facebook, Twitter, Instagram, YouTube, Flickr, Pinterest and presents it in a clean & visual interface.

# Introduction
As soon as registered for a specific Stackla product, you will be granted access to Stackla Dashboard where you can create a new widget. Simply go to **Engage > Widgets > Create New Widget** and select one from the available *Widget Types* depending on your license entitlements, next create a filter to specify what social content you would like to load and in what order present items. Once all settings have been completed, your widget code will be generated in the *Embed Code* tab. You will simply need to click on a *Copy* button to get the entire widget code and then paste that embed code into your Sitecore module.

## Integration
Stackla offers three API choices for flexible integration: JavaScript, REST and Webhooks.

The Stackla widgets in Sitecore project gives you two options of how to integrate a Stackla widget into a Sitecore site, both compatible with any Sitecore version.

### Option 1: Embed Code
If you simply want to embed a Stackla widget to a specific page on your Sitecore website and load it along with other content on the page then you can use an ```EmbedCodeStacklaWidget.cshtml``` view approach. The key Stackla settings such as *Id*, *Hash* and *Filter Id* are dynamic and defined in a *StacklaWidget* model, so that you can easily apply relevant settings to you.

### Option 2: Event-driven widget
If you do not want to load a Stackla widget on the initial page load then consider an event-driven approach implemented in an *EventDrivenStacklaWidget.cshtml* view. It contains a link and a section where a Stackla widget will be loaded. The link has a component declaration via a data attribute: ```data-component="loadStacklaWidget"```, what requires the corresponding React component to be registered accordingly.

The JavaScript component *StacklaWidget* is implemented in *Scripts\StacklaWidget.js* with the following logic:
* ```<a>``` and ```<button>``` tags are defined as "clickable" elements resulting to the widget load; depending on your requirements you can add more tags to a *clickableParentElements* constant variable;
* a click event is being attached to clickable elements to load the widget when a website visitor clicks on a relevant link / button.

# Contribution
Hope you found this module useful, your contributions and suggestions will be very much appreciated. Please submit a pull request.

# License
The Stackla widgets in Sitecore module is released under the MIT license what means that you can modify and use it how you want even for commercial use. Please give it a star if you like it and your experience was positive.

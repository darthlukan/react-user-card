# react-user-card

> Author: Brian Tomlinson <darthlukan@gmail.com>


## Description

> A user card heavily inspired by [Google's Material Design](http://www.google.com/design/spec/material-design/introduction.html)
written as a [ReactJS](http://facebook.github.io/react/) component.


## TODO

> * Package for NPM/Bower/whatever the JS users are using nowadays
> * Optional color params for title background and title font
> * Fix CSS inclusion, copying files from installation paths is janky
> * Better behavior on mobile screens, current media queries aren't really good enough
> * Cleanups


## Screenshot

> ![Imgur](http://i.imgur.com/Op4RyYZ.png)


## Usage

```javascript
    var React = require('react');
    var Card = React.createFactory(require('<path/to/components/card.js>'));

    React.render(Card({
    userimg: '</path/to/imgFile>',
        username: '<Username>',
        content: '<Text goes here, maybe a description, or a comment, etc.>'
    }), document.getElementById('<card-holder ID>'));
```

> NOTE: If you want a styled card, you'll have to copy the ```card.css``` file
> from wherever you're installing your npm modules and include it in your HTML
> files. I'm looking into a better method for this.

## License
> MIT, see LICENSE file

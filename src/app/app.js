'use strict';

var React = require('react');
var Card = React.createFactory(require('./components/card.js'));

React.render(Card({
    userimg: 'http://www.gravatar.com/avatar/6a8561ee5706d17a4382a391720db523.png',
    username: 'Username',
    content: 'Text goes here, maybe a description, or a comment.  Anything really :)'
}), document.getElementById('app'));

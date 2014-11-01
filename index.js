'use strict';

var React = require('react');
var R = React.DOM;

var CardHeader = React.createClass({
    render: function() {
        return R.div({className: 'card-header'}, [
            R.img({id: 'user-img', src: this.props.userimg}),
            R.h3({id: 'username-title'}, this.props.username)
        ]);
    }
});

var CardContent = React.createClass({
    render: function() {
        return R.div(
            {className: 'card-content'}, 
            R.p({id: 'card-text'}, this.props.text)
        );
    }
});

var Card = React.createClass({
    render: function() {
        return R.div({className: 'card'}, [
            CardHeader({userimg: this.props.userimg, username: this.props.username}),
            CardContent({text: this.props.content})
        ]);
    }
});

module.exports = Card;
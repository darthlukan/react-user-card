'use strict';

var React = require('react');
var R = React.DOM;

var CardHeader = React.createClass({
    render: function() {
        return R.div({className: 'card-header', style: this.props.style}, [
            R.img({id: 'user-img', src: this.props.userimg, style: {
                borderRadius: '50%',
                WebkitBorderRadius: '50%',
                MozBorderRadius: '50%',
                width: '68px',
                height: '68px',
                float: 'left',
                padding: '0% 4% 0% 4%'
            }}),
            R.h3({id: 'username-title', style: {
                position: 'relative',
                padding: '1%'
            }}, this.props.username)
        ]);
    }
});

var CardContent = React.createClass({
    render: function() {
        return R.div(
            {className: 'card-content', style: this.props.style},
            R.p({id: 'card-text', style: {
                padding: '1%',
                overflow: 'hidden'
            }}, this.props.text)
        );
    }
});

var Card = React.createClass({
    render: function() {
        if (!this.props.cardStyle) {
            this.props.cardStyle = {
                backgroundColor: '#fafafa',
                width: '30%',
                height: '20%',
                overflow: 'hidden',
                boxShadow: '.25px .25px 5px .25px',
                borderRadius: '2px 2px 2px 2px',
                zIndex: 5
            };
        }

        if (!this.props.headerStyle) {
            this.props.headerStyle = {
                backgroundColor: '#607d8b',
                padding: '1%',
                color: '#eceff1',
                position: 'relative'
            };
        }

        if (!this.props.contentStyle) {
            this.props.contentStyle = {
                color: 'rgb(0, 0, 0, 0.54)',
                padding: '2%'
            };
        }

        return R.div({className: 'card'}, [
            CardHeader({userimg: this.props.userimg, username: this.props.username, style: this.props.headerStyle}),
            CardContent({text: this.props.content, style: this.props.contentStyle})
        ]);
    }
});

module.exports = Card;

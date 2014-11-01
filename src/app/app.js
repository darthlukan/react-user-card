'use strict';

var React = require('react');
var R = React.DOM;

ExampleApp = React.createClass({
    render: function() {
        return R.h2({className: 'hi'}, "Hello World!");
    }
});

React.render(ExampleApp(), document.getElementById('app'));

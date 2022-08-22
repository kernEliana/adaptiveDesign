const React = require('react');
const View = require('./view');

exports.render = function render (req, res){
    const Flex = () => <View />
    res.render(Flex)
}
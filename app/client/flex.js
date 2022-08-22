const React = require("react");
const Flex = require('../pages/Flex/view');
const hydrate = require("nordic/hydrate");
require('../pages/Flex/styles.scss')



hydrate(
    <Flex/>,
    document.getElementById("root-app")
  );
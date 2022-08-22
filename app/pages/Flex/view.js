const React = require("react");
const Script = require("nordic/script");
const serialize = require("serialize-javascript"); // función que parsea datos.
const Style = require("nordic/style");
const FlexComponent = require('../../components/FlexComponent')


function View() {
  const preloadedState = {};
  return (
    <>
      <Script>
        {`window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
          isJSON: true,
        })}console.log('%flex page is loaded!', 'color: green')`}
      </Script>
      <Script src="vendor.js" />
      <Script src="flex.js" />
      <Style href="flex.css"/>
      <FlexComponent/>
    </>
  );
}
module.exports = View;

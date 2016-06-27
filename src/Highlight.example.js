/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import Highlight from "./Highlight";

const exampleSource = `
addEventListener('load', function() {
  var code = document.querySelector('#code');
  var worker = new Worker('worker.js');
  worker.onmessage = function(event) { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
})
`;
var {number, string} = PropTypes;
export default class HappySandwichMakerExample extends Component {
  render() {
    return (
      <Highlight source={exampleSource}/>
    );
  }
}

/*
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";

var {any, func, bool, string, oneOf} = PropTypes;
import * as hljs from "highlight.js";

/**
 * A Isomorphic highlight component
 */
export default function Highlight(props) {
  var {source, children, ..._props} = props;
  if (!source) source = children;
  return (
    <pre {..._props}><code>
        {hljs.highlightAuto(source)}
      </code></pre>
  );
}

Highlight.prototype.propTypes = {
  /** optional source prop */
  source: string,
  /** null, single node or an array */
  children: any
};


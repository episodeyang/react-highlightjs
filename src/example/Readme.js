/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "../";
import PropsTable from "react-component-props-table";

import HighlightExample from "../Highlight.example";
import HighlightSource from "!!raw!../Highlight.example";
import HighlightAST from "!!react-docgen!../Highlight";

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      # React ES6 Component Template

      [![github](https://img.shields.io/github/downloads/episodeyang/react-highlightjs/total.svg?style=flat-square&maxAge=2592000)]()

      A template repo for react components written with es6 syntax.
      ## Usage

      ~~~shell
      git clone https://github.com/episodeyang/react-highlightjs
      ~~~

      After cloning from gitHub, you can run the example by doing
      ~~~shell
      npm run serve-docs
      ~~~

      And then open your browser at [http://localhost:5000](http://localhost:5000).

      This one calls webpack (you should look at the \`package.json\` source) and uses the
      webpack-dev-server to serve from \`./src/example/\` with hot module reloading.

      ### How is this README written:
      This readme is written with react and markdown. It includes:
      1. a **live react component demo**
      2. a table of the component's props that is generated automatically
      3. **source** of the example component

      ## Example Component: \`Highlight\`
      This component makes you a delicious Subway sandwich.
      `}
      <HighlightExample/>
      ### Props
      {`This table below is generated automatically`}
      <div className="table-container horizontal-scroll flex-column center">
        <PropsTable propMetaData={HighlightAST.props}/>
      </div>
      {`
      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
      <Highlight>{HighlightSource}</Highlight>
    </Markdown>
  )
}

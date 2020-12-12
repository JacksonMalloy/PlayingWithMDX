// import React from 'react'
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
// import { renderToString } from 'react-dom/server'

// exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
//   const sheet = new ServerStyleSheet() //styled-components

//   const app = (
//     <StyleSheetManager sheet={sheet.instance}>
//       {React.cloneElement(bodyComponent, {
//         pageContext,
//       })}
//     </StyleSheetManager>
//   )

//   const body = renderToString(app)

//   replaceBodyHTMLString(body)
//   setHeadComponents([<style type="text/css" id="server-side-jss" key="server-side-jss" />, sheet.getStyleElement()])

//   return
// }

import ReactDOMServer from 'react-dom/server'

import App from './ui/src/App'

const indexFile = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div>Rendered on Server</div>
  </body>
</html>`

export const handler = async () => {
  try {
    const result = 'Hey Bitches!'
    const app = ReactDOMServer.renderToString(<App message={result} />)
    const html = indexFile.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: html,
    }
  } catch (error) {
    console.log(`Error ${error.message}`)
    return `Error ${error}`
  }
}

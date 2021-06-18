# React SSR with AWS Lambda

This stack serves React server side rendered apps, styled with styled components.

The response is given by a Lambda, resulting in a cheap, fast, and easy way to serve the React app.

## API

To run the API, run `yarn start` in the root. This will start a local API gateway, serving your SSR'ed app at `GET: http://localhost:5000/dev/app`. You can make any adjustments necessary, as this is a normal HTTP lambda that accepts query strings or path params if you change the path.

## UI

To run the UI, simply head to the `ui/` folder inside of `lambdas/server/`. Run `yarn start`, and the app will load like any other CRA project.

The difference here being that your data coming from the server will need to be created and delivered somehow. The whole point of using SSR is to pass the data to the React app. Running it locally is primarily for style and functional testing once the data has arrived.

You can do this by conditionally delivering data to your app.

```ts
const isLocal = process.env.NODE_ENV === 'production'

export const someData = isLocal ? mockData : undefined

///


import { someData } from './mockSource'

const Thing: FC<Props> = ({data = someData}) => (
  ...
)
```

Here, since your component will not be given the data by the API rendering it, you can fallback to the mock data to style the app accordingly.

### Styling

The app uses styled components to deliver styles to the resulting HTML. Styled components is a big library, but the result is quite small as it generates the styles for you and injects them into the `<head/>`. This is ideal, as SSR is usually focused on speed. Sending a lot of JS is not really the goal here, and this minimal approach to styling makes it easy to both develop and perform.

## Result

The result is an absolute bare bones HTML page, with styles built into the head. It's super fast, and pretty easy to use after it's set up.

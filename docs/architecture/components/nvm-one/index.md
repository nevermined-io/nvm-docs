import BrowserOnly from '@docusaurus/BrowserOnly';
import { Widget } from '@site/src/components/one';

# Nevermined One Widget

## How to add a widget in a project

- Include the script in the end of the body of your html file:
```html
  <script src="https://mumbai.nevermined.one/lib/nvm-service-widget-loader.js"></script>
```

- Add also in your html file this code:
```html
<div
  id="nvm-service-widget"
  nvm-did="did:nv:e8f4339f28567ef65b94fa1b5ef8f88d202fa4ea2180e307ac2040cecabf8383"
/>
```

## Demo

<BrowserOnly fallback={<div>Loading demo...</div>}>
 {()=> <Widget/>}
</BrowserOnly>
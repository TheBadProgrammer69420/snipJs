# snippyJs
This is an npm library for clipboards for functions like copy and paste.

## Table of contents.
- [Installation](#installation)
- [Tutorial](#tutorial)

## Installation
Instruction for installing snippyjs

```bash
npm install snippyjs /n


## Tutorial
Here is an example of how our copy/paste functions should look like
```jsx
import {Copy} from 'snippyjs'

export const App = async () =>  {

  return(
      <button onclick={await Copy("Hello")}>Copy</button>
  )
}

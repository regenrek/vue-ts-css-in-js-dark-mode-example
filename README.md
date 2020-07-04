# Vue + twin.macro

<p align="center">
  <img src="https://i.imgur.com/XQ5kwkc.jpg" alt="emotion" style="width:95%;display:block;max-width:100%"><br>
  <br>
  Vue + Twin CSS-in-js lib (TailwindCSS)
    <br>
</p>


This is a WIP proof of concept to make use of different libraries. I don't recommend to use this anywhere in production.

## Using

* vue.js typescript
* [vuejs/composition-api](https://github.com/vuejs/composition-api) (see [rfc](https://composition-api.vuejs.org/)) 
* [twin.macro](https://github.com/ben-rogerson/twin.macro) Use [TailwindCSS](https://tailwindcss.com/) within css-in-js
* [@egoist/vue-emotion](https://github.com/regenrek/vue-emotion) emotion css-in-js
* [babel jsx](https://github.com/vuejs/jsx) vue.js jsx support
* [babel-preset-vca-jsx](https://github.com/luwanquan/babel-preset-vca-jsx) Automatically import `createElement as h` when writing `JSX`


## Note

* I've slightly adapted @egoist/vue-emotion: removed global theme injection so it works with vca local provide/inject.

## Limitations

<details>
<summary>
<b>twin.macro with TypeScript + emotion</b>
</summary>

❌
```js
import tw, {css, styled } from `twin.macro`
```

✅     
```js
import tw from 'twin.macro'
import { css } from 'emotion'
import { styled } from '@egoist/vue-emotion'
```
</details>


## Project setup
```
yarn
yarn serve
```

## Thanks to 
This project is mostly inspired by the works of the following creators:

[@wonderful-panda](https://github.com/wonderful-panda)
[@antfu](https://github.com/antfu)
[@ben-rogerson](https://github.com/ben-rogerson)
[@luwanquan](https://github.com/luwanquan)
[@egoist](https://github.com/egoist)
[@u3u](https://github.com/u3u)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vue-ts-twinmacro

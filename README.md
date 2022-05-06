# Telegram WebApp starter bundle with vanilla setup

Simple starter pack with `Typescript`, `Tailwind` and `Vite`.

[**Vite**](https://vitejs.dev/) helps to bundle very quickly vanilla `Webapp` pages

## How to use it?

1. Clone this repo
2. Install dependencies `yarn`
3. Enjoy it with [**Vite**](https://vitejs.dev/guide/#command-line-interface)

## How to deploy?

You can do like [here](https://github.com/ShinkarenkoMaxim/simple-quiz).

Copy all your `dist/` files to `public/` and serve with backend.

## Multipage?

Also you can create feature as individual component.

1. Create component and bundle
2. Copy to backend `public/` directory like `public/feature`
3. Enable component directory in `Express` for serve static file

Example:

```app.use('feature', express.static('feature'));```

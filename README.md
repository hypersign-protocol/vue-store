# Vue Store

Vue Store of Hypersign Identity Network

## Importing in `hid-node` repository

To import this repository at `hid-node` repository, run the following from `hid-node` dir:

```
git subtree add -P vue https://github.com/hypersign-protocol/vue-store.git main
```

## App UI

[Vue.js](https://vuejs.org/)-based web app template for your Cosmos SDK blockchain. Use the template to quickly bootstrap your app. To learn more, check out the components in [Ignite Web](https://github.com/ignite-hq/web) and the [Ignite documentation](https://docs.ignite.network/).

### Project setup

```
npm install
```

### Setup Env

```
mv  .env<dev/local>.hid .env
```

### Generate store

```
ignite generate vuex
```

### Compiles and reloads the app on save for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### sgb.io

Personal website, built in React.

via create-react-app, then adapted to work with next.js.

[![Netlify Status](https://api.netlify.com/api/v1/badges/1a02a7a9-1f31-4839-9e31-36e85e4c4db2/deploy-status)](https://app.netlify.com/sites/agitated-morse-97535e/deploys)

#### Handy commands

- `yarn` install deps
- `yarn dev` fire up dev server
- `yarn export` dump static output into the `build` dir

#### Deployment

Currently using Zeit's `now` app to deploy with ease.

- In this dir, `now`
- Will be deployed to a `*.now.sh` url e.g. `https://sgb-new-irxeezlonp.now.sh/`
- Do `now alias https://sgb-new-irxeezlonp.now.sh sgb.io`
- Done!

An alternative is to static build via `yarn export` and serve the `build` dir. Note that the static output can also be hosted on Zeit (but that would not give us client-side React rendering).

---
### sgb.io

Personal website, built in React.

via create-react-app, then adapted to work with next.js.

#### Handy commands

- `yarn` install deps
- `yarn dev` fire up dev server
- `yarn export` dump static output into the `build` dir

#### Deployment

The exported directory is a ready-to-go static site. It can be served on a server.

One thing to consider trying is using ZEIT Now, which would simply require `now`.

Note that a potentially better option going forwards is to use the premium Now service rather than DO. This would simplify things plus run it via Node therefore giving you both server _and_ client React rendering. Arguably server rendering and static basic deployment (eg nginx) anywhere is fine, though.

---
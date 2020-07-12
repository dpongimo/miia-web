# Miia Web!

a web client for [Hydrus](https://hydrusnetwork.github.io/hydrus/)

This project came about as a way to browse your local Hydrus Client on your phone. 

## For Users

### Getting Started

`(TODO: Setup GitHub Actions Build for Static Site)`

Miia Web is an in-browser app that connects to your already-installed Hydrus instance via the [Hydrus Client API](https://hydrusnetwork.github.io/hydrus/help/client_api.html). To get started, you'll need to:

1. Enable the Client API inside Hydrus
	- `Services` / `Manage Services` / `client api` / `edit`
	- [x] Allow non-local connections if you want to access it from another computer or your phone
	- [x] Support CORS headers
2. Find the IP address of your computer
	- Windows: Open Powershell or CMD.exe and run `ipconfig`
	- OSX/*nix: Usually run `ifconfig`
	- Them, look for the address for the network adapter you use to connect to your home network. The address might look like `192.168.1.142`
	- You can test it by navigating to `http://your-ip:45869`. You'll know if it works if you get some ASCII art
3. Open Miia Web and connect to `http://your-ip:45869`
4. Generate an API Key from Hydrus
	- `Services` / `Review Services` / `local` / `client api`
	- Click `add` / `from api request`
	- Inside Miia Web, click `Request Temporary Key`
	- Inside Hydrus, you should see a popup saying `Got request!`
	- Add a name to your key and ensure that at least `search for files` is checked. Future version of Miia Web might be able to do more
		- Click `Apply`
	- Inside Miia Web, click `Validate Manual Key`
5. Congrats! Your browser will store that info locally next time you want to connect.


## Building the App Locally

If you'd like to contribute or run your own version of the hosted website, keep reading.

### Running the project

This project relies on [Node.js](https://nodejs.org/) newer than 10.x for building its HTML, CSS, and Javascript pages.

This project is based on [Sapper](https://sapper.svelte.dev/) which is a framework for compiling reactive javascript without a virtual DOM like React or Vue. 

You can install dependencies and run the project in development mode with:

``` bash
cd ~/your-projects-folder
git clone https://github.com/dpongimo/miia-web.git
cd miia-mini
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## Structure

Sapper expects to find two directories in the root of your project — `src` and `static` .

### src

The [src](src) directory contains the entry points for your app — `client.js` , `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js` ) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte` .
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route

### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

``` js
import {
    files
} from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).

## Bundler config

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.

## Production mode and deployment

To start a production version of your app, run `npm run build && npm start` . This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [Vercel Now](https://vercel.com) when using `sapper export` , run these commands:

``` bash
npm install -g vercel
vercel
```

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).

## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies` , which will cause it to get bundled (and therefore compiled) with your app:

``` bash
npm install -D @sveltejs/svelte-virtual-list
```

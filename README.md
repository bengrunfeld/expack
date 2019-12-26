# Forked Expack

This version of expack closely follows Ben Grunfeld's expack boilerplate but incorporates a number of changes as follows.

All documentation for expack also applies here. Please visit https://github.com/bengrunfeld/expack for the original repository.

## Changes in this fork

### 1. Layout of dist

For a better separation of server and client code the dist folder will split the built files into two sub-directories:

    dist/
        client/
        server/

This allows to better ringfence serving static files (i.e. the client) and protect serving the server file(s).

### 2. Changes src folder layout

The src folder originally separates only the server from the client code. This makes code leaking and confusion between collaborating developers far easer. I therefore decided to change the layout as follows:

    src/
        client/
        server/
        shared/
        test/

I also moved index.js from top-level `src` to `src/client/js` to make it clearer that that is the entrypoit for the client for webpack.

### 3. Add boilerplate app.js for express routes

I moved setting up the express app into its own module `app.js` where it is easier to setup express routes that are not affected by differences in
production and development modes (e.g. the difference in how the static client files are served)

### 4. Add support for module 'dotenv'

I added support for dotenv, and a simple confiv.env file to the repository. server-dev.js and server-prod.js already made use of this in the code (when determining the port to listen on). Using dotenv makes this a little bit easier.

### 5. Switch to ES6 import/export

I prefer using `import express from 'express' over the CommonJS style using const/require. It's a preference and it somehow chimes with me much better than the old way.

The only exception is the webpack config files requiring old style module syntax as these are not transpiled.

### 6. Update to ESLint 6

The original repository uses ESLint 4.x. Since I am using a Node.js linting profile (as well as Prettier) I decided to update to ESLint 6.

### 7. Prettier and Node.js lint profile

I am using Prettier, and a Node.js profile for ESLint. Both plugins I use required upgrading to ESLint 6 (see above).
Feel free to ditch this poart of the changes as they are highly subjective.

## Security vulnerability changes

### serialize-javascript and discontinued uglify-webpack-lugin

The original expack repository has a security vulnerability through using the uglify-webpack-plugin which depends on a vulnerable version of serialise-javascript.
uglify-webpack-plugin is discontinued, and an alternative should be used: terser-webpack-plugin.
This updated version of expack-boilerplate makes use of the alternative, removing the vulnerability entirely.

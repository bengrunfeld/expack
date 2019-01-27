# Expack - Express and Webpack Boilerplate

Expack is the bare-bones Express and Webpack boilerplate with ES6+ babel transpilation, ESLint linting, Hot Module Reloading, and Jest test framework enabled.

Expack has two build modes: Development and Production.

When you run `npm run buildDev`, Javascript, HTML, and CSS files are unminified and not uglified, meaning that you can easily inspect them in Chrome Dev Tools. Hot Module Reloading is enabled via `webpack-dev-middleware` and `webpack-hot-middleware`. 

When you run `npm run buildProd`, Javascript, HTML, and CSS files are all minified and uglified, and images are encoded as Base64 directly into your CSS file, which results in less calls to the server for image files.

## Google App Engine Flex Deployment

Expack can be deployed directly to Google App Engine Flex with the command `npm run deploy`. **IMPORTANT:** Currently `app.yaml` is configured to use minimal resources to save on cost, which is great for development but terrible for production. Please review and update `app.yaml` to suit your own needs.

## Installation & Usage

    git clone https://github.com/bengrunfeld/expack.git
    cd expack
    npm install
    
    npm run buildDev        // for development
        // OR
    npm run buildProd
    
    npm start               // navigate to localhost:8080 for local dev

### For testing

    npm test                // runs test
    npm run coverage        // generates a coverage report

## Security

Please ensure that your version of Node and NPM are up to date, and run `npm audit` after installation to ensure that no vulnerabilities exist. If they do, follow the audits instructions on how to resolve them. 

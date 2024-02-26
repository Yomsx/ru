//javascript helmet protection saver

const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter({}));
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

const ninetyDaysInSeconds = 90 * 24 * 60 * 60;
const hstsConfig = {
    maxAge: ninetyDaysInSeconds,
    force: true
};

app.use(helmet.hsts(hstsConfig));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache() );


const cspConfig = {
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'trusted-cdn.com']
    }
};

// Apply the middleware to configure helmet's Content Security Policy
app.use(helmet.contentSecurityPolicy(cspConfig));
dnsPrefetchControl: false

// Your other middleware and routes...

// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
// require our routes/index.js file
const {router} = require("./routes/index");
const { ProjectPageError } = require("./errors");

if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config();
}
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

// Now let's tell our app about those routes we made!
app.use(router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if(err.status == 404)
    {
        res.render("404_page", {h1_text : err.message, err_status : err.status});
    }
    else if(err instanceof ProjectPageError)
    {
        if(err.type === "project details")
        {
            res.render("my_projects", {h1_text : "A Few of my creations", all_projects : []});
        }
    }
    else
    {
        return res.json({
            message: err.message
        });
    }
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
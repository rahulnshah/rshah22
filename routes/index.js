const express = require("express");
const router = express.Router();
const {ProjectsInaccesibleError} = require('../errors');
router.get('/', (req, res) => {
    res.render("index");
});

router.get('/my_projects', async function(req, res, next){
    try{
            
        if(!process.env.TOKEN)
        {
            throw new ProjectsInaccesibleError();
        }

        // run fetch request
        const url = "https://api.github.com/search/repositories?q=" + encodeURIComponent('portfolio project in:readme user:rahulnshah');
        
        let response = await fetch(url, {
            method : "GET",
            headers : {
                //hide this using ENV var
                "Authorization" : `Bearer ${process.env.TOKEN}`
            }
        });
        
        // read our json
        let data = await response.json();

        res.render("my_projects", {h1_text : "Projects", all_projects : data.items});
        
    }
    catch(err)
    {
		next(err);
	}
});

module.exports = {router};
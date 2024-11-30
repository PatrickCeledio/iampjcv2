const { DateTime } = require("luxon");

// Tells 11ty where we are working from
module.exports = function(eleventyConfig) {

    // Tell 11ty where all the pretty stuff is
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    // Properly format the date for each article
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
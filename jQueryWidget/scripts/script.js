$.getJSON('json/worldnews.json', function(data){
    // console.log(data); // for testing purposes
    // initialize variables
    var j = 0;
    var output = "";
    // loop through each element of the children array in the json file
    $.each(data.data.children, function(){
        // only print the first 5
        if (j < 5) {
            // create a new entry with the title, url and domain
            output += '<button class="collapsible">' + this['data']['title'] + '</button><div class="content"><p><b>Domain:</b> ' + this['data']['domain'] + '</p><p><b>URL:</b> ' + this['data']['url'] + '</p></div>';
            j++;
        }
    });
    // add our html to the index page
    $(".container").html(output);
});
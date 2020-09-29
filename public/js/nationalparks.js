//This file originally was intended to load the database after using an ajax call to gather info
//That proved to slow down the application, so static information was used
//The below code was used to generate that information

//Using the park codes below, search for each park object using the ajax call
let parkAr = ["arch", "badl", "blca", "bisc", "brca", "care", "cave", "cany", "cari", "chis", "crla", "cuva", "dena", "drto", "ever", "fowa", "gaar", "glac", "grca", "grte", "glba", "grsm", "grsa", "gumo", "hale", "havo", "isro", "jotr", "katm",  "kefj", "lake", "maca", "meve", "moja", "noca", "pefo", "redw", "sagu", "seki", "thro", "whsa", "yose", "zion"];

//Use an empty array to push html code on, to then copy and paste into file for datalist
let optionsTags = [];
  
 for(i = 0; i < parkAr.length; i++) {
    
    let parkCode = parkAr[i];

    //Key only used to generate code, not needed for application functionality
    //let apiKey = 'PARKS_API_KEY';
    //let campURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`;

    // $.ajax({
    //     url: campURL,
    //     method: "GET"
    // }).then(function (response) {
        //console.log(response);

        // let fullName = response.data[0].fullName;
        // let images0 = response.data[0].images[1].url;
        // let moreInfoUrl = response.data[0].url;

        //let newTag = `<option class="${fullName}" data-image="${images0}" data-url="${moreInfoUrl}">${fullName}</option>`;

       // optionsTags.push(newTag);

    //The below worked to load the database from the original API call 
    //However this proved to slow down the application
    //Archived for future developments

    // let parkObj = {
    //     parkcode: parkCode,
    //     name: fullName,
    //     state: inState,
    //     image0: images0,
    //     infoUrl: moreInfoUrl
    //     }
        
        // $.post("/api/parks", {
        //     type: "POST",
        //     data: parkObj
        // }).then( function() {
        //     console.log("created new park");
        // });
    // });
};

console.log(optionsTags);
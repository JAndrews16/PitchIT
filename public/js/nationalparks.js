
let parkAr = ["arch", "badl", "blca", "bisc", "brca", "care", "cave", "cany", "cari", "chis", "crla", "cuva", "dena", "drto", "ever", "fowa", "gaar", "glac", "grca", "grte", "glba", "grsm", "grsa", "gumo", "hale", "havo", "isro", "jotr", "katm",  "kefj", "lake", "maca", "meve", "moja", "noca", "pefo", "redw", "sagu", "seki", "thro", "whsa", "yose", "zion"];
let stateAr = ["LA", "CA", "CO", "FL", "OR", "SD", "OH", "AK", "FL", "MD", "AK", "FL", "MT", "WY", "AK", "MI", "HI", "HI", "KY", "AK", "AK", "AZ", "CA", "WA", "CA", "ND", "CA", "NC,TN", "NM", "UT", "UT", "AZ,NV", "UT", "NM", "AZ", "UT", "UT", "CO", "CA", "TX", "CO", "CA", "AZ"];
let nameAr = ["Cane River Creole National Historical Park", "Channel Islands National Park", "Black Canyon Of The Gunnison National Park", "Biscayne National Park", "Crater Lake National Park", "Badlands National Park", "Cuyahoga Valley National Park", "Denali National Park & Preserve", "Dry Tortugas National Park", "Fort Washington Park", "Gates Of The Arctic National Park & Preserve", "Everglades National Park", "Glacier National Park", "Grand Teton National Park", "Glacier Bay National Park & Preserve", "Isle Royale National Park", "Haleakal&#257; National Park", "Hawai'i Volcanoes National Park", "Mammoth Cave National Park", "Katmai National Park & Preserve", "Kenai Fjords National Park", "Petrified Forest National Park", "Redwood National and State Parks", "North Cascades National Park", "Sequoia & Kings Canyon National Parks", "Theodore Roosevelt National Park", "Yosemite National Park", "Great Smoky Mountains National Park", "White Sands National Park", "Arches National Park", "Capitol Reef National Park", "Lake Mead National Recreation Area", "Zion National Park", "Carlsbad Caverns National Park", "Grand Canyon National Park", "Canyonlands National Park", "Bryce Canyon National Park", "Great Sand Dunes National Park & Preserve", "Joshua Tree National Park", "Guadalupe Mountains National Park", "Mesa Verde National Park", "Mojave National Preserve", "Saguaro National Park"];
let imageAr = ["https://www.nps.gov/common/uploads/structured_data/3C8664C5-1DD8-B71B-0BDF39DFAA0CD777.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7A70D4-1DD8-B71B-0B2979F65CAB2D50.jpg", "https://www.nps.gov/common/uploads/structured_data/3C8166E8-1DD8-B71B-0BDEB9A4EEEED807.jpg", "https://www.nps.gov/common/uploads/structured_data/3C870833-1DD8-B71B-0BE93D49E0DF6503.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7B23C5-1DD8-B71B-0B4F2400855714FA.jpg", "https://www.nps.gov/common/uploads/structured_data/3C82ED5D-1DD8-B71B-0B2F33D3B39D6D1B.jpg", "https://www.nps.gov/common/uploads/structured_data/3C81841A-1DD8-B71B-0B1A447676517C5B.jpg", "https://www.nps.gov/common/uploads/structured_data/3C83C9C7-1DD8-B71B-0B9B669ED961F97E.jpg", "https://www.nps.gov/common/uploads/structured_data/3C810049-1DD8-B71B-0B0040641619D4A6.jpg", "https://www.nps.gov/common/uploads/structured_data/889ACFDE-1DD8-B71B-0B66D243B767FF29.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7A8B6B-1DD8-B71B-0B8B89FE0C6B6F4F.jpg", "https://www.nps.gov/common/uploads/structured_data/3C8547ED-1DD8-B71B-0B596F29F0A9A60B.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7FF0EB-1DD8-B71B-0BDB1379DE9714E1.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7FA7B7-1DD8-B71B-0B7B45B73D1C90C3.jpg", "https://www.nps.gov/common/uploads/structured_data/3C790BBF-1DD8-B71B-0B0AE92D0B9C24EB.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7AC4C1-1DD8-B71B-0B8592CA6634ABEE.jpg", "https://www.nps.gov/common/uploads/structured_data/3D3323B6-1DD8-B71B-0B78ACA534C1D05E.jpg", "https://www.nps.gov/common/uploads/structured_data/C5AEDF53-AE4A-F6DB-2FBA7BE158386C0E.jpg", "https://www.nps.gov/common/uploads/structured_data/700F5F4C-1DD8-B71B-0BEB7EF216AFBE1D.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7DE352-1DD8-B71B-0B35831ADF254DE0.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7D83C9-1DD8-B71B-0B294D0F9ABC4B94.jpg", "https://www.nps.gov/common/uploads/structured_data/13FB649C-1DD8-B71B-0B50D0E826025619.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7A5B0D-1DD8-B71B-0B1104A95B7A2026.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7A2835-1DD8-B71B-0B468E834049FBE4.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7939C8-1DD8-B71B-0B048D7EC3812DE3.jpg", "https://www.nps.gov/common/uploads/structured_data/3C84C3C0-1DD8-B71B-0BFF90B64283C3D8.jpg", "https://www.nps.gov/common/uploads/structured_data/3C80EC37-1DD8-B71B-0B87F63E8B030D15.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7FE691-1DD8-B71B-0B21F94DBD31A965.jpg", "https://www.nps.gov/common/uploads/structured_data/3C79931C-1DD8-B71B-0BF201E3DB540D04.jpg", "https://www.nps.gov/common/uploads/structured_data/3C82E4FB-1DD8-B71B-0B8614194A6D08FA.jpg", "https://www.nps.gov/common/uploads/structured_data/3C79D3DE-1DD8-B71B-0B0E3FD563EACFB5.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7F0098-1DD8-B71B-0B6C0191D7391384.jpg", "https://www.nps.gov/common/uploads/structured_data/3C8240F9-1DD8-B71B-0BB5EA000351CA8A.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7A53BC-1DD8-B71B-0BFF7AD2A83FC7A8.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7F8EAD-1DD8-B71B-0B080143E3A4984D.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7CE533-1DD8-B71B-0BE6ECE3FE72864F.jpg", "https://www.nps.gov/common/uploads/structured_data/3C85E941-1DD8-B71B-0BCAA9F8A0BD4E0F.jpg", "https://www.nps.gov/common/uploads/structured_data/3C825533-1DD8-B71B-0B6FDF436F604A3C.jpg", "https://www.nps.gov/common/uploads/structured_data/3C7C0207-1DD8-B71B-0B74281D9C40EAB9.jpg", "https://www.nps.gov/common/uploads/structured_data/3C875A3A-1DD8-B71B-0B978E24674F66B8.jpg", "https://www.nps.gov/common/uploads/structured_data/3C858613-1DD8-B71B-0BEFB533FAB3FB55.jpg"];
let urlAr = ["https://www.nps.gov/cari/index.htm", "https://www.nps.gov/chis/index.htm", "https://www.nps.gov/blca/index.htm", "https://www.nps.gov/bisc/index.htm", "https://www.nps.gov/crla/index.htm", "https://www.nps.gov/badl/index.htm", "https://www.nps.gov/cuva/index.htm", "https://www.nps.gov/dena/index.htm", "https://www.nps.gov/drto/index.htm", "https://www.nps.gov/fowa/index.htm", "https://www.nps.gov/gaar/index.htm", "https://www.nps.gov/ever/index.htm", "https://www.nps.gov/glac/index.htm", "https://www.nps.gov/grte/index.htm", "https://www.nps.gov/glba/index.htm", "https://www.nps.gov/isro/index.htm", "https://www.nps.gov/hale/index.htm", "https://www.nps.gov/havo/index.htm", "https://www.nps.gov/maca/index.htm", "https://www.nps.gov/katm/index.htm", "https://www.nps.gov/kefj/index.htm", "https://www.nps.gov/pefo/index.htm", "https://www.nps.gov/redw/index.htm", "https://www.nps.gov/noca/index.htm", "https://www.nps.gov/seki/index.htm", "https://www.nps.gov/thro/index.htm", "https://www.nps.gov/yose/index.htm", "https://www.nps.gov/grsm/index.htm", "https://www.nps.gov/whsa/index.htm", "https://www.nps.gov/arch/index.htm", "https://www.nps.gov/care/index.htm", "https://www.nps.gov/lake/index.htm", "https://www.nps.gov/zion/index.htm", "https://www.nps.gov/cave/index.htm", "https://www.nps.gov/grca/index.htm", "https://www.nps.gov/cany/index.htm", "https://www.nps.gov/brca/index.htm", "https://www.nps.gov/grsa/index.htm", "https://www.nps.gov/jotr/index.htm", "https://www.nps.gov/gumo/index.htm", "https://www.nps.gov/meve/index.htm", "https://www.nps.gov/moja/index.htm", "https://www.nps.gov/sagu/index.htm"];
    

 for(i = 0; i < parkAr.length; i++) {
    
        let parkCode = parkAr[i];
        let fullName = nameAr[i];
        let inState = stateAr[i];
        let images0 = imageAr[i];
        let moreInfoUrl = urlAr[i];

    let parkObj = {
        parkcode: parkCode,
        name: fullName,
        state: inState,
        image0: images0,
        infoUrl: moreInfoUrl
        }
        
        // $.post("/api/parks", {
        //     type: "POST",
        //     data: parkObj
        // }).then( function() {
        //     console.log("created new park");
        // });

};

// let parkCodesAr = ["ARCH", "BRCA", "CANY", "CARE", "CAVE", "DEVA", "GRBA", "GRCA", "GRSA", "GUMO", "JOTR", "KICA", "LAKE", "MEVE", "MOJA", "SAGU", "SEQU", "ZION"];
// for(i = 0; i < parkCodesAr.length; i++) {
//     let parkCode = parkCodesAr[i];
//     let apiKey = 'PARKS_API_KEY';
//     let campURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`;
// $.ajax({
//     url: campURL,
//     method: "GET"
// }).then(function (response) {
//     //console.log(response);
//     let fullName = response.data[0].fullName;
//     let inState = response.data[0].states;
//     let parkDescription = response.data[0].description;
//     console.log(fullName);
//     console.log(inState);    
//     console.log(parkDescription);
//     //note this returns an array
//     let entranceFees = response.data[0].entranceFees[0].cost;
//     console.log(entranceFees);
//     //multiple images to generate a random number each time a user opens a trip
//     //and show the photo corresponding to that number
//     let images0 = response.data[0].images[0].url;
//     let images1 = response.data[0].images[1].url;
//     let images2 = response.data[0].images[2].url;
//     let images3 = response.data[0].images[3].url;
//     let weather = response.data[0].weatherInfo;
//     console.log(images0);
//     console.log(images1);
//     console.log(images2);
//     console.log(images3);
//     console.log(weather);
//     let moreInfoUrl = response.data[0].url;
//     console.log(moreInfoUrl);
//     // var query = connection.query(
//     //   "INSERT INTO nationalparks SET ?",
//     //   {
//     //       name: fullName,
//     //       state: inState,
//     //       description: parkDescription,
//     //       price: entranceFees,
//     //       image0: images0,
//     //       image1: images1,
//     //       image2: images2,
//     //       image3: images3,
//     //       weatherInfo: weather,
//     //       infoUrl: moreInfoUrl
//     //   },
//     //     function(err, res) {
//     //       if (err) throw err;
//     //       console.log(res.affectedRows + " park inserted!\n");
//     //     }
//     //   );
//     $.post("/api/parks", {
//             name: fullName,
//             state: inState,
//             description: "description",
//             price: entranceFees,
//             image0: images0,
//             image1: images1,
//             image2: images2,
//             image3: images3,
//             weatherInfo: "weather",
//             infoUrl: moreInfoUrl
//    })
//       .then(function (data) {
//         console.log("made it to then nationalpark! ");
//         // If there's an error, handle it by throwing up a bootstrap alert
//       });
// });
// }
// console.log("finished for loop");
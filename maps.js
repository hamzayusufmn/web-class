let MetroAreaCenter = [44.96, -93.2];
let zoomLevel = 9;

let map = L.map('college-map').setView(MetroAreaCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let campuses = [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844]},
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099]},
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312]},
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232, -93.3767558]},
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494, -92.9862026]}
];

campuses.forEach(function (collegeCampus) {
    let markerText =
        `<b>${collegeCampus.name}<br><a href="${collegeCampus.website}">website</a>`
     L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map);
});

let MetroAreaCircle = L.circle(MetroAreaCenter, {
    color: 'blue',
    radius: 30000,
    fillOpacity: 0.2
})
    .bindPopup('Twin Cities Metro Area')
    .addTo(map);





// let mctcCoordinates = [44.9724, -93.2844];
 // let mctcMarker = L.marker(mctcCoordinates)
   // .bindPopup("Minneapolis College<br><a href='http://minneapolis.edu'>website</a>")
    // .addTo(map);

// let stPaulCoordinates = [44.9483, -93.1099];
// let stPaulMarker = L.marker(stPaulCoordinates)
  //  .bindPopup("Saint Paul College<br><a href='http://saintpaul.edu'>website</a>")
   // .addTo(map);


//let NormandaleCoordinates = [44.8297, -93.3312]
//let normandaleMarker = L.marker(NormandaleCoordinates).
   //  bindPopup("Normandale College <br><a href='http://www.normandale.edu'>website</a>").addTo(map)




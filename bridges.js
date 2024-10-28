// zoom level 4 out of 10 looked the best visually for user
let map = L.map('bridge-map').setView([37.1, -95.7], 4);

// include map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//  data array with name, website, and coordinates
let bridges = [
    {name: "Verrazzano-Narrows Bridge", website: "https://en.wikipedia.org/wiki/Verrazzano-Narrows_Bridge", coordinates: [40.6066, -74.0447]},
    {name: "Golden Gate Bridge", website: "https://en.wikipedia.org/wiki/Golden_Gate_Bridge", coordinates: [37.8199, -122.4783]},
    {name: "Mackinac Bridge", website: "https://www.mackinacbridge.org", coordinates: [45.8174, -84.7278]},
    {name: "George Washington Bridge", website: "https://en.wikipedia.org/wiki/George_Washington_Bridge", coordinates: [40.8517, -73.9527]},
    {name: "Tacoma Narrows Bridge", website: "https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge", coordinates: [47.2690, -122.5517]}
];


let bridgeIcon = L.icon({
    iconUrl: 'line.png',
    // imported custom picture to display on map for where bridges are
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

bridges.forEach(function(bridge) {
    L.marker(bridge.coordinates, {icon: bridgeIcon})
        .bindPopup(`<strong>${bridge.name}</strong>`)
        .addTo(map);

});

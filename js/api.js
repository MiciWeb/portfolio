let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.7966006995619, lng: 2.320132466423681 },
    zoom: 10.5,
  });
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(48.7966006995619, 2.320132466423681),
    map: map,
    title: "My Location"
});
}

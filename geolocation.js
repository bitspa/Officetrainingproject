<html>
<head>
<style>
      #map {
        height: 700px;
      }
</style>
</head>
<body>
<div id="navbar"><span><center>Google Maps</span></center></div>
<div id="wrapper">
<div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 22.5518708, lng: 88.3530652},
          zoom: 9
        });
	var marker = new google.maps.Marker({
    position: {lat: 22.5518708, lng: 88.3530652},
    map: map,
    title: 'Your Location'
    });
google.maps.event.addListener(map, 'click', function(event) {
   placeMarker(event.latLng);
});
function placeMarker(location) {

    if(marker!=null)
        {
            marker.setPosition(location),
            marker.setTitle("You are in your new location")
        }
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxQmjJcC2qZjVC7g7ROAS3t2pmIfVTdaI&callback=initMap"
    async defer></script>
</div>
</body>
</html>

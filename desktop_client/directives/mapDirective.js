angular.module("App") //placeholder name
.directive("trailMap", trailMap)

function trailMap(MapFactory) {
  var link = function($scope, $el){
    //el is an array of the element (plus its children) where this directive is used
    console.log("What is $el", $el)
    var $map = $scope.map
    // var map = new GMaps({
    //   div: '#map',
    //   lat: 34.0192316,
    //   lng: -118.4943091,
    //   zoom: 15
    // });

    GMaps.on('click', $map.map, function(event) {
      var index = $map.markers.length;
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();

      // lat/lng added on click, sent to array
      $scope.selectedLocations.push({
        lat: lat,
        lng: lng,
        name: "Location " + (index + 1),
        editing: false
      })
      $scope.$apply();
      console.log("+++ 76 Desktop_CLient mapController.js: ", JSON.stringify($scope.selectedLocations, null, "\t"));

      _.each($scope.selectedLocations, function(location){
        $map.addMarker({
          lat: location.lat,
          lng: location.lng,
          title: location.name, //Here's where the marker gets its name. We should make this editable so users can name the location whatever they want (to fill POST Body: "name")
          infoWindow: {
            content : location.name
          }
        });
      });

    });


  };
  return {
    restrict: "E",
    scope: true,
    replace: true, //stolen from brewski && tutorial fiddle
    link: link,
    controllerAs: "vm",
    template: [
      "<div>",
      "<div id='map'>",
      "</div>"
    ].join("")
  }
}

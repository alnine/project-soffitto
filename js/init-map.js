function initMap() {
        var uluru = {lat: 48.516513, lng: 34.612297};
        var map = new google.maps.Map(document.getElementById('feedback-map-wrapper'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

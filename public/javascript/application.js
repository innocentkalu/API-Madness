$(function() {
  var photos;
  var photoIndex = 0;
  // Defining the callback function.
  window.jsonFlickrApi = function(data) {
    photos = data.photos.photo;
    window.maxphotoindex = photos.length - 1;
      var image_tag = $("<img>");
      window.showpix = {
        plot_photo: function() {
          url = "farm"+photos[photoIndex].farm+".staticflickr.com/"+photos[photoIndex].server+"/"+photos[photoIndex].id+"_"+photos[photoIndex].secret+".jpg";
          image_tag.attr("src", "https://"+url);
        $("#picture").html(image_tag);
        $("#title").html(photos[photoIndex].title);
        $("#otherInfo").html("Owner :"+photos[photoIndex].ownername+", Views :"+photos[photoIndex].views);
        }
      }
      showpix.plot_photo();
  };
  // Moving photo display forward on clicking Next. 
  $("#next").on('click',function(){
      if (photoIndex == maxphotoindex) {
       photoIndex = 0;
      } else {
         photoIndex += 1; 
      }
      var image_tag = $("<img>");
      showpix.plot_photo();
    });
  // Moving photo display backward on clicking Next. 
  $("#previous").on('click',function(){
    if (photoIndex == 0) {
       photoIndex = maxphotoindex;
    } else {
       photoIndex -= 1; 
    } 
    var image_tag = $("<img>");
    showpix.plot_photo(); 
  });
  // Script for intereacting with the Flickr API
  var jsonpScript = document.createElement('script');
  jsonpScript.src = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=d9aa9c5aa0b3c11bcbdb19b74412a53b&text=lighthouse&extras=description,date_upload,date_taken,owner_name,views&per_page=100&format=json';
  document.head.appendChild(jsonpScript);
});    


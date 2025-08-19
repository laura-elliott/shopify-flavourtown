function applyScript(event) {
  var thumbnailImages = document.querySelectorAll('.thumbnails .thumbnail--media-image img'); //Check the class and update accordingly 
  var boldValue = event.target.value.toLowerCase();
  thumbnailImages.forEach(function(image) {
    var imgValue = image.getAttribute('alt').toLowerCase();
    console.log("imgValue",imgValue , "boldValue", boldValue)
    if (boldValue.includes("additional") && imgValue.includes("additional")) {
      image.parentElement.click();
    }
    
    if (boldValue === imgValue) {
      image.parentElement.click();
    }

  });
}




function observeDOM() {
  var observer = new MutationObserver(function(mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.target.classList.contains('bold_options_loaded')) {
      var radioInputs = document.querySelectorAll('.bold_option.bold_option_radio .bold_option_value_element input');
      var swatchInputs = document.querySelectorAll('.bold_option.bold_option_swatch .bold_option_value_element input');
      var dropdownInputs = document.querySelectorAll('.bold_option.bold_option_dropdown .bold_option_element select');




      radioInputs.forEach(function(input) {
        input.addEventListener('change', applyScript);
      });
      
      
      swatchInputs.forEach(function(input) {
        input.addEventListener('change', applyScript);
      });

      dropdownInputs.forEach(function(input) {
        input.addEventListener('change', applyScript);
      });
      
      observer.disconnect();
      break;
    }
  }
  });
  observer.observe(document.body, {
  childList: true,
  subtree: true
  });
}
document.addEventListener('DOMContentLoaded', function() {
observeDOM();
});
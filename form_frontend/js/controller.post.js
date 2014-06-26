//All FWD.us APIs -- https://app.fwd.us/api/v1/explorer
//The FWD.us API supports CORS instead of JSONP, so make sure you enable `crossDomain` requests if you're doing this on the client-side.

var fwdAPIkey = 'YOUR_KEY_HERE';
var fwdAPIdomain = 'staging.fwd.us';
var zipCode = '94107';

var responseData = {
  legislators = [];
  
};

//AJAX request - Get Correct Rep
//Demo - http://studiomoh.com/work/fwd.us/api/findrep.html
function get_legislator(){ //get_rep
  $.ajax({
    dataType: "json",
    url: 'https://' + fwdAPIdomain + '/api/v1/legislators/search.json',
    data: { zip: zipCode, key: fwdAPIkey },
    crossDomain: true,
    timeout: 2000,
    success: function(data) {
        // here's what you get from the api
        console.log(data);
    }
    else {
      // No results
      console.log('fail');
    }
  });
}



//AJAX request - Send a Letter to Rep
//Demo - http://studiomoh.com/work/fwd.us/api/letters.html
function post_letter(){
  $.ajax({
    dataType: 'json',
    type: 'post',
    url: 'https://' + fwdAPIdomain + '/api/v1/letters.json',
    data: $('form').serialize(),
    crossDomain: true,
    timeout: 2000,
    success: function(data) {
      // API response
      console.log(data);
    },
    error: function() {
      // Letter failed
      console.log('fail');
    }
  });
}































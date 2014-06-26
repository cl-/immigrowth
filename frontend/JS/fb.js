     stateDict=
    {
        "Alabama": "al",
        "Alaska": "ak",
        "American Samoa": "as",
        "Arizona": "az",
        "Arkansas": "ar",
        "California": "ca",
        "Colorado": "co",
        "Connecticut": "ct",
        "Delaware": "de",
        "District Of Columbia": "dc",
        "Federated States Of Micronesia": "fm",
        "Florida": "fl",
        "Georgia": "ga",
        "Guam": "gu",
        "Hawaii": "hi",
        "Idaho": "id",
        "Illinois": "il",
        "Indiana": "in",
        "Iowa": "ia",
        "Kansas": "ks",
        "Kentucky": "ky",
        "Louisiana": "la",
        "Maine": "me",
        "Marshall Islands": "mh",
        "Maryland": "md",
        "Massachusetts": "ma",
        "Michigan": "mi",
        "Minnesota": "mn",
        "Mississippi": "ms",
        "Missouri": "mo",
        "Montana": "mt",
        "Nebraska": "ne",
        "Nevada": "nv",
        "New Hampshire": "nh",
        "New Jersey": "nj",
        "New Mexico": "nm",
        "New York": "ny",
        "North Carolina": "nc",
        "North Dakota": "nd",
        "Northern Mariana Islands": "mp",
        "Ohio": "oh",
        "Oklahoma": "ok",
        "Oregon": "or",
        "Palau": "pw",
        "Pennsylvania": "pa",
        "Puerto Rico": "pr",
        "Rhode Island": "ri",
        "South Carolina": "sc",
        "South Dakota": "sd",
        "Tennessee": "tn",
        "Texas": "tx",
        "Utah": "ut",
        "Vermont": "vt",
        "Virgin Islands": "vi",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    };

 // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '649737755119180',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });




//   // Now that we've initialized the JavaScript SDK, we call
//   // FB.getLoginStatus().  This function gets the state of the
//   // person visiting this page and can return one of three states to
//   // the callback you provide.  They can be:
//   //
//   // 1. Logged into your app ('connected')
//   // 2. Logged into Facebook, but not your app ('not_authorized')
//   // 3. Not logged into Facebook and can't tell if they are logged into
//   //    your app or not.
//   //
//   // These three cases are handled in the callback function.

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });

  };

  // Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


button=0;

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');

    FB.api('/me?fields=id,name,location,hometown,email', function(response) {

      //Second round it goes here

      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';

        loc=response.location.name;
        arr=loc.split(", ");
        state=arr[1];
        city=arr[0];
        id=response.id;
        name=response.name;
        email=response.email;
        console.log(state);
        console.log(city);
        console.log(response);

        zip_code();


    });
}

function zip_code(){
                var url='http://api.zippopotam.us/us/'+stateDict[state]+'/'+city;
            console.log(url);
            jQuery.ajax({
                 url:   url,
                 success: function(result) {
                    console.log(result);
                    // jsonData = JSON.parse(result);
                    places=result["places"];
                    zipcode=places[0]["post code"];
                    console.log("ZIPCODE SET** : "+zipcode);

                    ajax.searchLegislator(zipcode);

                    img_url="https://graph.facebook.com/"+id+"/picture?type=large";
                    avatar=img_url;
                    console.log(img_url);
                    ajax.getB64Img(img_url);
                    $('#fb_img').html('<img src="'+img_url+'" />');


                    $(".Zip").attr("value", zipcode);
                    $(".Name").attr("value", name);
                    $(".Email").attr("value", email);
                    $(".City").attr("value", city);
                    $(".State").attr("value", state);

                    $(".Address").attr("value", "Sample Address goes here");

                    },
                 async:   false
            });
}

function fb_login(){
    button=1;
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');

                console.log(button);
                if(button==1){
                  console.log("*********")
                  // button=0;
                  // //location.reload();
                  window.location.reload(false);
                  // console.log("RELOAD")
                  // return;
                }

            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me?fields=id,name,location,hometown,email', function(response) {
                user_email = response.email; //get user email
          // you can store this data into your database
            });

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'user_location,user_hometown'
    });
}


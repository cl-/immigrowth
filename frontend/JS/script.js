
console.log(new Date());

var ajax;

var state="California";
var city="Sunnyvale";
var zipcode;
var id;
var name;
var email;

var address;
var leg_id;
var avatar;
var message;
var img_data;

avatar='data:image/png;base64,' + "";

function getBase64Image(imgElem) {
// imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
    var canvas = document.createElement("canvas");
    canvas.width = imgElem.clientWidth;
    canvas.height = imgElem.clientHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElem, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


$(document).ready(function(){

    ajax=new Ajax();


    //     var fwdAPIdomain = 'staging.fwd.us';
    //     var zipCode = '94107';

    //     $.ajax({
    //       dataType: "json",
    //       url: 'https://' + fwdAPIdomain + '/api/v1/legislators/search.json',
    //       data: { zip: zipCode, key: fwdAPIkey },
    //       crossDomain: true,
    //       timeout: 2000,
    //       success: function(data) {
    //         console.log(data);
    //       }
    //     });

    //Enter Overwrite
    $('.noEnterSubmit').keypress(function(e){
    if ( e.which == 13 ) return false;
    //or...
    if ( e.which == 13 ) e.preventDefault();
    });

    //GT
    $(".GT").click(function() {
      console.log("GT");
    });

    //PS
    $(".PS").click(function() {
      console.log("PS");
    });

$( ".Zip" )
  .focusout(function() {
    console.log("A");

    zipcode=$( ".Zip" ).val();
    ajax.searchLegislator(zipcode);

  })
  .blur(function() {
    zipcode=$( ".Zip" ).val();
    ajax.searchLegislator(zipcode);
    console.log("B");
  });

    jQuery.fn.extend({
      disable: function(state) {
          return this.each(function() {
              var $this = $(this);
              if($this.is('input, button'))
                this.disabled = state;
              else
                $this.toggleClass('disabled', state);
          });
      }
    });

    //RD
    $(".FB").click(function() {
        fb_login();
        console.log("FB");
    });

    $(".SEND").click(function() {
        console.log("SEND");

        name=$( ".Name" ).val();
        email=$( ".Email" ).val();
        address=$( ".Address" ).val();
        zipcode=$( ".Zip" ).val();
        city=$( ".City" ).val();
        state=$( ".State" ).val();
        message=$( ".Message" ).val();

        if(state.length>2){
            state=stateDict[state].toUpperCase();
        }

        // if(leg_id==""){

        //     alert("No valid zip code");
        //     return;
        // }


        ajax.sendFWD();

        // var canvas = document.getElementById('fb_img');
        // console.log(canvas);
        // var imageData  = canvas.toDataURL("image/png");
        //imgData = JSON.stringify(getBase64Image(imgElem));


        //console.log(imgElem);


    //         <div style="width:150px;text-align: center;">
    // <input type="text" class="form-control col-lg-8 find noEnterSubmit Name" placeholder="Name" />
    // <input type="text" class="form-control col-lg-8 find noEnterSubmit Email" placeholder="Email" />
    // <input type="text" class="form-control col-lg-8 find noEnterSubmit Address" placeholder="Address" />
    // <input type="text" class="form-control col-lg-8 find noEnterSubmit Zip" placeholder="Zip" />
    // <input type="text" class="form-control col-lg-8 find noEnterSubmit City" placeholder="City" />
    // <input type="text" class="form-control col-lg-8 find noEnterSubmit State" placeholder="State" />
    // </div>

    // <br>

    // <textarea type="text" class="form-control col-lg-8 find noEnterSubmit Message" placeholder="Message" />
    // This is a message.
    // </textarea>

    });


});
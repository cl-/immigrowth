
console.log(new Date());

var ajax;

var state="California";
var city="Sunnyvale";


$(document).ready(function(){

    ajax=new Ajax();
    ajax.searchLegislator("CA");

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


});
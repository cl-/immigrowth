function Ajax(){

    /*
    This class handles the Ajax calls
    */



    var self=this;
    var leg_id;

    var MyRequestsCompleted = (function() {
        var numRequestToComplete,
            requestsCompleted,
            callBacks,
            singleCallBack;
        return function(options) {
            if (!options) options = {};

            numRequestToComplete = options.numRequest || 0;
            requestsCompleted = options.requestsCompleted || 0;
            callBacks = [];
            var fireCallbacks = function () {
                stopSpinner();
                for (var i = 0; i < callBacks.length; i++) callBacks[i]();
            };
            if (options.singleCallback) callBacks.push(options.singleCallback);

            this.addCallbackToQueue = function(isComplete, callback) {
                if (isComplete) requestsCompleted++;
                if (callback) callBacks.push(callback);
                if (requestsCompleted == numRequestToComplete) fireCallbacks();
            };
            this.requestComplete = function(isComplete) {
                if (isComplete) requestsCompleted++;
                if (requestsCompleted == numRequestToComplete) fireCallbacks();
            };
            this.setCallback = function(callback) {
                callBacks.push(callBack);
            };
        };
    })();

    function drawChart() {

    }

    var url="https://app.fwd.us/api/v1/legislators/search";
    var fwdAPIkey = 'f23fe9074cf280314359';

    console.log(stateDict[state]);

    //https://app.fwd.us/api/v1/legislators/search.json?zip=94086&district=&state=&party=&key=f23fe9074cf28014359

    /* Get Conversation GET Call */
    this.searchLegislator = function(zip,callback){
        $.get("https://app.fwd.us/api/v1/legislators/search.json", { "zip":zip, "key":fwdAPIkey , "district":"", "state":"", "party":""})
        .done(function(jsonData) {
            //jsonData = JSON.parse(data);
            console.log("********");
            console.log(jsonData);
            jsonData=jsonData["legislators"];

            rep=jsonData[0];
            img_url=rep["photo"];
            leg_id=rep["id"];
            console.log(leg_id);
            $('#rep_img').html('<img src="'+img_url+'" />');
            //callback(jsonData);

            //then we call this
            //http://api.zippopotam.us/us/ca/sunnyvale

        })
        .fail(function() { console.log("updateTree Error"); })
    }

    this.getProfilePic =function(id,size,callback){
        $.get("https://graph.facebook.com/"+id+"/picture", { "type":size })
        .done(function(data) {
            //jsonData = JSON.parse(data);
            console.log(data);
            //callback(jsonData);

            //then we call this
            //http://api.zippopotam.us/us/ca/sunnyvale

        })
        .fail(function() { console.log("updateTree Error"); })
    }

    this.getB64Img =function(url,callback){
        // $.get(url, { })
        // .done(function(data) {
        //     //jsonData = JSON.parse(data);
        //     console.log("**");
        //     avatar=data;
        //     //callback(jsonData);

        //     //then we call this
        //     //http://api.zippopotam.us/us/ca/sunnyvale

        // })
        // .fail(function() { console.log("getB64Img Error"); })



                $.ajax({
            dataType: 'text',
            type: 'get',
            url: url,
            data: {
                },
            crossDomain: true,

        })
        .done(function(data) {
            //jsonData = JSON.parse(data);
            console.log("IMAGE SUCCESS");
            avatar='data:image/png;base64,' + data;

        })
        .fail(function() { console.log("IMAGE Error"); })

    }

    this.sendFWD =function(callback){

        //state make caps

//         selfie[name]:Raaj
// selfie[email]:raaj@raaj.com
// selfie[zip]:94086
// selfie[street_address]:geeg
// selfie[city]:Sunnyvale
// selfie[state]:CA
// selfie[legislator_id]:H001034
// selfie[message]:ergfwefwefwefwefwefwefwefewfwf wefwefwefwefwefwef efwegergergerg
// selfie[avatar]:

    console.log(state);



        $.ajax({
            dataType: 'json',
            type: 'post',
            url: "https://app.fwd.us/api/v1/selfies.json",
            data: {
                "key":fwdAPIkey,
                "selfie[name]":name,
                "selfie[email]":email,
                "selfie[zip]":zipcode,
                "selfie[street_address]":address,
                "selfie[city]":city,
                "selfie[state]":state.toUpperCase(),
                "selfie[legislator_id]":leg_id,
                "selfie[avatar]":avatar,
                "selfie[message]":$('.Message').val()},
            crossDomain: true,

        })
        .done(function(data) {
            //jsonData = JSON.parse(data);
            console.log("SELFIE SUCCESS");
            console.log(data);

            alert("Your selfie was sent!");
            //callback(jsonData);

            //then we call this
            //http://api.zippopotam.us/us/ca/sunnyvale

        })
        .fail(function() {

            console.log("sendFWD Error");
            alert("One of your fields has an issue");


        })

        console.log(name);
        console.log(email);
        console.log(zipcode);
        console.log(address);
        console.log(city);
        console.log(state);
        console.log(leg_id);
        console.log($('.Writing').val());


        $.ajax({
            dataType: 'json',
            type: 'post',
            url: "https://app.fwd.us/api/v1/letters.json",
            data: {
                "key":fwdAPIkey,
                "letter[name]":name,
                "letter[email]":email,
                "letter[zip]":zipcode,
                "letter[street_address]":address,
                "letter[city]":city,
                "letter[state]":state.toUpperCase(),
                "letter[legislator_id]":leg_id,
                "letter[shareable]":false,
                "letter[writing]":$('.Writing').val()},

            crossDomain: true,

        })
        .done(function(data) {
            //jsonData = JSON.parse(data);
            console.log("LETTERS SUCCESS");
            console.log(data);

            alert("Your letter was sent!");
            //callback(jsonData);

            //then we call this
            //http://api.zippopotam.us/us/ca/sunnyvale

        })
        .fail(function() { console.log("sendFWD Error"); alert("One of your fields has an issue"); })
    }


}
function Ajax(){

	/*
	This class handles the Ajax calls
	*/



	var self=this;

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
            //console.log(jsonData);
            jsonData=jsonData["legislators"];

            rep=jsonData[0];
            img_url=rep["photo"];
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


}
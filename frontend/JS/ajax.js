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
	this.searchLegislator = function(state,callback){
        $.get("https://app.fwd.us/api/v1/legislators/search.json", { "zip":"", "key":fwdAPIkey , "district":"", "state":state, "party":""})
        .done(function(data) {
            //jsonData = JSON.parse(data);
            console.log(data);
            //callback(jsonData);

            //then we call this
            //http://api.zippopotam.us/us/ca/sunnyvale

        })
        .fail(function() { console.log("updateTree Error"); })
	}

    this.check =function(callback){

    }


}
function Ajax(){

	/*
	This class handles the Ajax calls
	*/

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
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    }

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

            var url='http://api.zippopotam.us/us/'+stateDict["California"]+'/'+city;
            console.log(url);
            jQuery.ajax({
                 url:   url,
                 success: function(result) {
                                console.log(result);
                              if(result.isOk == false)
                                  alert(result.message);
                          },
                 async:   false
            });
        })
        .fail(function() { console.log("updateTree Error"); })
	}

    this.check =function(callback){

    }


}
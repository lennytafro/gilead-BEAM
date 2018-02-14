




// ##### ####################
// START VUEjs MODULES AND APPS

Vue.component('my-component', {
  template: '<span>{{ message }}</span>',
  data: {
    message: 'hello'
  },
	data: function () {
    return data
  }
})

//CRM Patient on Rev
var app2 = new Vue({
	el: '#app-2',
	data: {
        items: [],
        itemsApp02: [],
        itemsApp03: [],
        itemsApp04: [],
        itemsApp05: [],
        itemsApp06: [],
        holdItem: [],
		show: false
	},
	mounted: function(){
		// this.loadItemsPatientOnRev();
		// this.loadCaregiversPatientOnRev();
		// this.loadPatientProspects();
		// this.loadCaregiverProspects();
		// this.loadMyelomaCentral();
		this.loadItemsAwareness("Assets","StratImp-AWARENESS");
		this.loadItemsAdherence("Assets","StratImp-ADHERENCE");
		this.loadItemsAdjunct("Assets","StratImp-ADJUNCT");
		this.loadItemsAccess("Assets","StratImp-ACCESS");


	},
	methods: {
		// //CRM Patient on Rev
		loadItemsAwareness: function(table, view){
			// Init variables
			var app_id = "appbO5GRT4NuBc0Up";
			var app_key = "keyuf7sO87qug1SCZ";
			// var table = "Assets";
   //          var view = "StratImp-AWARENESS";
			var self = this
			this.itemsApp02 = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.itemsApp02 = response.data.records;
				if (self.itemsApp02.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },
        // //CRM Caregivers Patient on Rev
        loadItemsAdherence: function(table, view){
			// Init variables
			var app_id = "appbO5GRT4NuBc0Up";
			var app_key = "keyuf7sO87qug1SCZ";
			// var table = "Assets";
   //          var view = "StratImp-ADHERENCE";
			var self = this
			this.itemsApp03 = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.itemsApp03 = response.data.records;
				if (self.itemsApp03.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },
        // //CRM Patient Prospect
        loadItemsAdjunct: function(table, view){
			// Init variables
			var app_id = "appbO5GRT4NuBc0Up";
			var app_key = "keyuf7sO87qug1SCZ";
			// var table = "Assets";
   //          var view = "StratImp-ADJUNCT";
			var self = this
			this.itemsApp04 = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.itemsApp04 = response.data.records;
				if (self.itemsApp04.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },
        // //CRM Caregivers Prospect
        loadItemsAccess: function(table, view){
			// Init variables
			var app_id = "appbO5GRT4NuBc0Up";
			var app_key = "keyuf7sO87qug1SCZ";
			// var table = "Assets";
   //          var view = "StratImp-ACCESS";
			var self = this
			this.itemsApp05 = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.itemsApp05 = response.data.records;
				if (self.itemsApp05.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },
        loadItemsAll: function(){
	        this.loadItemsAwareness("Assets","AWARENESSAllBrnAll");
			this.loadItemsAdherence("Assets","ADHERENCEAllBrnAll");
			this.loadItemsAdjunct("Assets","ADJUNCTAllBrnAll");
			this.loadItemsAccess("Assets","ACCESSAllBrnAll");
        },
        loadItemsBranded: function(){
        	this.loadItemsAwareness("Assets","AWARENESSBrndAll");
			this.loadItemsAdherence("Assets","ADHERENCEBrndAll");
			this.loadItemsAdjunct("Assets","ADJUNCTBrndAll");
			this.loadItemsAccess("Assets","ACCESSBrndAll");
        },
        loadItemsUnbranded: function(){
        	this.loadItemsAwareness("Assets","AWARENESSUnbrAll");
			this.loadItemsAdherence("Assets","ADHERENCEUnbrAll");
			this.loadItemsAdjunct("Assets","ADJUNCTUnbrAll");
			this.loadItemsAccess("Assets","ACCESSUnbrAll");
        },

   //      // //CRM  MYELOMA CENTRAL
   //      loadMyelomaCentral: function(){
			// // Init variables
			// var app_id = "appbO5GRT4NuBc0Up";
			// var app_key = "keyuf7sO87qug1SCZ";
			// var table = "StreamSends";
   //          var view = "CRM%20Myeloma%20Central";
			// var self = this
			// this.itemsApp06 = []

			// axios.get(  
			// 	"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
			// 	{ 
			// 		headers: { Authorization: "Bearer "+app_key } 
			// 	}
			// ).then(function(response){
			// 	returnEmpty = false;
			// 	self.itemsApp06 = response.data.records;
			// 	if (self.itemsApp06.length == 0)
			// 	{
			// 		returnEmpty = true;
			// 	}

			// }).catch(function(error){
			// 	console.log(error)
			// })
   //      },


	// ##### ##############
	// GETTERS

	// AUD ICONS
		getHCPIcon: function(){
			return "assets/images/hcp.png";
		},
		getPATIcon: function(){
			return "assets/images/patient.png";
		},

	// STREAM
		getAssetStream: function(item){
			var strHTML = "";
			if (item['fields']['Stream']){
				strHTML += item['fields']['Stream'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// CONTENT
		getAssetContent: function(item){
			var strHTML = "";
			if (item['fields']['Content']){
				strHTML += item['fields']['Content'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// NAME 
		getAssetName: function(item){
			var strHTML = "";
			if (item['fields']['Name']){
				strHTML += item['fields']['Name'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// SUBJECT LINE
		getAssetSubjectLine: function(item){
			var strHTML = "";
			if (item['fields']['Subject Line/Topic']){
				strHTML += item['fields']['Subject Line/Topic'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// AUD SEGMENT
		getAssetAudienceSegment: function(item){
			var strHTML = "";
			if (item['fields']['Aud Segment']){
				strHTML += item['fields']['Aud Segment'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// DAY
		getAssetDay: function(item){
			var strHTML = "";
			if (item['fields']['Day']){
				strHTML += item['fields']['Day'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// CELGENE TACTIC ID / PACT CODE
		getAssetPACTID: function(item){
			var strHTML = "";
			if (item['fields']['Celgene Tactic ID']){
				strHTML += item['fields']['Celgene Tactic ID'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// IMAGE
	  	getAssetImage: function(item){
			var strHTML = "";
			if (item['fields']['Thumbnail']){
				if (item['fields']['Thumbnail'][0]['thumbnails']){
					strHTML += item['fields']['Thumbnail'][0]['thumbnails']['large']['url'];
				}  
			}  
			return strHTML;
		},
	// THUMBNAIL
		getAssetThumbnail: function(item){
			var strHTML = "lennyh";
			if (item['fields']['Thumbnail']){
				strHTML += item['fields']['Thumbnail'][0]['thumbnails']['small']['url'];
			}  
			return strHTML;
	    },
	// MODULE
		getAssetModule: function(item){
			var strHTML = "";
			if (item['fields']['Module']){
				strHTML += item['fields']['Module'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// CHANNEL TYPE
		getAssetChannelType: function(item){
			var strHTML = "";
			if (item['fields']['Channel Type']){
				strHTML += item['fields']['Channel Type'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// CHANNEL
		getAssetChannel: function(item){

			var strHTML = "";
			if (item['fields']['Channel']){
				strHTML += item['fields']['Channel'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// TACTIC TYPE
		getAssetTacticType: function(item){
			var strHTML = "";
			if (item['fields']['Tactic Type']){
				strHTML += item['fields']['Tactic Type'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// TACTIC
		getAssetTactic: function(item){
			var strHTML = "";
			if (item['fields']['Tactic']){
				strHTML += item['fields']['Tactic'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// BRAND LOGO
		getAssetBrandLogo: function(item){

			var strHTML = "";
			if (item['fields']['Brand Logo'][0]['url']){
				strHTML += item['fields']['Brand Logo'][0]['url'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// BRAND
		getAssetBrand: function(item){

			var strHTML = "";
			if (item['fields']['Brand']){
				strHTML += item['fields']['Brand'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// STRAT IMPERATIVE
		getAssetStratImperative: function(item){
			var strHTML = "";
			if (item['fields']['Strategic Imperative']){
				strHTML += item['fields']['Strategic Imperative'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// JOURNEY TOUCHPOINT
		getAssetJourneyTouchpoint: function(item){
			var strHTML = "";
			if (item['fields']['Journey Touchpoint']){
				strHTML += item['fields']['Journey Touchpoint'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// MESSAGE THEME
		getKeyMessageTheme: function(item){
			var strHTML = "";
			if (item['fields']['Message Theme']){
				strHTML += item['fields']['Message Theme'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// KEY MESSAGE
		getKeyMessage: function(item){

			var strHTML = "";
			if (item['fields']['Key Message']){
				strHTML += item['fields']['Key Message'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// PROMO STATUS
		getAssetPromoStatus: function(item){
			var strHTML = "";
			if (item['fields']['Promo Status']){
				strHTML += item['fields']['Promo Status'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// VENDOR
		getAssetVendor: function(item){

			var strHTML = "";
			if (item['fields']['Vendor']){
				strHTML += item['fields']['Vendor'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// MARKET
		getAssetMarket: function(item){

			var strHTML = "";
			if (item['fields']['Market']){
				strHTML += item['fields']['Market'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},
	// LANGUAGE
		getAssetLanguage: function(item){

			var strHTML = "";
			if (item['fields']['Language']){
				strHTML += item['fields']['Language'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},



		// ENGAGEMENT RATE. getEngagementRate

		getEngagementRate: function(item){

			var strHTML = "";
			var dblRate = 0.0;
			if (item['fields']['Engagement Rate']){
				// all this isNAN stuff is to avoid a strange "toFixed not a method" 
				// in the vue scope error when not checking before using toFixed or 
				// other Math functions to round the result
				if(!isNaN(item['fields']['Engagement Rate'])) {
				    dblRate = parseFloat(item['fields']['Engagement Rate']);
				} else {
				    dblRate = dblRate;
				}

				strHTML += dblRate.toFixed(1);
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},

		// ENGAGEMENT BENCHMARK. getEngagementBenchmark

		getEngagementBenchmark: function(item){

			var strHTML = "";
			if (item['fields']['Engagement Benchmark']){
				strHTML += item['fields']['Engagement Benchmark'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},

		// PAGES PER VISIT. getAssetPagesRate  Pages Per Visit

		getAssetPagesPerVisit: function(item){

			var strHTML = "";
			var dblRate = 0.0;
			if (item['fields']['Pages Per Visit']){
				if(!isNaN(item['fields']['Pages Per Visit'])) {
				    dblRate = parseFloat(item['fields']['Pages Per Visit']);
				} else {
				    dblRate = dblRate;
				}

				strHTML += dblRate.toFixed(1);
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},

		// PAGES BENCHMARK

		getPagesBenchmark: function(item){

			var strHTML = "";
			if (item['fields']['Pages Benchmark']){
				strHTML += item['fields']['Pages Benchmark'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},


		// GOAL RATE
		getAssetGoalRate: function(item){

			var strHTML = "";
			var dblRate = 0.0;
			if (item['fields']['Goal Completion Rate']){
				if(!isNaN(item['fields']['Goal Completion Rate'])) {
				    dblRate = parseFloat(item['fields']['Goal Completion Rate']);
				} else {
				    dblRate = dblRate;
				}

				strHTML += dblRate.toFixed(2) + "%";
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},

		// GOAL BENCHMARK
		getAssetGoalBenchmark: function(item){

			var strHTML = "";
			if (item['fields']['Goal Rate Benchmark']){
				strHTML += item['fields']['Goal Rate Benchmark'];
			}
			else
			{
				strHTML +="N/A";
			}
			return strHTML;
		},




	// BRD DETAILS
		getAssetBRDLink: function(item){
			var strHTML = "";
			if (item['fields']['BRD']){
				strHTML += item['fields']['BRD'][0]['url'];
			}  
			return strHTML;
		},
		getAssetBRDType: function(item){
			var strHTML = "";
			if (item['fields']['BRD']){
				strHTML += item['fields']['BRD'][0]['type'];
			}
			return strHTML;
		},
		getAssetBRDSize: function(item){
			var strHTML = "";
			var intSize = 0;
			if (item['fields']['BRD']){
				intSize = app2.round10((item['fields']['BRD'][0]['size'] / 1000000), -1);
			}        
			strHTML += intSize + "MB";

			return strHTML;
		},
		getBRDDocDetails: function(item){
			return app2.getAssetBRDSize(item) + " " +  app2.getAssetBRDType(item)
		},
		getBRDDocIcon: function(item){
			if(app2.getAssetBRDType(item).includes('pdf')){
				return "assets/images/pdf-doc-icon.png";
			}
			if( app2.getAssetBRDType(item).includes('word') )
			{
				return "assets/images/word-doc-icon.png";
			}
			return "assets/images/text-doc-icon.png";
		},

	// PERFORMANCE GETTERS
		getPerf00Icon: function(){
			return "assets/images/level_00_grey.png";
		},
		getPerf01Icon: function(){
			return "assets/images/level_01_red.png";
		},
		getPerf02Icon: function(){
			return "assets/images/level_02_orange.png";
		},
		getPerf03Icon: function(){
			return "assets/images/level_03_yellow.png";
		},
		getPerf04Icon: function(){
			return "assets/images/level_04_chartreuse.png";
		},
		getPerf05Icon: function(){
			return "assets/images/level_05_green.png";
		},


	// END GETTERS
	// ##### ##############


	// ##### #########
	// START CHECKERS

	// TYPE CHECKERS

	
        // #################
        // CHECK TACTIC TYPE



        isItemTactic_Website: function(item){
            var itemtype = "" + item['fields']['Tactic'];
            if (itemtype){
                if(itemtype.includes('Website')){
                    return true;
                }else{return false;}
            }
            console.log(' itemtype is null ');
            return false;

        },


        isItemTactic_Email: function(item){
            var itemtype = "" + item['fields']['Tactic'];
            if (itemtype){
                if(itemtype.includes('Email')){
                    return true;
                }else{return false;}
            }
            console.log(' itemtype is null ');
            return false;

        },


        isItemTactic_Banner: function(item){
            var itemtype = "" + item['fields']['Tactic'];
            if (itemtype){
                if(itemtype.includes('Banner')){
                    return true;
                }else{return false;}
            }
            console.log(' itemtype is null ');
            return false;

        },


        isItemTactic_Social: function(item){
            var itemtype = "" + item['fields']['Tactic'];
            if (itemtype){
                if(itemtype.includes('Social')){
                    return true;
                }else{return false;}
            }
            console.log(' itemtype is null ');
            return false;

        },

        isItemTactic_Print: function(item){
            var itemtype = "" + item['fields']['Tactic'];
            if (itemtype){
                if(itemtype.includes('Print')){
                    return true;
                }else{return false;}
            }
            console.log(' itemtype is null ');
            return false;

        },




	// PERFORMANCE CHECKERS

	// DO WE HAVE MEASUREMENT?
		isItemMeasurable: function(item){
			if(app2.isItemTactic_Website(item)){
				return true;
			}
			if(app2.isItemTactic_Email(item)){
					return true;
			}
			return false;
		},

	// CLICK RATE

		checkPerfClick_RED: function(item){
			var perf = "" + item['fields']['Click Rate Performance'];
			if (perf){
				if(perf.includes('Disappointing')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfClick_YELLOW: function(item){
			var perf = "" + item['fields']['Click Rate Performance'];
			if (perf){
				if(perf.includes('At')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfClick_GREEN: function(item){
			var perf = "" + item['fields']['Click Rate Performance'];
			if (perf){
				if(perf.includes('Exceeds')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},


		// OPEN RATE

		checkPerfOpen_RED: function(item){
			var perf = "" + item['fields']['Open Rate Performance'];
			if (perf){
				if(perf.includes('Disappointing')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfOpen_YELLOW: function(item){
			var perf = "" + item['fields']['Open Rate Performance'];
			if (perf){
				if(perf.includes('At')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfOpen_GREEN: function(item){
			var perf = "" + item['fields']['Open Rate Performance'];
			if (perf){
				if(perf.includes('Exceeds')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},


		// GOAL COMPLETION RATE

		checkPerfGoal_RED: function(item){
			var perf = "" + item['fields']['Goal Completion Performance'];
			if (perf){
				if(perf.includes('Disappointing')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfGoal_YELLOW: function(item){
			var perf = "" + item['fields']['Goal Completion Performance'];
			if (perf){
				if(perf.includes('At')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfGoal_GREEN: function(item){
			var perf = "" + item['fields']['Goal Completion Performance'];
			if (perf){
				if(perf.includes('Exceeds')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},


		// OVERALL ASSET PERFFORMANCE RATE

		checkPerfOvrll_RED: function(item){
			var perf = "" + item['fields']['Overall Performance'];
			if (perf){
				if(perf.includes('Disappointing')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfOvrll_YELLOW: function(item){
			var perf = "" + item['fields']['Overall Performance'];
			if (perf){
				if(perf.includes('At')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerfOvrll_GREEN: function(item){
			var perf = "" + item['fields']['Overall Performance'];
			if (perf){
				if(perf.includes('Exceeds')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		decimalAdjust:  function (type, value, exp) {
            // If the exp is undefined or zero...
            if (typeof exp === 'undefined' || +exp === 0) {
              return Math[type](value);
            }
            value = +value;
            exp = +exp;
            // If the value is not a number or the exp is not an integer...
            if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
              return NaN;
            }
            // If the value is negative...
            if (value < 0) {
              return -app2.decimalAdjust(type, -value, exp);
            }
            // Shift
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        },
        round10: function(value, exp) {
          return app2.decimalAdjust('round', value, exp);
        },
		nFormatter: function(num, digits) {
		  var si = [
		    { value: 1, symbol: "" },
		    { value: 1E0, symbol: "" },
		    { value: 1E3, symbol: "k" },
		    { value: 1E6, symbol: "M" },
		    { value: 1E9, symbol: "G" },
		    { value: 1E12, symbol: "T" },
		    { value: 1E15, symbol: "P" },
		    { value: 1E18, symbol: "E" }
		  ];
		  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
		  var i;
		  for (i = si.length - 1; i > 0; i--) {
		    if (num >= si[i].value) {
		      break;
		    }
		  }
		  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
		},
		
        popScrotie: function(item){
                app2.holdItem.length = 0;
                console.log("Hold Item Length: " +  app2.holdItem.length);
                app2.show = true;
                var message = "Opening item " + item['fields']['Celgene Tactic ID'];
                console.log(message);
                app2.holdItem.push(item);
                console.log("Hold Item Length: " +  app2.holdItem.length);

        },
        killScrotie() {
            app2.show = false
        }
	}
})



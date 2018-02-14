//
//Vue.component('child', {
//  props: ['text'],
//  template: `<div>{{ text }}<div>`
//});
//
//VueScrollTo.setDefaults({
//    // container: ".scrodal_container",
//    container: ".scrodal_container",
//    duration: 500,
//    easing: "ease",
//    offset: 0,
//    cancelable: true,
//    onDone: false,
//    onCancel: false,
//    x: false,
//    y: true
//})

var getMoney = new function(){}


// CONSTANTS
var app_id = "appbO5GRT4NuBc0Up";
var app_key = "keyuf7sO87qug1SCZ";





// ##### ##############
// GETTERS

// AUD ICONS
	function getHCPIcon(){
		return "assets/images/hcp.png";
	}
	function getPATIcon(){
		return "assets/images/patient.png";
	}

// STREAM
	function getAssetStream(item){
		var strHTML = "";
		if (item['fields']['Stream']){
			strHTML += item['fields']['Stream'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// CONTENT
	function getAssetContent(item){
		var strHTML = "";
		if (item['fields']['Content']){
			strHTML += item['fields']['Content'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// SUBJECT LINE
	function getAssetSubjectLine(item){
		var strHTML = "";
		if (item['fields']['Subject Line/Topic']){
			strHTML += item['fields']['Subject Line/Topic'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// AUD SEGMENT
	function getAssetAudienceSegment(item){
		var strHTML = "";
		if (item['fields']['Aud Segment']){
			strHTML += item['fields']['Aud Segment'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// DAY
	function getAssetDay(item){
		var strHTML = "";
		if (item['fields']['Day']){
			strHTML += item['fields']['Day'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// CELGENE TACTIC ID / PACT CODE
	function getAssetPACTID(item){
		var strHTML = "";
		if (item['fields']['Celgene Tactic ID']){
			strHTML += item['fields']['Celgene Tactic ID'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// IMAGE
  	function getAssetImage(item){
		var strHTML = "";
		if (item['fields']['Thumbnail']){
			if (item['fields']['Thumbnail'][0]['thumbnails']){
				strHTML += item['fields']['Thumbnail'][0]['thumbnails']['large']['url'];
			}  
		}  
		return strHTML;
	}
// THUMBNAIL
	function getAssetThumbnail(item){
		var strHTML = "lennyh";
		if (item['fields']['Thumbnail']){
			strHTML += item['fields']['Thumbnail'][0]['thumbnails']['small']['url'];
		}  
		return strHTML;
    }
// MODULE
	function getAssetModule(item){
		var strHTML = "";
		if (item['fields']['Module']){
			strHTML += item['fields']['Module'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// CHANNEL TYPE
	function getAssetChannelType(item){
		var strHTML = "";
		if (item['fields']['Channel Type']){
			strHTML += item['fields']['Channel Type'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// CHANNEL
	function getAssetChannel(item){

		var strHTML = "";
		if (item['fields']['Channel']){
			strHTML += item['fields']['Channel'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// TACTIC TYPE
	function getAssetTacticType(item){
		var strHTML = "";
		if (item['fields']['Tactic Type']){
			strHTML += item['fields']['Tactic Type'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// TACTIC
	function getAssetTactic(item){
		var strHTML = "";
		if (item['fields']['Tactic']){
			strHTML += item['fields']['Tactic'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// BRAND LOGO
	function getAssetBrandLogo(item){

		var strHTML = "";
		if (item['fields']['Brand Logo'][0]['url']){
			strHTML += item['fields']['Brand Logo'][0]['url'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// BRAND
	function getAssetBrand(item){

		var strHTML = "";
		if (item['fields']['Brand']){
			strHTML += item['fields']['Brand'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// STRAT IMPERATIVE
	function getAssetStratImperative(item){
		var strHTML = "";
		if (item['fields']['Strategic Imperative']){
			strHTML += item['fields']['Strategic Imperative'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// JOURNEY TOUCHPOINT
	function getAssetJourneyTouchpoint(item){
		var strHTML = "";
		if (item['fields']['Journey Touchpoint']){
			strHTML += item['fields']['Journey Touchpoint'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// MESSAGE THEME
	function getKeyMessageTheme(item){
		var strHTML = "";
		if (item['fields']['Message Theme']){
			strHTML += item['fields']['Message Theme'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// KEY MESSAGE
	function getKeyMessage(item){

		var strHTML = "";
		if (item['fields']['Key Message']){
			strHTML += item['fields']['Key Message'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// PROMO STATUS
	function getAssetPromoStatus(item){
		var strHTML = "";
		if (item['fields']['Promo Status']){
			strHTML += item['fields']['Promo Status'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// VENDOR
	function getAssetVendor(item){

		var strHTML = "";
		if (item['fields']['Vendor']){
			strHTML += item['fields']['Vendor'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// MARKET
	function getAssetMarket(item){

		var strHTML = "";
		if (item['fields']['Market']){
			strHTML += item['fields']['Market'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}
// LANGUAGE
	function getAssetLanguage(item){

		var strHTML = "";
		if (item['fields']['Language']){
			strHTML += item['fields']['Language'];
		}
		else
		{
			strHTML +="N/A";
		}
		return strHTML;
	}

// BRD DETAILS
	function getAssetBRDLink(item){
		var strHTML = "";
		if (item['fields']['BRD']){
			strHTML += item['fields']['BRD'][0]['url'];
		}  
		return strHTML;
	}
	function getAssetBRDType(item){
		var strHTML = "";
		if (item['fields']['BRD']){
			strHTML += item['fields']['BRD'][0]['type'];
		}
		return strHTML;
	}
	function getAssetBRDSize(item){
		var strHTML = "";
		var intSize = 0;
		if (item['fields']['BRD']){
			intSize = app.round10((item['fields']['BRD'][0]['size'] / 1000000), -1);
		}        
		strHTML += intSize + "MB";

		return strHTML;
	}
	function getBRDDocDetails(item){
		return app.getAssetBRDSize(item) + " " +  app.getAssetBRDType(item)
	}
	function getBRDDocIcon(item){
		if(getAssetBRDType(item).includes('pdf')){
			return "assets/images/pdf-doc-icon.png";
		}
		if( getAssetBRDType(item).includes('word') )
		{
			return "assets/images/word-doc-icon.png";
		}
		return "assets/images/text-doc-icon.png";
	}

// PERFORMANCE GETTERS
	function getPerf00Icon(){
		return "assets/images/level_00_grey.png";
	}
	function getPerf01Icon(){
		return "assets/images/level_01_red.png";
	}
	function getPerf02Icon(){
		return "assets/images/level_02_orange.png";
	}
	function getPerf03Icon(){
		return "assets/images/level_03_yellow.png";
	}
	function getPerf04Icon(){
		return "assets/images/level_04_chartreuse.png";
	}
	function getPerf05Icon(){
		return "assets/images/level_05_green.png";
	}


// END GETTERS
// ##### ##############




// ##### #########
// START CHECKERS

	function checkPerf01_RED(item){
		var perf = "" + item['fields']['Performance'];
		if (perf){
			if(perf.includes('Disappointing')){
				return true;
			}else{return false;}
		}
		console.log(' perf is null ');
		return false;

	}
	function checkPerf02_ORANGE(item){
		var perf = "" + item['fields']['Performance'];
		if (perf){
			if(perf.includes('Under')){
				return true;
			}else{return false;}
		}
		console.log(' perf is null ');
		return false;

	}
	function checkPerf03_NEUTRAL(item){
		var perf = "" + item['fields']['Performance'];
		if (perf){
			if(perf.includes('At')){
				return true;
			}else{return false;}
		}
		console.log(' perf is null ');
		return false;

	}
	function checkPerf04_CHARTREUSE(item){
		var perf = "" + item['fields']['Performance'];
		if (perf){
			if(perf.includes('Above')){
				return true;
			}else{return false;}
		}
		console.log(' perf is null ');
		return false;

	}
	function checkPerf05_GREEN(item){
		var perf = "" + item['fields']['Performance'];
		if (perf){
			if(perf.includes('Exceeds')){
				return true;
			}else{return false;}
		}
		console.log(' perf is null ');
		return false;

	}


// END CHECKERS
// ### #########



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
        holdItem: [],
		show: false
	},
	mounted: function(){
		this.loadItemsPatientOnRev();
	},
	methods: {
		loadItems: function(table, view){
			// Init variables
			var self = this
			this.items = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.items = response.data.records;
				if (self.items.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },	
		loadItemsPatientOnRev: function(){
            // Init variables
//            this.showPom();
            var table = "StreamSends";
            var view = "CRM%20Patient%20on%20Rev";
            this.loadItems(table, view)

        },
        popScrotie: function(item){
                app.holdItem.length = 0;
                console.log("Hold Item Length: " +  app.holdItem.length);
                app.show = true;
                var message = "I am a " + item['fields']['Tactic']; + "!";
                console.log(message);
                app.holdItem.push(item);
                console.log("Hold Item Length: " +  app.holdItem.length);

        },
        killScrotie() {
            app.show = false
        }
	}
})

//CRM Caregivers Patient on Rev
var app3 = new Vue({
	el: '#app-3',
	data: {
        items: [],
        holdItem: [],
		show: false
	},
	mounted: function(){
		this.loadCaregiversPatientOnRev();
	},
	methods: {
		loadItems: function(table, view){
			// Init variables
			var self = this
			this.items = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.items = response.data.records;
				if (self.items.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },
		loadCaregiversPatientOnRev: function(){
            var table = "StreamSends";
            var view = "CRM%20Caregivers%20Patient%20on%20Rev";
            this.loadItems(table, view)

        },
        popScrotie: function(item){
                app.holdItem.length = 0;
                console.log("Hold Item Length: " +  app.holdItem.length);
                app.show = true;
                var message = "I am a " + item['fields']['Tactic']; + "!";
                console.log(message);
                app.holdItem.push(item);
                console.log("Hold Item Length: " +  app.holdItem.length);

        },
        killScrotie() {
            app.show = false
        }
	}
})

//CRM Patient Prospect
var app4 = new Vue({
	el: '#app-4',
	data: {
        items: [],
        holdItem: [],
		show: false
	},
	mounted: function(){
		this.loadPatientProspects();
	},
	methods: {
		loadItems: function(table, view){
			// Init variables
			var self = this
			this.items = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.items = response.data.records;
				if (self.items.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },	
		loadPatientProspects: function(){
            // Init variables
//            this.showPom();
            var table = "StreamSends";
            var view = "CRM%20Patient%20Prospect";
            this.loadItems(table, view)

        },
        popScrotie: function(item){
                app.holdItem.length = 0;
                console.log("Hold Item Length: " +  app.holdItem.length);
                app.show = true;
                var message = "I am a " + item['fields']['Tactic']; + "!";
                console.log(message);
                app.holdItem.push(item);
                console.log("Hold Item Length: " +  app.holdItem.length);

        },
        killScrotie() {
            app.show = false
        }
	}
})

//CRM Caregivers Prospect
var app5 = new Vue({
	el: '#app-5',
	data: {
        items: [],
        holdItem: [],
		show: false
	},
	mounted: function(){
		this.loadCaregiverProspects();
	},
	methods: {
		loadItems: function(table, view){
			// Init variables
			var self = this
			this.items = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.items = response.data.records;
				if (self.items.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },		
		loadCaregiverProspects: function(){
            // Init variables
//            this.showPom();
            var table = "StreamSends";
            var view = "CRM%20Caregivers%20Prospect";
            this.loadItems(table, view)

        },
        popScrotie: function(item){
                app.holdItem.length = 0;
                console.log("Hold Item Length: " +  app.holdItem.length);
                app.show = true;
                var message = "I am a " + item['fields']['Tactic']; + "!";
                console.log(message);
                app.holdItem.push(item);
                console.log("Hold Item Length: " +  app.holdItem.length);

        },
        killScrotie() {
            app.show = false
        }
	}
})

//CRM Caregivers Prospect
var app6 = new Vue({
	el: '#app-6',
	data: {
        items: [],
        holdItem: [],
		show: false
	},
	mounted: function(){
		this.loadMyelomaCentral();
	},
	methods: {
		loadItems: function(table, view){
			// Init variables
			var self = this
			this.items = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.items = response.data.records;
				if (self.items.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },
		loadMyelomaCentral: function(){
            // Init variables
//            this.showPom();
            var table = "StreamSends";
            var view = "CRM%20Myeloma%20Central";
            this.loadItems(table, view)

        },
        popScrotie: function(item){
                app.holdItem.length = 0;
                console.log("Hold Item Length: " +  app.holdItem.length);
                app.show = true;
                var message = "I am a " + item['fields']['Tactic']; + "!";
                console.log(message);
                app.holdItem.push(item);
                console.log("Hold Item Length: " +  app.holdItem.length);

        },
        killScrotie() {
            app.show = false
        }
	}
})
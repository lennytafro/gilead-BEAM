




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
		app_id: "appvjUANOYCIhhpIC";
		app_key: "keyuf7sO87qug1SCZ";
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
		this.loadItemsPatientOnRev();
		this.loadCaregiversPatientOnRev();
		this.loadPatientProspects();
		this.loadCaregiverProspects();
		this.loadMyelomaCentral();
	},
	methods: {
		// //CRM Patient on Rev
		loadItemsPatientOnRev: function(){
			// Init variables
			var table = "StreamSends";
            var view = "CRM%20Patient%20on%20Rev";
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
        loadCaregiversPatientOnRev: function(){
			// Init variables
            var table = "StreamSends";
            var view = "CRM%20Caregivers%20Patient%20on%20Rev";
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
        loadPatientProspects: function(){
			// Init variables
			var table = "StreamSends";
            var view = "CRM%20Patient%20Prospects";
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
        loadCaregiverProspects: function(){
			// Init variables
            var table = "StreamSends";
            var view = "CRM%20Caregiver%20Prospect";
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
        // //CRM  MYELOMA CENTRAL
        loadMyelomaCentral: function(){
			// Init variables
            var table = "StreamSends";
            var view = "CRM%20Myeloma%20Central";
			var self = this
			this.itemsApp06 = []

			axios.get(  
				"https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
				{ 
					headers: { Authorization: "Bearer "+app_key } 
				}
			).then(function(response){
				returnEmpty = false;
				self.itemsApp06 = response.data.records;
				if (self.itemsApp06.length == 0)
				{
					returnEmpty = true;
				}

			}).catch(function(error){
				console.log(error)
			})
        },


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
	    }
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
				intSize = app.round10((item['fields']['BRD'][0]['size'] / 1000000), -1);
			}        
			strHTML += intSize + "MB";

			return strHTML;
		},
		getBRDDocDetails: function(item){
			return app.getAssetBRDSize(item) + " " +  app.getAssetBRDType(item)
		},
		getBRDDocIcon: function(item){
			if(getAssetBRDType(item).includes('pdf')){
				return "assets/images/pdf-doc-icon.png";
			}
			if( getAssetBRDType(item).includes('word') )
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

		checkPerf01_RED: function(item){
			var perf = "" + item['fields']['Performance'];
			if (perf){
				if(perf.includes('Disappointing')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerf02_ORANGE: function(item){
			var perf = "" + item['fields']['Performance'];
			if (perf){
				if(perf.includes('Under')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerf03_NEUTRAL: function(item){
			var perf = "" + item['fields']['Performance'];
			if (perf){
				if(perf.includes('At')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerf04_CHARTREUSE: function(item){
			var perf = "" + item['fields']['Performance'];
			if (perf){
				if(perf.includes('Above')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

		},
		checkPerf05_GREEN: function(item){
			var perf = "" + item['fields']['Performance'];
			if (perf){
				if(perf.includes('Exceeds')){
					return true;
				}else{return false;}
			}
			console.log(' perf is null ');
			return false;

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



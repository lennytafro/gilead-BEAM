
Vue.component('child', {
  props: ['text'],
  template: `<div>{{ text }}<div>`
});

VueScrollTo.setDefaults({
    // container: ".scrodal_container",
    container: ".scrodal_container",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})



var app = new Vue({
    el: '#app',
    data: {
        items: [],
        holdItem: [],

        returnEmpty: false,

        rev: false,
        pom: false,
        tha: false,
        unb: false,

        all: true,

        allmod: true,
        isdirect: true,


        // paid: false,
        // owned: false,
        // outbound: false,

        // hcp: true,
        // patient: true,

        // hiperf: true,
        // atperf: true,
        // loperf: true,

        // isPatientOnly: false,
        // isHCPOnly: false,
        // isAll: true,

        show: false
    },
    mounted: function(){
       this.loadItems('Assets','RevAll'); 
    },
    methods: {


        loadItems: function(table, view){
            
            // Init variables
            var self = this
            var app_id = "appbO5GRT4NuBc0Up";
            var app_key = "keyuf7sO87qug1SCZ";
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

        // showPaid: function(){
            
        //     this.all = true;
        //     this.paid = true;
        //     this.outbound = false;
        //     this.owned = false;
        // },
        // showOwned: function(){
            
        //     this.all = true;
        //     this.paid = false;
        //     this.outbound = false;
        //     this.owned = true;
        // },
        // showOutbound: function(){
            
        //     this.all = true;
        //     this.paid = false;
        //     this.outbound = true;
        //     this.owned = false;
        // },


        showRev: function(){
            this.rev = true;
            this.pom = false;
            this.tha = false;
            this.unb = false;
            this.all = false;
            this.allmod = true;
            this.isdirect = false;
        },
        showPom: function(){
            
            this.rev = false;
            this.pom = true;
            this.tha = false;
            this.unb = false;
            this.all = false;
            this.allmod = true;
            this.isdirect = false;
        },
        showTha: function(){
            
            this.rev = false;
            this.pom = false;
            this.tha = true;
            this.unb = false;
            this.all = false;
            this.allmod = true;
            this.isdirect = false;
        },
        showUnb: function(){
            
            this.rev = false;
            this.pom = false;
            this.tha = false;
            this.unb = true;
            this.all = false;
            this.allmod = true;
            this.isdirect = false;
        },

        resetButtons: function(){
            this.rev = false;
            this.pom = false;
            this.tha = false;
            this.unb = false;
            this.all = true;
            this.allmod = true;
            this.isdirect = false;
        },



        loadItemsRevPlatforms: function(){
            
            // Init variables
            var table = "Assets";
            var view = "RevPlatforms";
            this.loadItems(table, view)

        },
        loadItemsRevSearch: function(){
            
            // Init variables
            var table = "Assets";
            var view = "RevSearch";
            this.loadItems(table, view)

        },
        loadItemsRevDirect: function(){
            
            // Init variables
            var table = "Assets";
            var view = "RevDirect";
            this.loadItems(table, view)

        },
        loadItemsRevAdvertising: function(){
            
            // Init variables
            var table = "Assets";
            var view = "RevPaid";
            this.loadItems(table, view)

        },
        loadItemsRevSocial: function(){
            
            // Init variables
            var table = "Assets";
            var view = "RevSocial";
            this.loadItems(table, view)

        },
        loadItemsRevPrint: function(){
            
            // Init variables
            var table = "Assets";
            var view = "RevPrint";
            this.loadItems(table, view)

        },
        loadItemsRevAll: function(){
            
            // Init variables
            this.showRev();
            var table = "Assets";
            var view = "RevAll";
            this.loadItems(table, view)

        },
        loadItemsPomPlatforms: function(){
            
            // Init variables
            direct = false;
            allmod = true;
            var table = "Assets";
            var view = "PomPlatforms";
            this.loadItems(table, view)

        },
        loadItemsPomSearch: function(){
            
            // Init variables
            direct = false;
            allmod = true;
            var table = "Assets";
            var view = "PomSearch";
            this.loadItems(table, view)

        },
        loadItemsPomDirect: function(){
            
            // Init variables
            isdirect = true;
            allmod = false;
            var table = "Assets";
            var view = "PomDirect";
            this.loadItems(table, view)

        },
        loadItemsPomAdvertising: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "PomPaid";
            this.loadItems(table, view)

        },
        loadItemsPomSocial: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "PomSocial";
            this.loadItems(table, view)

        },
        loadItemsPomPrint: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "PomPrint";
            this.loadItems(table, view)

        },
        loadItemsPomAll: function(){
            
            // Init variables
            this.showPom();
            var table = "Assets";
            var view = "PomAll";
            this.loadItems(table, view)

        },
        loadItemsThaPlatforms: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "ThaPlatforms";
            this.loadItems(table, view)

        },
        loadItemsThaSearch: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "ThaSearch";
            this.loadItems(table, view)

        },
        loadItemsThaDirect: function(){
            
            // Init variables
            isdirect = true;
            allmod = false;
            var table = "Assets";
            var view = "ThaDirect";
            this.loadItems(table, view)

        },
        loadItemsThaAdvertising: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "ThaPaid";
            this.loadItems(table, view)

        },
        loadItemsThaSocial: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "ThaSocial";
            this.loadItems(table, view)

        },
        loadItemsThaPrint: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "ThaPrint";
            this.loadItems(table, view)

        },
        loadItemsThaAll: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            this.showTha();
            var table = "Assets";
            var view = "ThaAll";
            this.loadItems(table, view)

        },
        loadItemsUnbPlatforms: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "UnbPlatforms";
            this.loadItems(table, view)

        },
        loadItemsUnbSearch: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "UnbSearch";
            this.loadItems(table, view)

        },
        loadItemsUnbDirect: function(){
            
            // Init variables
            isdirect = true;
            allmod = false;
            var table = "Assets";
            var view = "UnbDirect";
            this.loadItems(table, view)

        },
        loadItemsUnbAdvertising: function(){
            
            // Init variables
            var table = "Assets";
            var view = "UnbPaid";
            this.loadItems(table, view)

        },
        loadItemsUnbSocial: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "UnbSocial";
            this.loadItems(table, view)

        },
        loadItemsUnbPrint: function(){
            
            // Init variables
            isdirect = false;
            allmod = true;
            var table = "Assets";
            var view = "UnbPrint";
            this.loadItems(table, view)

        },
        loadItemsUnbAll: function(){
            
            // Init variables
            this.showUnb();
            var table = "Assets";
            var view = "UnbAll";
            this.loadItems(table, view)

        },

        runPaid: function(){
            console.log("runPaid: ");
            if(app.isPatientOnly){
                if(app.hiperf && !app.loperf && !app.atperf){
                    console.log("running method: PAID PATIENT OVER");
                    this.loadItemsPaidPatientOver();
                }
                else if(app.atperf && !app.loperf && !app.hiperf){
                    console.log("running method: PAID PATIENT AT");
                    this.loadItemsPaidPatientAt();
                }
                else if(app.loperf && app.hiperf && app.atperf){
                    console.log("running method: PAID PATIENT UNDER");
                    this.loadItemsPaidPatientUnder();
                }
                else{
                    console.log("running method: PAID PATIENT ALL");
                    this.loadItemsPaidPatientAll();
                }
            }
            else if(!app.isPatientOnly){
                if(app.hiperf && !app.loperf && !app.atperf){
                    console.log("running method: PAID HCP OVER");
                    this.loadItemsPaidHCPOver();
                }
                else if(app.atperf && !app.loperf && !app.hiperf){
                    console.log("running method: PAID HCP AT");
                    this.loadItemsPaidHCPAt();
                }
                else if(app.loperf && !app.hiperf && !app.atperf){
                    console.log("running method: PAID HCP UNDER");
                    this.loadItemsPaidHCPUnder();
                }
                else{
                    console.log("running method: PAID HCP ALL");
                    this.loadItemsPaidHCPAll();
                }
            }
            else{
                console.log("running method: PAID ALL ALL");
                this.loadItemsPaidAllAll();
            }
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
              return -app.decimalAdjust(type, -value, exp);
            }
            // Shift
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        },
        round10: function(value, exp) {
          return app.decimalAdjust('round', value, exp);
        },
        getAssetThumbnail: function(item){
            var strHTML = "lennyh";
            if (item['fields']['Thumbnail']){
                strHTML += item['fields']['Thumbnail'][0]['thumbnails']['small']['url'];
            }  
            return strHTML;
        },
        getAssetImage: function(item){

            var strHTML = "";
            if (item['fields']['Thumbnail']){
                if (item['fields']['Thumbnail'][0]['thumbnails']){
                    strHTML += item['fields']['Thumbnail'][0]['thumbnails']['large']['url'];
                }  

            }  
            return strHTML;

        },
        getAssetPromoStatus: function(item){
            var strHTML = "";
            strHTML += item['fields']['Promo Status'];

            return strHTML;
        },
        getAssetMarket: function(item){
            var strHTML = "";
            strHTML += item['fields']['Market'];

            return strHTML;
        },
        getAssetLanguage:function(item){
            var strHTML = "";
            strHTML += item['fields']['Language'];

            return strHTML;
        },
        getAssetMLR: function(item){
            var strHTML = "";
            strHTML += item['fields']['Approval Status'];

            return strHTML;
        },
        getAssetName: function(item){
            var strHTML = "";
            strHTML += item['fields']['Name'];

            return strHTML;
        },
        getAssetAudience: function(item){
            var strHTML = "";
            strHTML += item['fields']['Audience'];

            return strHTML;
        },
        getAssetBrand: function(item){
            var strHTML = "";
            strHTML += item['fields']['Brand'];

            return strHTML;
        },

        
        getAssetBrandLogo: function(item){
            var strHTML = "";
            

            if (item['fields']['Brand Logo']){
                strHTML += item['fields']['Brand Logo'][0]['url'];
            }  
            return strHTML;
        },


        getAssetBrandLogo: function(item){
            var strHTML = "";
            

            if (item['fields']['Brand Logo']){
                strHTML += item['fields']['Brand Logo'][0]['url'];
            }  
            return strHTML;
        },
        getAssetFromLine: function(item){
            var strHTML = "";
            strHTML += item['fields']['From Line'];
            return strHTML;
        },
        getAssetBRDLink: function(item){
            var strHTML = "";
            if (item['fields']['BRD']){
                strHTML += item['fields']['BRD'][0]['url'];
            }  
            return strHTML;
        },
        getAssetWebAddress: function(item){
            var strHTML = "";
            if (item['fields']['Web Address']){
                strHTML += item['fields']['Web Address'];
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
        getBRDDocDetails: function(item){return app.getAssetBRDSize(item) + " " +  app.getAssetBRDType(item)},
        getBRDDocIcon: function(item){
            if(app.getAssetBRDType(item).includes('pdf')){
                return "assets/images/pdf-doc-icon.png";
            }elseif( app.getAssetBRDType(item).includes('word') )
            {
                return "assets/images/word-doc-icon.png";
            }
            return "assets/images/text-doc-icon.png";
        },
        getAssetDaySend: function(item){
            var strHTML = "";
            strHTML += item['fields']['Day Send'];
            return strHTML;
        },
        getAssetPACTID: function(item){
            var strHTML = "";
            strHTML += item['fields']['Celgene Tactic ID'];

            return strHTML;
        },
        getAssetTactic: function(item){
            var strHTML = "";
            strHTML += item['fields']['Tactic'];

            return strHTML;
        },
        getAssetBeaconStatus: function(item){
            var strHTML = "";
            strHTML += item['fields']['Beacon Status'];

            return strHTML;
        },
        getAssetPerformance: function(item){
            var strHTML = "";
            strHTML += item['fields']['Performance'];

            return strHTML;
        },
        getAssetGoalPercent: function(item){
            var strHTML = "";
            strHTML += item['fields']['Goal Percent'];

            return strHTML;
        },
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

        getAssetDateUpdated: function(item){
            var strHTML = "";
            strHTML += item['fields']['Date Updated'];

            return strHTML;
        },




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



        checkStatus: function(item){
            var stus = item['fields']['Beacon Status'];
            if(stus.includes('Items All In')){
                return true;
            }
            else{return false;}
        },
        checkAud_HCP: function(item){
            var aud = "" + item['fields']['Audience'];
            if (aud){
                if(aud.includes('HCP')){
                    return true;
                }else{return false;}
            }
            console.log(' aud is null ');
            return false;

        },
        checkAud_Patient: function(item){
            var aud = "" + item['fields']['Audience'];
            if (aud){
                if(aud.includes('Patient')){
                    return true;
                }else{return false;}
            }
            console.log(' aud is null ');
            return false;
        },
        getHCPIcon: function(){
            return "assets/images/hcp.png";
        },
        getPATIcon: function(){
            return "assets/images/patient.png";
        },

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

        say: function (message) {
          alert(message)
        },
        popMe: function(item){

            var message = "I am a " + item['fields']['Tactic']; + "!";
            alert(message)
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

            // console.log('assetBucket Length: ' + assetBucket.length);
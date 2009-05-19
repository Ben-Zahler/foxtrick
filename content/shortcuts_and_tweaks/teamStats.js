/**
 * teamStats.js
 * Foxtrick team overview
 * @author OBarros & spambot
 */
////////////////////////////////////////////////////////////////////////////////
var FTTeamStats= {
    
    MODULE_NAME : "FTTeamStats",
    MODULE_CATEGORY : Foxtrick.moduleCategories.SHORTCUTS_AND_TWEAKS,
    DEFAULT_ENABLED : true,
	NEW_AFTER_VERSION: "0.4.8",
	LASTEST_CHANGE:"Fix for former players",
	latestMatch:0,
	top11star:0,

    init : function() {
            Foxtrick.registerPageHandler('players',
                                          FTTeamStats);
            Foxtrick.registerPageHandler('YouthPlayers',
                                          FTTeamStats);
    },

    run : function( page, doc ) {

	
		var remain=doc.location.href.substr(doc.location.href.search(/Players\//i)+8);
		if (remain!="" && remain.search(/TeamID=/i)==-1) return;
			
		var NT_players = (doc.location.href.indexOf("NTPlayers") != -1);
        var Oldies = (doc.location.href.indexOf("Oldies.aspx") != -1);
        var Youth_players = (doc.location.href.indexOf("YouthPlayers\.aspx") != -1);
        var coach = (doc.location.href.indexOf("Coaches\.aspx") != -1);
        var facecards=false;
		
		var total_NT = 0;
        const _totalTSI = Foxtrickl10n.getString("foxtrick.FTTeamStats.totalTSI.label");
		const TSI = Foxtrickl10n.getString("foxtrick.playerliststats.tsi"); 
        var specs = {};
		
		var body = doc.getElementById("mainBody");
		var allDivs = getElementsByClass("playerInfo", body);
		this.latestMatch=-1;
		var stars=new Array();
		var num_too_old=0;
		var num_not_too_old=0;
		
	
		for( var i = 0; i < allDivs.length; i++ ) {
				
				var allDivs2 = allDivs[i].getElementsByTagName( "p" )[0];
				
				//JB: If is National team page counts Total TSI
				var specc = allDivs2;
				if (!Youth_players) {
					try { 
						var tsitot_in = specc.innerHTML.substr(0,specc.innerHTML.lastIndexOf('<br>'));
                        if (Oldies || NT_players) tsitot_in = tsitot_in.substr(0,tsitot_in.lastIndexOf('<br>'));
                        // dump (' => tsitot_in => [' + tsitot_in + ']\n');
						var lastindex = tsitot_in.lastIndexOf(' ');  
						if (tsitot_in.lastIndexOf('=') > lastindex) lastindex = tsitot_in.lastIndexOf('=');
						tsitot_in = tsitot_in.substr(lastindex+1).replace('&nbsp;',''); 
						tsitot_in = parseInt(tsitot_in);  
						total_NT = parseInt(total_NT) + tsitot_in;
					}				
					catch(e) {
						dump('FTTeamStats'+e);
					}
				}
				else {
					var age = specc.innerHTML.match(/\d+/); 
					var ageday = specc.innerHTML.match(/(\d+)/g)[1];
					if (age>=19) {
						allDivs2.setAttribute('style','color:red; font-weight:bold;');
						++num_too_old;
					}
					else ++num_not_too_old;
				}
				
				if(specc) {
					// specialities
                    var specMatch = specc.textContent.match(/\[\D+\]/g);
                    // dump(' ==>' + specMatch+'\n');
                    if (specMatch != null) {
                        // dump(' == ==>' + specMatch+'\n');
                        var spec = substr(specMatch[0], 0, specMatch[0].length);
                        if (typeof(specs[spec]) == 'undefined') {
                            specs[spec] = 1;
                        } else {
                            specs[spec]++;
                        }
                    }
				}
				
				var imgs = allDivs[i].getElementsByTagName( "img" );
				var img,k=0,num_star=0;
				while (img=imgs[k++]) {
					if (img.className=="starWhole") num_star+=1;
					else if (img.className=="starHalf") num_star+=0.5;
				}
				stars.push(num_star);
				
				var as=allDivs[i].getElementsByTagName('a');
				var j=0,a=null;
				while(a=as[j++]){if (a.href.search(/matchid/i)!=-1) break;}
				var matchday=0;
				if (a) matchday=getUniqueDayfromCellHTML(a.innerHTML); 
				if (matchday>this.latestMatch) this.latestMatch = matchday;
		}
		stars.sort(starsortfunction);
		this.top11star=stars[10]; 

		
		if (body.getElementsByTagName("div")[0].className=='faceCard' || body.getElementsByTagName("div")[1].className=='faceCard') facecards=true;;		
			
		
		var boxrightt=doc.getElementById('sidebar');
		
        var specsTable = "";
		
		
		
		
		//If NT displays Total TSI
        if (!Youth_players && !coach) specsTable += "<tr><td class=\"ch\">" + _totalTSI + "</td><td>" + ReturnFormatedValue(total_NT,'&nbsp;') + "</td></tr>";

		
        for (var spec in specs) {
          specsTable += "<tr><td class=\"ch\">" + spec.replace(/\[|\]/g,"") + "</td><td>" + specs[spec] + "</td></tr>";
        }
      
        var transferListed = getElementsByClass( "transferListed", doc );
        var img_lis = '<img style="width: 10px; height: 18px;" ilo-full-src="http://www.hattrick.org/Img/Icons/dollar.gif" src="/Img/Icons/dollar.gif" class="transferListed" title="">';
        if (transferListed.length > 0) {
          specsTable += "<tr><td class=\"ch\">" + img_lis + "</td><td>" + transferListed.length + "</td></tr>";
        }

        var yellow = getElementsByClass( "cardsOne", doc );
        var img_yel = '<img style="width: 8px; height: 12px;" ilo-full-src="http://www.hattrick.org/Img/Icons/yellow_card.gif" src="/Img/Icons/yellow_card.gif" class="cardsOne" title="">';
        if (yellow.length > 0) {
            var yels = 0;
            try {
                for (var j = 0; j < yellow.length; j++) {
                    var head = yellow[j].parentNode;
                    
                    if (head.innerHTML.indexOf('yellow_card', 0) != -1 ) yels += 1;              
                }
            } 
            catch(e) {
                dump('FTTeamStats'+e);
            }
            if (yels > 0) specsTable += "<tr><td class=\"ch\">" + img_yel + "</td><td>" + yels + "</td></tr>";
        }

        var yellow_2 = getElementsByClass( "cardsTwo", doc );
        var img_yel = '<img style="width: 17px; height: 12px;" ilo-full-src="http://www.hattrick.org/Img/Icons/dual_yellow_card.gif" src="/Img/Icons/dual_yellow_card.gif" class="cardsTwo" title="">';
        if (yellow_2.length > 0) {
          specsTable += "<tr><td class=\"ch\">" + img_yel + "</td><td>" + yellow_2.length + "</td></tr>";
        }

        var red = getElementsByClass( "cardsOne", doc );
        var img_red = '<img style="width: 8px; height: 12px;" ilo-full-src="http://www.hattrick.org/Img/Icons/red_card.gif" src="/Img/Icons/red_card.gif" class="cardsOne" title="">';
        if (red.length > 0) {
            var reds = 0;
            try {
                for (var j = 0; j < red.length; j++) {
                    var head = red[j].parentNode;
                    
                    if (head.innerHTML.indexOf('red_card', 0) != -1 ) reds += 1;              
                }
            } 
            catch(e) {
                dump('FTTeamStats'+e);
            }
            if (reds > 0) specsTable += "<tr><td class=\"ch\">" + img_red + "</td><td>" + reds + "</td></tr>";
        }

        var injuries = getElementsByClass( "injuryBruised", doc );
        var img_bru = '<img style="width: 19px; height: 8px;" ilo-full-src="http://www.hattrick.org/Img/Icons/bruised.gif" src="/Img/Icons/bruised.gif" class="injuryBruised" title="">';
        if (injuries.length > 0) {
          specsTable += "<tr><td class=\"ch\">" + img_bru + "</td><td>" + injuries.length + "</td></tr>";
        }

        var injuries = getElementsByClass( "injuryInjured", doc );
        if (injuries) {
            var weeks = 0;
            try {
                for (var j = 0; j < injuries.length; j++) {
                    var head = injuries[j].parentNode;
                    weeks += parseInt(substr(head.innerHTML, strrpos( head.innerHTML, "<span>")+6, 1));              
                }
            } 
            catch(e) {
                dump('FTTeamStats'+e);
            }
        }
        var img_inj = '<img style="width: 11px; height: 11px;" ilo-full-src="http://www.hattrick.org/Img/Icons/injured.gif" src="/Img/Icons/injured.gif" class="injuryInjured" title="" alt="">';
        if (weeks > 0) specsTable += "<tr><td class=\"ch\">" + img_inj + "</td><td>" + injuries.length +  " (<b>" + weeks + "</b>)" + "</td></tr>";
                
        if ( !NT_players ) {
		// Early test of country counter. Works, but has no finished design
            var countries = {};
            var found = false;
            var allDivs2 = doc.getElementsByTagName( "p" );
            for( var i = 0; i < allDivs2.length; i++ ) {
                
                if( allDivs2[i].innerHTML.indexOf('TeamID=', 0) != -1 ) {
                    var ctrc = allDivs2[i].innerHTML;
                    // dump('    ['+ctrc + ']\n');
                    if(ctrc) {
                        // specialities
                        var ctrMatch = this._checkCountry( ctrc );
                        
                        // dump(' ==>' + ctrMatch+'\n');
                        if (ctrMatch != null) {
                            // dump(' == ==>' + ctrMatch + '\n');
                            if (typeof(countries[ctrMatch]) == 'undefined') {
                                countries[ctrMatch] = 1;
                                found = true;
                            } else {
                                countries[ctrMatch]++;
                            }
                        }
                    }
                } else {
                    // dump('    ['+allDivs2[i].innerHTML + ']\n');                
                }
            }
            
            if (found){
				// put in array and sort
				var landarray = new Array();
				for (var land in countries) { landarray.push({"land":land,"value":countries[land]});}			
				landarray.sort(function (a,b) { return a["land"].localeCompare(b["land"])}); 
				landarray.sort(function (a,b) { return a["value"]<b["value"]}); 
				
				var countriesTable = '';
                countriesTable += '<tr><td class="ch"><u>'+ Foxtrickl10n.getString("foxtrick.FTTeamStats.countries.label") + '</u></td></td>';
                for (var i=0;i< landarray.length;i++) {
                    countriesTable += "<tr><td class=\"\">" + landarray[i].land.replace(/\(|\)/g,"") + "</td><td>" + landarray[i].value + "</td></tr>";
                }
                specsTable += countriesTable;            
                // dump(countries);
            }
            
        }
		if (Youth_players) {
		  var style='';
		  if (num_not_too_old<9) style='color:red !important; font-weight:bold !important';
          specsTable += "<tr style='"+style+"'><td class=\"ch\">" + Foxtrickl10n.getString("foxtrick.FTTeamStats.PlayerNotToOld.label") + "</td><td>" + num_not_too_old + "</td></tr>";
          if (num_too_old>0) specsTable += "<tr><td class=\"ch\">" + Foxtrickl10n.getString("foxtrick.FTTeamStats.PlayerToOld.label") + "</td><td>" + num_too_old + "</td></tr>";                    
		}
        
		var boxrightt=doc.getElementById('sidebar');
        var contentDiv = boxrightt.innerHTML;

        var txt ='';
        if (specsTable != "") txt = '<table class="smallText">' + specsTable + "</table>";

		var NovaVar; 
		
		NovaVar = '<div class="sidebarBox">';
		NovaVar += '<div class="boxHead">';
		NovaVar += '<div class="boxLeft">';
		NovaVar += '<h2 class="">'+ Foxtrickl10n.getString("foxtrick.FTTeamStats.label") + '</h2>';
		NovaVar += '</div>';
		NovaVar += '</div>';
		NovaVar += '<div class="boxBody">';
		if (txt !="") NovaVar += txt;
		NovaVar += '</div>';
		NovaVar += '<div class="boxFooter"><div class="boxLeft">&nbsp;</div>';
		NovaVar += '</div>';
		NovaVar += '</div>';

		if (txt !="") boxrightt.innerHTML = contentDiv + NovaVar;
		
		// add filters
		var sortbybox= doc.getElementById("ctl00_CPMain_ucSorting_ddlSortBy"); 		
		if (Youth_players) sortbybox= doc.getElementById("ctl00_CPMain_ddlSortBy");
		sortbybox.setAttribute('style','font-size:1.05em;');
		var filterselect=doc.createElement('select');
		filterselect.setAttribute('style','font-size:1.05em;');
		//filterselect.setAttribute('class','sorting');
		filterselect.addEventListener('change',FTTeamStats_Filter,false);
		var option=doc.createElement('option');
		option.setAttribute('value','');
		option.innerHTML='---';
		filterselect.appendChild(option);
		var option=doc.createElement('option');
		option.setAttribute('value','Cards');
		option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.Cards.label");
		filterselect.appendChild(option);
		var option=doc.createElement('option');
		option.setAttribute('value','Injured');
		option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.Injured.label");;
		filterselect.appendChild(option);
		if (!Youth_players) {
			var option=doc.createElement('option');
			option.setAttribute('value','TransferListed');
			option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.TransferListed.label");;
			filterselect.appendChild(option);
		}
		
		var option=doc.createElement('option');
		option.setAttribute('value','PlayedLatest');
		option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.PlayedLatest.label");;
		filterselect.appendChild(option);
		
		var option=doc.createElement('option');
		option.setAttribute('value','NotPlayedLatest');
		option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.NotPlayedLatest.label");;
		filterselect.appendChild(option);
		
		/*var option=doc.createElement('option');
		option.setAttribute('value','TopPlayers');
		option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.TopPlayers.label");;
		filterselect.appendChild(option);*/

		for (var spec in specs) {
			purspec=spec.replace(/\[|\]/g,'');
			var option = doc.createElement('option');
			option.setAttribute('value',purspec);
			option.innerHTML = purspec
			filterselect.appendChild(option);
		}
		if (facecards) {
			var option=doc.createElement('option');
			option.setAttribute('value','Pictures');
			option.innerHTML=Foxtrickl10n.getString("foxtrick.FTTeamStats.Pictures.label");
			filterselect.appendChild(option);
		}
		
		var mainBody= doc.getElementById('mainBody');
		sortbybox=mainBody.removeChild(sortbybox);
		sortbybox.className="";
		sortbybox.setAttribute('style','width:100%');
		var table=doc.createElement('table');
		table.setAttribute('style','float:right; width:auto');
		var tbody=doc.createElement('tbody');
		table.appendChild(tbody);
		var tr=doc.createElement('tr');
		tbody.appendChild(tr);
		var td=doc.createElement('td');
		tr.appendChild(td);
		td.appendChild(sortbybox);
		var tr=doc.createElement('tr');
		tbody.appendChild(tr);
		var td=doc.createElement('td');
		tr.appendChild(td);
		td.appendChild(filterselect);
		mainBody.insertBefore(table,mainBody.firstChild);
		//sortbybox.parentNode.insertBefore(filterselect,sortbybox);
		FTTeamStats_Filter.doc=doc;
		
        },
        
        _checkCountry : function ( ctrc ) {
            if (ctrc == null ) return;
            ctrc = Foxtrick._to_utf8(substr(ctrc, strrpos( ctrc, "</a>")+4, ctrc.lebgth));
            // dump('=> stripped => ' + ctrc + '\n');
            var found = -1;
            for (var i = 0; i < this.COUNTRYLIST.length; i++) {
                if (strrpos( ctrc, this.COUNTRYLIST[i]) > 0 ) {
                    found = i;
                    break;
                }
            }
            if ( found != -1) {
                return Foxtrick._from_utf8(this.COUNTRYLIST[found]);
            }
            // dump('=> not found=> ' + this.COUNTRYLIST[found] + '\n');
            return false;
        },
        
        change : function( page, doc ) {
        
        },

        COUNTRYLIST : new Array (
        "Al Iraq",
        "Al Kuwayt",
        "Al Maghrib",
        "Al Urdun",
        "Al Yaman",
        "Algérie",
        "Andorra",
        "Angola",
        "Argentina",
        "Azərbaycan",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "België",
        "Benin",
        "Bolivia",
        "Bosna i Hercegovina",
        "Brasil",
        "Brunei",
        "Bulgaria",
        "Cabo Verde",
        "Canada",
        "Česká republika",
        "Chile",
        "China",
        "Chinese Taipei",
        "Colombia",
        "Costa Rica",
        "Côte d’Ivoire",
        "Crna Gora",
        "Cymru",
        "Cyprus",
        "Danmark",
        "Dawlat Qatar",
        "Deutschland",
        "Dhivehi Raajje",
        "Ecuador",
        "Eesti",
        "El Salvador",
        "England",
        "España",
        "Føroyar",
        "France",
        "Ghana",
        "Guatemala",
        "Hanguk",
        "Hayastan",
        "Hellas",
        "Honduras",
        "Hong Kong",
        "Hrvatska",
        "India",
        "Indonesia",
        "Iran",
        "Ireland",
        "Ísland",
        "Israel",
        "Italia",
        "Jamaica",
        "Kampuchea",
        "Kazakhstan",
        "Kenya",
        "Kyrgyzstan",
        "Latvija",
        "Lëtzebuerg",
        "Liechtenstein",
        "Lietuva",
        "Lubnan",
        "Magyarország",
        "Makedonija",
        "Malaysia",
        "Malta",
        "México",
        "Misr",
        "Moçambique",
        "Moldova",
        "Mongol Uls",
        "Nederland",
        "Nicaragua",
        "Nigeria",
        "Nippon",
        "Norge",
        "Northern Ireland",
        "Oceania",
        "Oman",
        "Österreich",
        "Pakistan",
        "Panamá",
        "Paraguay",
        "Perú",
        "Philippines",
        "Polska",
        "Portugal",
        "Prathet Thai",
        "Republica Dominicana",
        "România",
        "Rossiya",
        "Sakartvelo",
        "Saudi Arabia",
        "Schweiz",
        "Scotland",
        "Sénégal",
        "Shqiperia",
        "Singapore",
        "Slovenija",
        "Slovensko",
        "South Africa",
        "Srbija",
        "Suomi",
        "Suriname",
        "Suriyah",
        "Sverige",
        "Tanzania",
        "Tounes",
        "Trinidad &amp; Tobago",
        "Türkiye",
        "Uganda",
        "Ukraina",
        "United Arab Emirates",
        "Uruguay",
        "USA",
        "Venezuela",
        "Vietnam")            
};

function starsortfunction(a,b) {return a[0]>b[0];};


// by convinced
function FTTeamStats_Filter(ev){
	try {
		var doc = FTTeamStats_Filter.doc;
		var body = doc.getElementById("mainBody");
		var allDivs = body.getElementsByTagName('div');
		
		var no_playerlist=true;
		for( var i = 0; i < allDivs.length; i++ ) {
			if (allDivs[i].className=='playerList') {no_playerlist=false; allDivs=allDivs[i].childNodes;break;}
		} 
		if (no_playerlist)  allDivs=body.childNodes;
		
		var lastborderSeparator=null;
		var count=0;
		
		var hide = false;
		var hide_category = true;
		var last_category = null;
		var last_face = null;
		
		for( var i = 0; i < allDivs.length; i++ ) {	//	dump(allDivs[i].className+'\n');	
			if (allDivs[i].className=='category') {
				    if (last_category) { 
						if (hide_category==true || ev.target.value=='Pictures')  last_category.setAttribute('style','display:none !important;');
						else last_category.style.display=''; //dump(hide+' '+last_category.innerHTML+'\n');
					}	
					last_category = allDivs[i]; 
					hide_category = true;
			}
			else if (allDivs[i].className=='faceCard') last_face=allDivs[i]; 

			else if (allDivs[i].className=='playerInfo') {			
				// count stars
				var imgs = allDivs[i].getElementsByTagName( "img" );	
				var img,k=0,num_star=0;
				while (img=imgs[k++]) {
					if (img.className=="starWhole") num_star+=1;
					else if (img.className=="starHalf") num_star+=0.5;
				} 

				var as=allDivs[i].getElementsByTagName('a');
				var j=0,a=null;
				while(a=as[j++]){if (a.href.search(/matchid/i)!=-1) break;}
				var matchday=0;
				if (a) matchday=getUniqueDayfromCellHTML(a.innerHTML); 

				if (ev.target.value=='Cards' && allDivs[i].innerHTML.search('card.gif')==-1)  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				}
				else if (ev.target.value=='Injured' 
							&& (allDivs[i].innerHTML.search('bruised.gif')==-1 && allDivs[i].innerHTML.search('injured.gif')==-1))  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				}
				else if (ev.target.value=='TransferListed' && allDivs[i].innerHTML.search('dollar.gif')==-1)  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				} 
				else if (ev.target.value=='Pictures')  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				} 						
				else if (ev.target.value=='PlayedLatest' && matchday!=FTTeamStats.latestMatch)  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				}
				else if (ev.target.value=='NotPlayedLatest' && matchday==FTTeamStats.latestMatch)  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				}
				else if (ev.target.value=='TopPlayers' && num_star < FTTeamStats.top11star)  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				}
				else if (ev.target.value!='Cards' && ev.target.value!='Injured' && ev.target.value!='TransferListed' 
							&& ev.target.value!='Pictures' && ev.target.value!='PlayedLatest'  && ev.target.value!='NotPlayedLatest' 
							&& ev.target.value!='TopPlayers' && allDivs[i].innerHTML.search(ev.target.value)==-1)  {
						allDivs[i].setAttribute('style','display:none !important;');
						hide = true; //dump('hide');
				}				
				else {
					 	allDivs[i].setAttribute('style','');
						hide = false; //dump('show');
						hide_category = false;										
				} 
				if (hide && ev.target.value!='Pictures') { 
					if (last_face) { 
						if (last_face.style.display) last_face.style.display='none !important;'; 
						else last_face.setAttribute('style',last_face.getAttribute('style')+'display:none !important;'); 
					}
				}
				else { if (last_face) last_face.style.display=''; }
				//dump(' '+ev.target.value+' '+allDivs[i].getElementsByTagName('a')[0].innerHTML+'\n');
				if (!hide || ev.target.value=='Pictures') ++count;
			}
			else if (allDivs[i].className=='borderSeparator' || allDivs[i].className=='separator' || allDivs[i].className=='youthnotes') { //dump('border hide:'+hide+'\n');
				if (hide==true) allDivs[i].setAttribute('style','display:none !important;');
				else allDivs[i].setAttribute('style','');
				
			}			
			if (allDivs[i].className=='borderSeparator' || allDivs[i].className=='separator') lastborderSeparator=allDivs[i];
		}
		if (ev.target.value == 'Pictures') lastborderSeparator.style.display='';
		if (last_category) { 
			if (hide_category==true || ev.target.value=='Pictures')  last_category.setAttribute('style','display:none !important;');
			else last_category.setAttribute('style','');
		}
		var h = body.getElementsByTagName('h1')[0];
		h.innerHTML = h.innerHTML.replace(/ \d+/,' '+String(count));
		
	}catch(e) {dump('FTTeamStats_Filter: '+e+'\n');}
}
/**
 * stats.js
 * Foxtrick links collection
 * @author other,convinced
 */

/*
 * "params"     : { "infocode" : "text" }   -> ?text=info[infocode]
 * "params"     : { "infocode" : "" }   -> info[infocode]  // eg alltid
 * "params"     : { "" : "#text" }   -> #text   			//eg maptrick , first letter non alphanumeric
 * "params"     : { "infocode" : "," }   -> ,info[infocode]   //eg alltid, first letter non alphanumeric
 * for others use the 'paramfunction' eg natstats
 */
  
var vnukstatsranges = {};

vnukstatsranges["czech"] = [[93617,93784], [115871,116382], [480223, 482270]];
vnukstatsranges["slovakia"] = [[241335,241502]];

var hscountries = {};
var hslevels = {};

hscountries["1"] = "sweden";
hscountries["2"] = "england";
hslevels["2"] = 6;
hscountries["3"] = "germany";
hscountries["4"] = "italy";
hscountries["5"] = "france";
hscountries["6"] = "mexico";
hscountries["7"] = "argentina";
hslevels["7"] = 6;
hscountries["8"] = "usa";
hslevels["8"] = 6;
hscountries["9"] = "norge";

hscountries["11"] = "danmark";
hslevels["11"] = 8;

hscountries["12"] = "finland";

hscountries["14"] = "netherlands";
hscountries["15"] = "oceania";
hslevels["15"] = 5;

hscountries["16"] = "brazil";
hslevels["16"] = 7;
hscountries["17"] = "canada";
hslevels["17"] = 5;

hscountries["18"] = "chile";
hslevels["18"] = 7;
hscountries["19"] = "colombia";
hscountries["20"] = "india";

hscountries["21"] = "ireland";
hscountries["22"] = "nippon";
hscountries["23"] = "peru";
hscountries["24"] = "poland";
hscountries["25"] = "portugal";
hslevels["25"] = 9;
hscountries["26"] = "scotland";
hslevels["26"] = 5;
hscountries["27"] = "southafrica";
hscountries["28"] = "uruguay";
hscountries["29"] = "venezuela";
hslevels["29"] = 5;

hscountries["30"] = "southkorea";
hscountries["31"] = "thailand";
hscountries["32"] = "turkey";
hscountries["33"] = "misr";
hscountries["34"] = "china";
hscountries["35"] = "russia";
hscountries["36"] = "spain";
hscountries["37"] = "romania";
hscountries["38"] = "island";
hscountries["39"] = "austria";
hscountries["44"] = "belgium";
hslevels["44"] = 6;
hscountries["45"] = "malaysia";
hscountries["46"] = "switzerland";
hscountries["47"] = "singapore";
hscountries["50"] = "hellas";
hslevels["50"] = 5;
hscountries["51"] = "hungary";
hscountries["52"] = "czech";
hscountries["53"] = "latvia";
hscountries["54"] = "indonesia";
hscountries["55"] = "philippines";
hscountries["56"] = "estonia";
hscountries["57"] = "serbia";
hslevels["57"] = 5;
hscountries["58"] = "croatia";
hscountries["59"] = "hongkong";
hscountries["60"] = "taiwan";
hscountries["61"] = "wales";
hscountries["62"] = "bulgaria";
hslevels["62"] = 5;
hscountries["63"] = "israel";
hslevels["63"] = 5;
hscountries["64"] = "slovenia";
hslevels["64"] = 5;
hscountries["66"] = "lithuania";
hscountries["67"] = "slovakia";
hscountries["68"] = "ukraine";
hscountries["69"] = "bih";
hslevels["69"] = 5;
hscountries["70"] = "vietnam";
hscountries["71"] = "pakistan";
hscountries["76"] = "faroe";
hscountries["84"] = "luxembourg";
hscountries["89"] = "cyprus";

hscountries["98"] = "albania";
hslevels["98"] = 3;
hscountries["99"] = "honduras";
hslevels["99"] = 2;
hscountries["100"] = "elsalvador";
hslevels["100"] = 3;
hscountries["102"] = "kyrgyzstan";
hslevels["102"] = 2;
hscountries["103"] = "moldova";
hslevels["103"] = 4;
hscountries["105"] = "andorra";
hslevels["105"] = 3;
hscountries["107"] = "guatemala";
hslevels["107"] = 3;
hscountries["117"] = "liechtenstein";
hslevels["117"] = 3;
hscountries["131"] = "montenegro";
hslevels["131"] = 3;


var stats = {};

//HT Newsfeeds

stats["xray_newsfeed"] =  { 
       "url" : "http://www.databased.at/hattrick/",  
       "newslink" : { "path" : "rss/",
                      "filters"    : []
        },
       "title" : "HT Newsfeeds",
       "img" : "chrome://foxtrick/content/resources/linkicons/htrss2.gif"
  
}

// hattriX-Ray Crossover
stats["xray_crossover"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/",  
        "playerlink" : { "path"       : "?starter=crossover",
                         "filters"    : [], 
                         "params"     : { "playerid" : "pid" }
                       },
        
        "title" : "hattriX-Ray Crossover",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_crossover.png"
};    


// hattriX-Ray Backdraft
stats["xray_backdraft"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",  
        "teamlink" : { "path"       : "?starter=backdraft",
                         "filters"    : [], 
                         "params"     : { "teamid" : "teamid" }
                       },
        
        "title" : "hattriX-Ray Backdraft",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_backdraft.png"
};    

// hattriX-Ray ClubRay
stats["xray_clubray"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "teamlink" : { "path"       : "?starter=clubray",
                         "filters"    : [], 
                         "params"     : { "teamid" : "teamid" }
                       },
        
        "title" : "hattriX-Ray clubray",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_clubray.png"
};    


// hattriX-Ray Friendlier

stats["xray_friendlier"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "challengeslink" : { "path"       : "?starter=friendlier",
                         "filters"    : [], 
                         "params"     : {  }
                       },
        
        "title" : "hattriX-Ray Friendlier",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_friendlier.png"
};    



// hattriX-Ray Rounds 2 go
stats["xray_roundstogo"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "leaguelink" : { "path"       : "?starter=rounds2Go",
                         "filters"    : [], 
                         "params"     : { "leagueid" : "divID" }
                       },
        
        "title" : "hattriX-Ray rounds to go",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_rounds2go.png"
};    

// hattriX-Ray roundrate
stats["xray_roundrate"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "leaguelink" : { "path"       : "?starter=roundrate",
                         "filters"    : [], 
                         "params"     : { "leagueid" : "divID" }
                       },
        
        "title" : "hattriX-Ray roundRate",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_roundrate.png"
};    


// hattriX-Ray leaguemates
stats["xray_leaguemates"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "leaguelink" : { "path"       : "?starter=leaguemates",
                         "filters"    : [], 
                         "params"     : { "leagueid" : "divID" }
                       },
        
        "title" : "hattriX-Ray leaguemates",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_leaguemates.png"
};    


// hattriX-Ray sunray
stats["xray_sunray"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "nextmatchlink" : { "path"       : "?starter=sunray",
                         "filters"    : [], 
                         "params"     : { "teamid" : "teamid" }
                       },
        
        "title" : "hattriX-Ray sunray",
        //"post" : "true",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_sunray.png"
};


// hattriX-Ray live!
stats["xray_live"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "matchlink" : { "path"       : "?starter=live",
                         "filters"    : [], 
                         "params"     : { "matchid" : "matchid" }
                       },
        
        "title" : "hattriX-Ray live!",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_live.png"
};


// hattriX-Ray live! review
stats["xray_livereview"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "playedmatchlink" : { "path"       : "?starter=livereview",
                         "filters"    : [], 
                         "params"     : { "matchid" : "matchid" }
                       },
        
        "title" : "hattriX-Ray live! (played matches)",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_live_review.png"
};

// hattriX-Ray head to head
stats["xray_h2h"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "playedmatchlink" : { "path"       : "?starter=headtohead",
                         "filters"    : [], 
                         "params"     : { "matchid" : "matchid" }
                       },
        
        "title" : "hattriX-Ray head to head (played matches)",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_h2h.png"
};


// hattriX-Ray healing
stats["xray_healing"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "playerhealinglink" : { "path"       : "?starter=healing",
                         "filters"    : [], 
                         "params"     : { "age" : "v1", "injuredweeks" : "v2", "playerid" : "pid"  }
                       },
        
        "title" : "hattriX-Ray healing",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_healing_s.png"
};

// hattriX-Ray healing TSI
stats["xray_healingtsi"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "playerhealinglink" : { "path"       : "?starter=healingTSI",
                         "filters"    : [], 
                         "params"     : { "age" : "v1", "injuredweeks" : "v2", "tsi" : "v3", "playerid" : "pid"  }
                       },
        
        "title" : "hattriX-Ray healing TSI",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_healingtsi_s.png"
};

// hattriX-Ray youngster
stats["xray_youngster"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp?starter=youngster",

        "youthpulllink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : {  }
                       },
        
        "title" : "hattriX-Ray youngster",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_youngster.png"
};


// hattriX-Ray youngster
stats["xray_econray"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "economylink" : { "path"       : "?starter=econray",
                         "filters"    : [], 
                         "params"     : {  }
                       },
        
        "title" : "hattriX-Ray econray",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_econray.png"
};

stats["xray_keeper"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",

        "keeperlink" : { "path"       : "?starter=keepersup",
                         "filters"    : [], 
                         "params"     : { "tsi" : "tsi", "form": "form", "playerid" : "pid", "goalkeeping" : "v1"}
                       },
        
        "title" : "hattriX-Ray keepers-up",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_keepersup_s.png"
};


stats["xray_coach"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/pages/coach.asp",

        "coachlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : {  }
                       },
        
        "title" : "hattriX-Ray Coach",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_coach.png"
};


// hattriX-Ray HTPE
stats["HTPE"] =  { 
        "url" : "http://www.databased.at/hattrick/htpe/",

        "transfercomparelink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "playerid" : "pid", "teamid" : "tid",
                                          "tsi" : "tsi", "age" : "age", "form" : "form", "exp" : "exp",
                                          "stamina" : "st", "goalkeeping" : "gk", "playmaking" : "pm",
                                          "passing" : "pa", "winger" : "wi", "defending" : "de",
                                          "scoring" : "sc", "setpieces" : "sp"
                          }
                       },
        
        "title" : "hattriX-Ray HTPE",
        "img" : "chrome://foxtrick/content/resources/linkicons/htpe.png"
};    

// Hattrick Hall of Fame
stats["halloffame_match"] =  { 
        "url" : "http://www.databased.at/hattrick/halloffame/",
        "playedmatchlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "matchid" : "matchid" }
                       },
        "title" : "Hattrick Hall of Fame (match)",
        "img" : "chrome://foxtrick/content/resources/linkicons/hhof.png"
};    

stats["halloffame_team"] =  { 
        "url" : "http://www.databased.at/hattrick/halloffame/",
        "teamlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "teamid" : "teamid" }
                       },
        "title" : "Hattrick Hall of Fame (team)",
        "img" : "chrome://foxtrick/content/resources/linkicons/hhof.png"
};    

stats["halloffame_player"] =  { 
        "url" : "http://www.databased.at/hattrick/halloffame/",
        "playerlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "playerid" : "pid" }
                       },
        "title" : "Hattrick Hall of Fame (player)",
        "img" : "chrome://foxtrick/content/resources/linkicons/hhof.png"
};    

// hattriX-Ray arenasizer
stats["xray_arenasizer"] =  { 
        "url" : "http://www.databased.at/hattrick/x-ray/index.asp",
        "arenalink" : { "path"       : "?starter=arenasizer",
                         "filters"    : [], 
                         "params"     : { "terraces" : "v1", "basic": "v2", "roof" : "v3", "vip" : "v4"}
                       },
        
        "title" : "hattriX-Ray arenasizer",
        "img" : "chrome://foxtrick/content/resources/linkicons/xray_arenasizer.png"
};

/* // down
// Vnukstats
stats["vnukstats"] =  { 
        "url" : "http://vnukstats.no-ip.com/",

        "leaguelink" : { "path"       : "?page=nejtymy",
                         "filters"    : ["countryid"], 
                         "params"     : { "seriesnum" : "filtr4", "levelnum" : "filtr3" }
                       },

        "playerlink" : { "path"       : "?page=showplayer",
                         "filters"    : ["teamid"], 
                         "params"     : { "playerid" : "plid" }
                       },

        "teamlink" : { "path"       : "?page=showclubmatches",
                         "filters"    : ["levelnum", "countryid"], 
                         "params"     : { "teamid" : "clid" }
                       },

        "countryidranges" : [[52, 52]],  // CZ+SK
        "levelnumranges" : [[1, 6]], 
        "teamidranges" : vnukstatsranges["czech"],
        "title" : "Vnukstats",
        "img" : "chrome://foxtrick/content/resources/linkicons/vnukstats.png"
};*/    

/*  // down
// Vnukstats Slovensko
stats["vnukstats_sk"] =  { 
        "url" : "http://vnukstats.hattrick-sk.com/",

        "leaguelink" : { "path"       : "?page=nejtymy",
                         "filters"    : ["countryid"], 
                         "params"     : { "seriesnum" : "filtr4", "levelnum" : "filtr3" }
                       },

        "playerlink" : { "path"       : "?page=showplayer",
                         "filters"    : ["teamid"], 
                         "params"     : { "playerid" : "plid" }
                       },

        "teamlink" : { "path"       : "?page=showclubmatches",
                         "filters"    : ["levelnum", "countryid"], 
                         "params"     : { "teamid" : "clid" }
                       },

        "countryidranges" : [[67, 67]],  // SK
        "levelnumranges" : [[1, 6]], 
        "teamidranges" : vnukstatsranges["slovakia"],
        "title" : "Vnukstats Slovensko",
        "img" : "chrome://foxtrick/content/resources/linkicons/vnukstats.png"
};    
*/

// Statristix, Belgium
/*  // down
stats["statristix"] =  { 
        "url" : "http://statristix.be/",

        "leaguelink" : { "path"       : "?n=seriedata",
                         "filters"    : ["countryid"], 
                         "params"     : {
                                        "leagueid" : "SerieID",
                                        "countryid" : "CountryID",
                                        "levelnum" : "Level"
                                        }
                       },
        
        "countryidranges" : [[44, 44]], 
        "title" : "Statristix",
        "img" : "chrome://foxtrick/content/resources/linkicons/statristix.png"        
};    
*/

/*// down
// BelRank
stats["belstat"] =  { 
        "url" : "http://belrank.be/",
        "leaguelink" : { "path"       : "serieDetails.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "serieID" }
                       },
                       
        "teamlink" : { "path"       : "teamdetails.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "teamID" }
                       },
        
        "countryidranges" : [[44, 44]], 
        "title" : "BelRank",
        "img" : "chrome://foxtrick/content/resources/linkicons/belrank.png"

};*/


// Alltid Hattrick Statistikk, International
// Thomas Johnsenn

stats["alltid"] =  { 
    
        "url" : "http://alltid.org/",

        "leaguelink" : { "path"       : "league/",
                         "filters"    : [], 
                         "params"     : { "leagueid" : "" }
                       },

        "teamlink" : { "path"       : "team/",
                         "filters"    : [], 
                         "params"     : { "teamid" : "" }
                       },

        "playerlink" : { "path"       : "player/",
                         "filters"    : [], 
                         "params"     : { "playerid" : "" }
                       },

        "countrylink" : { "path"       : "countrylid/",
                         "filters"    : [], 
                         "params"     : { "countryid" : "" }
                       },

        "federationlink" : { "path"       : "federation/",
                         "filters"    : [], 
                         "params"     : { "federationid" : "" }
                       },
		"playedmatchlink" : { "path"       : "match/",
                         "filters"    : [], 
                         "params"     : { "matchid" : "","match":"" }
                       },
        "matchlink" : { "path"       : "teamcompare/",
                         "filters"    : [], 
                         "params"     : { "teamid" : "","teamid2":"," }
                       },
        
        
        "title" : "Alltid Hattrick Statistics International",
        "img" : "chrome://foxtrick/content/resources/linkicons/ahstats.png"
};    



// HT-Deutschland
stats["ht_deutschland"] =  { 
  "url" : "http://www.ht-deutschland.de/",
  
  "leaguelink" : { "path"       : "liga.php",
                   "filters"    : ["countryid"], 
                   "params"     : { "leaguename" : "leagueLevelUnitName",
                                    "levelnum" : "leagueLevel"
                                  }
                 },
  
  "teamlink" : { "path"       : "teamview.php",
                   "filters"    : ["countryid"], 
                   "params"     : { "teamid" : "teamID" }
                 },
 
 "countrylink" : { "path"       : "overview.php",
                   "filters"    : ["countryid"], 
                   "params"     : []
				}, 
 "nationalteamlink" : { "path"       : "scouting/index.php?language=2",
                   "filters"    : ["countryid"], 
                   "params"     : []
				}, 
 "youthlink" : { "path"       : "scouting/index.php?language=2",
                   "filters"    : ["countryid"], 
                   "params"     : []
				}, 
  "countryidranges" : [[3, 3]], 
  "title" : "HT-Deutschland",
  "img" : "chrome://foxtrick/content/resources/linkicons/ht-deutschland.png"
};    

// peasohtstats
stats["htstats"] =  { 
        "url" : "http://htstats.com/",

        "leaguelink" : { "path"       : "liga.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "htliga"
                                        }
                       },

        "teamlink" : { "path"       : "equipo.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "htequipo" }
                       },
       "countrylink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     :  []
                       },

        "countryidranges" : [[36, 36]], 
        
        "title" : "Peaso Hattrick Stats",
        "img" : "chrome://foxtrick/content/resources/linkicons/htstats.png"
};    

stats["htstats_all"] =  { 
        "url" : "http://www.htstats.com/",
        "playedmatchlink" : { "path"       : "matchinfo",
                         "filters"    : [], 
                         "params"     : { "matchid" : "-" }
                       },
        "playedyouthmatchlink" : { "path"       : "matchinfoy",
                         "filters"    : [], 
                         "params"     : { "matchid" : "-" }
                       },
        "title" : "htstats (played match)",
        "img" : "chrome://foxtrick/content/resources/linkicons/htstats.png"        
};
// todohattrick
stats["todohattrick"] =  { 
        "url" : "http://www.stepi.org/todohattrick/",

        "leaguelink" : { "path"       : "grupo.asp",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "grupoID"
                                        }
                       },

        "teamlink" : { "path"       : "equipo.asp",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "equipoID" }
                       },

        "countryidranges" : [[36, 36]], 
        "title" : "TodoHattrick",
        "img" : "chrome://foxtrick/content/resources/linkicons/todohattrick.png"
};    

/*  // down
// Eesti Hattricki statistika
stats["eesti"] =  { 
        "url" : "http://hattrick.luanvi.ee/",

        "leaguelink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     : { "leaguename" : "div"
                                        }
                       },

        "teamlink" : { "path"       : "team-info.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "teamID" }
                       },


        "countryidranges" : [[56, 56]], 
        "title" : "Eesti Hattricki statistika",
        "img" : "chrome://foxtrick/content/resources/linkicons/eesti.gif"
};    
*/

stats["ht-fff"] =  { 
        "url" : "http://www.ht-fff.org/",

        "playerlink" : { "path"       : "dtn_submitting.php",
                         "filters"    : new Array("nationality"), 
                         "params"     : []
                       },
        
        "nationalityranges" : [[5, 5]],
        "title" : "ht-fff.org | french scouting group.",
        "img" : "chrome://foxtrick/content/resources/linkicons/htfff.png"
};    


// La Gazzetta di HT

stats["lagazzetta"] =  { 
        "url" : "http://www.gazzaht.org/",

        "teamlink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },
		"leaguelink" : { "path"       : "index.php?pag=13",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "girone"
                                        }
                       },
		"countrylink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     :  []                                        
                       },

        
        "countryidranges" : [[4, 4]], 
        "title" : "La Gazzetta di Hattrick",
        "img" : "chrome://foxtrick/content/resources/linkicons/lagazzetta.jpg"
};    
/* // down
stats["playitcool"] =  { 
        "url" : "http://www.playitcool.it/",

        "leaguelink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },
        "countryidranges" : [[4, 4]], 
        "title" : "Play It Cool",
        //"img" : "chrome://foxtrick/content/resources/linkicons/lagazzetta.jpg",
        "shorttitle" : "Play It Cool"
};    
*/



stats["francestats"] =  { 
        "url" : "http://www.francestats-ht.com/",

        "leaguelink" : { "path"       : "show_league.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "league"}
                       },

        "teamlink" : {   "path"       : "show_team.php",
                         "filters"    : ["countryid"],         
                         "params"     : { "teamid" : "teamid" }
                       },
       "countrylink" : { "path"       : "",
                         "filters"    : ["countryid"],         
                         "params"     : []
                       },

	    "countryidranges" : [[5, 5]],
        "title" : "FranceStats",
        "img" : "chrome://foxtrick/content/resources/linkicons/francestats.png"        
};  


/*
// htpl  // down
stats["htpl"] =  { 
        "url" : "http://student.owsiiz.edu.pl/~wo4020/ht/index.php",

        "leaguelink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     : { "leaguename" : "series"}
                       },

        "teamlink" : {   "path"       : "",
                         "filters"    : ["countryid"],         
                         "params"     : { "teamid" : "team" }
                       },

	    "countryidranges" : [[24, 24]],
        "title" : "Statystyki polskiego Hattricka by marnow",
        "img" : "chrome://foxtrick/content/resources/linkicons/htpl.gif"        
};  
*/


// not working properly. need some input from argentina there
/*stats["argentinaranking"] =  { 
        "url" : "http://www.htranking.com/",

        "leaguelink" : { "path"       : "ligas.asp",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "liga"}
                       },

        "teamlink" : {   "path"       : "equipos.asp",
                         "filters"    : ["countryid"],         
                         "params"     : { "teamid" : "equipo" }
                       },

	    "countryidranges" : [[7, 7]],
        "title" : "Hattrick Argentina Ranking",
        "img" : "chrome://foxtrick/content/resources/linkicons/argentinaranking.gif" 
}; */ 

// Hattrick Chile
stats["estadisticas.hattrick.cl"] =  { 
        "url" : "http://estadisticas.hattrick.cl/",

        "leaguelink" : { "path"       : "leagues/view/",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "" }
                       },

        "teamlink" : {   "path"       : "teams/view/",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "" }
                       },
        
        "countryidranges" : [[18, 18]], 
        "title" : "Estadisticas Chile",
        "img" : "chrome://foxtrick/content/resources/linkicons/hattrick_cl.png"        
};


stats["hattrick.cl"] = { 
  "url" : "http://www.hattrick.cl/",
  "img" : "chrome://foxtrick/content/resources/linkicons/hattrick_cl.png",
  "title" : "hattrick.cl",
  
        "countrylink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     :  []
                       },
        
        "countryidranges" : [[18, 18]] 
};
    
/*  // down
// Estatisticas HT-Brasil
stats["htbrasil"] =  { 
        "url" : "http://www.htbrstats.com/",

        "teamlink" : {   "path"       : "modules.php?name=Gtrends",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "teamID"}
                       },
        
        "countryidranges" : [[16, 16]], 
        "title" : "Estatisticas HT-Brasil",
        "img" : "chrome://foxtrick/content/resources/linkicons/htbrazil.gif"
}; */   

// HT-Stats Schweiz
stats["swissstats"] =  { 
        "url" : "http://www.ht-schweiz.ch/cgi-bin/",

        "leaguelink" : { "path"       : "index.cgi?action=stat&type=1&rate=6",
                         "filters"    : ["countryid"], 
                         "params"     : { "leaguename" : "l_name" }
                       },

        "teamlink" : {   "path"       : "index.cgi?action=stat&type=1&rate=5",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "t_id" }
                       },
        "countrylink" : {   "path"       : "news.cgi",
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },
        "countryidranges" : [[46, 46]], 
        "title" : "HT-Stats Schweiz",
        "img" : "chrome://foxtrick/content/resources/linkicons/statsschweiz.png"
};    

// Hattristics
stats["hattristics"] =  { 
        "url" : "http://www.hattristics.org/",

        "leaguelink" : { "path"       : "pub/viewLeague.php",
                         "filters"    : ["levelnum","countryid"], 
                         "params"     : { "leaguename" : "leagueName" }
                       },

        "teamlink" : {   "path"       : "pub/viewTeam.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "teamID" }
                       },
        "teamlink" : {   "path"       : "index.php",
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },
        "countryidranges" : [[46, 46]], 
		"levelnumranges" : [[1, 5]],
        "title" : "Hattristics",
        "img" : "chrome://foxtrick/content/resources/linkicons/hattrist.png"
};    

/*  // down
// Stats Engine Romania
stats["statsromania"] =  { 
        "url" : "http://www.fubar.ro/stats/",

        "leaguelink" : { "path"       : "sstats.php?do=series",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "id" }
                       },
        
        "countryidranges" : [[37, 37]], 
        "title" : "Stats Engine Romania",
        "img" : "/Common/images/37flag.gif"
}; */   

// akickku USA
stats["akickku"] =  { 
        "url" : "http://www.akickku.com/",

        "leaguelink" : { "path"       : "series.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "leaguename" : "seriesname" }
                       },

        "teamlink" : {   "path"       : "team.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "id",
                                          "teamname" : "name"}
                       },
        "countrylink" : {   "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },
        "countryidranges" : [[8, 8]],
        "title" : "Akickku",
        "img" : "chrome://foxtrick/content/resources/linkicons/akickku.png"
};    

// HC Stats - Hellas, Cyprus
stats["hcstatshellas"] =  { 
        "url" : "http://www.hattrick.gr/",  //"http://www.hattrick.gr/~hcstats/", stats page not working atm

        "leaguelink" : { "path"       : "", 			//"content/db/series.php?lang=gr",
                         "filters"    : ["countryid"], 
                         "params"     : {
                                        "leaguename" : "name",
                                        "countryid" : "country"
                                        },
                        "paramfunction" : function(params) {
                            
                            if (params["levelnum"] == 1) {
                             return "&country=" + params["countryid"] + "&level=1";
                            } else {
                             return "&country=" + params["countryid"] + "&name=" + params["leaguename"];                
                            }
                            
                        }                                        
                       },

        "teamlink" : {   "path"       : "", //"content/db/team.php?lang=gr",        
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "teamId", "countryid" : "country" }
                       },
        "countrylink" : {   "path"       : "",        
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },        
        "countryidranges" : [[50, 50], [89, 89]], 
        "title" : "HC Stats",
        "img" : "chrome://foxtrick/content/resources/linkicons/hcstats_hellas.png"        
};    

/* // down
// HTTools Friendly Manager
stats["httoolsfriendlymanager"] =  { 
        "url" : "http://httoolsfriendlymanager.cretze.ro/",

        "challengeslink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        
        "title" : "HTTools Friendly Manager",
        "img" : "chrome://foxtrick/content/resources/linkicons/httools_friendly.png"
};  */  

 // Maptrick

stats["maptrick_coolness"] =  { 
        "url" : "http://www.maptrick.org/",
 
        "teamlink" : { "path"		: "coolness.php",
						"filters"	: [],
						"params"	: { "teamid" : "team" ,"":"#results"}
						},
         
        "title" : "Maptrick Coolness",
         "img" : "chrome://foxtrick/content/resources/linkicons/maptrick_cool.png"
};

stats["maptrick_hoc"] =  { 
        "url" : "http://www.maptrick.org/",

        "countrylink" : { "path"	: "hallofcool.php",
						"filters"	: [],
						"params"	: { "countryid" : "country" }
						},
		
		"leaguelink" : { "path"		: "hallofcool.php",
						"filters"	: [],
						"params"	: { "leagueid" : "league" }
						},
		"federationlink" : { "path"	: "hallofcool.php",
						"filters"	: [],
						"params"	: { "federationid" : "alliance" }
						},
        
        "title" : "Maptrick Hall of Cool",
        "img" : "chrome://foxtrick/content/resources/linkicons/maptrick_hoc.png"
};

stats["maptrick_botmap"] =  { 
        "url" : "http://www.maptrick.org/",

        "countrylink" : { "path"	: "botmap.php",
						"filters"	: [],
						"params"	: { "countryid" : "country" }
						},
        
        "title" : "Maptrick Botmap",
        "img" : "chrome://foxtrick/content/resources/linkicons/maptrick_bot.png"
};
 

// HT-Dog
stats["ht-dog"] =  { 
        "url" : "http://mikehell.kicks-ass.net/ht-dog/index.jsp",

        "teamlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "teamid" : "otherTeamID" }
                       },

        "title" : "HT-Dog",
        "img" : "chrome://foxtrick/content/resources/linkicons/ht-dog.png"
};    

// Hatstats

stats["hatstats"] =  { 
        "url" : "",
        "urlfunction": function (filterparams) {
                             var countryid = filterparams["countryid"];
                             if (typeof(hscountries[countryid]) == 'undefined') return null;
                             return "http://" + hscountries[countryid] + ".hatstats.info/";
                        },
    
        "leaguelink" : { "path"       : "standings.php?rank=0&round=99",
                         "filters"    : [], 
                         "params"     : { "leagueid" : "series",
                                          "levelnum" : "level" }
                       },

        "teamlink" : {   "path"       : "team_overview.php",
                         "filters"    : [], 
                         "params"     : { "teamid" : "teamid",
                                          "levelnum" : "level" }
                       },
        "countrylink" : {   "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        "allowlink" : function(filterparams, stattype) {
            
            var maxlevel = 4;
            if (typeof(hslevels[filterparams["countryid"]]) != 'undefined') {
                maxlevel = hslevels[filterparams["countryid"]];
            }
            
            if (maxlevel < filterparams["levelnum"]) {
                return false;
            } else {
                return true;
            }
        },

        "title" : "HatStats",
        "img" : "chrome://foxtrick/content/resources/linkicons/hatstats.png"        
};    


stats["advancedinjurycalc"] =  { 
        "url" : "http://www.student.ru.nl/rvanaarle/injury.php",

        "playerhealinglink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "age" : "nAge", "injuredweeks" : "nWeeks", "tsi" : "nTSIafter"  }
                        },
        
        "title" : "Advanced Injury Calculator",
        "img" : "chrome://foxtrick/content/resources/linkicons/redcross_small.png"
};


stats["healingkawasaki"] =  { 
        "url" : "http://club.hattrick.org/KawasakiTigers/default.asp?site=http://av.hattricknippon.org",

        "playerhealinglink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { }
                       },
        
        "title" : "Kawasaki Tigers Injury Healing Time Prediction Tool",
        "img" : "chrome://foxtrick/content/resources/linkicons/redcross_small.png"
};

stats["hottrickkeeper"] =  { 
        "url" : "http://www.hottrick.org/",

        "keeperlink" : { "path"       : "hattrick_keeper_tool.php",
                         "filters"    : [], 
                         "params"     : { }
                       },
        
        "title" : "Hottrick Keeper Tool",
        "img" : "chrome://foxtrick/content/resources/linkicons/hottrick_small.png" 
};

stats["htnipponkeeper"] =  { 
        "url" : "http://keeper.hattricknippon.org/",

        "keeperlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "tsi" : "tsi", "form" : "form" }
                       },
        
        "title" : "Keeper Level Prediction Tool",
        "img" : "chrome://foxtrick/content/resources/linkicons/hattricknippon_small.png"
};

stats["coachexperience"] =  { 
        "url" : "http://www.manager.brygge.dk/Hattrick/experience.htm",

        "coachlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        
        "title" : "Coach experience table",
        "shorttitle" : "Cet"
};

/*  // down
stats["cyf"] =  { 
        "url" : "http://cyf.hattrickitalia.org/",

        "youthpulllink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        
        "title" : "Cross Your Fingers",
        "img" : "chrome://foxtrick/content/resources/linkicons/cyf.png"
};*/

stats["camelmaster_economists"] =  { 
        "url" : "http://www.dulovic.com/fun/hattrick/economists.php",

        "economylink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        
        "title" : "Camelmasters Economist Tool",
        "img" : "chrome://foxtrick/content/resources/linkicons/camelmasters.png"
};    

stats["htlinks_economists"] =  { 
        "url" : "http://www.ht-links.de/Hattrick/Economist-Checker.html",

        "economylink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : {"Cash" : "Cash","Currency":"Currency"}
                       },
        
        "title" : "HT-Links.de Economist Checker",
        "img" : "chrome://foxtrick/content/resources/linkicons/htlinks.png"
};    

stats["htlinks_trainingspeedchecker"] =  { 
        "url" : "http://www.ht-links.de/Hattrick/TrainingsSpeedCheckerE.html",

        "traininglink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : {"Coach":"Trainer","TI":"TI","STA":"KO","TrainingType":"TrainingType"}
                       },
        
        "title" : "HT-Links.de TrainingSpeedChecker",
        "img" : "chrome://foxtrick/content/resources/linkicons/htlinks.png"
};    

stats["htlinks_Goalkeeper_Checker"] =  { 
        "url" : "http://www.ht-links.de/Hattrick/Goalkeeper-Checker.html",

        "keeperlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "tsi" : "TSI", "form": "Form","age":"Age"}
                       },
        
        "title" : "www.ht-links.de - Goalkeeper-Checker",
        "img" : "chrome://foxtrick/content/resources/linkicons/htlinks_small.png"
};

/*  // illegal site. don't include again before CHPP approval
stats["skillraise"] =  { 
        "url" : "http://www.htdaytrading.com/",

        "playerlink" : { "path"       : "?page=showplayer",
                         "filters"    : ["age"], 
                         "params"     : { "age" : "age",
                                          "stamina" : "stamina",  "playmaking" : "playmaking",
                                          "passing" : "passing", "winger" : "winger", "defending" : "defending",
                                          "scoring" : "scoring"
                          }
                       },
                       
        "ageranges" : [[17, 19]], 

        "title" : "SkillRaise Tool",
        "img" : "chrome://foxtrick/content/resources/linkicons/skillraise.jpg"
};  */  

stats["Hattrickstats_fr"] =  { 
        "url" : "http://friendly.cup.free.fr/",

        "leaguelink" : { "path"       : "Stats.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "id" }
                       },

        "teamlink" : { "path"       : "Stats.php",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "team" }
                       },
        "countrylink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     : []
                       },
                
        "countryidranges" : [[5, 5]], 
        "title" : "HATTRICKSTATS.WeB.SiTe",
        "img" : "chrome://foxtrick/content/resources/linkicons/hattrickstats_fr.gif"
};    
/*  // down
stats["EstadisticasHTTP"] =  { 
        "url" : "http://ht-tp.dnsalias.com/http/",

        "leaguelink" : { "path"       : "besteam.jsp?Accion=6A",
                         "filters"    : ["countryid", "levelnum"], 
                         "params"     : { "leagueid" : "GrupoId" }
                       },
                       
        "teamlink" : {   "path"       : "equipo.jsp?Accion=6P",
                         "filters"    : ["countryid", "levelnum"], 
                         "params"     : { "teamid" : "Id" }
                       },

        "countryidranges" : [[36, 36]],
        "levelnumranges" : [[1, 6]],
        "title" : "Estadisticas HTTP",
        "img" : "chrome://foxtrick/content/resources/linkicons/http.png"        
}; */   

stats["natstats"] =  { 
  "url" : "http://doof92.co.uk/",
  "title" : "NatStats",
  "img" : "chrome://foxtrick/content/resources/linkicons/natstats.png",
  
  "nationalteamlink" : { "path"     : "",
                         "filters"  : [],
                         "params"   : {"ntteamid" : "id","LeagueOfficeTypeID":"LeagueOfficeTypeID" },
						 "paramfunction" : function(params) {
                            
                            if (params["LeagueOfficeTypeID"] == 2) {
                             return "HT/team.asp?id=" + params["ntteamid"];
                            } else {
                             return "/HT/u20team.asp?id=" + params["ntteamid"];                
                            }
                            
                        } 
  }
  
};


// Hattrick Today
stats["hattricktoday"] =  { 
        "url" : "http://www.frelive.net/",
        "matchlink" : { "path"       : "HT2D/Viewer/index.php",
                         "filters"    : [], 
                         "params"     : { "matchid" : "urlMatches" }
                       },
         "playedmatchlink" : { "path"       : "HT2D/Viewer/index.php",
                         "filters"    : [], 
                         "params"     : { "matchid" : "urlMatches" }
                       },
        
        "title" : "Hattrick Today",
        "img" : "chrome://foxtrick/content/resources/linkicons/hattricktoday.png"
};

 
stats["magicyp"] =  { 
        "url" : "http://www.rodelhang.at/magicyp",

        "youthpulllink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        
        "title" : "Magic Youthpull",
        "img" : "chrome://foxtrick/content/resources/linkicons/magicyp.png"
};

/*  // down
stats["beltrickarena"] =  { 
        "url" : "http://www.beltrick.org/calculator",
        "arenalink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        "title" : "Beltrick Arena Calculator",
        "img" : "chrome://foxtrick/content/resources/linkicons/beltrick_arena.gif"
};

stats["beltrickyouth"] =  { 
        "url" : "http://www.beltrick.org/youthstat",
        "youthlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        "title" : "Beltrick YouthStat",
        "img" : "chrome://foxtrick/content/resources/linkicons/beltrick_youthstat.jpg"
};*/

stats["hattrick-youthclub"] =  { 
        "url" : "http://www.hattrick-youthclub.org/",
        "youthlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        "title" : "hattrick youthclub",
        "img" : "chrome://foxtrick/content/resources/linkicons/hyouthclub.png"
};

stats["arenaoptimizer"] =  { 
        "url" : "http://www.arenaoptimizer.es/",
        "arenalink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : []
                       },
        "title" : "Arena Optimizer",
        "img" : "chrome://foxtrick/content/resources/linkicons/arenaoptimizer.gif"
};

stats["nrg_eco_arena"] =  { 
        "url" : "http://nrgjack.altervista.org/",
        "arenalink" : { "path"       : "eco.php",
                         "filters"    : [], 
                         "params"     : { "terraces" : "t", "basic": "b", "roof" : "r", "vip" : "v"}                       
                       },

        "title" : "Enterprise Construction Online",
        "img" : "chrome://foxtrick/content/resources/linkicons/eco.jpg"
};

stats["nrg_newcoach"] =  { 
        "url" : "http://nrgjack.altervista.org/",
	    "coachlink" : { "path"       : "fc.php",
                         "filters"    : [], 
                         "params"     : {  }
                       },
 
        "title" : "NRG Future Coach",
        "img" : "chrome://foxtrick/content/resources/linkicons/nrg.png"
};

// ArgenStat
stats["argenstat"] =  { 
        "url" : "http://argenstat.com.ar/",
        "leaguelink" : { "path"       : "?V=L",
                         "filters"    : ["countryid"], 
                         "params"     : { "leagueid" : "ID" }
                       },
                       
        "teamlink" : { "path"       : "?V=T",
                         "filters"    : ["countryid"], 
                         "params"     : { "teamid" : "ID" }
                       },
        "countrylink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     :  []
                       },
        
        "countryidranges" : [[7, 7]], 
        "title" : "ArgenStat",
        "img" : "chrome://foxtrick/content/resources/linkicons/argenstat.png"
};

stats["u20schweiz"] =  { 
  "url" : "http://u20schweiz.kicks-ass.net",
  "title" : "U20 Schweiz",
  "img" : "chrome://foxtrick/content/resources/linkicons/u20schweiz.jpg",
  
  "LeagueIDranges" : [[46,46]],
  "LeagueOfficeTypeIDranges" : [[4,4]],
  
  "nationalteamlink" : { "path"     : "",
                         "filters"  : ["LeagueID", "LeagueOfficeTypeID"],
                         "params"   : []
  }
  
};

stats["czechrepublic_nt"] = { 
  "url" : "http://u20.hattrick-cz.com/?pg=submitPlayer",
  "img" : "chrome://foxtrick/content/resources/linkicons/czech_nt_tracker.png",
  "title" : "Cesk� republika U20 & NT Tracker",
  
  "playerlink" : { "path"       : "",
                   "filters"    : ["nationality"], 
                   "params"     : []
                 },

  "nationalteamlink" : { "path"     : "",
                         "filters"  : ["LeagueID"],
                         "params"   : []
                        },
  
  "nationalityranges" : [[52, 52]],
  "LeagueIDranges" : [[52,52]]
  
};

stats["hattrick-cz"] = { 
  "url" : "http://www.hattrick-cz.com/",
  "img" : "chrome://foxtrick/content/resources/linkicons/czech_nt_tracker.png",
  "title" : "hattrick-cz",
  
        "countrylink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     :  []
                       },
        "nationalteamlink" : { "path"       : "",
                         "filters"    : ["countryid"], 
                         "params"     :  []
                       },
        
        "countryidranges" : [[52, 52]] 
};

stats["u20_nt_tracker"] = { 
  "url" : "http://www.c10.ch/ant_db/index.php",
  "img" : "chrome://foxtrick/content/resources/linkicons/nt_tracker.png",
  "title" : "U20 & NT Tracker",
  
  "youthlink" : { "path"       : "?action=player_submit&cat=1",
                   "filters"    : ["countryid"], 
                   "params"     : []
                 },

  "nationalteamlink" : { "path"     : "?action=select_country",
                         "filters"  : ["countryid"],
                         "params"   : {"countryid" : "id"}
                        },  
	  "countryidranges" : [[1,2],[4,200]] 
};



// Gham live
stats["gham"] =  { 
        "url" : "http://hattrickitalia.org/gham/live/",

        "matchlink" : { "path"       : "",
                         "filters"    : [], 
                         "params"     : { "matchid" : "matchId" }
                       },
        
        "title" : "Gham live",
        "img" : "chrome://foxtrick/content/resources/linkicons/gham.png"
};

stats["brasileira"] =  { 
        "url" : "http://www.opendev.com.br/chpp/br/",

        "playerlink" : { "path"       : "",
                         "filters"    : ["nationality"], 
                         "params"     : []
                       },
        
        "nationalityranges" : [[16, 16]],
        "title" : "Estat�sticas da Sele��o Brasileira",
        "img" : "chrome://foxtrick/content/resources/linkicons/brasileira.png"
};   


function getLinks2(stats, stattype, filterparams, doc, overridesettings, module) { 
    var links = [];
    var counter = 0;
    
    for (var key in stats) {

        if (!Foxtrick.isModuleFeatureEnabled(module, key)  && 
			!overridesettings) {
			 continue;
        } 
        var stat = stats[key];
        var statlink = stat[stattype];
        var filters = statlink["filters"];
        
        var allowed = true;
        
        if (filters.length == 0 && (typeof(stat["allowlink"]) == 'undefined')) {
            allowed = true;
        } else {
            if (filters.length > 0) {

              for (var i=0; i<filters.length; i++) {

                var filtertype = filters[i];
                var filterranges = stat[filtertype + "ranges"];
                var temp = false;
     			
                for (var j=0; j<filterranges.length; j++) {
                  if ( (filterparams[filtertype] >= filterranges[j][0]) && (filterparams[filtertype] <= filterranges[j][1])) {
                    temp = true;
                    break;
                  }
                }
                
                if (!temp) {
                  allowed = false;
                  break;
                }
             }
            
           } else {
                if (typeof(stat["allowlink"]) != 'undefined') {
                    if (stat["allowlink"](filterparams, stattype)) {
                        allowed = true;
                    } else {
                        allowed = false;
                    }
                }
            }
        }
        
        if (allowed) {
             var link = foxtrick_makelink(stat, statlink, filterparams, key, doc);
             if (link != null) { 
                links.push({"link" : getLinkElement(link, stat, doc), "stat" : stat});
             }
        }

    }
  return getSortedLinks(links);
}

function getLinks(stattype, filterparams, doc, module) { 
  return getLinks2(foxtrickStatsHash[stattype], stattype, filterparams, doc, false, module);
}

function foxtrick_makelink(stat, statlink, filterparams, key, doc) { 

    var params = statlink["params"];
    var args = "";

    if (typeof (statlink["paramfunction"]) == 'undefined') {
        for (var paramkey in params) {
            var temp;
            
            if ((args == "") && statlink["path"].search(/\?/) == -1 && stat["url"].search(/\?/) == -1) {
                temp = "?";
             } else {
                temp = "&";
             }
			 	
             if (!params[paramkey].charAt(0).match(/\w+/)) {temp="";}
             if (filterparams[paramkey] != null) {
                args += ( (params[paramkey] != "" && temp !="") ? (temp + params[paramkey] + "=") : params[paramkey])+ encodeURIComponent(filterparams[paramkey]);
				}
			else {args += (params[paramkey] != "" ? temp + params[paramkey] : "");}
        }

    } else {
        args = statlink["paramfunction"](filterparams);
    }

    var url=null;

    if (typeof (stat["urlfunction"]) == 'undefined') {
        url = stat["url"];
    } else {
        url = stat["urlfunction"](filterparams);
    }
    
    if (url == null) return null;
    
    var link;
    
    if (typeof(stat["post"]) == 'undefined') {
        link = url + statlink["path"] + args;
    } else {
        var temp = "";
       
        for (var paramkey in params) {
            temp = temp + "-" + params[paramkey] + "-" + filterparams[paramkey];
        }
        
        link = "javascript:document.forms.namedItem('" + key + temp + "').submit();";
  
        var form = doc.createElement("form");
        form.name = key + temp;
        form.action = url + statlink["path"];
        form.method = "post";
        form.target = "_stats";
        form.style.display = "none";

        for (var paramkey in params) {
            var input = doc.createElement("input");
            input.type="hidden";
            input.name=params[paramkey];
            input.value=filterparams[paramkey];
            form.appendChild(input);
        }
        
        doc.getElementsByTagName("body")[0].appendChild(form);
        
    }
    
    return link;    
}


function getLinkElement(link, stat, doc) {

    var statslink = doc.createElement("a");
    if (typeof(stat["post"]) == 'undefined') {
       if (typeof(stat["openinthesamewindow"]) == 'undefined') {
          statslink.target = "_stats";
       }   
    }
    statslink.title = stat.title;
    //statslink.style.verticalAlign = "middle";
    
    if (typeof(stat["img"]) == 'undefined') {
        statslink.appendChild(doc.createTextNode(stat.shorttitle));
     } else {
        var img = doc.createElement("img");
        img.alt = stat.title;
        img.title = stat.title;
        img.style.border="0";
		img.src = stat.img;
        statslink.appendChild(img);
    }
    
    statslink.href = link;

    return statslink;    
    
}

function getSortedLinks(links) {
  function sortfunction(a,b) {
    return a.link.title.localeCompare(b.link.title);
  }
  links.sort(sortfunction);
  return links;
}

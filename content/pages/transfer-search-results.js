/* transfer-search-results.js
 * Utilities on transfer search results page
 * @author convincedd, ryanli
 */

Foxtrick.Pages.TransferSearchResults = {
	isTransferSearchResultsPage : function(doc) {
		return (doc.location.href.indexOf("TransfersSearchResult\.aspx") != -1);
	},

	getPlayerList : function(doc) {
		var players = doc.getElementsByClassName("transferPlayerInfo");
		return a = Foxtrick.map(players, function(playerInfo) {
			var player = {};

			var divs = playerInfo.getElementsByTagName("div");

			// first row - country, name, ID
			player.countryId = Foxtrick.XMLData.getCountryIdByLeagueId(divs[0].getElementsByClassName("flag")[0].href.match(/leagueId=(\d+)/i)[1]);
			player.nameLink = divs[0].getElementsByClassName("transfer_search_playername")[0].getElementsByTagName("a")[0].cloneNode(true);
			player.id = player.nameLink.href.match(/.+playerID=(\d+)/i)[1];
			// first row - bookmark link
			var bookmarkLinks = Foxtrick.filter(divs[0].getElementsByTagName("a"), function(l) {
				return l.href.indexOf("Bookmarks") >= 0;
			});
			if (bookmarkLinks.length > 0)
				player.bookmarkLink = bookmarkLinks[0].cloneNode(true);
			// first row - cards, injury
			player.redCard = 0;
			player.yellowCard = 0;
			player.bruised = false;
			player.injured = false;

			var imgs = divs[0].getElementsByTagName("img");
			for (var i = 0; i < imgs.length; ++i) {
				var img = imgs[i]
				if (img.className == "cardsOne") {
					if (img.src.indexOf("red_card", 0) != -1) {
						player.redCard = 1;
					}
					else {
						player.yellowCard = 1;
					}
				}
				else if (img.className == "cardsTwo") {
					player.yellowCard = 2;
				}
				else if (img.className == "injuryBruised") {
					player.bruised = true;
				}
				else if (img.className == "injuryInjured") {
					player.injured = true;
				}
			}
			// first row - current bid, bidder
			var items = divs[0].getElementsByClassName("transferPlayerInfoItems");
			player.currentBid = Foxtrick.trimnum(items[items.length - 2].textContent);
			if (items[items.length - 1].getElementsByTagName("a").length == 1) {
				player.currentBidderLink = items[items.length - 1].getElementsByTagName("a")[0];
				player.currentBidderLinkShort = player.currentBidderLink.cloneNode(true);
				player.currentBidderLinkShort.textContent = "x";
			}

			// second row - experience, leadership, form
			// they have inserted some empty divs so it's actually divs[3]
			var links = divs[3].getElementsByTagName("a");
			const order = ["experience", "leadership", "form"];
			for (var i = 0; i < order.length; ++i)
				player[order[i]] = Number(links[i].href.match(/ll=(\d+)/)[1]);

			// left info table - owner, age, TSI, speciality, deadline
			var infoTable = playerInfo.getElementsByTagName("table")[0];
			player.currentClubLink = infoTable.rows[0].cells[1].getElementsByTagName("a")[0].cloneNode(true);
			player.ageText = infoTable.rows[1].cells[1].textContent;
			var ageMatch = player.ageText.match(/(\d+)/g);
			player.age = { years: parseInt(ageMatch[0]), days: parseInt(ageMatch[1]) };
			player.tsi = Foxtrick.trimnum(infoTable.rows[2].cells[1].textContent);
			var speciality = Foxtrick.trim(infoTable.rows[3].cells[1].textContent);
			player.speciality = (speciality == "-") ? "" : speciality;
			player.deadline = doc.createElement("span");
			player.deadline.innerHTML = infoTable.rows[4].cells[1].innerHTML;

			// right info table - skills
			var skillTable = playerInfo.getElementsByTagName("table")[1];
			var skills = skillTable.getElementsByTagName("a");
			var skillOrder = ["stamina", "keeper", "playmaking", "passing", "winger", "defending", "scoring", "setPieces"];
			for (var i = 0; i < skillOrder.length; ++i)
				player[skillOrder[i]] = Number(skills[i].href.match(/ll=(\d+)/)[1]);

			return player;
		});
	}
};

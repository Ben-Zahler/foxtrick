Foxtrick.modules["TabsTest"]={
	MODULE_CATEGORY : Foxtrick.moduleCategories.MATCHES,
	PAGES : ['all'],
	OPTIONS: ['tabify'],
	nightly: "This is a proof of concept module. Please report any mayor problems.",
	NICE: 50,
	run : function(doc) {
		if(!Foxtrick.util.tabs.hasTabSupport(doc))
			return;
		Foxtrick.util.tabs.initialize(doc);
		Foxtrick.util.tabs.addHandle(doc, "Main", { alt: "Main", title: "Main", src: "/Img/Icons/cross_small.png"}, "tab-main");
		Foxtrick.util.tabs.addHandle(doc, "Read me", { alt: "Read me", title: "Read me", src: "/Img/Icons/cross_small.png"} , "ft-tab-readme");

		var div = doc.createElement("div");
		div.textContent = this.nightly;
		div.setAttribute("tab", "ft-tab-readme");

		doc.getElementsByTagName("h1")[0].parentNode.appendChild(div);
		Foxtrick.util.tabs.addElementToTab(doc, div, "ft-tab-readme");

		var container = doc.getElementsByTagName("h1")[0].parentNode;
		Foxtrick.log("addMutationEventListener");
		//match report
		Foxtrick.addMutationEventListener(container, "DOMNodeInserted", function(){
			Foxtrick.util.tabs.initialize(doc);
			Foxtrick.util.tabs.tabify(doc);
		}, false);

		Foxtrick.util.tabs.tabify(doc);
		Foxtrick.util.tabs.show(doc, "tab-main");
	}
}
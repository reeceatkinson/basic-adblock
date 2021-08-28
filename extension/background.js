const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://ad.youtube.com/*",
	"*://s.youtube.com/*",
	"*://s0.2mdn.net/*",
	"*://files.adform.net/*",
	"*://doubleclick.net/*",
	"*://ad.doubleclick.net/*",
	"*://ads.doubleclick.net/*",
	"*://ad-g.doubleclick.net/*",
	"*://fls.doubleclick.net/*",
	"*://g.doubleclick.net/*",
	"*://googleads.g.doubleclick.net/*",
	"*://googleads4.g.doubleclick.net/*",
	"*://pubads.g.doubleclick.net/*",
	"*://securepubads.g.doubleclick.net/*",
	"*://stats.g.doubleclick.net/*",
	"*://pagead.l.doubleclick.net/*",
	"*://ad.mo.doubleclick.net/*",
	"*://static.doubleclick.net/*",
	"*://fwmrm.net/*",
	"*://2975c.v.fwmrm.net/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)


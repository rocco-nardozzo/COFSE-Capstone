// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    $w("#back").link = "/member-resources";
	$w("#back").target = "_self";

    $w("#payPal").link = "https://www.paypal.com/webapps/hermes?token=59T17348GY0031610&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1775877447216&flowType=WPS&mfid=1775877446991_c9ea6d6999914";
    $w("#payPal").target = "_blank";

    $w("#venmo").link = "https://account.venmo.com/u/COFSE";
    $w("#venmo").target = "_blank";
});

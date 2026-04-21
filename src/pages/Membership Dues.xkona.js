// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    $w("#back").link = "/member-resources";
	$w("#back").target = "_self";

    $w("#payPal").link = "https://www.paypal.com/ncp/payment/5SFS8Y9J7T57Q";
    $w("#payPal").target = "_blank";

    $w("#venmo").link = "https://account.venmo.com/u/COFSE";
    $w("#venmo").target = "_blank";
});

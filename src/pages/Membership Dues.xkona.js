//Membership Dues Page
//Creates button for PayPal and Venmo

$w.onReady(function () {
    //creates back button
    $w("#back").link = "/member-resources";
	$w("#back").target = "_self";

    //paypal link
    $w("#payPal").link = "https://www.paypal.com/ncp/payment/5SFS8Y9J7T57Q";
    $w("#payPal").target = "_blank";

    //venmo link
    $w("#venmo").link = "https://account.venmo.com/u/COFSE";
    $w("#venmo").target = "_blank";
});

//Past president Bio Page
//Focuses on styling header

$w.onReady(function () {

	//Past president header styling
	const past_pres = $w("#past-pres-header").text;
	$w("#past-pres-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${past_pres}</p>`;

	$w("#back").link = "/about";
	$w("#back").target = "_self";

});
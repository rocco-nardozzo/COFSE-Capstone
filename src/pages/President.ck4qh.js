//President Bio Page
//Focuses on styling header

$w.onReady(function () {
	//President header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const pres = $w("#pres-header").text;
	$w("#pres-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${pres}</p>`;

	//create back button
	$w("#back").link = "/about";
	$w("#back").target = "_self";

});
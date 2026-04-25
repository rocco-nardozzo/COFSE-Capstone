//Past president Bio Page
//Focuses on styling header

$w.onReady(function () {

	//Past President header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const past_pres = $w("#past-pres-header").text;
	$w("#past-pres-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${past_pres}</p>`;

	//create back button
	$w("#back").link = "/about";
	$w("#back").target = "_self";

});
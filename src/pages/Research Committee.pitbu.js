//Research Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
    
    //Research header styling
	const research = $w("#research-header").text;
	$w("#research-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${research}</p>`;

    //duties header styling
    const duties = $w("#duties-header").text;
    $w("#duties-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${duties}</p>`;

    //committee header
    const committee = $w("#committee-header").text;
    $w("#committee-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${committee}</p>`;
});

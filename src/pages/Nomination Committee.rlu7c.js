//Nominating Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
   
    //Higher education header styling
	const nominating = $w("#nominating-header").text;
	$w("#nominating-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${nominating}</p>`;

    //duties header styling
    const duties = $w("#duties-header").text;
    $w("#duties-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${duties}</p>`;

    //committee header
    const committee = $w("#committee-header").text;
    $w("#committee-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${committee}</p>`;
});

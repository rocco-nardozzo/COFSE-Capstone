//Membership and Outreach Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
    
    //Membership and Outreach header styling
	const outreach = $w("#outreach-header").text;
	$w("#outreach-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${outreach}</p>`;

    //duties header styling
    const duties = $w("#duties-header").text;
    $w("#duties-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${duties}</p>`;

    //outreach header styling
    const outreach_sub = $w("#outreach-subheader").text;
    $w("#outreach-subheader").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${outreach_sub}</p>`;

    //committee header
    const committee = $w("#committee-header").text;
    $w("#committee-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${committee}</p>`;
});

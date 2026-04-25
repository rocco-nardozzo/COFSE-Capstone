//COFSE Membership Page
//Responsible for containing info about membership and links to apply or log in

$w.onReady(function () {
    //link color
    const colorBlue = "#87aade";

    //Membership header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
    const membership = $w("#Membership-header").text;
	$w("#Membership-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${membership}</p>`;

    //Full membership header styling: Oswald 22 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const full = $w("#full-member").text;
    $w("#full-member").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold;">${full}</p>`;

    //associate membership header styling: Oswald 22 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const associate = $w("#associate-member").text;
    $w("#associate-member").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold;">${associate}</p>`;

    //retired membership header styling: Oswald 22 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const retired = $w("#retired-member").text;
    $w("#retired-member").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold;">${retired}</p>`;

    //honorary membership header styling: Oswald 22 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const honorary = $w("#honorary-member").text;
    $w("#honorary-member").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold;">${honorary}</p>`;

    //sponsoring membership header styling: Oswald 22 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const sponsoring = $w("#sponsoring-member").text;
    $w("#sponsoring-member").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold;">${sponsoring}</p>`;

    //create back button
    $w("#apply").link = "/membership-application";
	$w("#apply").target = "_self";
});

//Membership and Outreach Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
    
    //Member Outreach header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const outreach = $w("#outreach-header").text;
	$w("#outreach-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${outreach}</p>`;

    //Duties header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const duties = $w("#duties-header").text;
    $w("#duties-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${duties}</p>`;

    //outreach header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const outreach_sub = $w("#outreach-subheader").text;
    $w("#outreach-subheader").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${outreach_sub}</p>`;

    //committee header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const committee = $w("#committee-header").text;
    $w("#committee-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${committee}</p>`;

    //Chair header styling: Oswald 20 point centered italic and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const chair = $w("#chair").text;
    $w("#chair").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline; font-weight: 400;">${chair}</p>`;

    //secretary header styling: Oswald 20 point centered italic and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const secretary = $w("#secretary").text;
    $w("#secretary").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${secretary}</p>`;

    //members header styling: Oswald 20 point centered italic and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const members = $w("#Members").text;
    $w("#Members").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${members}</p>`;

    //creates back button
    $w("#back").link = "/committees";
	$w("#back").target = "_self";

    const colorBlue = "#87aade";
    const fontSize = "18px";
    const fontName = "questrial";

    //creates email address links for all the text that resemble email format
    $w("#info").children.filter(item => item.type === "$w.Text").forEach(element => {
        const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

        if (emailRegex.test(element.text)) {
            emailRegex.lastIndex = 0;

            // @ts-ignore
            element.html = element.html.replace(emailRegex, (match) => {
                return `<a href="mailto:${match}" style="color: ${colorBlue}; font-family: ${fontName}; font-size: ${fontSize};">${match}</a>`;
            });
        }
    });
});

//DDE Committee Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
    
    //DDE header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const dde = $w("#main-header").text;
	$w("#main-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${dde}</p>`;

    //duties header styling: Oswald 24 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
    const duties = $w("#duties-header").text;
    $w("#duties-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${duties}</p>`;

    //committees header styling: Oswald 24 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
    const committee = $w("#committee-header").text;
    $w("#committee-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${committee}</p>`;

    //chair header styling: Oswald 20 point centered, italic, and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const chair = $w("#chair").text;
    $w("#chair").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${chair}</p>`;

    //vice chair header styling: Oswald 20 point centered, italic, and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const viceChair = $w("#vice-chair").text;
    $w("#vice-chair").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${viceChair}</p>`;

    //secretary header styling: Oswald 20 point centered, italic, and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const secretary = $w("#secretary").text;
    $w("#secretary").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${secretary}</p>`;

    //treasurer header styling: Oswald 20 point centered, italic, and underlined
    //OVERRIDES THE STYLING ON EDIT PAGE
    const treasurer = $w("#treasurer").text;
    $w("#treasurer").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${treasurer}</p>`;

    const colorBlue = "#87aade";
    const fontSize = "18px";
    const fontName = "questrial";

    //create back button
    $w("#back").link = "/committees";
	$w("#back").target = "_self";

    //creates email address links for all the text that resemble email format
    $w("#info").children.filter(item => item.type === "$w.Text").forEach(element => {
        const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

        if (emailRegex.test(element.text)) {
            emailRegex.lastIndex = 0;

            //@ts-ignore
            element.html = element.html.replace(emailRegex, (match) => {
                return `<a href="mailto:${match}" style="color: ${colorBlue}; font-family: ${fontName}; font-size: ${fontSize};">${match}</a>`;
            });
        }
    });
});

//CHigher Education Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
    
    //Higher education header styling
	const higher_ed = $w("#higher-ed-header").text;
	$w("#higher-ed-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${higher_ed}</p>`;

    //duties header styling
    const duties = $w("#duties-header").text;
    $w("#duties-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${duties}</p>`;

    //committee header
    const committee = $w("#committee-header").text;
    $w("#committee-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${committee}</p>`;

    const chair = $w("#chair").text;
    $w("#chair").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline; font-weight: 400;">${chair}</p>`;

    const members = $w("#Members").text;
    $w("#Members").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-style: italic; text-decoration: underline;">${members}</p>`;

    const colorBlue = "#87aade";
    const fontSize = "18px";
    const fontName = "questrial";

    $w("#back").link = "/committees";
	$w("#back").target = "_self";

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

//About Page
//Primarily focuses on element styling with css and creating links

$w.onReady(function () {

    //About Us header styling
	const about_us = $w("#About-header").text;
	$w("#About-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${about_us}</p>`;

    //Background header styling
	const background = $w("#background-header").text;
    $w("#background-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${background}</p>`;

    //Objectives header styling
	const objectives = $w("#objectives-header").text;
    $w("#objectives-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${objectives}</p>`;

    //DEI header styling
	const dei = $w("#DEI-header").text;
    $w("#DEI-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${dei}</p>`;

    //Executive board header styling
	const exec = $w("#Exec-header").text;
    $w("#Exec-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${exec}</p>`;

    //Adds blank line after each paragraph in the DEI content
	const dei_content = $w("#DEI-content").text;
	const dei_parts = dei_content.split('\n').join('<br>');

    //DEI content element styling
	$w("#DEI-content").html = `<p style="font-size: 16px; font-family: 'Questrial', sans-serif; color: #546E7A; line-height: 1.75;">${dei_parts}</p>`;
	
    //Links president button to the president page
	$w("#pres-button").link = "/president";
	$w("#pres-button").target = "_self";

    //Links president elect button to the president elect page
	$w("#pres-elect-button").link = "/president-elect";
	$w("#pres-elect-button").target = "_self";

    //Links secretary button to the secretary page
	$w("#secretary-button").link = "/secretary";
	$w("#secretary-button").target = "_self";

    //Links treasurer button to the treasurer page
	$w("#treasurer-button").link = "/treasurer";
	$w("#treasurer-button").target = "_self";

    //Links past president button to the past president page
	$w("#past-president-button").link = "/immediate-past-president";
	$w("#past-president-button").target = "_self";

    //President header styling
	const pres = $w("#pres-header").text;
    $w("#pres-header").html = `<p style="text-align: center;font-size: 16px;font-family: 'Questrial', sans-serif; font-weight: bold;">${pres}</p>`;

    //President elect header styling
	const pres_elect = $w("#pres-elect-header").text;
    $w("#pres-elect-header").html = `<p style="text-align: center;font-size: 16px;font-family: 'Questrial', sans-serif; font-weight: bold;">${pres_elect}</p>`;

    //Secretary header styling
	const secretary = $w("#secretary-header").text;
    $w("#secretary-header").html = `<p style="text-align: center;font-size: 16px;font-family: 'Questrial', sans-serif; font-weight: bold;">${secretary}</p>`;

    //Treasurer header styling
	const treasurer = $w("#treasurer-header").text;
    $w("#treasurer-header").html = `<p style="text-align: center;font-size: 16px;font-family: 'Questrial', sans-serif; font-weight: bold;">${treasurer}</p>`;

    //Past president header styling
	const past_pres = $w("#past-pres-header").text;
    $w("#past-pres-header").html = `<p style="text-align: center;font-size: 16px;font-family: 'Questrial', sans-serif; font-weight: bold;">${past_pres}</p>`;

    //President info styling and email linking
	$w("#pres-box").html = `
        <p style="text-align: center; font-size: 14px; font-family: 'Questrial', sans-serif;">
            Pamela Marshall, Ph.D.<br>
            340 Fisher Hall<br>
            Pittsburgh, PA 15282<br>
            412-396-1703<br>
            <a href="mailto:marshallp@duq.edu" style="color:#87aade;">marshallp@duq.edu</a>
        </p>
    `;

    //President elect info styling and email linking
	$w("#pres-elect-box").html = `
        <p style="text-align: center; font-size: 14px; font-family: 'Questrial', sans-serif;">
            Lyndsie Ferrara, Ph.D.<br>
            339D Fisher Hall<br>
            Pittsburgh, PA 15282<br>
            <a href="mailto:schantzl@duq.edu" style="color:#87aade;">schantzl@duq.edu</a>
        </p>
    `;

    //Secretary info styling and email linking
	$w("#secretary-box").html = `
        <p style="text-align: center; font-size: 14px; font-family: 'Questrial', sans-serif;">
            Andra Lewis, Ph.D.<br>
            100 College Drive<br>
            Allentown, PA 18104<br>
            610-606-4666, ext. 3495
        </p>
    `;

    //Treasurer info styling and email linking
	$w("#treasurer-box").html = `
        <p style="text-align: center; font-size: 14px; font-family: 'Questrial', sans-serif;">
            Cait Porterfield, M.S.<br>
            100 N. University Drive<br>
            Edmond, OK 73034<br>
			405-974-6922<br>
            <a href="mailto:cporterfield@uco.edu" style="color:#87aade;">cporterfield@uco.edu</a>
        </p>
    `;

    //Past President info styling and email linking
	$w("#past-pres-box").html = `
        <p style="text-align: center; font-size: 14px; font-family: 'Questrial', sans-serif;">
            Gina Londino-Smolar, Ed.D.<br>
            402 N. Blackford, LD222<br>
            Indianapolis IN 46202<br>
			317-274-6820<br>
            <a href="mailto:glondino@iupui.edu" style="color:#87aade;">glondino@iupui.edu</a>
        </p>
    `;

    const colorBlue = "#87aade";

    // 2. Define the PDF link string
    const bylaws_pdf = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_c8d9d3c8ae4b46fcbb8b69cda8786247.pdf?filename=COFSE-Bylaws-2022.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">Bylaws</a>`;

    // 3. Define the Email link string
    const emailStr = "cofse.ed@gmail.com";
    const email_link = `<a href="mailto:${emailStr}" style="color: ${colorBlue}; font-weight: bold;">${emailStr}</a>`;

    // 4. Update the content in two clear steps
    let content = $w("#Bylaws").html;
    
    // First swap: {Bylaws} -> PDF Link
    content = content.replace("{Bylaws}", bylaws_pdf);
    
    // Second swap: {email} -> Email Link
    content = content.replace("{email}", email_link);

    // 5. Finalize the element
    $w("#Bylaws").html = content;

});
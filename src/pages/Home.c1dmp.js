//Home Page
//Primarily focuses on element styling with css and creating links

$w.onReady(function () {

    //Journal link information
    const JFSE_text = "Journal of Forensic Science Education";
    const JFSE_url = "https://jfse-ojs-tamu.tdl.org/jfse/index.php/jfse";

    //facebook link information
    const facebook_text = "Facebook";
    const facebook_url = "https://www.facebook.com/COFSE/";

    //linkedIn link information
    const linkedIn_text = "LinkedIn";
    const linkedIn_url = "https://www.linkedin.com/groups/8862549/";

    //email information
    const email_text = "cofse.ed@gmail.com";
    const email_address = "cofse.ed@gmail.com";

    //Journal link and styling
    $w("#JFSE-Link").html = `<p style="text-align: center; font-size:16px;">
        <a href="${JFSE_url}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${JFSE_text}
        </a>
    </p>`;

    //Facebook link and styling
    $w("#facebook-link").html = `<p style="text-align: center; font-size:16px;">
        <a href="${facebook_url}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${facebook_text}
        </a>
    </p>`;

    //LinkedIn link and styling
    $w("#linkedIn-Link").html = `<p style="text-align: center; font-size:16px;">
        <a href="${linkedIn_url}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${linkedIn_text}
        </a>
    </p>`;

    //Email link and styling
    $w("#email-link").html = `<p style="text-align: center; font-size:16px;">
        <a href="mailto:${email_address}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${email_text}
        </a>
    </p>`;

    //Read more button that links to About page
    $w("#about-button").link = "/about";
    $w("#about-button").target = "_self";

    //Our Mission header styling
    const ourMission = $w("#our-mission-header").text;
    $w("#our-mission-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${ourMission}</p>`;

    //President Message styling
    const presMessage = $w("#pres-message-header").text;
    $w("#pres-message-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${presMessage}</p>`;

    //Welcome Header styling
    const welcome = $w("#welcome").text;
    $w("#welcome").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${welcome}</p>`;

    //Resource Header Styling
    const announcements_header = $w("#announcements-header").text;
    $w("#announcements-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${announcements_header}</p>`;

    //Newsletter Header Styling
    const newsletters_header = $w("#newsletter-header").text;
    $w("#newsletter-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${newsletters_header}</p>`;
});
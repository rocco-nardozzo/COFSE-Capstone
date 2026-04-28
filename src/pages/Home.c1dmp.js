//Home Page
//Primarily focuses on element styling with css and creating different links

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

    //JFSE Link styling and linking to JFSE link: 16 point black centered underlined and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    $w("#JFSE-Link").html = `<p style="text-align: center; font-size:16px;">
        <a href="${JFSE_url}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${JFSE_text}
        </a>
    </p>`;

    //Facebook Link styling and linking to JFSE link: 16 point black centered underlined and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    $w("#facebook-link").html = `<p style="text-align: center; font-size:16px;">
        <a href="${facebook_url}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${facebook_text}
        </a>
    </p>`;

    //LinkedIn Link styling and linking to JFSE link: 16 point black centered underlined and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    $w("#linkedIn-Link").html = `<p style="text-align: center; font-size:16px;">
        <a href="${linkedIn_url}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${linkedIn_text}
        </a>
    </p>`;

    //Email Link styling and linking to JFSE link: 16 point black centered underlined and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    $w("#email-link").html = `<p style="text-align: center; font-size:16px;">
        <a href="mailto:${email_address}" target="_blank" style="color: black; text-decoration: underline; font-weight: bold">
            ${email_text}
        </a>
    </p>`;

    //Read more button that links to About page
    $w("#about-button").link = "/about";
    $w("#about-button").target = "_self";

    //Our Mission header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const ourMission = $w("#our-mission-header").text;
    $w("#our-mission-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${ourMission}</p>`;

    //President Message header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const presMessage = $w("#pres-message-header").text;
    $w("#pres-message-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${presMessage}</p>`;

    //Welcome header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
    const welcome = $w("#welcome").text;
    $w("#welcome").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${welcome}</p>`;

    //Announcements header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const announcements_header = $w("#announcements-header").text;
    $w("#announcements-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${announcements_header}</p>`;

    //Our Newsletters header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const newsletters_header = $w("#newsletter-header").text;
    $w("#newsletter-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${newsletters_header}</p>`;

    const colorBlue = "#87aade";
    const fontSize = "20px";
    const fontName = "questrial";

    //AUgust Newsletter linking to pdf
    //Newsletter AUgust styling: questrial 20 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const august = $w("#August-Newsletter").text;
    $w("#August-Newsletter").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 20px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_09d8e837a6aa4539a38d261a5a2cc842.pdf?August-Newsletter.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${august}</a></p>`;
});
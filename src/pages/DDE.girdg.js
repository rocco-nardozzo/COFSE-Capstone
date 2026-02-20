//DDE Page
//Primarily focuses on styling with CSS

$w.onReady(function () {
    
    const dde_header = $w("#Main-DDE-header").text;
	$w("#Main-DDE-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${dde_header}</p>`;

    const mission = $w("#mission-header").text;
    $w("#mission-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${mission}</p>`;

    const chapter = $w("#chapter-header").text;
    $w("#chapter-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${chapter}</p>`;

    const student = $w("#student-header").text;
    $w("#student-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${student}</p>`;

    const constitution = $w("#constitution-header").text;
    $w("#constitution-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${constitution}</p>`;

    const medallions = $w("#medallions-header").text;
    $w("#medallions-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${medallions}</p>`;

    const updates = $w("#updates-header").text;
    $w("#updates-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${updates}</p>`;
});

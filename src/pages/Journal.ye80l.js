//Jorunal Page
//Primarily focuses on header styling and numerous links

$w.onReady(function () {

	//JFSE header styling
	const jfse = $w("#JFSE-header").text;
	$w("#JFSE-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${jfse}</p>`;
	
	//Create link for paragraph 1
	let JFSE_par1HTML = $w("#JFSE-par1").html;
	const par1Link = `<a href="https://jfse-ojs-tamu.tdl.org/jfse/index.php/jfse" target="_blank" style="color:#87aade; font-weight:bold;">The Journal of Forensic Science Education</a>`;
	//Add paragraph 1 link in the correct spot of the paragraph
	$w("#JFSE-par1").html = JFSE_par1HTML.replace("{LINK}", par1Link);

	//Bold the first sentence of paragraph 3
	let JFSE_par3HTML = $w("#JFSE-par3").html;
	const sentence = "We invite you to contribute to the journal.";
	const bold_sentence = `<strong>${sentence}</strong>`;
	$w("#JFSE-par3").html = JFSE_par3HTML.replace(sentence, bold_sentence);

	//Create link for paragraph 5
	let JFSE_par5HTML = $w("#JFSEpar5").html;
	const par5Link = `<a href="https://jfse-ojs-tamu.tdl.org/jfse/index.php/jfse" target="_blank" style="color:#87aade; font-weight:bold;">JFSE website</a>`;
	//Add paragraph 5 link to correct spot
	$w("#JFSEpar5").html = JFSE_par5HTML.replace("{LINK}", par5Link);

	//Create paragraph 6 link
	const JFSEpar6_URL = "https://doaj.org/toc/2641-8533?source=%7B%22query%22%3A%7B%22filtered%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22index.issn.exact%22%3A%5B%222641-8533%22%5D%7D%7D%5D%7D%7D%2C%22query%22%3A%7B%22match_all%22%3A%7B%7D%7D%7D%7D%2C%22size%22%3A100%2C%22sort%22%3A%5B%7B%22created_date%22%3A%7B%22order%22%3A%22desc%22%7D%7D%5D%2C%22_source%22%3A%7B%7D%7D";
	const JFSEpar6_text = "JFSE is now indexed in the the Directory of Open Access Journals (DOAJ).";
	const JFSEpar6_link = `<p style="font-family: 'questrial', sans-serif; font-size: 18px;"><a href="${JFSEpar6_URL}" target="_blank" style="color:#87aade; font-weight:bold;">${JFSEpar6_text}</a></p>`;
	//Add link for paragraph 6 in correct spot
	$w("#JFSE-par6").html = JFSEpar6_link;

	//Manuscript header styling
	const manuscript = $w("#manuscript-header").text;
    $w("#manuscript-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${manuscript}</p>`;

	//Editors header styling
	const editors = $w("#editors-header").text;
    $w("#editors-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${editors}</p>`;

});
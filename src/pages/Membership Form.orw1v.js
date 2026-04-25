//DDE Membership Form Page
//Responsible for containing the membership form that will create a database entry and be sent to DDE president
//only constInputs line may need modified if application fields change

import { fetch } from 'wix-fetch';
import { saveAndEmail } from 'backend/emailService';

$w.onReady(function () {
    //create backup countries for checklist if API is down
    const backupCountries = [
        { "label": "United States", "value": "United States" },
        { "label": "Canada", "value": "Canada" },
        { "label": "United Kingdom", "value": "United Kingdom" },
        { "label": "Australia", "value": "Australia" }
    ];

    //Accesses the REST Countries API to populate countries ckecklist with all countries
    //should not be modified
    fetch("https://restcountries.com/v3.1/all?fields=name", { method: 'get' })
        .then((httpResponse) => {
            if (httpResponse.ok) return httpResponse.json();
            throw new Error("API is down"); 
        })
        //coverts from JSON
        .then((json) => {
            //@ts-ignore
            const countryOptions = json.map(country => ({
                "label": country.name.common,
                "value": country.name.common
            }));
            
            //sorts by alphabetical order
            //@ts-ignore
            countryOptions.sort((a, b) => a.label.localeCompare(b.label));
            $w("#country").options = countryOptions;
        })
        .catch((err) => {
            console.error(err);
            $w("#country").options = backupCountries;
        });

        //actions for when submit button of form is clicked
        $w("#submitButton").onClick(async () => {
            //ADD OR SUBTRACT WITH SAME NAME CREATED IN WIX VELO IF FIELD IS ADDED TO FORM AND DATABASE
            const allInputs = ["#institution", "#streetAddress", "#streetAddress2", "#city", "#state", "#postal", "#country", "#numberStudents", "#fepac", "#degrees", "#programWebsite", "#firstName", "#lastName", "#position", "#email", "#phone", "#date", "#signature"];

            let isFormValid = true;
            //@ts-ignore
            let invalidElement = null;

            //check that all required fields are entered properly
            allInputs.forEach(id => {
            // @ts-ignore
                const element = $w(id);
                
                if (element && !element.valid) {
                    isFormValid = false;
                    //@ts-ignore
                    if (!invalidElement) invalidElement = element;
                    
                    element.updateValidityIndication(); 
                }
            });

            //prevent submission if invalid
            if (!isFormValid) {
                $w("#submitButton").label = "Not Complete";
                setTimeout(() => { $w("#submitButton").label = "Submit"; }, 2000);
                return; 
            }

            $w("#submitButton").disable();
            $w("#submitButton").label = "Submitting...";

            //saves submisison entry to Wix database
            let dataToSave = {};
            allInputs.forEach(id => {
                // @ts-ignore
                const element = $w(id);
                if (element) {
                    const key = id.replace('#', '');
                    //@ts-ignore
                    dataToSave[key] = element.value;
                }
            });

            //saves submission in collection and sends triggered email
            try {
                const result = await saveAndEmail(dataToSave);

                if (result.success) {
                    $w("#submitButton").label = "Submitted!";
                    console.log("Form saved and email sent");
                } else {
                    throw new Error(result.error);
                }
            } catch (err) {
                console.error("Submission failed:", err);
                $w("#submitButton").enable();
                $w("#submitButton").label = "Try Again";
            }
        });

        //create backbutton
        $w("#back").link = "/dde";
	    $w("#back").target = "_self";
});

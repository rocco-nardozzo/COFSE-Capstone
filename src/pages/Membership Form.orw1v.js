import { fetch } from 'wix-fetch';
import { saveAndEmail } from 'backend/emailService';

$w.onReady(function () {
    const backupCountries = [
        { "label": "United States", "value": "United States" },
        { "label": "Canada", "value": "Canada" },
        { "label": "United Kingdom", "value": "United Kingdom" },
        { "label": "Australia", "value": "Australia" }
    ];

    //Accesses the REST Countries API to populate countries ckecklist with all countries
    fetch("https://restcountries.com/v3.1/all?fields=name", { method: 'get' })
        .then((httpResponse) => {
            if (httpResponse.ok) return httpResponse.json();
            throw new Error("API is down"); 
        })
        .then((json) => {
            const countryOptions = json.map(country => ({
                "label": country.name.common,
                "value": country.name.common
            }));
            
            countryOptions.sort((a, b) => a.label.localeCompare(b.label));
            $w("#country").options = countryOptions;
        })
        .catch((err) => {
            console.error(err);
            $w("#country").options = backupCountries;
        });

        $w("#submitButton").onClick(async () => {
            const allInputs = ["#institution", "#streetAddress", "#streetAddress2", "#city", "#state", "#postal", "#country", "#numberStudents", "#fepac", "#degrees", "#programWebsite", "#firstName", "#lastName", "#position", "#email", "#phone", "#date", "#signature"];

            let isFormValid = true;
            let invalidElement = null;

            allInputs.forEach(id => {
            // @ts-ignore
                const element = $w(id);
                
                if (element && !element.valid) {
                    isFormValid = false;
                    if (!invalidElement) invalidElement = element;
                    
                    element.updateValidityIndication(); 
                }
            });

            if (!isFormValid) {
                $w("#submitButton").label = "Not Complete";
                setTimeout(() => { $w("#submitButton").label = "Submit"; }, 2000);
                return; 
            }

            $w("#submitButton").disable();
            $w("#submitButton").label = "Submitting...";

            let dataToSave = {};
            allInputs.forEach(id => {
                // @ts-ignore
                const element = $w(id);
                if (element) {
                    const key = id.replace('#', '');
                    dataToSave[key] = element.value;
                }
            });

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
});

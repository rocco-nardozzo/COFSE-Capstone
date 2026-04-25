//Trigger Bulk Page
//Used to make cofse submission database records a contact when importing current members
//should never have to be used again and page is now hidden
//WILL NOT NEED MODIFIED

import { bulkCreateContacts } from 'backend/cofseEmail';

$w.onReady(function () {
    //when button is clicked, start process of converting 25 records in cofse database to a contact
    $w('#button1').onClick(async () => {
        $w('#button1').disable();
        let totalProcessed = 0;
        let hasMore = true;
        try {
            while (hasMore) {
                const result = await bulkCreateContacts();
                totalProcessed += result.processed;
                hasMore = result.hasMore;
                $w('#statusText').text = `Processed ${totalProcessed} users...`;
            }
            $w('#statusText').text = `Done! ${totalProcessed} contacts created.`;
        } catch (err) {
            //@ts-ignore
            $w('#statusText').text = `Error after ${totalProcessed} records: ${err.message}`;
        }
        $w('#button1').enable();
    });
});
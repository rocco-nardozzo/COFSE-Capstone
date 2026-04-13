import { bulkCreateContacts } from 'backend/cofseEmail';

$w.onReady(function () {
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
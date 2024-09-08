import { scrapeWebPage } from '../lib/scraper';
import { indexContent } from '../lib/llamaindex';
import { storeVectors } from '../lib/qdrant';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrape") {
        const content = scrapeWebPage();
        const vectors = indexContent(content);
        storeVectors(vectors);
    }
});
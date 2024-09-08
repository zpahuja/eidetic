const port = chrome.runtime.connect({ name: "content-script" });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    console.log("Scraping...");
    const pageContent = document.body.innerText;
    console.log("Scraped content:", pageContent.substring(0, 100) + "...");
    sendResponse({ status: "Scraping completed" });
  }
  return true;
});
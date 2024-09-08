chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      try {
        chrome.tabs.sendMessage(tabId, { action: "scrape" }, (response) => {
          if (chrome.runtime.lastError) {
            console.log(`Error: ${chrome.runtime.lastError.message}`);
            setTimeout(() => {
              chrome.tabs.sendMessage(tabId, { action: "scrape" });
            }, 1000);
          } else {
            console.log("Message sent successfully");
          }
        });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  });
  
// Listen for connection from content script
chrome.runtime.onConnect.addListener((port) => {
    console.log("Content script connected");
    port.onDisconnect.addListener(() => {
        console.log("Content script disconnected");
    });
});
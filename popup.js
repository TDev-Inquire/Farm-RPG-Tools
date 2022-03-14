function doPlant(){
    chrome.tabs.executeScript(null, {file: "/PlantHarvest/plant.js"});

    };

function doHarvest(){
    chrome.tabs.executeScript(null, {file: "/PlantHarvest/harvest.js"});
    };

function doAuto(){
    chrome.tabs.executeScript(null, {file: "/PlantHarvest/AutoFarm.js"});
    };
    
function doFish(){
    chrome.tabs.executeScript(null, {file: "/PlantHarvest/fish.js"});
    };
    
    
    document.getElementById("btnPlant").onclick = doPlant;
    document.getElementById("btnHarvest").onclick = doHarvest;
    document.getElementById("btnFish").onclick = doFish;

    if($("#repeat").is(':checked')){
        // Code in the case checkbox is checked.
        function doRepeat(){
            chrome.tabs.executeScript(null, {file: "/PlantHarvest/AutoFarm.js"});
            };
        
   } else {
        // Code in the case checkbox is NOT checked.
   }
     // unchecked
    
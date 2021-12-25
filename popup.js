function doContent(){
    document.querySelector("#crops > div:nth-child(3) > div:nth-child(1) > span > a").click();
    document.querySelector("#crops > div:nth-child(3) > div:nth-child(2) > span > a").click();
    document.querySelector("#crops > div:nth-child(3) > div:nth-child(3) > span > a").click();
    document.querySelector("#crops > div:nth-child(3) > div:nth-child(4) > span > a").click();
    document.querySelector("#crops > div:nth-child(4) > div:nth-child(1) > span > a").click();
    document.querySelector("#crops > div:nth-child(4) > div:nth-child(2) > span > a").click();
    document.querySelector("#crops > div:nth-child(4) > div:nth-child(3) > span > a").click();
    document.querySelector("#crops > div:nth-child(4) > div:nth-child(4) > span > a").click();

    };

function doTarget(){
        document.querySelector("#crops > div:nth-child(3) > div:nth-child(1) > img").click();
        document.querySelector("#crops > div:nth-child(3) > div:nth-child(2) > img").click();
        document.querySelector("#crops > div:nth-child(3) > div:nth-child(3) > img").click();
        document.querySelector("#crops > div:nth-child(3) > div:nth-child(4) > img").click();
        document.querySelector("#crops > div:nth-child(4) > div:nth-child(1) > img").click();
        document.querySelector("#crops > div:nth-child(4) > div:nth-child(2) > img").click();
        document.querySelector("#crops > div:nth-child(4) > div:nth-child(3) > img").click();
        document.querySelector("#crops > div:nth-child(4) > div:nth-child(4) > img").click();
    };
    
    document.getElementById("btnSource").onclick = doContent;
    document.getElementById("btnTarget").onclick = doTarget;

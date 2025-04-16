let getLocationBtn = document.querySelector("#getLocationBtn");

getLocationBtn.addEventListener("click" , ()=> {
    window.open('https://maps.app.goo.gl/XbBfTEhdz93XLFGR6', '_blank')
})

let noOffersDownloadBtn = document.getElementById("noOffersDownloadBtn");
let noOffersShowBtn = document.getElementById("noOffersShowBtn");

noOffersDownloadBtn.addEventListener("click" , ()=> {
    window.alert(" ❌ No Offers Today for Max's to show, Come After 8:00 AM Tomorrow")
})
noOffersShowBtn.addEventListener("click" , ()=> {
    window.alert(" ❌ No Offers Today for Max's to download, Come After 8:00 AM Tomorrow")
})
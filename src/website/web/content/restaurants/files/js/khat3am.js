let getLocationBtn = document.querySelector("#getLocationBtn");

getLocationBtn.addEventListener("click" , ()=> {
    window.open('https://maps.app.goo.gl/75X5zGuypECcHhfD9', '_blank')
})

let noOffersDownloadBtn = document.getElementById("noOffersDownloadBtn");
let noOffersShowBtn = document.getElementById("noOffersShowBtn");

noOffersDownloadBtn.addEventListener("click" , ()=> {
    window.alert(" ❌ No Offers Today for Khat3am to download, Come After 8:00 AM Tomorrow")
})
noOffersShowBtn.addEventListener("click" , ()=> {
    window.alert(" ❌ No Offers Today for Khat3am to show, Come After 8:00 AM Tomorrow")
})
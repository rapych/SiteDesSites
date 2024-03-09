
function filterWebsites() {
    const filter = document.getElementById("search-bar").value.toUpperCase();
    const websites = document.getElementsByClassName("website-card");

    for (i=0; i < websites.length; i++) {
        const websiteName = websites[i].getElementsByClassName("website-title")[0].innerHTML.toUpperCase();
        
        if (websiteName.includes(filter)) {
            websites[i].classList.remove("hidden")
        } else if (filter === ""){
            websites[i].classList.remove("hidden")
        } else {
            websites[i].classList.add("hidden")
        }
    }
}
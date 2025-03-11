function toggleInfo() {
    var info = document.getElementById("extraInfo");
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
    } else {
        info.classList.add("hidden");
    }
}
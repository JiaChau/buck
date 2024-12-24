function navigateTo(sectionId) {
    document.querySelectorAll("body > div").forEach((section) => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

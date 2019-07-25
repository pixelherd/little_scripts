document.addEventListener('DOMContentLoaded', () => {
    let date = new Date();
    const pageState = {};
    const nodes = Array.from(document.querySelectorAll(".rNode"));
    pageState["scripts"] = nodes.map(node => JSON.parse(node.getAttribute('data')));
    let existing_scripts = localStorage["scripts"] ? JSON.parse(localStorage["scripts"]) : {};
    localStorage["scripts"] = JSON.stringify(pageState["scripts"]);
    console.log(existing_scripts);
});
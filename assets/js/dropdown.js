
function openDropdown() {
    document.getElementById('custom-options').style.display = 'block';
}
function selectOption(value) {
    openCategoryModal()
    document.getElementById('custom-options').style.display = 'none';
    document.getElementById("selected-option").innerHTML = value;
}
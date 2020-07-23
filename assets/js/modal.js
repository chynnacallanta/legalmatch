function openCategoryModal() {
    document.documentElement.style.overflow = 'hidden';
    document.getElementById('category-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closeCategoryModal() {
    document.documentElement.style.overflow = 'auto';
    document.getElementById('category-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
function openReviewModal() {
    document.documentElement.style.overflow = 'hidden';
    document.getElementById('clientreview-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closeReviewModal() {
    document.documentElement.style.overflow = 'auto';
    document.getElementById('clientreview-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
function openOtherModal() {
    document.documentElement.style.overflow = 'hidden';
    document.getElementById('other-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closeOtherModal() {
    document.documentElement.style.overflow = 'auto';
    document.getElementById('other-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
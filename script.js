function showplan(){
    document.querySelectorAll('#plans_normal, #hidenormal').forEach(element => {
        element.style.display = 'flex';
    });
    document.querySelectorAll('#plans_vip, #shownormal').forEach(element => {
        element.style.display = 'none';
    });
}
function hideplan() {
    document.querySelectorAll('#plans_normal, #hidenormal').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelectorAll('#plans_vip, #shownormal').forEach(element => {
        element.style.display = 'flex';
    });
}
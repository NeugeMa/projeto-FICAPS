// Criação de Cards 
function toggleCardText(event) {
    event.preventDefault();
    const link = event.target;
    const hiddenText = link.nextElementSibling;
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}


// Eventos de clique nos botões para troca de conteúdo 
function switchContent() {
    const dropdown = document.getElementById('contentDropdown');
    const selectedValue = dropdown.value;

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === selectedValue) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}
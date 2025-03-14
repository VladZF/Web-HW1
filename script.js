function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.getElementById('nav-' + sectionId).classList.add('active');
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// YENİ FİLTRELEME FONKSİYONU
function filterProjects(category) {
    const projects = document.querySelectorAll('.details-container');
    
    // Tüm projeler üzerinde döngü yap
    projects.forEach(project => {
        // Eğer kategori 'all' ise veya projenin ilgili kategori sınıfı varsa göster
        if (category === 'all' || project.classList.contains('category-' + category)) {
            project.style.display = 'flex'; 
        } else {
            project.style.display = 'none'; // Aksi halde gizle
        }
    });

    // Butonun aktif görünmesini sağlamak için
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.classList.remove('active-filter');
    });
    // Tıklanan butona 'active-filter' sınıfını ekle
    document.querySelector(`[onclick="filterProjects('${category}')"]`).classList.add('active-filter');
}
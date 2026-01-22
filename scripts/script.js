function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function filterProjects(category) {
    const projects = document.querySelectorAll('.details-container');


    projects.forEach(project => {

        if (category === 'all' || project.classList.contains('category-' + category)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none'; // Aksi halde gizle
        }
    });


    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.classList.remove('active-filter');
    });

    document.querySelector(`[onclick="filterProjects('${category}')"]`).classList.add('active-filter');
}

// Vaulty Lightbox Functions
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
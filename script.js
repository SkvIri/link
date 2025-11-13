// Создание кнопок из конфигурации
document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем данные из siteConfig
    document.querySelector('h1').textContent = siteConfig.name;
    document.querySelector('.description').textContent = siteConfig.description;
    document.querySelector('.footer').textContent = siteConfig.footer;
    document.title = `${siteConfig.name} - Социальные сети`;

    const linksGrid = document.querySelector('.links-grid');

    // Очищаем существующие кнопки
    linksGrid.innerHTML = '';

    // Создаем кнопки из конфигурации
    buttonsConfig.forEach((button, index) => {
        const pillButton = document.createElement('a');
        pillButton.href = button.url;
        pillButton.className = "pill-button";
        pillButton.style.animationDelay = `${0.1 + index * 0.1}s`;

        // Если ссылка "none", добавляем обработчик ошибки
        if (button.url === "none") {
            pillButton.href = "#";
            pillButton.onclick = function(e) {
                e.preventDefault();
                showErrorModal();
            };
        } else {
            pillButton.target = "_blank";
            pillButton.rel = "noopener noreferrer";
        }

        pillButton.innerHTML = `
            <span class="pill-icon">${button.icon}</span>
            <span class="pill-text">${button.name}</span>
        `;

        linksGrid.appendChild(pillButton);
    });

    // Создаем галерею проектов
    createProjectsGallery();

    // Анимация появления (убрал дублирование)
    const elements = document.querySelectorAll('.profile, .pill-button, .project-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }, 100);
});

// Функция создания галереи проектов
function createProjectsGallery() {
    const projectsSection = document.getElementById('projects-section');
    if (!projectsSection) return;

    const projectsGrid = projectsSection.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    projectsConfig.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Генерируем HTML для ссылок проекта с проверкой на "none"
        const linksHTML = project.links.map(link => {
            if (link.url === "none") {
                return `<a href="#" class="project-link" onclick="event.preventDefault(); showErrorModal();">${link.name}</a>`;
            } else {
                return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">${link.name}</a>`;
            }
        }).join('');

        projectCard.innerHTML = `
            <div class="project-status status-${project.status}">
                ${getStatusText(project.status)}
            </div>
            <div class="project-image">
                ${project.image ?
                    `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">` :
                    '🛠️'
                }
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${linksHTML}
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

function getStatusText(status) {
    const statusMap = {
        'released': 'Выпущен',
        'development': 'В разработке',
        'planned': 'Запланирован'
    };
    return statusMap[status] || status;
}

// Функция показа модального окна ошибки
function showErrorModal() {
    const modal = document.getElementById('errorModal');

    // Убираем класс анимации закрытия если он есть
    modal.classList.remove('closing');

        // Показываем модалку
        modal.classList.add('active');
    }

    // Функция закрытия модального окна с анимацией
    function closeErrorModal() {
        const modal = document.getElementById('errorModal');

        // Добавляем класс для анимации закрытия
        modal.classList.add('closing');

        // Ждем завершения анимации и скрываем модалку
        setTimeout(() => {
            modal.classList.remove('active', 'closing');
        }, 300); // Время должно совпадать с длительностью анимации
    }

    // Закрытие модального окна при клике вне его
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('errorModal');
        if (e.target === modal && modal.classList.contains('active')) {
            closeErrorModal();
        }
    });

    // Закрытие модального окна по Escape
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('errorModal');
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeErrorModal();
        }
    });
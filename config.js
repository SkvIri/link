// Основная конфигурация сайта
const siteConfig = {
    name: "SkvIri",
    description: "Добро пожаловать на мою страницу с ссылками на социальные сети. Подписывайтесь и следите за обновлениями!",
    footer: "© 2025 SkvIri. Все права защищены."
};


// Конфигурация кнопок
const buttonsConfig = [
    {
        name: "Discord",
        url: "https://discord.com/users/712281090848587807",
        icon: "💬"
    },
    {
        name: "Steam",
        url: "none",
        icon: "🎮"
    },
    {
        name: "YouTube",
        url: "none",
        icon: "📺"
    },
    {
        name: "GitHub",
        url: "none",
        icon: "💻"
    },
    {
        name: "Telegram",
        url: "none",
        icon: "✈️"
    },
    {
        name: "Twitch",
        url: "none",
        icon: "👾"
    }
];

// Конфигурация проектов
const projectsConfig = [
    {
        id: 1,
        title: "KNGT Admin",
        description: "Технический админ сообщества KNGT",
        image: "image/kgnt.png",
        tags: ["Minecraft", "Fabric", "Java"],
        links: [],
        status: "released"
    },
    {
        id: 2,
        title: "Свой сервер",
        description: "Засекречено!",
        image: "image/cs_server.png",
        tags: ["Minecraft", "Velocity", "Paper", "Java"],
        links: [
            { name: "Discord", url: "none" }
        ],
        status: "development"
    }
];
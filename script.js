// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Load GitHub Repositories on Page Load
// ===================================
document.addEventListener("DOMContentLoaded", function() {
    loadGitHubRepos();
});

// ===================================
// GitHub Repositories Loading Function
// ===================================
async function loadGitHubRepos() {
    const reposContainer = document.getElementById("github-repos");

    // Static repository data (customize with your actual repos)
    const staticRepos = [
        {
            name: "Agentic-RAG",
            description: "Advanced agentic RAG system with multi-agent architecture for intelligent document retrieval and question answering.",
            html_url: "https://github.com/Alpyaman/Agentic-RAG",
            language: "Python",
            topics: ["rag", "langchain", "ai-agents", "llm"],
            stargazers_count: 0
        },
        {
            name: "RAG-Document-Assistant",
            description: "Intelligent document assistant powered by RAG technology for context-aware document analysis and Q&A.",
            html_url: "https://github.com/Alpyaman/RAG-Document-Assistant",
            language: "Python",
            topics: ["rag", "document-processing", "nlp", "vector-db"],
            stargazers_count: 0
        },
        {
            name: "ecommerce-data-scraper",
            description: "Scalable web scraping solution for e-commerce platforms with data extraction and analysis capabilities.",
            html_url: "https://github.com/Alpyaman/ecommerce-data-scraper",
            language: "Python",
            topics: ["web-scraping", "selenium", "beautifulsoup", "data-extraction"],
            stargazers_count: 0
        },
        {
            name: "Automated_Trading_System",
            description: "PPO agent model for cryptocurrency trading using stable-Baselines3, achieving 68% annual return.",
            html_url: "https://github.com/Alpyaman/Automated_Trading_System",
            language: "Python",
            topics: ["reinforcement-learning", "crypto-trading", "PPO"],
            stargazers_count: 0
        },
        {
            name: "Sales_Forecasting_Project",
            description: "Retail sales forecasting model built using LightGBM with advanced feature engineering.",
            html_url: "https://github.com/Alpyaman/Sales_Forecasting_Project",
            language: "Python",
            topics: ["lightgbm", "time-series", "sales-forecasting"],
            stargazers_count: 0
        },
        {
            name: "Plant_Disease_Classifier",
            description: "Deep learning image classification to detect 15 plant diseases using MobileNetV2 Transfer Learning.",
            html_url: "https://github.com/Alpyaman/Plant_Disease_Classifier",
            language: "Python",
            topics: ["deep-learning", "cnn", "image-classification"],
            stargazers_count: 0
        },
        // The GitHub API fetch will load actual repos, these serve as robust fallbacks
    ];

    // Try to fetch from GitHub API, fallback to static data
    try {
        const response = await fetch('https://api.github.com/users/Alpyaman/repos?sort=updated&per_page=6');

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const repos = await response.json();

        if (Array.isArray(repos) && repos.length > 0 && !repos.message) {
            displayRepos(repos);
        } else {
            displayRepos(staticRepos);
        }
    } catch (error) {
        console.log('Using static repository data');
        displayRepos(staticRepos);
    }
}

// ===================================
// Display Repositories Function
// ===================================
function displayRepos(repos) {
    const reposContainer = document.getElementById("github-repos");
    reposContainer.innerHTML = '';

    // Filter out forks if you want to show only original repos
    const filteredRepos = repos.filter(repo => !repo.fork);
    const displayRepos = filteredRepos.length > 0 ? filteredRepos.slice(0, 6) : repos.slice(0, 6);

    displayRepos.forEach(repo => {
        const repoCard = document.createElement("div");
        repoCard.className = "project-card";

        const repoName = document.createElement("h3");
        repoName.textContent = repo.name;

        const repoDesc = document.createElement("p");
        repoDesc.textContent = repo.description || "A Machine Learning or Engineering project by Alp Yaman.";

        const repoMeta = document.createElement("div");
        repoMeta.className = "repo-meta";

        if (repo.language) {
            const language = document.createElement("span");
            language.className = "repo-language";
            language.textContent = repo.language;
            repoMeta.appendChild(language);
        }

        if (repo.stargazers_count > 0) {
            const stars = document.createElement("span");
            stars.className = "repo-stars";
            stars.textContent = `⭐ ${repo.stargazers_count}`;
            repoMeta.appendChild(stars);
        }

        const repoLink = document.createElement("a");
        repoLink.href = repo.html_url;
        repoLink.textContent = "View on GitHub →";
        repoLink.className = "repo-link";
        repoLink.setAttribute("target", "_blank");

        repoCard.appendChild(repoName);
        repoCard.appendChild(repoDesc);
        repoCard.appendChild(repoMeta);
        repoCard.appendChild(repoLink);

        reposContainer.appendChild(repoCard);
    });
}

// ===================================
// Active Navigation State on Scroll
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
# 🚀 Alpyaman's Portfolio
 
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://alpyaman.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
 
> Personal portfolio website showcasing my projects, skills, and contributions to software development.
 
## 🌐 Live Website
 
Visit my portfolio at: **[alpyaman.github.io](https://alpyaman.github.io)**
 
## ✨ Features
 
- **Modern & Responsive Design** - Beautiful UI that works perfectly on all devices
- **Dynamic GitHub Integration** - Automatically displays my latest repositories using GitHub API
- **Smooth Animations** - Engaging user experience with smooth scrolling and transitions
- **Project Showcase** - Highlights my best work and open-source contributions
- **Skills & Technologies** - Interactive display of my technical expertise
- **SEO Optimized** - Proper meta tags for better search engine visibility
 
## 🛠️ Technologies Used
 
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with custom properties, flexbox, and grid
- **JavaScript** - Dynamic content loading and interactive features
- **GitHub Pages** - Free hosting and deployment
- **GitHub API** - Real-time repository data fetching
 
## 📂 Project Structure
 
```
alpyaman.github.io/
├── index.html          # Main HTML file with all sections
├── style.css           # Comprehensive styling and responsive design
├── README.md           # This file
└── Homeworks/          # Legacy homework files (archived)
```
 
## 🎨 Sections
 
### Hero Section
Eye-catching introduction with gradient background and call-to-action buttons.
 
### About Me
Professional summary highlighting my focus areas and interests in software development.
 
### Projects
Dynamic showcase of my GitHub repositories with:
- Repository name and description
- Programming language badges
- Star count (when available)
- Direct links to GitHub
 
### Skills & Technologies
Organized display of:
- **Languages**: C++, Python, JavaScript, HTML/CSS
- **Tools**: Git, GitHub, VS Code, Linux
- **Focus Areas**: Algorithms, Data Structures, Problem Solving, System Programming
 
### Contact
Links to connect with me on GitHub and other platforms.
 
## 🚀 Local Development
 
To run this portfolio locally:
 
1. **Clone the repository**
   ```bash
   git clone https://github.com/alpyaman/alpyaman.github.io.git
   cd alpyaman.github.io
   ```
 
2. **Open in browser**
   ```bash
   # On macOS
   open index.html
 
   # On Linux
   xdg-open index.html
 
   # On Windows
   start index.html
   ```
 
3. **Or use a local server** (recommended)
   ```bash
   # Using Python
   python -m http.server 8000
 
   # Using Node.js (with http-server)
   npx http-server
   ```
 
   Then visit `http://localhost:8000` in your browser.
 
## 🔄 Updating Content
 
### Adding New Projects
 
Projects are automatically fetched from your GitHub account. To highlight specific projects:
 
1. Add good descriptions to your GitHub repositories
2. Use relevant topics/tags on GitHub
3. Star your important projects
4. Make repositories public
 
Or manually add projects in `index.html` at line 166 in the `staticRepos` array:
 
```javascript
const staticRepos = [
    {
        name: "project-name",
        description: "Project description",
        html_url: "https://github.com/alpyaman/project-name",
        language: "C++",
        stargazers_count: 0
    },
    // Add more projects here
];
```
 
### Updating Skills
 
Edit the skills section in `index.html` (lines 82-112) to add or remove skills:
 
```html
<span class="skill-tag">New Skill</span>
```
 
### Customizing Colors
 
Colors are defined in `style.css` using CSS custom properties (lines 4-16):
 
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #06b6d4;
    /* Modify these to change the color scheme */
}
```
 
## 📱 Responsive Design
 
The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px
 
## ♿ Accessibility
 
- Semantic HTML5 elements
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Reduced motion support for users with motion sensitivity
- Alt text for icons (via SVG)
- ARIA-friendly navigation
 
## 🎯 Performance
 
- Minimal dependencies (vanilla JavaScript)
- Optimized CSS with reusable custom properties
- Lazy loading for GitHub API calls
- Fallback to static data if API fails
- Efficient animations using CSS transforms
 
## 📈 Future Enhancements
 
- [ ] Add blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add more social media links (LinkedIn, Twitter, etc.)
- [ ] Include project case studies
- [ ] Add contact form
- [ ] Implement analytics
- [ ] Add resume/CV download option
- [ ] Create a projects filter by technology
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
 
## 🤝 Contributing
 
While this is a personal portfolio, suggestions and improvements are welcome!
 
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
 
## 📬 Contact
 
- **GitHub**: [@alpyaman](https://github.com/alpyaman)
- **Website**: [alpyaman.github.io](https://alpyaman.github.io)
 
---
 
⭐ **Star this repository if you find it helpful!**
 
Built with ❤️ by Alpyaman | © 2025 All rights reserved
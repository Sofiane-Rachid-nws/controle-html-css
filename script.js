// Ajouter un événement pour basculer entre les thèmes clair et sombre
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Dark Mode';
toggleThemeButton.classList.add('theme-toggle');
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '20px';
toggleThemeButton.style.right = '20px';
toggleThemeButton.style.padding = '10px';
toggleThemeButton.style.width = '50px';
toggleThemeButton.style.height = '50px';
toggleThemeButton.style.borderRadius = '50%';
toggleThemeButton.style.cursor = 'pointer';
toggleThemeButton.style.backgroundColor = '#4CAF4F';
toggleThemeButton.style.color = '#fff';
toggleThemeButton.style.border = 'none';
document.body.appendChild(toggleThemeButton);

const toggleTheme = () => {
    // Basculer entre les classes "dark-mode" et "light-mode"
    document.body.classList.toggle('dark-mode');

    // Modifier le texte du bouton en fonction du thème actif
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'L';
        toggleThemeButton.style.backgroundColor = '#333';
    } else {
        toggleThemeButton.textContent = 'D';
        toggleThemeButton.style.backgroundColor = '#4CAF4F';
    }
};

toggleThemeButton.addEventListener('click', toggleTheme);

// Styles pour le mode sombre
document.head.insertAdjacentHTML('beforeend', `
<style>
  .dark-mode {
      background-color: #121212;
      color: #e0e0e0;
  }

  .dark-mode a {
      color: #90caf9;
  }

  .dark-mode .header {
      background-color: #1e1e1e;
  }

  .dark-mode .card {
      background-color: #2c2c2c;
      color: #e0e0e0;
  }

  .dark-mode footer {
      background-color: #1e1e1e;
  }

  .dark-mode .footer-noir {
      background-color: #000;
  }
</style>
`);

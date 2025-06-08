// Alternar tema claro/escuro
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
    
// Atualizar ícone
  if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('darkTheme', 'true');
  } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('darkTheme', 'false');
  }
});

//Alternar tema claro/escuro com botão
function addDarkTheme(){
    corpo.className = ""; //limpando as classes anteriores
    // adiciono a classe dark, igual q  ue já está criada no CSS
    corpo.classList.add("dark");
}

function removeDarkTheme(){
    corpo.className = "";
    corpo.classList.add("white");
}
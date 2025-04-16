// Variaveis 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoProjetosMobile = document.querySelector('.btn-mostrar-projetos-mobile');
const projetosMobileInativos = document.querySelectorAll('.projeto:not(.mobile-ativo)');
const botaoProjetosWebInativos = document.querySelector('.btn-mostrar-projetos-web')
const projetosWebInativos = document.querySelectorAll('.projeto:not(.web-ativo)')

// Função ForEach
botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.innerHTML === "Mostrar Menos") {
        projetosInativos.forEach(projetoInativo => {
            projetoInativo.classList.remove('ativo');
            projetoInativo.classList.remove('mobile-ativo');
            projetoInativo.classList.remove('web-ativo');
        });
        botaoMostrarProjetos.innerHTML = "Mostrar Todos os Projetos";
    } else {
        projetosInativos.forEach(projetoInativo => {
            projetoInativo.classList.add('ativo');
            projetoInativo.classList.add('mobile-ativo');
            projetoInativo.classList.add('web-ativo');
        });
        botaoMostrarProjetos.innerHTML = "Mostrar Menos";
    }
});


botaoProjetosMobile.addEventListener('click', () => {
    projetosMobileInativos.forEach((projetosMobileInativo, index)  => {
        if(index < 4) {
            projetosMobileInativo.classList.add('mobile-ativo');
        }
    })
});

botaoProjetosWebInativos.addEventListener('click', () => {
    projetosWebInativos.forEach((projetosWebInativo, index)  => {
        if(index >= 4) {
            projetosWebInativo.classList.add('web-ativo');
        }
    })
});

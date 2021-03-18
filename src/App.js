import React, { useState } from 'react';

import './App.css';

import Header from '../../public/Header';

function App() {
const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);  

// useState retorna um array com 2 posições
// 1. Variável com seu valor inicial
//2. Função para atualizarmos esse valor

function handleAddProject() {
  //projects.push(`Novo projeto ${Date.now()}`);

// ...(copiando tudo que ja tem dentro de projects)
// e adicionamos o novo projeto no final (Imutabilidade)
  setProjects([...projects, `Novo projeto ${Date.now()}`]);

}
  
  return ( 
    <>
     <Header title="Projects" />

     <ul>
       {projects.map(project => <li key={project}>{project}</li>)}
     </ul>

     <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    );
}

export default App;
 
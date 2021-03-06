import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
const [projects, setProjects] = useState([]);  

// Vamos buscar nossos dados da api 
// then = quando isso me retornar uma resposta, eu vou ter disponivel no meu response 
// damos um console log nele para ver qual o formato dessa resposta 
useEffect(() => {
  api.get('/projects').then(response => {
    setProjects(response.data);
  })
}, []);

async function handleAddProject() {
 //setProjects([...projects, `Novo projeto ${Date.now()}`]);

 const response = await api.post('projects', {
  title: `Novo projeto ${Date.now()}`,
  owner: "Diego Fernandes"
 });

 const project = response.data;

 setProjects([ ...projects, project]);

}
  
  return ( 
    <>
     <Header title="Projects" />
     <ul>
       {projects.map(project => <li key={project.id}>{project.title}</li>)}
     </ul>

     <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    );
}

export default App;
 
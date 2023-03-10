Projeto criado para fins educacionais.

## ANOTAÇÕES PARA ESTUDO

-------> iniciando projeto em react.js (disponível no site: https://create-react-app.dev/docs/getting-started/)
-> para se iniciar um projeto em React devemos ir até o nosso terminal e navegar até a pasta (C:/projetos) onde vamos criar o projeto.
-> para se inicializar um projeto em react devemos devemos usar no nosso terminal o code npx create-react-app my-app (em lugar de my-app colocar o nome do nosso projeto)
->após isso vamos navegar até nossa pasta do projeto (cd my-app) e daremos um npm start para iniciar nosso projeto.

---> no caso desse projeto usaremos o BootStrap então faremos o download dele também com o code npm install react-bootstrap bootstrap (disponível no site: https://react-bootstrap.github.io/getting-started/introduction/)

## CÓDIGOS ENTENDIDOS

-> código de imagem: <img src={} alt="NOSSO TEXTO ALTERNATIVO CASO A IMAGEM NÃO APAREÇA" />
src={nossa variável que declaramos para trazer nossa imagem} -> no caso seria logo src={logo}
import logo from "../assets/img/logo.svg";

-> código button: <button className="vvd" onClick={() => console.log("connect")}> </button>
temos nossa classe 'vvd' que em react se denomina className, nossa tag button continua a mesma representada no HTML. onClick representa que ao clicarmos no botão irá aparecer no console a palavra "connect"

-> código link (âncora): <a href="#"></a>
Tag que faz âncoragem com a web, adicionamos links para ser direcionados para algum lugar. A mesma tag do HTML.

-> código <Nav.Link></Nav.link> : A <NavLink> é um tipo especial de <Link> que sabe se está ou não "ativo" ou "pendente". Isso é útil ao criar um menu de navegação, como uma trilha de navegação ou um conjunto de guias onde você gostaria de mostrar qual delas está selecionada no momento. Ele também fornece um contexto útil para tecnologias assistivas, como leitores de tela.

-> código de importação:
----- import { exemplo1, exemplo2} from "..."; ou

-----import exemplo3 from "../pasta1/pasta2/nome do arquivo"

import { useState, useEffect } from "react" -> neste exemplos fazemos uma importação do react. O useState nos permite criar estados em um componente criado a partir de uma função, assim como o state presente em componentes criados a partir de classes. Usamos o hook useEffect para controlar os side-effects da requisição HTTP fetch() que fizemos, após a chamada, há uma mudança de estado dentro da nossa aplicação, pois ela passa a ter os dados vindos da API que antes não tinha.

import { Navbar, Container, Nav } from "react-bootstrap" -> fazemos importação de alguns layout do bootstrap, exemplo navbar.

import logo from "../assets/img/logo.svg" -> importando imagem para meu projeto de outra pasta.

NavBar.js -> erros que cometi no meu primeiro código:--------

import { useState, useEffect } from "react"
import { NavBar, Container, Nav } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export const NavBar = () => {
const [activeLink, setActiveLink] = useState("home")
const [scrolled, seScrolled] = useState(false)

useEffect(() => {
const onScroll = () => {
if (window.scrollY > 50) {
seScrolled(true)
} else {
seScrolled(false)
}
}

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)

}, [])

const onUpdateActiveLink = (value) => {
setActiveLink(value)
}

return (
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
<Container>
<Navbar.Brand href="#home">
<img src={logo} alt="Logo" />
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav">
<span className="navbar-toggler-icon"></span>
</Navbar.Toggle>
<Navbar.Collapse id="basic-navbar-nav">

<Nav className="me-auto">
<Nav.Link
href="#home"
className={
activeLink === "home" ? "active navbar-link" : "navbar-link"
}
onClick={() => onUpdateActiveLink("home")} >
Home
</Nav.Link>
<Nav.Link
href="#skills"
className={
activeLink === "skills" ? "active navbar-link" : "navbar-link"
}
onClick={() => onUpdateActiveLink("skills")} >
Skills
</Nav.Link>
<Nav.Link
href="#projects"
className={
activeLink === "projects" ? "active navbar-link" : "navbar-link"
}
onClick={() => onUpdateActiveLink("projects")} >
Projects
</Nav.Link>
</Nav>
<span className="navbar-text">
<div className="social-icon">
<a href="#">
<img src={navIcon1} alt="" />
</a>
<a href="#">
<img src={navIcon2} alt="" />
</a>
<a href="#">
<img src={navIcon3} alt="" />
</a>
</div>
<button className="vvd" onClick={() => console.log("connect")}>
<span>Let's Connect</span>
</button>
</span>
</Navbar.Collapse>
</Container>
</Navbar>
)
}

Fiz as seguintes modificações no código:

1.Alterei o nome do componente de NavBar para CustomNavBar, já que o nome NavBar já está sendo utilizado pelo componente importado do react-bootstrap.

2.Adicionei a importação do componente Navbar do react-bootstrap.

3.Corrigi um erro de digitação na declaração do estado scrolled, onde estava escrito seScrolled em vez de setScrolled.

4.Alterei o nome da função onUpdateActiveLink para updateActiveLink, seguindo a convenção de nomenclatura de funções em JavaScript.

5.Corrigi a referência ao componente Navbar na declaração do componente CustomNavBar, utilizando o nome correto importado do react-bootstrap.

6.Adicionei a chave key para cada Nav.Link para evitar um aviso de renderização do React.
7.Adicionei a propriedade title para cada Nav.Link com o mesmo valor do conteúdo, para melhor acessibilidade e SEO.

8.Adicionei a propriedade alt para as imagens do ícone da barra de navegação, para melhor acessibilidade.
Corrigi o espaçamento dentro da tag span que contém o botão Let's Connect.

Abaixo está o código com as modificações:

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const CustomNavBar = () => {
const [activeLink, setActiveLink] = useState("home");
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const onScroll = () => {
if (window.scrollY > 50) {
setScrolled(true);
} else {
setScrolled(false);
}
};

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

}, []);

const updateActiveLink = (value) => {
setActiveLink(value);
};

return (
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
<Container>
<Navbar.Brand href="#home">
<img src={logo} alt="Logo" />
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav">
<span className="navbar-toggler-icon"></span>
</Navbar.Toggle>
<Navbar.Collapse id="basic-navbar-nav">

<Nav className="me-auto">
<Nav.Link
href="#home"
key="home"
title="Home"
className={
activeLink === "home" ? "active navbar-link" : "navbar-link"
}
onClick={() => updateActiveLink("home")} >
Home
</Nav.Link>
<Nav.Link
href="#skills"
key="skills"
title="Skills"
className={
activeLink === "skills" ? "active navbar-link" : "navbar-link"
}
onClick={() => updateActiveLink("skills")} >
Skills
</Nav.Link>
<Nav.Link
href="#projects"
key="projects"
title="Projects"
className={
activeLink === "projects" ? "active navbar-link" : "navbar-link"

Fazemos o export const CustomNavBar para leva-lo até o app.js para ser mostrado em tela:
No nosso arquivo app.js trazemos da seguinte forma:

import "./App.css"
import { CustomNavBar } from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
return (

<div className="App">
<CustomNavBar />
</div>
)
}

export default App

npm install react-bootstrap-icons --save1~

Terminar de ver o vídeo a partir do 39 minutos

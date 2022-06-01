import React from 'react';
import Logo from '../../Sabonetes/Logo_Oficial.webp';
import "./header.css"

const navLinks = [
  {
    display: "Home",
    url: "#home"
  },
  {
    display: "Produtos",
    url: "#produtos"
  },
  {
    display: "Contato",
    url: "#contato"
  },
]

function Header() {
    return (
      <header className="container">
           <div className="logo_img">
               <a href="#home"><img src={Logo} alt="Logo da Liz Artes e Aromas" /></a>
           </div>
          <nav className="contain__nav">
             <ul>
             {navLinks.map((item , index) => {
               return (
                <li key={index} >
                  <a href={item.url}>{item.display}</a>
                </li>
               )
             })}
             </ul>
              <span className="mobile__menu">=</span>
          </nav>
      </header>
    );
  }
  
  export default Header;
  
  
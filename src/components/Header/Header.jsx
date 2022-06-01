import React, { useRef } from 'react';
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

  
  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle('menu__active');

    return (
      <header className="container">
           <div className="logo_img">
               <a href="#home"><img src={Logo} alt="Logo da Liz Artes e Aromas" /></a>
           </div>
          <nav className="nav__menu" ref={menuRef} onClick={menuToggle}>
             <ul className='nav__list'> 
             {navLinks.map((item , index) => {
               return (
                <li key={index} className="nav__item">
                  <a href={item.url}>{item.display}</a>
                </li>
               )
             })}
             </ul>
              <span className="mobile__menu" onClick={menuToggle}>=</span>
          </nav>
      </header>
    );
  }
  
  export default Header;
  
  
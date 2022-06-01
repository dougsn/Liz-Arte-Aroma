import React from "react";
import './heroSection.css'

import IMG1 from "../../Sabonetes/IMAGEM_SHAMPOO_3_X_1.webp";
import IMG2 from "../../Sabonetes/IMAGEM_TUBO_DE_MEL.webp";
import IMG3 from "../../Sabonetes/IMAGEM_ARGILA_VERMELHA_2.webp";
import IMG4 from "../../Sabonetes/SABONETE_INTIMO_MASCULINO.webp";
import IMG5 from "../../Sabonetes/SABONETE_INTIMO_FEMININO.webp";

// import Swiper core and required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';



 const data = [
  { 
    image: IMG1,
    title: "Liz Artes & Aromas",
    slogan: "Produtos naturais feitos com amor!",
    link: "Saiba Mais"
   },
   { 
    image: IMG2,
    title: "Liz Artes & Aromas",
    slogan: "Produtos naturais feitos com amor!",
    link: "Saiba Mais"
   },
   { 
    image: IMG3,
    title: "Liz Artes & Aromas",
    slogan: "Produtos naturais feitos com amor!",
    link: "Saiba Mais"
   },
   { 
    image: IMG4,
    title: "Liz Artes & Aromas",
    slogan: "Produtos naturais feitos com amor!",
    link: "Saiba Mais"
   },
   { 
    image: IMG5,
    title: "Liz Artes & Aromas",
    slogan: "Produtos naturais feitos com amor!",
    link: "Saiba Mais"
   }
]


function HeroSection() {
    return (
      <Swiper className="swiper"
        
         modules={[EffectFade, Navigation, Pagination, Autoplay]}
         effect={"fade"}
         speed={1000}
         loop={true}         
         spaceBetween={30}
         autoplay={{delay:2500}}
         slidesPerView={1}
         pagination={{ clickable: true }}
         
      >
          {data.map(({image,title,slogan,link}, index) => {
            return (
              <SwiperSlide className="container__hero" key={index}>
                <img src={image} alt=""  />
                <div className="infos">
                      <h1>{title}</h1>
                      <p>{slogan}</p>
                      <button><a href="#lancamentos" className="link__button">{link}</a></button>
                  </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    );
  }
  
  export default HeroSection;
  
  
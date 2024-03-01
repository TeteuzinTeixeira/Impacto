import { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './carrossel-style.css';
import BoxCarrossel from '../../../components/box-carrossel'

import ImgOneCarrossel from './../../../assets/carousel/img-carousel_1.jpeg'
import ImgTwoCarrossel from './../../../assets/carousel/img-carousel_2.jpeg'
import ImgThreeCarrossel from './../../../assets/carousel/img-carousel_3.png'

export default function Carrossel() {

    const [viewMobile, setViewMobile] = useState(false)

    useEffect(() => {
        // Função para verificar a largura da tela e atualizar o estado viewMobile
        function checkScreenWidth() {
            if (window.innerWidth <= 525) {
                setViewMobile(false);
            } else {
                setViewMobile(true);
            }
        }

        // Verifique a largura da tela ao carregar a página
        checkScreenWidth();

        // Adicione um ouvinte de redimensionamento para verificar a largura da tela ao redimensionar a janela
        window.addEventListener('resize', checkScreenWidth);

        // Remova o ouvinte de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);


    return (

        <main className="Carrossel">

            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                transitionTime={viewMobile ? 1000 : false}
                stopOnHover={false}
                showArrows={viewMobile ? true : false}
                className='container-carousel'>

                <BoxCarrossel
                    imageCarrossel={ImgOneCarrossel}
                    titleCarrossel="A IMPACTO ENGENHARIA"
                    textCarrossel="Explore tudo sobre a Impacto e obtenha informações de contato aqui. Venha descobrir mais sobre os nossos serviços de segurança do trabalho e solicite um orçamento conosco."
                />

                <BoxCarrossel
                    imageCarrossel={ImgTwoCarrossel}
                    titleCarrossel="TREINAMENTOS DE TRABALHO EM ALTURA"
                    textCarrossel="A Impacto realiza treinamentos de trabalho em altura quase semanalmente. Venha agendar o seu conosco."
                />

                <BoxCarrossel
                    imageCarrossel={ImgThreeCarrossel}
                    titleCarrossel="ENTRA EM VIGOR A NOVA NR-38"
                    textCarrossel="A nova norma NR 38 – Segurança e Saúde no Trabalho nas atividades de limpeza urbana e manejo de resíduos sólidos, já está vigorando desde o dia 02/01/2024."
                />

            </Carousel>

        </main>

    )
}
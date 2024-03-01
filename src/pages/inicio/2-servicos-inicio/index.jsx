import './servicos-inicio-style.css'

import BoxServicos from "../../../components/box-servicos";



import ImgCardEngSeguranca from './../../../assets/card-servicos/eng.seguranca.png'
import ImgCardSaudeOcupacional from './../../../assets/card-servicos/saude-ocupacional.png'
import ImgCardTreinamentos from './../../../assets/card-servicos/treinamentos.png'
import ImgCardBombeiro from './../../../assets/card-servicos/bombeiro.png'
import ImgCardMeioAmbiente from './../../../assets/card-servicos/meio-ambiente.png'

import LineBlue from './../../../assets/line-style/color-blue.png'
import Header from '../../../components/header';
import { useNavigate } from 'react-router-dom';






export default function ServicosInicio() {

    
const navigate = useNavigate()

    return (

        <main className="servicos-inicio">

          

            <div className="box-title-servicos-inicio" data-aos="fade-right" data-aos-duration='2300'>
                <h2 className="title-servicos-inicio" >
                Toda gestão de segurança e saúde do trabalho que sua empresa precisa<br />
                    <span className='span-title-servicos-inicio'> em um único lugar</span>
                </h2>

                <img src={LineBlue} alt="" className='line-style' />
            </div>

            <div className="container-servicos-inicio">

                <BoxServicos
                    functionNavigateServicos={() => navigate('/engenharia-de-seguranca') }
                    imageServicos={ImgCardEngSeguranca}
                    titleCardServicos="Engenharia de segurança"
                    textCardServicos="Segurança no trabalho é essencial para proteger colaboradores e prevenir acidentes. A adoção de medidas preventivas, treinamentos adequados e promoção de uma cultura de segurança são fundamentais para garantir ambientes laborais seguros e produtivos."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/saude-ocupacional')}
                    imageServicos={ImgCardSaudeOcupacional}
                    titleCardServicos="Saúde Ocupacional"
                    textCardServicos="A saúde ocupacional é vital para garantir o bem-estar dos trabalhadores. Ao abordar aspectos físicos e mentais, promove ambientes de trabalho mais saudáveis, prevenindo doenças e contribuindo para a produtividade e satisfação profissional."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/treinamentos')}
                    imageServicos={ImgCardTreinamentos}
                    titleCardServicos="Treinamentos"
                    textCardServicos="Treinamentos de segurança do trabalho são fundamentais para capacitar colaboradores na prevenção de acidentes e riscos ocupacionais. Essa preparação promove um ambiente laboral mais seguro, preservando a saúde dos trabalhadores e a integridade da empresa."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/curso-de-bombeiro-civil')}
                    imageServicos={ImgCardBombeiro}
                    titleCardServicos="Curso de Bombeiro Civil"
                    textCardServicos="O curso de Bombeiro Civil é crucial para formar profissionais aptos a atuar em situações de emergência. Essa capacitação abrange técnicas de prevenção e combate a incêndios, resgate e primeiros socorros, sendo vital para a segurança coletiva."
                />


                <BoxServicos
                    functionNavigateServicos={() => navigate('/meio-ambiente')}
                    imageServicos={ImgCardMeioAmbiente}
                    titleCardServicos="Meio Ambiente"
                    textCardServicos="O meio ambiente é essencial para a sustentabilidade da vida na Terra. Sua preservação é crucial para garantir recursos naturais, biodiversidade e um equilíbrio ambiental saudável, impactando diretamente a qualidade de vida global."
                />

            </div>

            <div className="box-bottom-link-servicos">
                <button className="button-link-servico" onClick={() => navigate('/servicos')}> Ver Todos</button>
            </div>

        </main>
    )
}
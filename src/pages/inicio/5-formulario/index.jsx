import LineBlack from './../../../assets/line-style/color-black.png'
import ImgLogo from './../../../assets/formulario/logoImpacto.png'
import imgLineVerticalAzul from './../../../assets/line-style/color-blue-vertical.png'

import './formulario-style.css'
import BoxFormulario from '../../../components/box-formulario'

import MapsCompany from '../../../components/maps'

export default function Formulario(props){
    return(
        <main className="formulario">

            <div className="container-left-formulario">

                <div className="box-title-formulario" data-aos="fade-right" data-aos-duration='2000'>

                    <p className="title-top-formulario">
                    Eleve a seguranca e saúde da sua empresa
                    </p>

                    <h2 className="title-bottom-formulario">
                    Entre em contato com a 
                    <br />
                    <span style={{color:'#103686'}}>Impacto Engenharia </span>
                    </h2>

                    <img src={LineBlack} alt="" className="line-style-black" />

                </div>

                <BoxFormulario/>

            </div>

            <div className="container-right-formulario">

                <MapsCompany corTexto="#103686" imgLineVertical={props.imageLineVertical}/>
                
            </div>

        </main>
    )
}
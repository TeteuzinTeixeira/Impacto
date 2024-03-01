import ImgLogo from './../../../assets/visao-missao/logoImpacto.png'

import './missaoVisao-style.css'


export default function VisaoMissao() {
    return (
        <main className="visaoMissao">

            <div className="container-left-visaoMissao">

                <div className="box-title-visaoMissao" data-aos="fade-right" data-aos-duration='2000'>
                    <h1 className="title-visaMissao">Por que <span className="span-title-visaoMissao">escolher <br /> </span> a Impacto? </h1>
                </div>

                <div className="box-text-visaoMissao" data-aos="fade-right" data-aos-duration='2000'>

                    <p className="text-visaoMissao">
                        Com 19 anos de atuação no mercado, a <b>Impacto Engenharia de Segurança</b> se destaca como uma consultoria de segurança e medicina do trabalho, proporcionando serviços de alta qualidade e preços acessíveis para uma ampla gama de empresas.
                    </p>

                    <p className="text-visaoMissao">
                        Temos vários pontos fortes que exploramos e aproveitamos como empresa, sendo alguns deles: documentos como PGR, LTCAT, L.I, L.P, além de nossa ampla área de atuação em treinamentos de segurança, entre outros.
                    </p>

                    <p className="text-visaoMissao">
                        Atualmente, estamos expandindo nossa expertise e inovação para o universo da Segurança e Saúde Ocupacional. Nossa abordagem exclusiva e estratégias personalizadas são frutos de anos de experiência.
                    </p>

                </div>

            </div>

            <div className="container-right-visaoMissao">
                <img src={ImgLogo} alt="imagem logo impacto" className='img-logo-visaoMissao' data-aos="fade-left" data-aos-duration='2000'/>
            </div>


        </main>
    )
}
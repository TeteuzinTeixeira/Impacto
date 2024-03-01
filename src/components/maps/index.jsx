import './maps-style.css';
import LineWhiteH from './../../assets/line-style/color-white-horizontal.png'

export default function MapsCompany(props) {
    return (
        <main className="maps" data-aos="fade-left" data-aos-duration='2000'>
            <h2 className="title-maps" style={{color: props.corTexto}}>
                Atendemos em todo o Brasil
            </h2>

            <div className="container-maps" style={{color: props.corTexto}}>
                <div className="box-maps-unidade">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.472438617034!2d-46.32207682467011!3d-23.551469978806583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7a7f344ae4f5%3A0xd075338c769dfa5!2sAv.%20Armando%20Salles%20de%20Oliveira%2C%202113%20-%20Parque%20Suzano%2C%20Suzano%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699226029107!5m2!1spt-BR!2sbr"

                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <h2 className="title-unidade" style={{color: props.corTexto}}>
                        Unidade 1
                    </h2>

                    <p className="address-unidade" style={{color: props.corTexto}}>
                        Av. Armando Salles de Oliveira, 2113 <br /> Parque Suzano, Suzano - SP <br /> (11) 4742-7067
                    </p>
                </div>


                <img src={props.imgLineVertical} alt="" className='line-style-white' />
                <img src={LineWhiteH} alt="" className='line-style line-horizontal' />

                <div className="box-maps-unidade">

                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1706287366023!2d-46.34501652369222!3d-23.526364660309447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7ae0bd764555%3A0x5632588c04fa7807!2sR.%20Jos%C3%A9%20de%20Oliveira%20Gomes%2C%20128%20-%20Centro%2C%20Po%C3%A1%20-%20SP%2C%2008561-300!5e0!3m2!1spt-BR!2sbr!4v1699371414826!5m2!1spt-BR!2sbr'

                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <h2 className="title-unidade" style={{color: props.corTexto}}>
                        Unidade 2
                    </h2>

                    <p className="address-unidade" style={{color: props.corTexto}}>
                        Rua José de Oliveira Gomes, 128 <br /> Centro, Poȧ - SP <br /> (11) 4639-8028
                    </p>
                </div>


            </div>
        </main>
    )
}
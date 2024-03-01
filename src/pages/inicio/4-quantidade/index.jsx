import { useState, useEffect } from "react";
import { AnimateNumberQuantidade } from "../../../components/function-quantidade";

import './quantidade-style.css'

export default function Quantidade() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [numberThree, setNumberThree] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Verifique se o componente está visível na janela de visualização
            const component = document.querySelector(".quantidade");
            if (component) {
                const rect = component.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    // O componente está visível na janela, então execute a animação
                    AnimateNumberQuantidade(3000, setNumberOne, 3000);
                    AnimateNumberQuantidade(300, setNumberTwo, 3000);
                    AnimateNumberQuantidade(16000, setNumberThree, 3000);
                    // Remova o ouvinte de scroll após a animação
                    window.removeEventListener("scroll", handleScroll);
                }
            }
        };

        // Adicione o ouvinte de scroll quando o componente montar
        window.addEventListener("scroll", handleScroll);

        // Lembre-se de remover o ouvinte de scroll quando o componente for desmontado
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="quantidade">
            <div className="box-text-quantidade" data-aos="zoom-out-up" data-aos-duration='2000'>
                <p className="text-quantidade">
                    +{numberOne}
                    <br />
                    Documentos entregues
                </p>
            </div>
            <div className="box-text-quantidade" data-aos="zoom-out-up" data-aos-duration='2000'>
                <p className="text-quantidade">
                    +{numberTwo}
                    <br />
                    Clientes atendidos
                </p>
            </div>
            <div className="box-text-quantidade" data-aos="zoom-out-up" data-aos-duration='2000'>
                <p className="text-quantidade">
                    +{numberThree}
                    <br />
                    Horas dedicadas a segurança
                </p>
            </div>
        </main>
    );
}

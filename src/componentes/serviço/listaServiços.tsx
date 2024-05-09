import 'materialize-css/dist/css/materialize.min.css'
import Servico from "./servico";
import { useEffect, useState } from 'react';
import './servico.css';

type Props = {
    tema: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
type Servico = {
    id: number;
    nome: string;
    valor: string;
    quantidade: string;
}

function ListaServicos(props: Props) {
    const [servico, setServico] = useState([])
    const servicos: Servico[] = servico

    useEffect(() => {
        fetch('http://localhost:32831/servico/servicos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(data => {
                setServico(data)
                console.log(data)
            })
        })
    }, [])
    
    return (
        <>
            <h5 className="center-align">Lista de Serviços: </h5><br/>
            <div className="collection">
                {servicos.map(s => {
                    return (
                        <Servico key={s.id}
                            id={s.id}
                            nome={s.nome}
                            valor={s.valor}
                            quantidade={s.quantidade}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ListaServicos;
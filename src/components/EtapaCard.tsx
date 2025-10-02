'use client';

//Preciso importar o meu 'type' ou molde da minha ficha e importar as bibliotecas
import { useState } from 'react';
import {type EtapaLP} from '@/lib/types'

//Agora sera a definicao de um (props) -> propriedade que o componente recebera(ou seja que tipo de informacoes ela ira guardar)
//Aqui ele recebera uma etapa de producao
type EtapaCardProps ={
    etapa: EtapaLP
}

//Agora sera a criacao do componente, recebe o props e volta um visual JSX
// Usamos { etapa } para "desempacotar" a prop e usá-la diretamente.
export default function EtapaCard({etapa}:EtapaCardProps){
    const[ produtos, setProdutos ] = useState(etapa.qtdProdutos);
    const[problemas, setProblemas] = useState(etapa.qtdErros)

    const handleAumentarProdutos = () => {
        setProdutos(produtos + 1);
    };
    const handleAumentarProblemas = () => {
        setProblemas(problemas + 1);
    }
    return(// Este é o JSX. Parece HTML, mas estamos dentro do TypeScript!
        <div className='border rounded-lg p-4 shadow-md'>
             
                <h2 className='text-lg font-bold mb-2 text-gray-900'> {etapa.nomeEtapa} </h2>
                 <div className="flex-grow">
                    <p className="text-gray-700">
                    <strong>Produtos Feitos:</strong> {produtos} {/* Usamos a variável de estado */}
                    </p>
                    <p className="text-gray-700">
                        <strong>Problemas Reportados:</strong> {problemas} {/* Usamos a variável de estado */}
                    </p>
            
                <div className='mt-4 flex gap-2'>
                    <button onClick={handleAumentarProdutos} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">
                        Aumentar produtos +1
                    </button>
                    <button onClick={handleAumentarProblemas} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">
                        Reportar problema +1
                    </button>
                </div>
             </div>

            <p className='text-gray-700'><strong>Produtos Feitos:</strong> {etapa.qtdProdutos} </p>
            <p className='text-gray-700'><strong>Problemas Relatados:</strong> {etapa.qtdErros} </p>
        </div>
    );
}
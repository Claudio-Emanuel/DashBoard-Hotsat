//Preciso importar o meu 'type' ou molde da minha ficha
import {type EtapaLP} from '@/lib/types'

//Agora sera a definicao de um (props) -> propriedade que o componente recebera(ou seja que tipo de informacoes ela ira guardar)
//Aqui ele recebera uma etapa de producao
type EtapaCardProps ={
    etapa: EtapaLP
}

//Agora sera a criacao do componente, recebe o props e volta um visual JSX
// Usamos { etapa } para "desempacotar" a prop e usá-la diretamente.
export default function EtapaCard({etapa}:EtapaCardProps){
    return(// Este é o JSX. Parece HTML, mas estamos dentro do TypeScript!
        <div className='border rounded-lg p-4 shadow-md'>
            <h2 className='text-lg font-bold mb-2 text-gray-900'> {etapa.nomeEtapa} </h2>
            <p className='text-gray-700'><strong>Produtos Feitos:</strong> {etapa.qtdProdutos} </p>
            <p className='text-gray-700'><strong>Problemas Relatados:</strong> {etapa.qtdErros} </p>
        </div>
    );
}
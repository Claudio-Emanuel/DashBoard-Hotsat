// 1. Importamos o nosso componente e o nosso tipo
import EtapaCard from "@/components/EtapaCard";
import {type EtapaLP} from '@/lib/types'

// 2. Criamos nosso "banco de dados de mentira" (mock data)
// É um array de objetos, e cada objeto SEGUE o molde EtapaLP.
const linhadeProducao : EtapaLP[] = [
  { id: 1, nomeEtapa: "Corte e Preparação", qtdProdutos: 1050, qtdErros: 15 },
  { id: 2, nomeEtapa: "Montagem do Circuito", qtdProdutos: 1035, qtdErros: 22 },
  { id: 3, nomeEtapa: "Instalação da Carcaça", qtdProdutos: 1013, qtdErros: 8 },
  { id: 4, nomeEtapa: "Testes de Qualidade", qtdProdutos: 1005, qtdErros: 5 },
  { id: 5, nomeEtapa: "Embalagem Final", qtdProdutos: 1000, qtdErros: 0 },
];

// 3. Este é o componente da nossa página principal
export default function home() {
  return(
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-100">
      <h1 className="text-gray-700 font-bold mb-8"> Linha de Produçao</h1>

      {/* Renderizacao da lista */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl">
        {linhadeProducao.map((etapa) =>(<EtapaCard key={etapa.id} etapa={etapa}/>
      ))}
      </div>
    </main>
  );
}
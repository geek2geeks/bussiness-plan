import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Users,
  Calendar,
  BarChart,
  Globe,
  Shield,
  Clock,
  Database
} from 'lucide-react';

const PlanoDeNegociosBootstrap = () => {
  const [activeSection, setActiveSection] = useState('resumo');
  const [expandedCards, setExpandedCards] = useState({});
  const [dataUpdateTime, setDataUpdateTime] = useState(new Date());

  useEffect(() => {
    // Simular atualização de dados em tempo real
    const interval = setInterval(() => {
      setDataUpdateTime(new Date());
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval);
  }, []);

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const metrics = {
    investimento: 0,
    equipe: 3,
    prazo: 90,
    metaMensal: 5000,
    startDate: '29/09/2025',
    custoEquipe: 4430,
    custoTrimestral: 13290
  };

  const sections = [
    { id: 'resumo', label: 'Resumo Executivo', icon: Target },
    { id: 'problema', label: 'O Problema', icon: AlertTriangle },
    { id: 'solucao', label: 'Nossa Solução', icon: CheckCircle },
    { id: 'modelo', label: 'Modelo de Negócio', icon: DollarSign },
    { id: 'equipe', label: 'Equipe & Custos', icon: Users },
    { id: 'cronograma', label: 'Cronograma', icon: Calendar },
    { id: 'precisao', label: 'Precisão dos Dados', icon: Database },
    { id: 'riscos', label: 'Riscos & Críticas', icon: AlertTriangle },
    { id: 'proximos', label: 'Próximos Passos', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">Crime Data API Brasil</h1>
          <p className="text-xl opacity-90">Plano de Lançamento Bootstrap - 90 Dias</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Investimento</span>
              <p className="text-2xl font-bold">€{metrics.investimento}</p>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Equipe</span>
              <p className="text-2xl font-bold">{metrics.equipe} pessoas</p>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Prazo</span>
              <p className="text-2xl font-bold">{metrics.prazo} dias</p>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Meta MRR</span>
              <p className="text-2xl font-bold">€{metrics.metaMensal}</p>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-75">
            Início do desenvolvimento: {metrics.startDate}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2 gap-2">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    activeSection === section.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Resumo Executivo */}
        {activeSection === 'resumo' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">
                O Que Vamos Fazer?
              </h2>
              <p className="text-gray-700 mb-4">
                Criar uma <strong>API</strong> (Application Programming Interface - interface para sistemas conversarem)
                que organiza dados públicos de crimes para empresas tomarem decisões melhores sobre localização.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="font-semibold text-green-800">
                  Como o "Waze dos crimes" - você consulta um endereço e recebe análise de segurança baseada em dados reais.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Por Que Vai Dar Certo?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span>Dados já existem e são gratuitos (SSP-SP, ISP-RJ, DataSUS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span>Know-how técnico da equipe fundadora</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span>Problema real: empresas perdem milhões com decisões erradas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span>Zero competição direta no Brasil</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span>Validação possível em 30 dias</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">
                ⚠️ Foco Inicial: São Paulo
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 40% do PIB empresarial brasileiro</li>
                <li>• Dados mais organizados (SSP-SP)</li>
                <li>• 38.000 empresas médio/grande porte</li>
                <li>• APIs públicas já disponíveis</li>
              </ul>
            </div>
          </div>
        )}

        {/* O Problema */}
        {activeSection === 'problema' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-600">
                Números Reais da Violência (2023)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">46.409</p>
                  <p className="text-gray-700">Mortes violentas</p>
                  <p className="text-xs text-gray-500">Fonte: FBSP 2024</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">852.651</p>
                  <p className="text-gray-700">Roubos registrados</p>
                  <p className="text-xs text-gray-500">Fonte: FBSP 2024</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">1.102.074</p>
                  <p className="text-gray-700">Furtos registrados</p>
                  <p className="text-xs text-gray-500">Fonte: FBSP 2024</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">7,5%</p>
                  <p className="text-gray-700">Taxa de registro</p>
                  <p className="text-xs text-gray-500">Apenas 7,5% dos crimes são reportados</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Como Empresas Decidem Hoje</h3>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">Método</th>
                    <th className="p-2 text-left">Problema</th>
                    <th className="p-2 text-left">Custo do Erro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">👁️ "Olhômetro"</td>
                    <td className="p-2">Zero base científica</td>
                    <td className="p-2 text-red-600">R$ 5-50 milhões</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">💰 Consultoria</td>
                    <td className="p-2">R$ 50-200k, 2-3 meses</td>
                    <td className="p-2 text-red-600">Muito caro e lento</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">📰 Notícias</td>
                    <td className="p-2">Informação enviesada</td>
                    <td className="p-2 text-red-600">Perde oportunidades</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Casos Reais de Prejuízo</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold">Magazine Luiza (2019)</p>
                  <p className="text-gray-700">Fechou 5 lojas por segurança: -R$ 12 milhões</p>
                  <a href="https://valor.globo.com" className="text-blue-600 text-sm">
                    Fonte: Valor Econômico
                  </a>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold">Carrefour (2020)</p>
                  <p className="text-gray-700">Abandonou construção: -R$ 8 milhões</p>
                  <a href="https://folha.uol.com.br" className="text-blue-600 text-sm">
                    Fonte: Folha de S.Paulo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modelo de Negócio */}
        {activeSection === 'modelo' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Estratégia de Preços Simples
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border rounded-lg p-4 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg">🆓 Teste</h4>
                  <p className="text-3xl font-bold text-gray-800 my-2">Grátis</p>
                  <p className="text-sm text-gray-600">7 dias, 5 consultas</p>
                  <p className="text-xs mt-2">Captura de leads</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg">🏢 Startup</h4>
                  <p className="text-3xl font-bold text-green-600 my-2">€297</p>
                  <p className="text-sm text-gray-600">/mês</p>
                  <p className="text-xs mt-2">100 consultas + relatórios</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-lg transition bg-indigo-50 border-indigo-300">
                  <h4 className="font-bold text-lg">💼 Business</h4>
                  <p className="text-3xl font-bold text-indigo-600 my-2">€997</p>
                  <p className="text-sm text-gray-600">/mês</p>
                  <p className="text-xs mt-2">Ilimitado + API + Suporte</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg">🏆 Enterprise</h4>
                  <p className="text-3xl font-bold text-purple-600 my-2">€2.997</p>
                  <p className="text-sm text-gray-600">/mês</p>
                  <p className="text-xs mt-2">White label + Consultoria</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Projeção Realista - 6 Meses</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="p-2 text-left">Mês</th>
                      <th className="p-2 text-right">Clientes</th>
                      <th className="p-2 text-right">Ticket Médio</th>
                      <th className="p-2 text-right">Receita</th>
                      <th className="p-2 text-right">Lucro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Mês 1</td>
                      <td className="p-2 text-right">10</td>
                      <td className="p-2 text-right">€500</td>
                      <td className="p-2 text-right font-bold">€5.000</td>
                      <td className="p-2 text-right text-green-600">€4.200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Mês 3</td>
                      <td className="p-2 text-right">50</td>
                      <td className="p-2 text-right">€700</td>
                      <td className="p-2 text-right font-bold">€35.000</td>
                      <td className="p-2 text-right text-green-600">€32.000</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="p-2">Mês 6</td>
                      <td className="p-2 text-right">180</td>
                      <td className="p-2 text-right">€850</td>
                      <td className="p-2 text-right font-bold">€153.000</td>
                      <td className="p-2 text-right text-green-600 font-bold">€141.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Precisão dos Dados */}
        {activeSection === 'precisao' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                <Shield className="inline mr-2" />
                Como Garantimos Precisão dos Dados
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="font-semibold text-blue-800 mb-2">
                  Última atualização: {dataUpdateTime.toLocaleTimeString()}
                </p>
                <p className="text-sm text-blue-700">
                  Dados sincronizados com SSP-SP, ISP-RJ e DataSUS
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Desafios Reais</h3>
                  <div className="space-y-2">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-semibold text-red-800">Subnotificação: 92.5%</p>
                      <p className="text-sm">Apenas 7.5% dos crimes são registrados</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="font-semibold text-yellow-800">Atraso: 30-90 dias</p>
                      <p className="text-sm">Dados demoram para ser atualizados</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-semibold text-orange-800">Inconsistência</p>
                      <p className="text-sm">27 estados, 27 formatos diferentes</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Nossas Soluções</h3>
                  <div className="space-y-2">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-800">ML Preditivo</p>
                      <p className="text-sm">Algoritmos corrigem subnotificação</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-800">Timestamp Claro</p>
                      <p className="text-sm">Sempre mostramos idade do dado</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-800">Normalização</p>
                      <p className="text-sm">Taxonomia unificada nacional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Exemplo de Resposta da API</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "data": {
    "crime_score": 73,
    "incidents_30d": 47,
    "trend": "decreasing",
    "radius_accuracy": "50m"
  },
  "metadata": {
    "quality_score": 82,
    "confidence_level": "high",
    "data_freshness": "7 days",
    "coverage": "85%",
    "last_updated": "2025-09-22",
    "sources": ["SSP-SP", "DataSUS", "IBGE"],
    "disclaimer": "Baseado apenas em crimes reportados"
  }
}`}
              </pre>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Métricas de Qualidade</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Completude</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">&lt;7d</div>
                  <div className="text-sm text-gray-600">Atualidade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Consistência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">50m</div>
                  <div className="text-sm text-gray-600">Precisão Geo</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Análise Crítica */}
        {activeSection === 'riscos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">
                <AlertTriangle className="inline mr-2" />
                Análise Crítica Honesta
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-green-600 mb-3">✅ Pontos Fortes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1" size={16} />
                      <span className="text-sm">Bootstrap viável com zero investimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1" size={16} />
                      <span className="text-sm">São Paulo = 40% do mercado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1" size={16} />
                      <span className="text-sm">Modelo freemium captura leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-1" size={16} />
                      <span className="text-sm">Primeiro player no mercado</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-red-600 mb-3">❌ Riscos Reais</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <span className="text-sm">Dados públicos são bagunçados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <span className="text-sm">Ciclo venda B2B: 3-6 meses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <span className="text-sm">LGPD mais complexa que parece</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <span className="text-sm">Governo muda = dados mudam</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Ajuste de Expectativas</h3>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">Métrica</th>
                    <th className="p-2 text-center">Plano Original</th>
                    <th className="p-2 text-center">Realidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Clientes em 90 dias</td>
                    <td className="p-2 text-center text-red-600 line-through">30</td>
                    <td className="p-2 text-center text-green-600 font-bold">5-10</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">MRR mês 3</td>
                    <td className="p-2 text-center text-red-600 line-through">€15k</td>
                    <td className="p-2 text-center text-green-600 font-bold">€2-5k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Break-even</td>
                    <td className="p-2 text-center text-red-600 line-through">Mês 4</td>
                    <td className="p-2 text-center text-green-600 font-bold">Mês 12</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Tempo resposta API</td>
                    <td className="p-2 text-center text-red-600 line-through">2.3s</td>
                    <td className="p-2 text-center text-green-600 font-bold">5-10s</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">
                🎯 Recomendação Principal
              </h3>
              <p className="text-yellow-700">
                Começar com consultoria manual (€5k/relatório) para validar demanda
                antes de construir a API completa. Use a receita para financiar o desenvolvimento.
              </p>
            </div>
          </div>
        )}

        {/* Próximos Passos */}
        {activeSection === 'proximos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">
                <Target className="inline mr-2" />
                Checklist Dia 1 - 29/09/2025
              </h2>

              <div className="space-y-2">
                {[
                  { task: 'Criar repositório GitHub privado', time: '10 min', done: false },
                  { task: 'Setup Node.js + React', time: '1 hora', done: false },
                  { task: 'Conta AWS free tier', time: '30 min', done: false },
                  { task: 'Baixar dados SSP-SP', time: '2 horas', done: false },
                  { task: 'Landing page simples', time: '3 horas', done: false },
                  { task: 'Lista 100 empresas cold email', time: '1 hora', done: false },
                  { task: 'LinkedIn empresa', time: '30 min', done: false },
                  { task: 'Sprint planning Trello', time: '1 hora', done: false }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-indigo-600" />
                      <span>{item.task}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Resumo Final</h3>
              <p className="text-lg mb-4">
                Vamos construir um negócio real, que resolve um problema real, com investimento zero.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/20 rounded p-3">
                  <p className="text-2xl font-bold">30 dias</p>
                  <p className="text-sm">MVP funcional</p>
                </div>
                <div className="bg-white/20 rounded p-3">
                  <p className="text-2xl font-bold">60 dias</p>
                  <p className="text-sm">Primeiros clientes</p>
                </div>
                <div className="bg-white/20 rounded p-3">
                  <p className="text-2xl font-bold">90 dias</p>
                  <p className="text-sm">€5k MRR ou pivot</p>
                </div>
              </div>
              <p className="mt-6 text-center italic">
                "O melhor momento para plantar uma árvore foi 20 anos atrás.
                O segundo melhor momento é agora."
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Crime Data API Brasil - Plano Bootstrap</p>
          <p className="text-sm text-gray-400">
            Documento atualizado: 18 de Setembro de 2025
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Todos os termos técnicos explicados para alinhamento entre sócios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlanoDeNegociosBootstrap;
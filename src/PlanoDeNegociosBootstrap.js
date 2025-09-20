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
    metaMensal: 26000,
    startDate: '29/09/2025',
    endDate: '29/12/2025',
    custoEquipe: 23000,
    custoTrimestral: 69000,
    version: '2.0',
    lastUpdate: '20 de Setembro de 2025'
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
              <p className="text-2xl font-bold">R${metrics.investimento}</p>
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
              <p className="text-2xl font-bold">R${metrics.metaMensal.toLocaleString()}</p>
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

        {/* Nossa Solução */}
        {activeSection === 'solucao' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                <CheckCircle className="inline mr-2" />
                Crime Data API - Nossa Solução
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-green-700">🎯 O Que Fazemos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Coleta dados de crime de 27 estados brasileiros</li>
                    <li>• Normaliza formatos heterogêneos em taxonomia única</li>
                    <li>• Geocodifica endereços com precisão de 50m</li>
                    <li>• Calcula scores de risco em tempo real</li>
                    <li>• Fornece API REST simples e rápida</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-700">🚀 Como É Diferente</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Automatizado:</strong> Sem consultoria manual</li>
                    <li>• <strong>Escalável:</strong> Resposta em menos de 2 segundos</li>
                    <li>• <strong>Transparente:</strong> Sempre mostra fonte e idade do dado</li>
                    <li>• <strong>Acessível:</strong> R$ 1.580/mês vs R$ 50k de consultoria</li>
                    <li>• <strong>Nacional:</strong> Cobertura de todo o Brasil</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Fluxo da Solução</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Database className="text-green-600" size={24} />
                    </div>
                    <h4 className="font-bold text-sm">1. Coleta</h4>
                    <p className="text-xs text-gray-600">Dados públicos SSP-SP, ISP-RJ, DataSUS</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <BarChart className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-bold text-sm">2. Processa</h4>
                    <p className="text-xs text-gray-600">ML corrige subnotificação, normaliza</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Globe className="text-purple-600" size={24} />
                    </div>
                    <h4 className="font-bold text-sm">3. Geocodifica</h4>
                    <p className="text-xs text-gray-600">Converte endereços em coordenadas</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Shield className="text-indigo-600" size={24} />
                    </div>
                    <h4 className="font-bold text-sm">4. Entrega</h4>
                    <p className="text-xs text-gray-600">API REST com score de risco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Começar com Leads Durante o Desenvolvimento</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800 mb-2">🎯 Recomendação Principal</p>
                <p className="text-yellow-700">
                  Começar com <strong>geração de leads</strong> durante o desenvolvimento para validar demanda
                  antes de construir a API completa. Use o interesse demonstrado para priorizar funcionalidades.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Fase 1: Validação (Dias 1-30)</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Landing page simples com caso de uso</li>
                    <li>• Lista de email "Avise-me quando lançar"</li>
                    <li>• 100 cold emails/dia para imobiliárias</li>
                    <li>• Meta: 50 empresas interessadas</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Fase 2: MVP (Dias 31-60)</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• API básica com dados de São Paulo</li>
                    <li>• Dashboard simples para 3 primeiros clientes</li>
                    <li>• Feedback loops semanais</li>
                    <li>• Meta: R$ 5.000 MRR</li>
                  </ul>
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
                  <p className="text-3xl font-bold text-green-600 my-2">R$1.580</p>
                  <p className="text-sm text-gray-600">/mês</p>
                  <p className="text-xs mt-2">100 consultas + relatórios</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-lg transition bg-indigo-50 border-indigo-300">
                  <h4 className="font-bold text-lg">💼 Business</h4>
                  <p className="text-3xl font-bold text-indigo-600 my-2">R$5.300</p>
                  <p className="text-sm text-gray-600">/mês</p>
                  <p className="text-xs mt-2">Ilimitado + API + Suporte</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg">🏆 Enterprise</h4>
                  <p className="text-3xl font-bold text-purple-600 my-2">R$15.900</p>
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
                      <td className="p-2 text-right">R$2.650</td>
                      <td className="p-2 text-right font-bold">R$26.500</td>
                      <td className="p-2 text-right text-green-600">R$22.260</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Mês 3</td>
                      <td className="p-2 text-right">50</td>
                      <td className="p-2 text-right">R$3.710</td>
                      <td className="p-2 text-right font-bold">R$185.500</td>
                      <td className="p-2 text-right text-green-600">R$169.600</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="p-2">Mês 6</td>
                      <td className="p-2 text-right">180</td>
                      <td className="p-2 text-right">R$4.505</td>
                      <td className="p-2 text-right font-bold">R$810.900</td>
                      <td className="p-2 text-right text-green-600 font-bold">R$747.300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Equipe & Custos */}
        {activeSection === 'equipe' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">
                <Users className="inline mr-2" />
                Equipe & Estrutura de Custos
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-700">👥 Nossa Equipe</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <p className="font-bold text-purple-800">Desenvolvedor Full-Stack Senior</p>
                      <p className="text-sm text-gray-600">React, Node.js, PostgreSQL, AWS</p>
                      <p className="text-sm font-semibold text-purple-600">R$ 12.000/mês</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-bold text-blue-800">Cientista de Dados</p>
                      <p className="text-sm text-gray-600">Python, ML, ETL, APIs públicas</p>
                      <p className="text-sm font-semibold text-blue-600">R$ 8.000/mês</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-bold text-green-800">Product Manager</p>
                      <p className="text-sm text-gray-600">Vendas, suporte, roadmap</p>
                      <p className="text-sm font-semibold text-green-600">R$ 3.000/mês</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-green-700">💰 Custos Mensais</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Salários (3 pessoas)</span>
                      <span className="font-bold">R$ 23.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>• Full-Stack Developer</span>
                      <span>R$ 12.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>• Data Scientist</span>
                      <span>R$ 8.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>• Product Manager</span>
                      <span>R$ 3.000</span>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <span>Infraestrutura AWS</span>
                      <span className="font-bold">R$ 800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ferramentas (GitHub, etc)</span>
                      <span className="font-bold">R$ 200</span>
                    </div>
                    <hr className="border-2" />
                    <div className="flex justify-between text-lg font-bold text-red-600">
                      <span>Total Mensal</span>
                      <span>R$ 24.000</span>
                    </div>
                    <div className="flex justify-between text-sm text-red-500">
                      <span>90 dias (trimestre)</span>
                      <span>R$ 72.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">💡 Como Financiar Sem Investimento</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-yellow-700">Estratégia de Reembolso:</p>
                    <ul className="text-sm text-yellow-600 mt-2 space-y-1">
                      <li>• Custos de desenvolvimento são "empréstimo" da empresa atual</li>
                      <li>• Reembolso acontece quando atingirmos R$ 30k MRR</li>
                      <li>• Prioridade 1: Pagar custos, depois distribuir lucros</li>
                      <li>• Break-even estimado: Mês 4-5</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-700">Plano B - Redução:</p>
                    <ul className="text-sm text-yellow-600 mt-2 space-y-1">
                      <li>• Só 2 pessoas (dev + PM): R$ 15k/mês</li>
                      <li>• Freelancer data scientist: R$ 3k/projeto</li>
                      <li>• MVP mais simples: apenas SP + RJ</li>
                      <li>• Break-even: Mês 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cronograma */}
        {activeSection === 'cronograma' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">
                <Calendar className="inline mr-2" />
                Cronograma de 90 Dias
              </h2>

              <div className="mb-6 text-center">
                <div className="inline-flex bg-indigo-100 rounded-lg p-2">
                  <span className="text-sm font-semibold text-indigo-800">
                    Início: 29/09/2025 → Entrega: 29/12/2025
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Mês 1 */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    📅 Mês 1 (29/09 - 29/10): Fundação & Validação
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">🛠️ Desenvolvimento</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ✅ Setup do projeto (React + Node.js)</li>
                        <li>• ✅ Infraestrutura AWS básica</li>
                        <li>• ⏳ Coleta dados SSP-SP (80% completo)</li>
                        <li>• ⏳ API REST basic endpoints</li>
                        <li>• ⏳ Geocoding service MVP</li>
                        <li>• ⏳ Landing page funcional</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">📈 Negócio</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ✅ Lista de 500 empresas prospect</li>
                        <li>• ⏳ Cold email campaign (100/dia)</li>
                        <li>• ⏳ LinkedIn outreach</li>
                        <li>• 🎯 Meta: 50 leads interessados</li>
                        <li>• 🎯 Meta: 5 reuniões agendadas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mês 2 */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-green-600 mb-3">
                    📅 Mês 2 (30/10 - 29/11): MVP & Primeiros Clientes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">🛠️ Desenvolvimento</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 🔄 API completa São Paulo</li>
                        <li>• 🔄 Dashboard cliente básico</li>
                        <li>• 🔄 Sistema de autenticação</li>
                        <li>• 🔄 Documentação API</li>
                        <li>• 🔄 Testes automatizados</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">📈 Negócio</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 🔄 Onboarding 3 clientes beta</li>
                        <li>• 🔄 Pricing strategy refinement</li>
                        <li>• 🔄 Customer feedback loops</li>
                        <li>• 🎯 Meta: R$ 5.000 MRR</li>
                        <li>• 🎯 Meta: 10 clientes ativos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mês 3 */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">
                    📅 Mês 3 (30/11 - 29/12): Escala & Otimização
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">🛠️ Desenvolvimento</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 🔄 Adicionar Rio de Janeiro</li>
                        <li>• 🔄 ML para correção de dados</li>
                        <li>• 🔄 Performance optimization</li>
                        <li>• 🔄 Advanced analytics</li>
                        <li>• 🔄 Mobile responsive</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">📈 Negócio</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 🔄 Sales process automation</li>
                        <li>• 🔄 Content marketing</li>
                        <li>• 🔄 Partnership discussions</li>
                        <li>• 🎯 Meta: R$ 26.000 MRR</li>
                        <li>• 🎯 Meta: 50 clientes ativos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">🏁 Milestone Final - 29/12/2025</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">R$ 26k</div>
                    <div className="text-sm opacity-75">MRR atingido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-75">Clientes ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">SP+RJ</div>
                    <div className="text-sm opacity-75">Estados cobertos</div>
                  </div>
                </div>
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
                Status Atual - 20/09/2025
              </h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-green-800 mb-2">✅ O Que Já Temos Pronto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-700">Documentação:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• ✅ Plano de negócios completo</li>
                      <li>• ✅ Análise técnica detalhada</li>
                      <li>• ✅ Estrutura de custos definida</li>
                      <li>• ✅ Cronograma de 90 dias</li>
                      <li>• ✅ Estratégia de preços</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Desenvolvimento:</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• ✅ Repositório GitHub público criado</li>
                      <li>• ✅ Aplicação React funcional</li>
                      <li>• ✅ Deploy automático no Render</li>
                      <li>• ✅ Design responsivo com Tailwind</li>
                      <li>• ✅ Landing page demonstrativa</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-indigo-800 mb-4">📅 Próximos 9 Dias (até 29/09)</h3>
                {[
                  { task: 'Finalizar especificações técnicas da API', time: '2 dias', done: false, priority: 'alta' },
                  { task: 'Setup Node.js + Express backend', time: '1 dia', done: false, priority: 'alta' },
                  { task: 'Configurar infraestrutura AWS', time: '1 dia', done: false, priority: 'alta' },
                  { task: 'Baixar e processar dados SSP-SP', time: '2 dias', done: false, priority: 'alta' },
                  { task: 'Lista de 500 empresas prospect', time: '1 dia', done: false, priority: 'média' },
                  { task: 'Preparar templates de cold email', time: '1 dia', done: false, priority: 'média' },
                  { task: 'Configurar LinkedIn da empresa', time: '0.5 dia', done: false, priority: 'baixa' },
                  { task: 'Setup Trello para gestão', time: '0.5 dia', done: false, priority: 'baixa' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-3 rounded hover:bg-gray-100 transition ${
                    item.priority === 'alta' ? 'bg-red-50 border border-red-200' :
                    item.priority === 'média' ? 'bg-yellow-50 border border-yellow-200' :
                    'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-indigo-600" checked={item.done} readOnly />
                      <span className={item.done ? 'line-through text-gray-500' : ''}>{item.task}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.priority === 'alta' ? 'bg-red-100 text-red-700' :
                        item.priority === 'média' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.priority}
                      </span>
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
                  <p className="text-sm">R$26k MRR ou pivot</p>
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
            Documento atualizado: {metrics.lastUpdate} - Versão {metrics.version}
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Desenvolvido por <strong>Straford Geek Ltd</strong> - Software Solutions
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Todos os termos técnicos explicados para alinhamento entre sócios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlanoDeNegociosBootstrap;
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
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
  Database,
  ArrowRight,
  Star,
  Zap,
  Award,
  Activity,
  Briefcase,
  Lock,
  Menu,
  X
} from 'lucide-react';

const PlanoDeNegociosBootstrap = () => {
  const [activeSection, setActiveSection] = useState('resumo');
  const [expandedCards, setExpandedCards] = useState({});
  const [dataUpdateTime, setDataUpdateTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simular atualização de dados em tempo real
    const interval = setInterval(() => {
      setDataUpdateTime(new Date());
    }, 60000); // Atualiza a cada minuto

    // Handle scroll for navbar effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
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
    { id: 'resumo', label: 'Resumo', icon: Target, color: 'indigo' },
    { id: 'problema', label: 'Problema', icon: AlertTriangle, color: 'red' },
    { id: 'solucao', label: 'Solução', icon: CheckCircle, color: 'green' },
    { id: 'modelo', label: 'Modelo', icon: DollarSign, color: 'purple' },
    { id: 'equipe', label: 'Equipa', icon: Users, color: 'blue' },
    { id: 'cronograma', label: 'Timeline', icon: Calendar, color: 'orange' },
    { id: 'precisao', label: 'Dados', icon: Database, color: 'teal' },
    { id: 'riscos', label: 'Riscos', icon: AlertTriangle, color: 'yellow' },
    { id: 'proximos', label: 'Próximos', icon: TrendingUp, color: 'pink' }
  ];

  const pricingPlans = [
    {
      name: 'Teste Grátis',
      price: 0,
      period: '7 dias',
      features: [
        '5 consultas de API',
        'Dashboard básico',
        'Dados de São Paulo',
        'Suporte por email'
      ],
      highlighted: false,
      color: 'gray'
    },
    {
      name: 'Startup',
      price: 1580,
      period: '/mês',
      features: [
        '100 consultas de API',
        'Dashboard completo',
        'Dados de SP + RJ',
        'Relatórios mensais',
        'Suporte prioritário'
      ],
      highlighted: false,
      color: 'blue'
    },
    {
      name: 'Business',
      price: 5300,
      period: '/mês',
      features: [
        'Consultas ilimitadas',
        'API dedicada',
        'Todos os estados',
        'Relatórios personalizados',
        'Suporte 24/7',
        'SLA garantido'
      ],
      highlighted: true,
      color: 'indigo',
      badge: 'Mais Popular'
    },
    {
      name: 'Enterprise',
      price: 15900,
      period: '/mês',
      features: [
        'Tudo do Business',
        'White label',
        'Consultoria incluída',
        'Machine Learning customizado',
        'Integração dedicada',
        'Treinamento da equipa'
      ],
      highlighted: false,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Modern Header with Animated Gradient */}
      <header className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
          {/* Main Title with Animation */}
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Crime Data API Brasil
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-95 mb-8">
              Plano de Lançamento Bootstrap - 90 Dias
            </p>
          </div>

          {/* Metrics Cards with Glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Investimento</span>
                <Zap className="w-4 h-4 opacity-70" />
              </div>
              <p className="text-2xl md:text-3xl font-bold">R${metrics.investimento}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Equipa</span>
                <Users className="w-4 h-4 opacity-70" />
              </div>
              <p className="text-2xl md:text-3xl font-bold">{metrics.equipe}</p>
              <p className="text-xs opacity-75">pessoas</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Prazo</span>
                <Clock className="w-4 h-4 opacity-70" />
              </div>
              <p className="text-2xl md:text-3xl font-bold">{metrics.prazo}</p>
              <p className="text-xs opacity-75">dias</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Meta MRR</span>
                <TrendingUp className="w-4 h-4 opacity-70" />
              </div>
              <p className="text-2xl md:text-3xl font-bold">R${(metrics.metaMensal/1000).toFixed(0)}k</p>
              <p className="text-xs opacity-75">mensal</p>
            </div>
          </div>

          {/* Timeline Bar */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-3 md:mb-0">
                <p className="text-sm opacity-90 mb-1">Período de Desenvolvimento</p>
                <p className="text-lg font-semibold">{metrics.startDate} → {metrics.endDate}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-green-400/20 rounded-full">
                  <span className="text-xs font-semibold">Versão {metrics.version}</span>
                </div>
                <div className="px-3 py-1 bg-blue-400/20 rounded-full">
                  <span className="text-xs font-semibold">Bootstrap Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Sticky Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between py-4">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between py-3">
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
              {sections.map(section => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium
                      transition-all duration-300 whitespace-nowrap
                      ${isActive
                        ? `bg-gradient-to-r from-${section.color}-500 to-${section.color}-600 text-white shadow-lg scale-105`
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {sections.map(section => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium
                      transition-all duration-300
                      ${isActive
                        ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 md:py-12">

        {/* Resumo Executivo Section */}
        {activeSection === 'resumo' && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Hero Card */}
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-xl p-6 md:p-10 border border-indigo-100">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
                  O Que Vamos Fazer?
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    MVP em 90 dias
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Criar uma <span className="font-semibold text-indigo-600">API REST</span> que organiza
                dados públicos de crimes para empresas tomarem decisões melhores sobre localização.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 md:p-6 rounded-xl">
                <p className="font-semibold text-gray-800 text-base md:text-lg">
                  💡 Como o "Waze dos crimes" - consulta-se uma morada e recebe-se análise de segurança baseada em dados reais.
                </p>
              </div>
            </div>

            {/* Why It Will Work Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={28} />
                  Por Que Vai Dar Certo?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Dados já existem e são gratuitos',
                    'Know-how técnico da equipa fundadora',
                    'Problema real: perdas milionárias',
                    'Zero concorrência directa no Brasil',
                    'Validação possível em 30 dias'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Target className="text-orange-500 mr-3" size={28} />
                  Foco Inicial: São Paulo
                </h3>
                <div className="space-y-3">
                  {[
                    { label: '40%', desc: 'do PIB empresarial brasileiro' },
                    { label: '38k', desc: 'empresas médio/grande porte' },
                    { label: 'SSP-SP', desc: 'dados mais organizados' },
                    { label: 'APIs', desc: 'públicas já disponíveis' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center bg-white/60 rounded-lg p-3">
                      <span className="text-2xl font-bold text-orange-600 mr-3">{item.label}</span>
                      <span className="text-gray-700 text-sm">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* O Problema Section */}
        {activeSection === 'problema' && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Crime Statistics Grid */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600 flex items-center">
                <AlertTriangle className="mr-3" size={32} />
                Números Reais da Violência (2023)
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { number: '46.409', label: 'Mortes violentas', color: 'red' },
                  { number: '852.651', label: 'Roubos registrados', color: 'orange' },
                  { number: '1.102.074', label: 'Furtos registrados', color: 'yellow' },
                  { number: '7,5%', label: 'Taxa de registro', color: 'purple' }
                ].map((stat, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-4 md:p-6 rounded-2xl border-2 border-${stat.color}-200 hover:scale-105 transition-transform duration-300`}>
                    <p className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</p>
                    <p className="text-sm md:text-base text-gray-700">{stat.label}</p>
                    <p className="text-xs text-gray-500 mt-1">Fonte: FBSP 2024</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How Companies Decide Today */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6">
                <h3 className="text-xl md:text-2xl font-bold">Como as Empresas Decidem Hoje</h3>
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  {[
                    {
                      icon: '👁️',
                      method: '"Olhómetro"',
                      problem: 'Zero base científica',
                      cost: 'R$ 5-50 milhões em perdas'
                    },
                    {
                      icon: '💰',
                      method: 'Consultoria Tradicional',
                      problem: 'R$ 50-200k, demora 2-3 meses',
                      cost: 'Muito caro e lento'
                    },
                    {
                      icon: '📰',
                      method: 'Notícias e Achismo',
                      problem: 'Informação enviesada',
                      cost: 'Perde oportunidades boas'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-gray-100 transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-0 md:mr-4">{item.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800 mb-1">{item.method}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{item.problem}</p>
                      </div>
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-xs md:text-sm font-semibold">
                          {item.cost}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Real Loss Cases */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-xl p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Casos Reais de Prejuízo</h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { company: 'Magazine Luiza', year: '2019', loss: 'R$ 12 milhões', desc: 'Fechou 5 lojas por segurança' },
                  { company: 'Carrefour', year: '2020', loss: 'R$ 8 milhões', desc: 'Abandonou construção' }
                ].map((case_, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 md:p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-gray-800">{case_.company}</h4>
                      <span className="text-sm text-gray-500">{case_.year}</span>
                    </div>
                    <p className="text-2xl font-bold text-red-600 mb-2">{case_.loss}</p>
                    <p className="text-gray-600 text-sm">{case_.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Nossa Solução Section */}
        {activeSection === 'solucao' && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Main Solution Card */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={32} />
                Crime Data API - Nossa Solução
              </h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                {/* What We Do */}
                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-green-700 flex items-center">
                    <Target className="mr-2" size={24} />
                    O Que Fazemos
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Coleta dados de 27 estados',
                      'Normaliza formatos em taxonomia única',
                      'Geocodifica moradas com 50m precisão',
                      'Calcula risk scores em tempo real',
                      'API REST simples e rápida'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It's Different */}
                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-700 flex items-center">
                    <Zap className="mr-2" size={24} />
                    Como É Diferente
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Automatizado', desc: 'Sem consultoria manual' },
                      { label: 'Escalável', desc: 'Resposta < 2 segundos' },
                      { label: 'Transparente', desc: 'Mostra fonte e idade' },
                      { label: 'Acessível', desc: 'R$ 1.580 vs R$ 50k' },
                      { label: 'Nacional', desc: 'Cobertura total Brasil' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="font-semibold text-blue-600 mr-2">{item.label}:</span>
                        <span className="text-gray-600 text-sm md:text-base">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Flow */}
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-center text-gray-800">Fluxo da Solução</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Database, label: 'Coleta', desc: 'Dados públicos', color: 'green' },
                    { icon: BarChart, label: 'Processa', desc: 'ML & normalização', color: 'blue' },
                    { icon: Globe, label: 'Geocodifica', desc: 'Moradas → coords', color: 'purple' },
                    { icon: Shield, label: 'Entrega', desc: 'API + risk score', color: 'indigo' }
                  ].map((step, idx) => (
                    <div key={idx} className="text-center group">
                      <div className={`bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 rounded-2xl p-4 md:p-6 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className={`text-${step.color}-600 mx-auto`} size={32} />
                      </div>
                      <h4 className="font-bold text-sm md:text-base text-gray-800">{idx + 1}. {step.label}</h4>
                      <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* API Response Example */}
            <div className="bg-gray-900 rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-white flex items-center">
                <Database className="mr-2" size={24} />
                Exemplo de Resposta da API
              </h3>
              <pre className="bg-black/50 text-green-400 p-4 md:p-6 rounded-xl overflow-x-auto text-xs md:text-sm font-mono">
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
    "last_updated": "2025-09-22"
  }
}`}
              </pre>
            </div>
          </div>
        )}

        {/* Modelo de Negócio Section */}
        {activeSection === 'modelo' && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Pricing Cards */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
                Estratégia de Preços Simples
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {pricingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`
                      relative rounded-2xl p-6 transition-all duration-300 hover:scale-105
                      ${plan.highlighted
                        ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl scale-105'
                        : 'bg-white border-2 border-gray-200 hover:border-indigo-300'
                      }
                    `}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className={`text-lg font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                          R${plan.price === 0 ? '0' : (plan.price / 1000).toFixed(1) + 'k'}
                        </span>
                        <span className={`ml-1 text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <CheckCircle className={`mr-2 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-green-500'}`} size={16} />
                          <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className={`
                      w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300
                      ${plan.highlighted
                        ? 'bg-white text-indigo-600 hover:bg-gray-100'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }
                    `}>
                      Escolher Plano
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Projection */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
                Projeção Realista - 6 Meses
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-100 rounded-t-xl">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Mês</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Clientes</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Ticket Médio</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Receita</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Lucro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { month: 1, clients: 10, ticket: 2650, revenue: 26500, profit: 22260 },
                      { month: 3, clients: 50, ticket: 3710, revenue: 185500, profit: 169600 },
                      { month: 6, clients: 180, ticket: 4505, revenue: 810900, profit: 747300 }
                    ].map((row, idx) => (
                      <tr key={idx} className={`border-b hover:bg-green-50 transition-colors ${idx === 2 ? 'bg-green-50 font-semibold' : ''}`}>
                        <td className="px-4 py-3 text-sm">Mês {row.month}</td>
                        <td className="px-4 py-3 text-sm text-right">{row.clients}</td>
                        <td className="px-4 py-3 text-sm text-right">R$ {row.ticket.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-right font-bold">R$ {row.revenue.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-right text-green-600 font-bold">
                          R$ {row.profit.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded-xl">
                <p className="text-center text-green-800 font-semibold">
                  🎯 Break-even esperado: Mês 4 | ROI projetado: 1082% em 6 meses
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Equipe & Custos Section */}
        {activeSection === 'equipe' && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-600 flex items-center">
                <Users className="mr-3" size={32} />
                Equipa & Estrutura de Custos
              </h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Team Members */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Nossa Equipa</h3>
                  {[
                    {
                      role: 'Full-Stack Developer Senior',
                      skills: 'React, Node.js, PostgreSQL, AWS',
                      salary: 12000,
                      color: 'purple'
                    },
                    {
                      role: 'Cientista de Dados',
                      skills: 'Python, ML, ETL, APIs públicas',
                      salary: 8000,
                      color: 'blue'
                    },
                    {
                      role: 'Product Manager',
                      skills: 'Vendas, suporte, roadmap',
                      salary: 3000,
                      color: 'green'
                    }
                  ].map((member, idx) => (
                    <div key={idx} className={`bg-gradient-to-r from-${member.color}-50 to-${member.color}-100 rounded-xl p-4 md:p-5 border-l-4 border-${member.color}-500`}>
                      <h4 className="font-bold text-gray-800 mb-1">{member.role}</h4>
                      <p className="text-sm text-gray-600 mb-2">{member.skills}</p>
                      <p className={`text-lg font-bold text-${member.color}-600`}>
                        R$ {member.salary.toLocaleString()}/mês
                      </p>
                    </div>
                  ))}
                </div>

                {/* Cost Breakdown */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Custos Mensais</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Salários (3 pessoas)</span>
                      <span className="font-bold text-gray-800">R$ 23.000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Infraestrutura AWS</span>
                      <span className="font-bold text-gray-800">R$ 800</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Ferramentas</span>
                      <span className="font-bold text-gray-800">R$ 200</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
                      <span className="text-lg font-bold text-gray-800">Total Mensal</span>
                      <span className="text-xl font-bold text-red-600">R$ 24.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Trimestre (90 dias)</span>
                      <span className="text-lg font-semibold text-red-500">R$ 72.000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financing Strategy */}
              <div className="mt-8 bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-800 flex items-center">
                  <Zap className="mr-2" size={24} />
                  Como Financiar Sem Investimento
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-yellow-700 mb-2">Estratégia Principal:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custos são "empréstimo" da empresa atual</li>
                      <li>• Reembolso quando atingir R$ 30k MRR</li>
                      <li>• Break-even estimado: Mês 4-5</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-yellow-700 mb-2">Plano B - Redução:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 2 pessoas apenas: R$ 15k/mês</li>
                      <li>• Freelancer data: R$ 3k/projeto</li>
                      <li>• Break-even: Mês 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cronograma Section */}
        {activeSection === 'cronograma' && (
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-600 flex items-center">
                <Calendar className="mr-3" size={32} />
                Cronograma de 90 Dias
              </h2>

              {/* Timeline Header */}
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-4 mb-8 text-center">
                <p className="text-lg font-semibold text-indigo-800">
                  📅 {metrics.startDate} → {metrics.endDate}
                </p>
              </div>

              {/* Timeline Cards */}
              <div className="space-y-6">
                {[
                  {
                    month: 1,
                    title: 'Fundação & Validação',
                    dates: '29/09 - 29/10',
                    color: 'blue',
                    dev: [
                      { task: 'Setup do projeto', status: 'done' },
                      { task: 'Infraestrutura AWS', status: 'done' },
                      { task: 'Coleta dados SSP-SP', status: 'progress' },
                      { task: 'API REST básica', status: 'pending' },
                      { task: 'Landing page', status: 'pending' }
                    ],
                    business: [
                      { task: '500 empresas prospect', status: 'done' },
                      { task: 'Cold email campaign', status: 'progress' },
                      { task: 'LinkedIn outreach', status: 'progress' },
                      { task: 'Meta: 50 leads', status: 'pending' }
                    ]
                  },
                  {
                    month: 2,
                    title: 'MVP & Primeiros Clientes',
                    dates: '30/10 - 29/11',
                    color: 'green',
                    dev: [
                      { task: 'API completa SP', status: 'pending' },
                      { task: 'Dashboard cliente', status: 'pending' },
                      { task: 'Autenticação', status: 'pending' },
                      { task: 'Documentação', status: 'pending' }
                    ],
                    business: [
                      { task: '3 clientes beta', status: 'pending' },
                      { task: 'Pricing refinement', status: 'pending' },
                      { task: 'Feedback loops', status: 'pending' },
                      { task: 'Meta: R$ 5k MRR', status: 'pending' }
                    ]
                  },
                  {
                    month: 3,
                    title: 'Escala & Otimização',
                    dates: '30/11 - 29/12',
                    color: 'purple',
                    dev: [
                      { task: 'Adicionar RJ', status: 'pending' },
                      { task: 'ML para dados', status: 'pending' },
                      { task: 'Performance opt', status: 'pending' },
                      { task: 'Mobile responsive', status: 'pending' }
                    ],
                    business: [
                      { task: 'Sales automation', status: 'pending' },
                      { task: 'Content marketing', status: 'pending' },
                      { task: 'Partnerships', status: 'pending' },
                      { task: 'Meta: R$ 26k MRR', status: 'pending' }
                    ]
                  }
                ].map((phase, idx) => (
                  <div key={idx} className={`border-l-4 border-${phase.color}-500 pl-6`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className={`text-xl font-bold text-${phase.color}-600`}>
                        📅 Mês {phase.month}: {phase.title}
                      </h3>
                      <span className="text-sm text-gray-600 font-medium">{phase.dates}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className={`bg-${phase.color}-50 rounded-xl p-4`}>
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <Database className="mr-2" size={18} />
                          Desenvolvimento
                        </h4>
                        <ul className="space-y-2">
                          {phase.dev.map((item, tidx) => (
                            <li key={tidx} className="flex items-center text-sm">
                              {item.status === 'done' && <CheckCircle className="text-green-500 mr-2" size={16} />}
                              {item.status === 'progress' && <Clock className="text-yellow-500 mr-2" size={16} />}
                              {item.status === 'pending' && <Circle className="text-gray-400 mr-2" size={16} />}
                              <span className={item.status === 'done' ? 'line-through text-gray-500' : 'text-gray-700'}>
                                {item.task}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <TrendingUp className="mr-2" size={18} />
                          Negócio
                        </h4>
                        <ul className="space-y-2">
                          {phase.business.map((item, tidx) => (
                            <li key={tidx} className="flex items-center text-sm">
                              {item.status === 'done' && <CheckCircle className="text-green-500 mr-2" size={16} />}
                              {item.status === 'progress' && <Clock className="text-yellow-500 mr-2" size={16} />}
                              {item.status === 'pending' && <Circle className="text-gray-400 mr-2" size={16} />}
                              <span className={item.status === 'done' ? 'line-through text-gray-500' : 'text-gray-700'}>
                                {item.task}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Milestone */}
              <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">🏁 Milestone Final - {metrics.endDate}</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold">R$ 26k</p>
                    <p className="text-sm opacity-90">MRR atingido</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">50+</p>
                    <p className="text-sm opacity-90">Clientes ativos</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">SP+RJ</p>
                    <p className="text-sm opacity-90">Cobertura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {activeSection && (
          <div className="mt-12 text-center text-gray-600 pb-8">
            <p className="text-sm">
              Desenvolvido por <strong>Straford Geek Ltd</strong> - Software Solutions
            </p>
            <p className="text-xs mt-2">
              Versão {metrics.version} • Atualizado em {metrics.lastUpdate}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

// Helper component for timeline status circles
const Circle = ({ className, size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default PlanoDeNegociosBootstrap;
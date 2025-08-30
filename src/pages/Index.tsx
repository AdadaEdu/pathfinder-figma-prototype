import { useState } from "react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import DashboardProgress from "@/components/DashboardProgress";
import LearningPathCard from "@/components/LearningPathCard";
import FilterPanel from "@/components/FilterPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Users, Trophy, Clock, Search, Sparkles } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    difficulties: [],
    durations: []
  });

  const stats = [
    {
      title: "Trilhas Concluídas",
      value: 12,
      description: "Este mês",
      icon: BookOpen,
      trend: { value: 20, isPositive: true }
    },
    {
      title: "Horas de Estudo",
      value: "47h",
      description: "Nesta semana",
      icon: Clock,
      trend: { value: 15, isPositive: true }
    },
    {
      title: "Sequência Atual",
      value: "8 dias",
      description: "Seu recorde!",
      icon: Trophy,
      trend: { value: 0, isPositive: true }
    },
    {
      title: "Posição no Ranking",
      value: "#23",
      description: "Entre amigos",
      icon: Users,
      trend: { value: 5, isPositive: true }
    }
  ];

  const learningPaths = [
    {
      title: "React + TypeScript Masterclass",
      description: "Domine React com TypeScript do básico ao avançado, incluindo hooks, context, testing e performance.",
      difficulty: "intermediario" as const,
      duration: "45 horas",
      studentsCount: 15420,
      rating: 4.8,
      progress: 68,
      category: "Programação",
      isRecommended: true
    },
    {
      title: "UI/UX Design Completo",
      description: "Aprenda design de interfaces desde os fundamentos até prototipagem avançada no Figma.",
      difficulty: "iniciante" as const,
      duration: "32 horas",
      studentsCount: 8945,
      rating: 4.9,
      progress: 85,
      category: "Design"
    },
    {
      title: "Python para Data Science",
      description: "Análise de dados, machine learning e visualização com Python, pandas e scikit-learn.",
      difficulty: "intermediario" as const,
      duration: "58 horas",
      studentsCount: 12300,
      rating: 4.7,
      category: "Dados"
    },
    {
      title: "DevOps com Docker e Kubernetes", 
      description: "Containerização, orquestração e deploy de aplicações em ambiente cloud.",
      difficulty: "avancado" as const,
      duration: "67 horas",
      studentsCount: 5670,
      rating: 4.6,
      category: "DevOps"
    },
    {
      title: "Marketing Digital Estratégico",
      description: "SEO, SEM, redes sociais e análise de métricas para crescimento sustentável.",
      difficulty: "iniciante" as const,
      duration: "28 horas",
      studentsCount: 9850,
      rating: 4.5,
      category: "Marketing"
    },
    {
      title: "Flutter para Mobile",
      description: "Desenvolvimento de apps nativos para iOS e Android com Flutter e Dart.",
      difficulty: "intermediario" as const,
      duration: "52 horas", 
      studentsCount: 7230,
      rating: 4.8,
      category: "Mobile"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Sistema de Recomendação Inteligente
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-advanced bg-clip-text text-transparent">
            Sua Jornada de Aprendizado
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra trilhas personalizadas, acompanhe seu progresso e alcance seus objetivos de aprendizagem.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <BookOpen className="w-5 h-5 mr-2" />
            Explorar Trilhas
          </Button>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Progress & Filters */}
          <div className="lg:col-span-1 space-y-6">
            <DashboardProgress />
            <FilterPanel onFilterChange={setFilters} />
          </div>

          {/* Learning Paths */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar trilhas de aprendizagem..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                Filtrar
              </Button>
            </div>

            {/* Recommended Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Recomendado para Você</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningPaths.slice(0, 2).map((path, index) => (
                  <LearningPathCard key={index} {...path} />
                ))}
              </div>
            </div>

            {/* All Learning Paths */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Todas as Trilhas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningPaths.map((path, index) => (
                  <LearningPathCard key={index} {...path} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Clock, TrendingUp } from "lucide-react";

const DashboardProgress = () => {
  const currentGoals = [
    {
      title: "React Avançado",
      progress: 68,
      totalLessons: 24,
      completedLessons: 16,
      category: "Programação",
      deadline: "15 dias"
    },
    {
      title: "UI/UX Design",
      progress: 85,
      totalLessons: 18,
      completedLessons: 15,
      category: "Design", 
      deadline: "8 dias"
    },
    {
      title: "TypeScript Fundamentals",
      progress: 42,
      totalLessons: 12,
      completedLessons: 5,
      category: "Programação",
      deadline: "22 dias"
    }
  ];

  const achievements = [
    { title: "Primeira trilha concluída", icon: Trophy, earned: true },
    { title: "Sequência de 7 dias", icon: Target, earned: true },
    { title: "10 horas de estudo", icon: Clock, earned: false },
    { title: "Nota máxima em quiz", icon: TrendingUp, earned: true }
  ];

  return (
    <div className="space-y-6">
      {/* Current Learning Paths */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Trilhas em Andamento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentGoals.map((goal, index) => (
            <div key={index} className="space-y-3 p-4 rounded-lg bg-muted/30 border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{goal.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {goal.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {goal.completedLessons}/{goal.totalLessons} aulas
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{goal.progress}%</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {goal.deadline}
                  </div>
                </div>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning" />
            Conquistas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  achievement.earned
                    ? "bg-success/10 border-success/20 text-success-foreground"
                    : "bg-muted/20 border-muted opacity-60"
                }`}
              >
                <achievement.icon className={`w-4 h-4 ${achievement.earned ? "text-success" : "text-muted-foreground"}`} />
                <span className="text-sm font-medium">{achievement.title}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardProgress;
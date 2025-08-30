import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DifficultyBadge from "./DifficultyBadge";
import ProgressBar from "./ProgressBar";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface LearningPathCardProps {
  title: string;
  description: string;
  difficulty: "iniciante" | "intermediario" | "avancado";
  duration: string;
  studentsCount: number;
  rating: number;
  progress?: number;
  category: string;
  isRecommended?: boolean;
  className?: string;
}

const LearningPathCard = ({
  title,
  description,
  difficulty,
  duration,
  studentsCount,
  rating,
  progress,
  category,
  isRecommended = false,
  className
}: LearningPathCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-card relative overflow-hidden",
      isRecommended && "ring-2 ring-primary/20 shadow-glow",
      className
    )}>
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground">
            Recomendado
          </Badge>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-card opacity-60" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit">
              {category}
            </Badge>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
          <DifficultyBadge difficulty={difficulty} />
        </div>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{studentsCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span>{rating}</span>
          </div>
        </div>

        {progress !== undefined && (
          <ProgressBar value={progress} size="sm" />
        )}

        <div className="flex items-center gap-2 pt-2">
          <Button className="flex-1" size="sm">
            <BookOpen className="w-4 h-4 mr-2" />
            {progress !== undefined ? "Continuar" : "Começar"}
          </Button>
          <Button variant="outline" size="sm">
            Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPathCard;
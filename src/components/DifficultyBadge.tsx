import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: "iniciante" | "intermediario" | "avancado";
  className?: string;
}

const DifficultyBadge = ({ difficulty, className }: DifficultyBadgeProps) => {
  const variants = {
    iniciante: "bg-beginner hover:bg-beginner/80 text-white",
    intermediario: "bg-intermediate hover:bg-intermediate/80 text-white",
    avancado: "bg-advanced hover:bg-advanced/80 text-white",
  };

  const labels = {
    iniciante: "Iniciante",
    intermediario: "Intermediário", 
    avancado: "Avançado",
  };

  return (
    <Badge className={cn(variants[difficulty], "font-medium", className)}>
      {labels[difficulty]}
    </Badge>
  );
};

export default DifficultyBadge;
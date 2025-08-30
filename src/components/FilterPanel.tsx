import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filter, X } from "lucide-react";
import { useState } from "react";

interface FilterPanelProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  categories: string[];
  difficulties: string[];
  durations: string[];
}

const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    difficulties: [],
    durations: []
  });

  const categories = [
    "Programação", "Design", "Marketing", "Dados", "DevOps", "Mobile"
  ];

  const difficulties = [
    { id: "iniciante", label: "Iniciante", color: "bg-beginner" },
    { id: "intermediario", label: "Intermediário", color: "bg-intermediate" },
    { id: "avancado", label: "Avançado", color: "bg-advanced" }
  ];

  const durations = ["< 10h", "10-30h", "30-60h", "> 60h"];

  const toggleFilter = (type: keyof FilterState, value: string) => {
    const newFilters = { ...filters };
    const currentArray = newFilters[type];
    
    if (currentArray.includes(value)) {
      newFilters[type] = currentArray.filter(item => item !== value);
    } else {
      newFilters[type] = [...currentArray, value];
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters = { categories: [], difficulties: [], durations: [] };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const totalFilters = filters.categories.length + filters.difficulties.length + filters.durations.length;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
          </CardTitle>
          {totalFilters > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Limpar ({totalFilters})
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Categoria
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={filters.categories.includes(category) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => toggleFilter("categories", category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Difficulty */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Dificuldade
          </h4>
          <div className="space-y-2">
            {difficulties.map((diff) => (
              <Badge
                key={diff.id}
                variant={filters.difficulties.includes(diff.id) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors w-full justify-center"
                onClick={() => toggleFilter("difficulties", diff.id)}
              >
                {diff.label}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Duration */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Duração
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {durations.map((duration) => (
              <Badge
                key={duration}
                variant={filters.durations.includes(duration) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors justify-center"
                onClick={() => toggleFilter("durations", duration)}
              >
                {duration}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterPanel;
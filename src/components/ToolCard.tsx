import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  twitter?: string;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Dapps": "bg-category-dapps",
    "NFTs": "bg-category-nfts",
    "Gaming": "bg-category-gaming",
    "Voice Apps": "bg-category-voice",
    "Utility": "bg-category-utility",
  };
  return colors[category] || "bg-muted";
};

export const ProjectCard = ({ name, description, category, imageUrl, link, twitter }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="aspect-video bg-secondary/50 flex items-center justify-center p-8 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className={`absolute top-3 left-3 ${getCategoryColor(category)} text-xs font-medium`}>
            {category}
          </Badge>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </a>
      {twitter && (
        <div className="px-5 pb-5">
          <a 
            href={`https://twitter.com/${twitter}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>creator :</span>
            <span>@{twitter}</span>
          </a>
        </div>
      )}
    </Card>
  );
};

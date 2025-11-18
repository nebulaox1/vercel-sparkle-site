import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { tools } from "@/data/tools";
import { ArrowLeft, MessageSquare, Plus } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return Array.from(new Set(tools.map(tool => tool.category)));
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex gap-2">
            <Button variant="default" className="gap-2">
              <Plus className="h-4 w-4" />
              Suggest a Tool
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Write feedback
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          Web3 Toolkit
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Curated collection of investigative tools, AI creator tools, web3 trackers, crypto gateways, utility apps, and hidden gems
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Additional Category Row */}
        <div className="flex justify-center">
          <Button variant="secondary" className="rounded-full">
            Web & Discord Tools
          </Button>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredTools.length}</span> tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              name={tool.name}
              description={tool.description}
              category={tool.category}
              imageUrl={tool.imageUrl}
              link={tool.link}
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No tools found matching your search criteria
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;

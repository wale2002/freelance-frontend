import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Zap, Shield, TrendingUp } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Global Talent Pool",
      description: "Access 150,000+ pre-vetted engineers, designers, and data scientists from around the world.",
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Reduce time-to-hire by 66% with our streamlined matching and onboarding process.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every professional goes through rigorous technical assessments and background checks.",
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Save an average of $80,000 per hire while getting top-tier talent.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Andela?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We connect you with world-class talent that drives real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="px-10">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

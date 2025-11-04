import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Build better DevOps, Data, and AI solutions — faster
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl">
            There are more than 150,000 highly skilled tech professionals on our roster. 
            Most in largely untapped markets. Ready to be placed quickly and effectively.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button variant="hero" size="lg" className="text-base px-8 py-6 h-auto">
              Hire Talent
            </Button>
            <Button variant="herSecondary" size="lg" className="text-base px-8 py-6 h-auto">
              What is Adaptive Hiring?
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-secondary/40 backdrop-blur-sm border border-primary-foreground/10 p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                150<span className="text-3xl">k</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Top-rated, highly skilled global talent pool
              </p>
            </div>
            
            <div className="bg-secondary/40 backdrop-blur-sm border border-primary-foreground/10 p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <span className="text-3xl">$</span>80,000
              </div>
              <p className="text-sm text-primary-foreground/80">
                Cost savings per talent hired through Andela
              </p>
            </div>
            
            <div className="bg-secondary/40 backdrop-blur-sm border border-primary-foreground/10 p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                66<span className="text-3xl">%</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Faster time to hire
              </p>
            </div>
            
            <div className="bg-secondary/40 backdrop-blur-sm border border-primary-foreground/10 p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                33<span className="text-3xl">%</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Faster project delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

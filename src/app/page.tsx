import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mic, Camera, Sun, Heart, Volume2, Lightbulb, ArrowRight, LucideIcon, Gem, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Image from "next/image"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: string
}

const FeatureCard = ({ icon: Icon, title, description, delay = "0ms" }: FeatureCardProps) => (
  <Card className="border-border shadow-sm rounded-xl bg-card hover:bg-card-hover transition-colors hover-lift hover-glow animate-scale" style={{ animationDelay: delay }}>
    <CardHeader className="pb-2">
      <div className="mb-4">
        <span className="p-2 rounded-full bg-muted inline-flex">
          <Icon className="w-5 h-5 text-foreground" />
        </span>
      </div>
      <CardTitle className="text-foreground text-lg">{title}</CardTitle>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </CardHeader>
  </Card>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-6 md:px-10 lg:px-20 flex justify-between items-center border-b border-border backdrop-blur-sm bg-background/80 fixed w-full z-50">
        <div className="font-semibold tracking-tight">UltimateGlasses</div>
        <nav className="hidden md:flex space-x-10">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Experience</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Pricing</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" className="rounded-full border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm px-5">
            Try Now
          </Button>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-4 flex md:justify-start justify-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 animate-slide-down">Revolutionary Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight animate-slide-up">
                A New Vision <br />Of The World
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
                Redefine your perception with our glasses technology that radically transforms the way you see and interact with the world.
              </p>
              <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 hover-lift group">
                  Discover <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative animate-slide-left overflow-hidden rounded-xl">
              <div className="relative w-full h-[400px] rounded-xl hover-scale overflow-hidden">
                <Image 
                  src="/img/lunette.png" 
                  alt="UltimateGlasses" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="border border-border/50 rounded-full px-6 py-2 bg-background/30 backdrop-blur-sm hover-lift">
              <p className="text-sm text-muted-foreground flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-primary" /> 
                Created by Ardélaïde, Thomas, Valentin & Sacha
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 px-6 md:px-10 lg:px-20 bg-background border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-2">98%</p>
              <p className="text-sm text-muted-foreground">User Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-2">30+</p>
              <p className="text-sm text-muted-foreground">Languages Supported</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-2">12hrs</p>
              <p className="text-sm text-muted-foreground">Battery Life</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground mb-2">5000+</p>
              <p className="text-sm text-muted-foreground">Beta Testers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-24 px-6 md:px-10 lg:px-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-2 text-center mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Innovative Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our revolutionary technology offers features that redefine the visual experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Mic} 
              title="AI Microphone" 
              description="Advanced voice commands with contextual recognition"
              delay="50ms"
            />
            
            <FeatureCard 
              icon={Camera} 
              title="Smart Camera" 
              description="Embedded artificial intelligence for real-time analysis"
              delay="100ms"
            />
            
            <FeatureCard 
              icon={Sun} 
              title="Light Adaptation" 
              description="Automatic adjustment to lighting conditions"
              delay="150ms"
            />
            
            <FeatureCard 
              icon={Heart} 
              title="Eye Health" 
              description="Continuous monitoring of your vision health parameters"
              delay="200ms"
            />
            
            <FeatureCard 
              icon={Volume2} 
              title="Spatial Audio" 
              description="Directional audio technology for perfect immersion"
              delay="250ms"
            />
            
            <FeatureCard 
              icon={Lightbulb} 
              title="Augmented Vision" 
              description="Contextual information overlay on the real world"
              delay="300ms"
            />
          </div>
        </div>
      </section>

      {/* Large image section */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="w-full aspect-[2/1] bg-muted flex items-center justify-center hover-scale transition-transform duration-700 rounded-sm relative overflow-hidden">
          <Image 
            src="/img/lunette.png" 
            alt="UltimateGlasses" 
            width={1200} 
            height={600} 
            className="object-contain hover-scale transition-transform duration-700"
          />
          <div className="absolute bottom-6 right-6 p-3 bg-background/70 backdrop-blur-sm rounded-lg">
            <p className="text-xs text-muted-foreground">UltimateGlasses Preview</p>
          </div>
        </div>
      </section>

      {/* User experience section */}
      <section id="experience" className="py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-2 mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The User Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover how our technology transforms the way you see the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4 animate-slide-right" style={{ animationDelay: "50ms" }}>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center hover-scale overflow-hidden">
                <Image
                  src="/img/camera.png"
                  alt="Smart Camera"
                  width={300}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium">Real-Time Translation</h3>
              <p className="text-muted-foreground text-sm">
                Understand any language in real time with smart subtitles directly in your field of vision.
              </p>
            </div>

            <div className="flex flex-col gap-4 animate-slide-right" style={{ animationDelay: "150ms" }}>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center hover-scale overflow-hidden">
                <Image
                  src="/img/audiofeature.png"
                  alt="Spatial Audio"
                  width={300}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium">Visual Recognition</h3>
              <p className="text-muted-foreground text-sm">
                Instantly identify objects, people, and surrounding information with remarkable precision.
              </p>
            </div>

            <div className="flex flex-col gap-4 animate-slide-right" style={{ animationDelay: "250ms" }}>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center hover-scale overflow-hidden">
                <Image
                  src="/img/nightvisonfeature.png"
                  alt="Night Vision"
                  width={300}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium">Adaptive Vision</h3>
              <p className="text-muted-foreground text-sm">
                Navigate easily in darkness thanks to our integrated night vision technology, effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-24 px-6 md:px-10 lg:px-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-2 text-center mb-20 animate-fade-in">
            <div className="flex justify-center mb-4">
              <span className="p-2 rounded-full bg-primary/20 inline-flex border border-primary/30">
                <Gem className="w-5 h-5 text-primary" />
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Pricing Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your visual enhancement needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background rounded-xl p-8 border border-border hover-lift hover-glow shadow-sm">
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground">Basic</p>
                <h3 className="text-3xl font-bold mt-2">€2990</h3>
                <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
              </div>
              <div className="h-px w-full bg-border my-6"></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">Standard visual enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">8-hour battery life</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">Basic language translation</span>
                </li>
              </ul>
              <Button className="w-full rounded-full">Choose Basic</Button>
            </div>
            
            <div className="bg-background rounded-xl p-8 border-2 border-primary/30 hover-lift hover-glow shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">Most Popular</div>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground">Premium</p>
                <h3 className="text-3xl font-bold mt-2">€4990</h3>
                <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
              </div>
              <div className="h-px w-full bg-border my-6"></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">Enhanced visual clarity</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">12-hour battery life</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">30+ language translations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">Night vision capability</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Choose Premium</Button>
            </div>
            
            <div className="bg-background rounded-xl p-8 border border-border hover-lift hover-glow shadow-sm">
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground">Ultimate</p>
                <h3 className="text-3xl font-bold mt-2">€8990</h3>
                <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
              </div>
              <div className="h-px w-full bg-border my-6"></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">Maximum visual enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">24-hour battery life</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">All premium features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 border border-primary/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-sm">Lifetime updates</span>
                </li>
              </ul>
              <Button className="w-full rounded-full">Choose Ultimate</Button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">All plans include a 30-day money-back guarantee</p>
            <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 text-xs text-muted-foreground">
              <Sparkles className="w-3 h-3 text-primary" />
              Financing options available
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-10 lg:px-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <div className="flex flex-col gap-2 mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-muted-foreground/20"></div>
                <div className="w-8 h-8 rounded-full bg-muted-foreground/30"></div>
                <div className="w-8 h-8 rounded-full bg-muted-foreground/40"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback that demonstrates the power of our technology.
            </p>
          </div>
          
          <blockquote className="italic text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
            &ldquo;These glasses have completely transformed the way I interact with the world. The instant translation has made my international travels incredibly smooth.&rdquo;
          </blockquote>
          <p className="font-medium animate-slide-up" style={{ animationDelay: "100ms" }}>Sophie Durand</p>
          <p className="text-muted-foreground text-sm animate-slide-up" style={{ animationDelay: "150ms" }}>Traveler & Photographer</p>
        </div>
      </section>

      {/* Call to action */}
      <section id="contact" className="py-20 px-6 md:px-10 lg:px-20 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join our waitlist to be among the first to test UltimateGlasses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 hover-lift hover-glow group border-2 border-primary/20">
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-10 lg:px-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="font-medium mb-8 md:mb-0">UltimateGlasses</div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left">Legal Notice</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left">Privacy Policy</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left">Contact</a>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm">
            © 2025 UltimateGlasses. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

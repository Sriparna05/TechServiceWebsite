import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Shield, Smartphone, BarChart3, Globe, Palette, Users } from "lucide-react";
import { TestimonialSlider } from "./TestimonialSlider";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cyber Security",
      description: "Protect your digital assets with advanced security measures"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications"
    }
  ];

  const expertise = [
    { name: "Cloud Solutions", count: "200+" },
    { name: "Security Audits", count: "150+" },
    { name: "Data Projects", count: "300+" },
    { name: "Happy Clients", count: "500+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="bg-background/10 border-primary/20 dark:text-foreground text-white">
              🚀 Empowering Digital Innovation
            </Badge>
            
            <h1 className="hero-title text-gradient-primary">
              Empowering Digital
              <br />
              Possibilities with
              <br />
              <span className="text-foreground">Ementora</span>
            </h1>
            
            <p className="hero-subtitle mx-auto">
              We transform businesses through cutting-edge technology solutions, 
              innovative software development, and strategic digital consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="gradient" className="text-lg px-8">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover-glow cursor-pointer transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Numbers that speak to our commitment and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary">
                  {item.count}
                </div>
                <div className="text-muted-foreground font-medium">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimonials
            </h2>
            <p className="text-muted-foreground text-lg">
              What our clients say about working with Ementora
            </p>
          </div>
          
          {/* Modern sleek testimonial slider */}
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80">
              Let's discuss how Ementora can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Get Started Today
              </Button>
              <Button size="lg" variant="hero" className="text-lg px-8">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
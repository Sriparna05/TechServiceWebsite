import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  Code, 
  BarChart3, 
  Database, 
  Shield, 
  Megaphone, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Information Technology Consulting",
      description: "Strategic IT consulting to align technology with your business objectives and drive digital transformation.",
      features: ["IT Strategy Planning", "Digital Transformation", "Technology Assessment", "Infrastructure Optimization"],
      badge: "Strategic"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your unique business requirements.",
      features: ["Custom Applications", "API Development", "Cloud-Native Solutions", "Legacy Modernization"],
      badge: "Development"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"],
      badge: "Analytics"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management Systems (DBMS)",
      description: "Comprehensive database solutions ensuring optimal performance, security, and scalability for your data.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"],
      badge: "Database"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cyber Security",
      description: "Protect your digital assets with comprehensive security solutions and advanced threat protection.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      badge: "Security"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Digital Marketing & Social Media Management",
      description: "Amplify your digital presence with strategic marketing campaigns and social media engagement.",
      features: ["Social Media Strategy", "Content Marketing", "SEO Optimization", "Campaign Analytics"],
      badge: "Marketing"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Designing",
      description: "Create stunning, responsive websites that deliver exceptional user experiences and drive conversions.",
      features: ["Responsive Design", "UI/UX Optimization", "E-commerce Solutions", "CMS Development"],
      badge: "Design"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description: "Build powerful mobile applications for iOS and Android that engage users and grow your business.",
      features: ["Native iOS/Android", "Cross-Platform", "Progressive Web Apps", "App Store Optimization"],
      badge: "Mobile"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="outline" className="bg-background/10 border-primary/20 dark:text-foreground text-white">
              🔧 Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Our Services
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive technology services designed to accelerate your digital transformation
              and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From strategic consulting to hands-on development, we provide end-to-end technology 
              services that transform businesses and create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-glow transition-all duration-300 h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent-bright">
                      {service.badge}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and objectives" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive solution roadmap" },
              { step: "03", title: "Implementation", description: "Executing the solution with precision and care" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero border-0 text-white">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="hero">
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
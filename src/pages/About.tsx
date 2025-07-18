import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, Zap, Calendar, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client relationships."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Partnership",
      description: "We believe in building long-term relationships based on trust, transparency, and mutual success."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We work closely with our clients as an extension of their team to achieve shared objectives."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Ementora was founded with a vision to democratize technology solutions for businesses of all sizes."
    },
    {
      year: "2019",
      title: "First Major Project",
      description: "Completed our first enterprise-level digital transformation project, establishing our reputation in the market."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 25+ skilled professionals and established specialized practice areas."
    },
    {
      year: "2021",
      title: "Cloud Expertise",
      description: "Achieved cloud provider certifications and became a trusted partner for cloud migration projects."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Integrated AI and machine learning capabilities into our service offerings."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded our operations internationally, serving clients across multiple continents."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched our innovation lab to explore emerging technologies and future-proof solutions."
    }
  ];

  const team = [
    {
      name: "Sudip Das",
      role: "CEO & Founder",
      quote: "Technology should empower businesses, not complicate them. We make it simple.",
      initials: "SD"
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="outline" className="bg-background/10 border-primary/20 dark:text-foreground text-white">
              👥 Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About Ementora
            </h1>
            <p className="text-xl text-white/80">
              We're not just another tech company. We're your strategic partner in digital transformation,
              committed to turning your vision into reality through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create sustainable competitive advantages in the digital age.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the leading technology partner that transforms how businesses operate, 
                  innovate, and succeed in an increasingly connected world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-accent rounded-2xl p-8 shadow-elegant">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">99%</div>
                    <div className="text-sm opacity-90">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover-glow">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <Badge variant="outline">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-lg">
              The visionaries driving innovation at Ementora
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover-glow w-full max-w-xs">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "{member.quote}"
                  </blockquote>
                </CardContent>
              </Card>
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
                Join Our Journey
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Whether you're looking to transform your business or join our team, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Join Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
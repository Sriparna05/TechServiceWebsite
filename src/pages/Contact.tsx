import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      detail: "hello@ementora.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      detail: "San Francisco, CA",
      description: "Come say hello at our HQ"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      detail: "< 24 hours",
      description: "We respond quickly"
    }
  ];

  const reasons = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Quick Response",
      description: "Get answers to your questions within 24 hours"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Connect directly with our technical experts"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Solutions",
      description: "Rapid prototyping and solution development"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="outline" className="bg-background/10 border-primary/20 text-foreground">
              📞 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-xl text-white/80">
              Ready to transform your business? Let's discuss your project and explore 
              how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="gradient"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Choose the most convenient way to reach out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover-glow">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                      <p className="font-medium text-lg">{info.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Why choose Ementora?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-gradient-primary rounded-lg text-white">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground text-lg">
              We're located in the heart of San Francisco's tech district
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-elegant">
            <div className="aspect-video bg-gradient-accent flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <MapPin className="h-12 w-12 mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold">Ementora HQ</h3>
                  <p className="text-white/80">123 Innovation Drive</p>
                  <p className="text-white/80">San Francisco, CA 94105</p>
                </div>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we provide comprehensive support and maintenance packages to ensure your solutions continue to perform optimally."
              },
              {
                q: "Can you work with our existing systems?",
                a: "Absolutely! We specialize in integrating with existing infrastructure and can help modernize legacy systems."
              },
              {
                q: "What industries do you serve?",
                a: "We work across various industries including healthcare, finance, e-commerce, education, and manufacturing."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
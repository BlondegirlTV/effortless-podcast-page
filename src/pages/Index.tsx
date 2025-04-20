import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Video, Play, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LOGO_SRC = "/lovable-uploads/7dd6003a-94b4-4116-b0ac-e852c9a6f043.png";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      {/* Logo Banner */}
      <div className="bg-white flex justify-center py-6 shadow-md">
        <img
          src={LOGO_SRC}
          alt="Blonde Girl TV Productions Logo"
          className="h-24 w-auto"
          style={{ maxWidth: "320px" }}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-podcast-purple text-white relative overflow-hidden">
        <div className="container mx-auto py-16 px-4 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-4">
                <span className="text-podcast-orange">Effortless</span> Podcasts
              </h1>
              <p className="text-xl md:text-2xl mb-2">Tailor-made for business owners</p>
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                Your First 3 Episodes only <span className="text-podcast-orange">$2,499</span>
              </h2>
              <p className="text-lg mb-8">
                Let us handle everything while you focus on your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-podcast-orange hover:bg-podcast-orange/90 text-white text-lg px-8 py-6">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/lovable-uploads/3476457a-d0c8-4224-bc70-2766560f245f.png" 
                alt="Effortless Podcasts" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We Handle <span className="text-podcast-orange">Everything</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Mic className="h-12 w-12 text-podcast-orange" />}
              title="2 Professional Hosts"
              description="Our experienced hosts will bring your story to life, making it easy for you to connect with your audience."
            />
            <FeatureCard 
              icon={<Video className="h-12 w-12 text-podcast-orange" />}
              title="Full Production"
              description="From recording to editing, we handle all aspects of production with professional equipment and expertise."
            />
            <FeatureCard 
              icon={<Play className="h-12 w-12 text-podcast-orange" />}
              title="No Work Involved"
              description="Just share your expertise, and we'll transform it into a professional podcast episode."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="text-podcast-orange">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessCard 
              number="1"
              title="Initial Consultation"
              description="We learn about your business, goals, and target audience."
            />
            <ProcessCard 
              number="2"
              title="Content Planning"
              description="Our team creates a content strategy for your first 3 episodes."
            />
            <ProcessCard 
              number="3"
              title="Recording Sessions"
              description="Simply have a conversation with us about your expertise."
            />
            <ProcessCard 
              number="4"
              title="Launch & Promote"
              description="We edit, produce, and distribute your podcast on all major platforms."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-podcast-orange">Effortless Podcasts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitItem
              icon={<CheckCircle className="h-6 w-6 text-podcast-orange" />}
              title="Establish Authority"
              description="Position yourself as an industry expert through engaging podcast content."
            />
            <BenefitItem
              icon={<CheckCircle className="h-6 w-6 text-podcast-orange" />}
              title="Attract New Clients"
              description="Reach a wider audience and turn listeners into potential customers."
            />
            <BenefitItem
              icon={<CheckCircle className="h-6 w-6 text-podcast-orange" />}
              title="Save Time & Resources"
              description="Focus on your business while we handle the technical aspects of podcasting."
            />
            <BenefitItem
              icon={<CheckCircle className="h-6 w-6 text-podcast-orange" />}
              title="Professional Quality"
              description="Get a polished, broadcast-quality podcast without investing in equipment."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-podcast-purple text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Simple <span className="text-podcast-orange">Pricing</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-podcast-orange">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-podcast-purple mb-2">Your First 3 Episodes</h3>
                  <div className="text-5xl font-bold text-podcast-orange mb-6">$2,499</div>
                  <p className="text-gray-600 mb-8 text-lg">Everything you need to launch your podcast</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                    <PricingFeature text="2 Professional Hosts" />
                    <PricingFeature text="Full Content Strategy" />
                    <PricingFeature text="Professional Editing" />
                    <PricingFeature text="Custom Artwork" />
                    <PricingFeature text="Distribution to All Platforms" />
                    <PricingFeature text="Marketing Materials" />
                    <PricingFeature text="Audio & Video Formats" />
                    <PricingFeature text="Unlimited Revisions" />
                  </div>
                  
                  <Button className="bg-podcast-orange hover:bg-podcast-orange/90 text-white text-lg px-8 py-6 w-full md:w-auto">
                    Get Started Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="text-podcast-orange">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The team made podcasting truly effortless. I just had conversations about my business, and they turned it into an amazing podcast."
              name="Sarah Johnson"
              company="CEO, TechStart Solutions"
            />
            <TestimonialCard
              quote="As a busy business owner, I never thought I'd have time for a podcast. Effortless Podcasts changed that completely. Now I have a professional show with minimal effort."
              name="Michael Roberts"
              company="Founder, Growth Marketing Pro"
            />
            <TestimonialCard
              quote="The professional hosts knew exactly how to bring out the best in my story. The quality exceeded my expectations, and my audience loves it."
              name="Jennifer Adams"
              company="Owner, Adams Consulting Group"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-podcast-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-podcast-orange">Effortless Podcast</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the business owners who are growing their audience and establishing authority without the technical hassle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-podcast-orange hover:bg-podcast-orange/90 text-white text-lg px-8 py-6">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src={LOGO_SRC}
                alt="Blonde Girl TV Productions Logo"
                className="h-20 w-auto mb-4"
                style={{ maxWidth: "200px" }}
              />
              <h3 className="text-xl font-bold mb-4">Effortless Podcasts</h3>
              <p className="mb-4">
                Professional podcast production services for business owners who want to connect with their audience.
              </p>
              <p>
                © {new Date().getFullYear()} Blonde Girl TV Productions. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">Email: ContactBlondeGirlTV@icloud.com</p>
              <p className="mb-2">Phone: 720-389-7480</p>
              <p>Location: Denver, CO</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 h-full hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Component for process steps
const ProcessCard = ({ number, title, description }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="bg-podcast-orange text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Component for benefit items
const BenefitItem = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Component for pricing features
const PricingFeature = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-podcast-orange flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

// Component for testimonial cards
const TestimonialCard = ({ quote, name, company }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="text-4xl text-podcast-orange mb-4">"</div>
        <p className="text-gray-600 mb-4 flex-grow">{quote}</p>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;

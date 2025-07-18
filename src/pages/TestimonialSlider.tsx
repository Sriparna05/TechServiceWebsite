import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Taniya Roy",
    initials: "TR",
    title: "MBA (Techno Main Salt Lake)",
    subtitle: "Marketing Manager (Shrachi Group)",
    testimonial: `I would like to give my heartfelt gratitude to the founder and CEO of Ementora EdTech Mr. Sudip Das. During my internship at Ementora, I had the opportunity to gain valuable insights and hands-on experience in the field of Marketing. Ementora provided me with a dynamic and supportive environment to learn and grow, and I am grateful for the experiences I had during my time there. I also had the opportunity to learn from experienced professionals. The guidance and support I received from my mentor were invaluable in shaping my understanding of the industry and improving my abilities. I was able to enhance my communication, and problem-solving skills which I believe will benefit me in my future career.`
  },
  {
    name: "Avishek Paul",
    initials: "AP",
    title: "IIT Roorkee",
    subtitle: null,
    testimonial: `Working in Ementora was an amazing experience! I got to learn various corporate management skills. Also, my ideas were always given importance. My experience in Ementora was very wholesome and I would relish working and being part of Ementora.`
  },
  {
    name: "Ritika Kanjilal",
    initials: "RK",
    title: "Christ Deemed to be University",
    subtitle: null,
    testimonial: `Working in Ementora is a great experience! Ementora has a great work environment for ladies.`
  },
  {
    name: "Shreyasi Ghosh",
    initials: "SG",
    title: "Techno Main Salt Lake",
    subtitle: null,
    testimonial: `I am Shreyasi Ghosh, currently pursuing an MBA in the HR domain. During my academic session, I was working in Ementora Edtech as an HR intern. It was a great experience for me. I gained a lot of knowledge about the HR domain and overall office work.`
  },
  {
    name: "Nishi",
    initials: "N",
    title: "MBA (Techno Main Salt Lake)",
    subtitle: null,
    testimonial: `I had the privilege of working on a range of projects that allowed me to apply and expand my skills. Throughout my time at Ementora, I was continually impressed by the dedication and expertise of the team. I also appreciate the mentorship and guidance I received from Mr. Sudip DasbSir, the founder & CEO of Ementora, who provided me with valuable insights and support throughout my internship tenure. One of the most rewarding aspects of my internship was witnessing the impact that Ementora has on the education sector.`
  }
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [animating, setAnimating] = useState(false);

  const prev = () => {
    if (animating) return;
    setDirection(-1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 350);
  };
  const next = () => {
    if (animating) return;
    setDirection(1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
      setAnimating(false);
    }, 350);
  };

  const t = testimonials[current];

  // Animation classes
  const baseAnim = "transition-all duration-350 ease-in-out";
  const fadeIn = direction === 1 ? "animate-slideInRight" : "animate-slideInLeft";
  const fadeOut = direction === 1 ? "animate-slideOutLeft" : "animate-slideOutRight";

  return (
    <div className="relative w-full flex flex-col items-center">
      <style>{`
        @keyframes slideInRight { from { opacity:0; transform: translateX(60px);} to { opacity:1; transform: translateX(0);} }
        @keyframes slideInLeft { from { opacity:0; transform: translateX(-60px);} to { opacity:1; transform: translateX(0);} }
        @keyframes slideOutLeft { from { opacity:1; transform: translateX(0);} to { opacity:0; transform: translateX(-60px);} }
        @keyframes slideOutRight { from { opacity:1; transform: translateX(0);} to { opacity:0; transform: translateX(60px);} }
        .animate-slideInRight { animation: slideInRight 0.35s cubic-bezier(.4,0,.2,1) both; }
        .animate-slideInLeft { animation: slideInLeft 0.35s cubic-bezier(.4,0,.2,1) both; }
        .animate-slideOutLeft { animation: slideOutLeft 0.35s cubic-bezier(.4,0,.2,1) both; }
        .animate-slideOutRight { animation: slideOutRight 0.35s cubic-bezier(.4,0,.2,1) both; }
        .star-anim { transition: transform 0.3s cubic-bezier(.4,0,.2,1); }
        .star-anim:hover { transform: scale(1.2) rotate(-10deg); color: #a78bfa; }
        .avatar-anim { transition: box-shadow 0.3s, transform 0.3s; }
        .avatar-anim:hover { box-shadow: 0 4px 24px 0 #a78bfa44; transform: scale(1.08) rotate(-2deg); }
      `}</style>
      <div className="flex justify-center mb-6 gap-2">
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="rounded-full p-2 bg-muted hover:bg-primary/20 text-primary disabled:opacity-40"
          disabled={testimonials.length <= 1 || animating}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="rounded-full p-2 bg-muted hover:bg-primary/20 text-primary disabled:opacity-40"
          disabled={testimonials.length <= 1 || animating}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="flex justify-center w-full min-h-[340px]">
        <div className="w-full max-w-xl mx-auto">
          <Card
            className={`shadow-card h-full flex flex-col justify-between ${baseAnim} ${animating ? fadeOut : fadeIn}`}
          >
            <CardContent className="p-8 space-y-4 flex flex-col h-full">
              <div className="flex text-primary">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star-anim cursor-pointer">★</span>
                ))}
              </div>
              <p className="text-muted-foreground">{`"${t.testimonial}"`}</p>
              <div className="flex items-center space-x-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold avatar-anim cursor-pointer">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.title}</div>
                  {t.subtitle && <div className="text-xs text-muted-foreground">{t.subtitle}</div>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => { if (!animating) setCurrent(idx); }}
            aria-label={`Go to testimonial ${idx + 1}`}
            disabled={animating}
          />
        ))}
      </div>
    </div>
  );
}

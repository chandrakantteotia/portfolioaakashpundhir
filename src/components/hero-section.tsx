import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="pt-16 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aakash Pundhir
              <span className="block text-2xl md:text-3xl text-primary font-medium mt-2">
                Assistant Professor
              </span>
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Dedicated Assistant Professor with expertise in technology-driven curriculum and assessment tools, 
              committed to fostering academic growth for all students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-blue-800"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 border-primary text-primary hover:bg-primary hover:text-white"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <a 
                href="tel:+919368958474" 
                className="flex items-center text-muted hover:text-primary transition-colors"
                data-testid="link-phone"
              >
                <Phone className="mr-2 h-4 w-4" />
                +91-9368958474
              </a>
              <a 
                href="mailto:akashpundhir57@gmail.com" 
                className="flex items-center text-muted hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="mr-2 h-4 w-4" />
                akashpundhir57@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                </div>
                <p className="text-lg font-medium">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

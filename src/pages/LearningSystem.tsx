import { Brain, BarChart3, Lightbulb, Monitor } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const LearningSystem = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Sistem Pembelajaran
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl">
            Teknologi AI terintegrasi untuk pengalaman belajar yang personal dan efektif.
          </motion.p>
        </div>
      </section>

      {/* AI System */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Brain className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">AI-Driven System</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Setiap siswa memiliki learning path yang berbeda, disesuaikan dengan data perkembangan belajar. Sistem AI kami menganalisis kekuatan, kelemahan, dan gaya belajar setiap anak untuk memberikan pengalaman yang optimal.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Adaptive assessment real-time", "Personalized content delivery", "Predictive analytics untuk intervensi dini"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
              <Brain className="text-primary/30" size={80} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* LMS */}
      <SectionWrapper className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-xl p-8 border border-border order-2 md:order-1">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
              <Monitor className="text-primary/30" size={80} />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <BarChart3 className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">LMS & Virtual Class</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Platform pembelajaran digital dengan dashboard siswa yang komprehensif. Progress report berbasis data memungkinkan orang tua dan guru memantau perkembangan secara real-time.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Dashboard siswa interaktif", "Progress report berbasis data", "Virtual class terintegrasi"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* PBL */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Lightbulb className="text-primary" size={24} />
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Project-Based Learning</h2>
          <p className="text-muted-foreground leading-relaxed">
            Belajar bukan menghafal, tetapi membangun solusi nyata. Siswa IFS terlibat dalam proyek-proyek nyata yang relevan dengan dunia modern, mengasah kemampuan problem-solving, kolaborasi, dan kreativitas.
          </p>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default LearningSystem;
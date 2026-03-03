import { GraduationCap, Cpu, BookOpen, Users, Rocket, Mic2, Globe, Brain } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const programLevels = [
  {
    level: "SD IFS",
    subtitle: "Foundational Years",
    items: ["Foundational Character Building", "English Immersion", "AI Literacy Basic", "Project-based Learning"],
    icon: BookOpen,
  },
  {
    level: "SMP IFS",
    subtitle: "Exploration Years",
    items: ["Critical Thinking", "AI-Assisted Research", "Leadership Program", "Tahfidz + Islamic Worldview"],
    icon: Brain,
  },
  {
    level: "SMA IFS",
    subtitle: "Mastery Years",
    items: ["Future Skill Development", "Global Curriculum Exposure", "AI & Data Thinking", "University Preparation"],
    icon: GraduationCap,
  },
];

const additionalPrograms = [
  { name: "After School Program", icon: Users },
  { name: "Robotics", icon: Cpu },
  { name: "Tahfidz AI", icon: BookOpen },
  { name: "English AI", icon: Globe },
  { name: "Digital Skills", icon: Rocket },
  { name: "Hybrid Class AI — Program daring untuk daerah 3T", icon: Mic2 },
];

const Programs = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Program Akademik
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl">
            Kurikulum terintegrasi dari SD hingga SMA dengan pendekatan AI dan karakter.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          {programLevels.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <div className="bg-primary p-6">
                <prog.icon className="text-primary-foreground mb-3" size={28} />
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{prog.level}</h3>
                <p className="text-primary-foreground/70 text-sm">{prog.subtitle}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {prog.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Program Tambahan</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalPrograms.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <prog.icon className="text-primary" size={20} />
              </div>
              <span className="font-medium text-foreground text-sm">{prog.name}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Programs;
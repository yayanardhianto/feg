import { Briefcase, Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const positions = [
  { title: "Core Teacher", dept: "Academic", type: "Full-time", desc: "Guru inti untuk program SD, SMP, atau SMA IFS dengan pendekatan project-based learning." },
  { title: "Academic Lead", dept: "Academic", type: "Full-time", desc: "Memimpin pengembangan kurikulum dan standar akademik di IFS." },
  { title: "AI Education Specialist", dept: "Technology", type: "Full-time", desc: "Mengembangkan dan mengimplementasikan sistem pembelajaran berbasis AI." },
];

const Career = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Career</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl">Bergabunglah dengan tim yang membangun masa depan pendidikan.</motion.p>
        </div>
      </section>

      {/* Culture */}
      <SectionWrapper className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Budaya Kerja IFS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, label: "Berbasis Nilai Islam" },
            { icon: Lightbulb, label: "Inovasi & Kreativitas" },
            { icon: Users, label: "Kolaborasi Tim" },
            { icon: Briefcase, label: "Pengembangan Karier" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <span className="font-medium text-foreground text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Positions */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Posisi Tersedia</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {positions.map((pos, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{pos.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pos.desc}</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">{pos.dept}</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">{pos.type}</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Apply <ArrowRight className="ml-1" size={14} />
              </Button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Career;
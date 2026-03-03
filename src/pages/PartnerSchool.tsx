import { Handshake, Shield, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PartnerSchool = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Partner School
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl">
            Kemitraan strategis untuk yayasan dan sekolah yang ingin bertransformasi.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Model Kerja Sama</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: GraduationCap, title: "Lisensi Sistem IFS", desc: "Adopsi kurikulum, sistem AI, dan metodologi IFS untuk sekolah Anda." },
            { icon: Handshake, title: "Pelatihan Guru", desc: "Program pelatihan intensif untuk guru dalam mengimplementasikan metode IFS." },
            { icon: Shield, title: "Quality Control & Pengawasan Mutu", desc: "Tim IFS memastikan standar kualitas terjaga di setiap partner school." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card rounded-xl p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Siapa yang Cocok?</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {["Sekolah Islam yang ingin upgrade ke sistem modern", "Yayasan pendidikan yang ingin transformasi digital", "Edupreneur yang ingin membangun sekolah masa depan"].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border">
              <CheckCircle className="text-primary shrink-0" size={20} />
              <span className="text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10">
            Ajukan Kemitraan <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default PartnerSchool;
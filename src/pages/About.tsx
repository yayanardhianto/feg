import { Eye, Target, BookOpen, Brain, Globe, GraduationCap, Clock, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Tentang IFS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-2xl"
          >
            Membangun jaringan sekolah masa depan berbasis adab, ilmu, dan teknologi.
          </motion.p>
        </div>
      </section>

      {/* Visi Misi */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="text-primary" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Visi</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Membangun jaringan sekolah masa depan berbasis adab, ilmu, dan teknologi untuk melahirkan generasi Muslim visioner dan pemimpin perubahan.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Misi</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />Pendidikan terintegrasi nilai Qur'an & AI</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />SDM unggul & mandiri</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />Model sekolah yang bisa direplikasi nasional</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 6 Pilar */}
      <SectionWrapper className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">6 Pilar Utama Konsep Pendidikan</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Karakter & Adab sebagai Core" },
            { icon: Brain, title: "AI-Driven Learning" },
            { icon: Globe, title: "Standar Internasional" },
            { icon: GraduationCap, title: "Ekosistem Berkelanjutan" },
            { icon: BookOpen, title: "Bahasa Global" },
            { icon: Clock, title: "Akses 24 Jam" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Tabel Perbandingan */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Kenapa IFS Kategori Baru?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IFS memposisikan diri di persimpangan keunggulan akademik global dan kekuatan nilai.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-left font-display font-semibold rounded-tl-lg">Aspek</th>
                <th className="p-4 text-left font-display font-semibold">Sekolah Akademik</th>
                <th className="p-4 text-left font-display font-semibold">Sekolah Islam Terpadu</th>
                <th className="p-4 text-left font-display font-semibold rounded-tr-lg">IFS ✦</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ["Fokus", "Akademik kuat", "Karakter kuat", "Integrasi keduanya"],
                ["AI", "AI bukan core", "AI tidak sistemik", "AI sebagai DNA sistem"],
                ["Model", "Konvensional", "Konvensional", "Hybrid AI-driven"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">{row[0]}</td>
                  <td className="p-4 text-muted-foreground">{row[1]}</td>
                  <td className="p-4 text-muted-foreground">{row[2]}</td>
                  <td className="p-4 font-semibold text-primary">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
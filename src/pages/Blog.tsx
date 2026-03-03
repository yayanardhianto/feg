import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Semua", "Masa Depan Pendidikan", "AI dalam Pendidikan", "Islamic Worldview", "Parenting Digital", "Leadership Anak"];

const articles = [
  { title: "Mengapa AI Akan Mengubah Cara Anak Belajar", category: "AI dalam Pendidikan", date: "15 Mar 2026", excerpt: "Perkembangan AI membawa revolusi dalam dunia pendidikan..." },
  { title: "Membangun Karakter Islami di Era Digital", category: "Islamic Worldview", date: "10 Mar 2026", excerpt: "Tantangan membentuk karakter anak di era serba digital..." },
  { title: "Parenting di Era AI: Panduan untuk Orang Tua", category: "Parenting Digital", date: "5 Mar 2026", excerpt: "Bagaimana orang tua bisa membimbing anak menghadapi era AI..." },
  { title: "Leadership Sejak Dini: Metode IFS", category: "Leadership Anak", date: "28 Feb 2026", excerpt: "Program kepemimpinan IFS dirancang untuk membangun jiwa pemimpin..." },
  { title: "Hybrid Learning: Masa Depan Pendidikan Indonesia", category: "Masa Depan Pendidikan", date: "20 Feb 2026", excerpt: "Model hybrid learning yang menggabungkan offline dan online..." },
  { title: "Tahfidz Berbasis AI: Inovasi IFS", category: "AI dalam Pendidikan", date: "15 Feb 2026", excerpt: "Bagaimana teknologi AI membantu proses menghafal Al-Qur'an..." },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const filtered = activeCategory === "Semua" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Blog</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg">Insight & pemikiran tentang pendidikan masa depan.</motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors", activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-muted")}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="p-6">
                <span className="text-xs font-medium text-primary">{article.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Blog;
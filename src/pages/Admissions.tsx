import { ArrowRight, CheckCircle, ClipboardList, Eye, FileText, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const steps = [
  { icon: FileText, title: "Isi Form", desc: "Lengkapi formulir pendaftaran online" },
  { icon: ClipboardList, title: "Tes Potensi & Wawancara", desc: "Asesmen kemampuan dan potensi siswa" },
  { icon: Eye, title: "Observasi Karakter", desc: "Observasi perilaku dan karakter siswa" },
  { icon: UserCheck, title: "Enrollment", desc: "Proses enrollmen dan administrasi" },
];

const Admissions = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Admissions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl">
            Bergabunglah dengan komunitas pendidikan masa depan.
          </motion.p>
        </div>
      </section>

      {/* Why IFS */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Kenapa Memilih IFS?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sebagai orang tua visioner usia 30–45 tahun, Anda menginginkan pendidikan terbaik yang menggabungkan nilai-nilai Islam, keunggulan akademik global, dan kesiapan masa depan berbasis teknologi.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Kurikulum terintegrasi AI & Islam", "Guru terlatih & bersertifikat", "Fasilitas modern", "Jalur pendidikan berkelanjutan SD–Universitas", "Bilingual & trilingual program", "Monitoring perkembangan real-time"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Biaya */}
      <SectionWrapper className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Biaya Pendidikan</h2>
          <p className="text-muted-foreground">Informasi lengkap tersedia dalam brosur sekolah.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { title: "Uang Pangkal", desc: "Biaya masuk satu kali" },
            { title: "SPP Bulanan", desc: "Termasuk seluruh program inti" },
            { title: "Program Tambahan", desc: "Opsional sesuai minat anak" },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border text-center">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Steps */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Proses Pendaftaran</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl border border-border p-6 text-center min-w-[180px]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="text-primary" size={22} />
                </div>
                <div className="text-xs text-muted-foreground mb-1">Langkah {i + 1}</div>
                <h3 className="font-display font-semibold text-foreground text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
              </motion.div>
              {i < 3 && <ArrowRight className="text-muted-foreground mx-3 hidden md:block shrink-0" size={20} />}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10">
            Daftar Sekarang <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Admissions;
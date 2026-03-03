import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Calendar, Download, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-background to-[#f8fafc]">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-full h-[120%] bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-[100px] -z-10" />
    <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[100px] -z-10" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl lg:max-w-none">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide rounded-full text-primary bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-sm"
          >
            Pendidikan Masa Depan Dimulai di Sini
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6"
          >
            Sekolah Masa Depan Berbasis <span className="text-primary text-gradient relative z-10">Adab, Ilmu
              <svg className="absolute w-full h-3 -bottom-1 left-0 -z-10 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
            </span> & <span className="text-accent">AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-medium leading-relaxed"
          >
            Membangun generasi Muslim visioner melalui sistem pendidikan hybrid terintegrasi dari jenjang SD hingga universitas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 text-primary-foreground font-bold px-8 h-14 rounded-full text-base transition-transform hover:-translate-y-1">
              Daftar Sekarang <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-white text-foreground hover:bg-secondary h-14 rounded-full font-bold px-8 text-base shadow-md transition-transform hover:-translate-y-1">
              <Play size={20} className="mr-2 text-primary" fill="currentColor" /> Video Profil
            </Button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 relative w-full lg:w-1/2"
        >
          {/* Main Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] lg:aspect-[4/5] xl:aspect-[4/3] z-10 bg-gray-100">
            <img
              src="/assets/school.png"
              alt="Siswa Belajar"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay rounded-[1.5rem]"></div>
          </div>

          {/* Floating Elements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border z-20 hidden md:flex items-center gap-4 backdrop-blur-md bg-white/90"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-lg">25K+</p>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Siswa Lulus</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border z-20 hidden md:flex items-center gap-3 backdrop-blur-md bg-white/90"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-green-600" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm leading-none mb-1">Terakreditasi A</p>
              <p className="text-xs font-medium text-muted-foreground">Nasional & Global</p>
            </div>
          </motion.div>

          {/* Background decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[80px] -z-10" />
        </motion.div>

      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="bg-secondary pt-40 pb-16 lg:pt-32 lg:pb-20 mt-12 lg:mt-0">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border">
        {[
          { number: "25+", label: "Tahun Pengalaman" },
          { number: "2500+", label: "Siswa Aktif" },
          { number: "150+", label: "Total Guru Staff" },
          { number: "98%", label: "Lulusan PTN/LN" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.number}</h2>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 lg:py-28 bg-background overflow-hidden relative">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop" alt="School Building" className="rounded-2xl shadow-2xl object-cover w-full h-[500px]" />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block border border-primary-foreground/10">
            <p className="text-3xl font-bold font-display">FEG</p>
            <p className="text-sm opacity-90">Kategori Baru Pendidikan</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Tentang Kami</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            Kenapa <span className="text-primary">FEG</span> Berbeda?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed font-medium">
            FEG bukan sekadar sekolah Islam modern, dan bukan pula sekolah akademik sekuler. FEG adalah kategori baru pendidikan masa depan yang menggabungkan nilai spiritual yang kuat dengan kemajuan teknologi.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sistem kami berfokus pada project-based learning, interaksi guru intensif, laboratorium dan aktivitas sosial di sekolah offline, dipadukan dengan AI Tutor personal dan LMS terintegrasi secara online.
          </p>
          <Button className="text-primary hover:text-primary/80 font-bold p-0 flex items-center gap-2 border-b-2 border-primary rounded-none h-auto pb-1 hover:pr-2 transition-all bg-transparent hover:bg-transparent">
            Lebih Lanjut <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

const FacilitiesSection = () => {
  const images = [
    { name: "Laboratorium Sains", url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" },
    { name: "Perpustakaan Digital", url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop" },
    { name: "Ruang IT & Robotik", url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" },
    { name: "Area Olahraga", url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop" },
    { name: "Klinik Kesehatan", url: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2283&auto=format&fit=crop" },
    { name: "Ruang Konferensi", url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" },
    { name: "Kafetaria Sehat", url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" },
    { name: "Studio Seni & Kriya", url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2050&auto=format&fit=crop" }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Fasilitas Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Lingkungan belajar modern yang dirancang untuk menumbuhkan kreativitas, kolaborasi, dan kesejahteraan siswa.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-xl overflow-hidden h-64 shadow-sm border border-border"
            >
              <img src={img.url} alt={img.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6">
                <span className="text-foreground font-bold text-lg">{img.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhyChooseUsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            Value Proposition <br /> <span className="text-primary text-gradient">Nilai Tambah Kami</span>
          </h2>
          <p className="text-muted-foreground mb-10 font-medium leading-relaxed">Kami menyediakan perpaduan unik antara keunggulan akademik, pengembangan karakter, dan teknologi masa depan.</p>

          <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6">
            {[
              { title: "Adab & Leadership", desc: "Membentuk karakter pemimpin tangguh berlandaskan akhlak mulia." },
              { title: "Pendidikan Islam Relevan", desc: "Menjawab tantangan masa depan dengan pandangan hidup Islam." },
              { title: "AI-Personalized Learning", desc: "Sistem adaptif yang mengenali potensi unik tiap siswa." },
              { title: "Global Exposure", desc: "Paparan wawasan dan jaringan internasional sejak usia dini." },
              { title: "Penguasaan 3 Bahasa", desc: "Fokus pada Bahasa Inggris, Arab & Mandarin." },
              { title: "Akses Belajar 24 Jam", desc: "Platform digital terintegrasi untuk belajar kapan saja." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
              alt="Teacher"
              className="rounded-2xl shadow-xl w-full border border-border"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ProgrammesSection = () => (
  <section className="py-20 bg-secondary/30 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary)_0%,transparent_20%)] opacity-5"></div>
    <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Satu Ekosistem Pendidikan</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-16 font-medium">FEG dirancang sebagai jalur pendidikan berkelanjutan jangka panjang, bukan sistem yang terputus di tiap jenjang.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {[
          { title: "SD", subtitle: "Foundation", desc: "Membangun pondasi adab, literasi dasar, numerasi, dan kecintaan pada ilmu pengetahuan." },
          { title: "SMP", subtitle: "Exploration", desc: "Bebas mengeksplorasi minat dan bakat dengan bimbingan mentor dan AI learning terpandu." },
          { title: "SMA", subtitle: "Mastery", desc: "Kurikulum lanjutan yang berfokus pada spesialisasi, kepemimpinan, dan persiapan karir global." },
          { title: "IFU", subtitle: "University", desc: "Pendidikan tinggi yang mencetak inovator dan pemimpin di berbagai sektor industri masa depan." }
        ].map((prog, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-start relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-1">{prog.subtitle}</span>
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">{prog.title}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed flex-grow text-sm">{prog.desc}</p>
            <Button variant="ghost" className="text-primary font-bold p-0 flex items-center gap-2 hover:bg-transparent hover:text-primary hover:gap-3 transition-all">
              Detail <ArrowRight size={18} />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection = () => {
  const photos = [
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12 text-center md:text-left">Galeri Sekolah</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-square md:aspect-auto md:h-64 rounded-xl overflow-hidden shadow-sm border border-border">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Testimoni</h2>
      <p className="text-muted-foreground mb-16 font-medium">Pengalaman langsung dari orang tua siswa kami.</p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col relative">
            <div className="absolute -top-5 left-8 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-4xl text-primary font-serif leading-none h-6">"</span>
            </div>
            <p className="text-muted-foreground italic mb-8 mt-4 leading-relaxed font-medium relative z-10">
              Sistem pendidikan FEG sangat membantu perkembangan karakter anak saya. Kombinasi AI dan guru langsung sungguh luar biasa.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
              <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Parent" className="w-12 h-12 rounded-full ring-2 ring-primary/20" />
              <div>
                <h4 className="font-bold text-foreground text-sm">Orang Tua Siswa</h4>
                <p className="text-xs text-muted-foreground font-medium">Wali Murid Kelas {i + 7}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
    <div className="absolute inset-0 bg-primary/95 z-10"></div>
    <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

    <div className="container mx-auto px-4 lg:px-8 relative z-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-6">
        Siap Bergabung dengan FEG?
      </h2>
      <p className="text-lg opacity-90 text-center max-w-2xl mb-12 font-medium">
        Ambil langkah pertama menuju pendidikan masa depan untuk putra-putri Anda. Jangan lewatkan kesempatan ini.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-8 rounded-md shadow-lg">
          <Calendar className="mr-2" size={20} /> Jadwalkan Kunjungan
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 rounded-md font-bold backdrop-blur-sm">
          <Download className="mr-2" size={20} /> Unduh Brosur Profile
        </Button>
        <Button size="lg" variant="ghost" className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 rounded-md font-bold">
          <GraduationCap className="mr-2" size={20} /> Join Open House
        </Button>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FacilitiesSection />
      <WhyChooseUsSection />
      <ProgrammesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
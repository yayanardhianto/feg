import { Calendar, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const events = [
  { title: "Webinar: AI dalam Pendidikan Islam", type: "Webinar", date: "25 Maret 2026", time: "19:00 WIB", location: "Online (Zoom)", desc: "Bagaimana AI dapat memperkuat pendidikan berbasis nilai-nilai Islam." },
  { title: "Seminar Pendidikan Masa Depan", type: "Seminar", date: "5 April 2026", time: "09:00 WIB", location: "Jakarta Convention Center", desc: "Seminar nasional tentang transformasi pendidikan di era AI." },
  { title: "Workshop AI untuk Guru", type: "Workshop", date: "15 April 2026", time: "10:00 WIB", location: "IFS Campus, Jakarta", desc: "Pelatihan praktis penggunaan tools AI dalam proses pembelajaran." },
  { title: "Parenting Forum: Mendidik Anak Digital Native", type: "Parenting Forum", date: "20 April 2026", time: "14:00 WIB", location: "Online (Zoom)", desc: "Forum diskusi bersama pakar parenting dan pendidikan digital." },
];

const Event = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Event</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg">Bergabunglah dalam acara-acara edukatif kami.</motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-24 shrink-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{event.type}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={14} />{event.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} />{event.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} />{event.location}</span>
                </div>
              </div>
              <div className="shrink-0 flex items-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Daftar</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Event;
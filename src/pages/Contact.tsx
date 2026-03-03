import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg">Hubungi kami untuk informasi lebih lanjut.</motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Lokasi Flagship</h3>
                  <p className="text-muted-foreground text-sm">Jakarta, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">WhatsApp</h3>
                  <a href="https://wa.me/6281234567890" className="text-primary text-sm hover:underline">+62 812-3456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Email</h3>
                  <a href="mailto:info@ifs.sch.id" className="text-primary text-sm hover:underline">info@ifs.sch.id</a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={18} /> Chat via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Lokasi</h2>
            <div className="aspect-square md:aspect-video bg-secondary rounded-xl border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">Embedded Map Placeholder</p>
                <p className="text-xs opacity-60">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
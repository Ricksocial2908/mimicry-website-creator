import { motion } from "framer-motion";
import { ChevronRight, Edit, Save, LogOut } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { useEditable } from "@/contexts/EditableContext";
import EditableText from "@/components/EditableText";
import Auth from "@/components/Auth";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Session } from "@supabase/supabase-js";

const Index = () => {
  const { isEditMode, toggleEditMode, saveChanges } = useEditable();
  const [session, setSession] = useState<Session | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setShowAuth(false);
      
      // Reset edit mode when logging out
      if (!session && isEditMode) {
        toggleEditMode();
      }
    });

    return () => subscription.unsubscribe();
  }, [isEditMode, toggleEditMode]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <EditableText
              id="logo-text"
              defaultContent="Digital Jungle"
              className="inline-block"
            />
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">ABOUT</a>
            <a href="#curriculum" className="text-sm hover:text-primary transition-colors">CURRICULUM</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">PRICING</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <Button
                  onClick={toggleEditMode}
                  variant={isEditMode ? "default" : "outline"}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Edit size={16} />
                  {isEditMode ? "Editing" : "Edit"}
                </Button>
                {isEditMode && (
                  <Button
                    onClick={saveChanges}
                    variant="default"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Save size={16} />
                    Save
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setShowAuth(!showAuth)}
                className="px-6 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                LOGIN
                <ChevronRight size={16} />
              </Button>
            )}
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {showAuth && !session ? (
          <div className="container mx-auto px-6 py-12">
            <Auth />
          </div>
        ) : (
          <>
            <Hero />
            <About />
            <Curriculum />
            <Stats />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
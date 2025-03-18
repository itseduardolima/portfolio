import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

interface FooterProps {
  id?: string;
}

export function Footer({ id }: FooterProps) {
  const ref = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );

      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id={id} ref={ref} className="bg-gray-900 py-12 mt-20 px-6 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-teal-400">Entre em contato comigo</h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <Input
                placeholder="Nome"
                name="name"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Textarea
                placeholder="Mensagem"
                name="message"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                rows={4}
                required
              />
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : <><Send className="mr-2 h-4 w-4" /> Enviar Mensagem</>}
              </Button>
            </form>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-teal-400">Conecte-se</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/itseduardolima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/eduardolima07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
            <p className="text-gray-400">
              &copy; Design by Eduardo Lima
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
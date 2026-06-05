import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, FileCheck, Wrench, Users, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 3,
      title: "Projetos Elétricos",
      description: "Desenvolvimento de projetos elétricos residenciais, comerciais, prediais e industriais com eficiência energética e segurança.",
      icon: Zap,
      image: "Projeto.png",
      features: ["Projetos customizados", "Eficiência energética", "Conformidade normativa"]
    },

    {
      id: 2,
      title: "SPDA - Sistema de Proteção NBR5419:2026",
      description: "Projeto e inspeção de sistemas de proteção contra descargas atmosféricas com conformidade total à norma técnica NBR 5419:2026.",
      icon: Shield,
      image: "SPDA.png",
      features: ["Proteção contra raios", "Conformidade NBR 5419", "Inspeção periódica"]
    },
    
     {
      id: 1,
      title: "Laudos Técnicos",
      description: "Realizamos inspeções e avaliações técnicas em instalações elétricas, sistemas de SPDA e subestações, emitindo laudos técnicos fundamentados para análise de conformidade, identificação de não conformidades e suporte à tomada de decisão.",
      icon: FileCheck,
      image: "Imagem termográfica.png",
      features: ["Instalações Elétricas", "Sistemas de SPDA", "Subestações Elétricas"]
    },

    {
      id: 4,
      title: "Manutenção Preventiva",
      description: "Serviços de manutenção preventiva e corretiva em sistemas elétricos para garantir segurança, continuidade operacional e redução de custos.",
      icon: Wrench,
      image: "Manutenção.png",
      features: ["Manutenção preventiva", "Suporte técnico", "Redução de riscos"]
    }
  ];

  const stats = [
    { label: "Anos de Experiência", value: "15+" },
    { label: "Projetos Realizados", value: "500+" },
    { label: "Clientes Satisfeitos", value: "200+" },
    { label: "Engenheiros Certificados", value: "25+" }
  ];

  const expertise = [
  "Projetos Elétricos Prediais",
  "Projetos Elétricos Industriais",
  "Laudos Técnicos",
  "SPDA"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="Logo_NR_Eletrica_Final.png"
              alt="NR Engenharia Elétrica"
              className="h-24 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-8 text-gray-700">
            <a href="#servicos" className="hover:text-gray-900 transition-colors font-medium">Serviços</a>
            <a href="#sobre" className="hover:text-gray-900 transition-colors font-medium">Sobre</a>
            <a href="#contato" className="hover:text-gray-900 transition-colors font-medium">Contato</a>
          </nav>
          <a href="https://wa.me/5547996417964" className="bg-gray-800 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663451646058/G3bHYcfuHMWRjKR4XT75Sa/hero-nr-professional-A5C39rXyUK4hVYEEEqDGun.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-1 w-16 bg-gradient-to-r from-gray-800 to-gray-600"></div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Soluções em Engenharia Elétrica
              </h1>
              <p className="text-xl text-gray-300">
                Laudos técnicos, SPDA, projetos elétricos e manutenção com excelência, segurança e conformidade normativa.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://wa.me/5547996417964" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center gap-2">
                  Fale Conosco
                  <ArrowRight className="w-4 h-4" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Services Section */}
      <section id="servicos" className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="h-1 w-16 bg-gray-800 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em engenharia elétrica com foco em qualidade, segurança e conformidade normativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="overflow-hidden border-l-4 border-l-gray-800 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-75 overflow-hidden bg-gray-100">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-gray-800" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-gray-800" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a href="https://wa.me/5547996417964" className="inline-block w-full text-center border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-2.5 rounded-md font-semibold transition-colors">
                      Solicitar Orçamento
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-16 bg-gray-800 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Principais Soluções</h2>
              <div className="space-y-4">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-800 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663451646058/G3bHYcfuHMWRjKR4XT75Sa/team-engineers-nr-LmnBgrnPotXDVJYCEWhZk9.webp"
                alt="Nossa Equipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center order-2 md:order-1">
              <img 
                src="Logo_NR_Eletrica_Final.png"
                alt="Sobre NR Engenharia Elétrica"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="h-1 w-16 bg-gray-800 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre a NR Engenharia</h2>
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  A NR Engenharia Elétrica atua nas áreas de projetos elétricos, laudos técnicos e SPDA, oferecendo soluções para residências, comércios, indústrias e condomínios.
                </p>
                <p>
                  Trabalhamos com foco na elaboração de projetos, inspeções e avaliações técnicas que contribuam para a segurança, conformidade e confiabilidade das instalações elétricas. Cada serviço é desenvolvido de acordo com as características do empreendimento e com os requisitos das normas aplicáveis.
                </p>
                <p>
                  Seja para uma nova instalação, ampliação, adequação ou emissão de laudos, buscamos entregar soluções técnicas claras, objetivas e aplicáveis à realidade de cada cliente.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-700 font-semibold">Projetos Elétricos Prediais e Industriais</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-700 font-semibold">Laudos e Avaliações Técnicas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-700 font-semibold">SPDA e Conformidade Normativa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="h-1 w-16 bg-gray-700 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-300">
              Solicite um orçamento ou tire suas dúvidas sobre nossos serviços. Nossa equipe está pronta para atendê-lo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-0 p-8 text-center text-white">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <a href="tel:+5547996417964" className="text-gray-300 hover:text-white transition-colors">
                (47) 99641-7964
              </a>
            </Card>
            
            <Card className="bg-gray-800 border-0 p-8 text-center text-white">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:contato@nrengenhariaeletrica.com.br" className="text-gray-300 hover:text-white transition-colors">
                contato@nrengenhariaeletrica.com.br
              </a>
            </Card>
            
            <Card className="bg-gray-800 border-0 p-8 text-center text-white">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-gray-300">
                Jaraguá do Sul, SC
              </p>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://wa.me/5547996417964" className="inline-block bg-white text-gray-900 px-8 py-3.5 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors">
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-8">
          <div className="text-center mb-8">
  <h4 className="font-bold text-white text-xl mb-4">
    NR ENGENHARIA ELÉTRICA
  </h4>
  <p className="text-sm max-w-md mx-auto">
    Soluções em engenharia elétrica com excelência e conformidade normativa.
  </p>
</div>
            
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 NR Engenharia Elétrica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

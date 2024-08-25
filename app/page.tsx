"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {
  MenuIcon,
  XIcon,
  BrainCircuitIcon,
  ServerIcon,
  LockIcon,
  DatabaseIcon,
  LightbulbIcon,
  BarChartIcon,
  CheckCircleIcon,
  CloudIcon,
  LineChartIcon,
  SunIcon,
  MoonIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isDarkModeInitialized, setIsDarkModeInitialized] = useState(false);

  useEffect(() => {
    // Este código solo se ejecuta en el lado del cliente
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
    setIsDarkModeInitialized(true); // Indica que ya hemos cargado el valor de dark mode
  }, []); // Solo se ejecuta una vez al montar el componente

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuAction = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    smoothScroll(event, targetId);
    toggleMenu();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const smoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Si `isDarkModeInitialized` es falso, no renderizamos nada para evitar el "flicker"
  if (!isDarkModeInitialized) {
    return null; // O puedes retornar un loader si prefieres
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-3 flex items-center sticky top-0 z-40 w-full  backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link className="flex items-center justify-center" href="/">
            <Image
              height={48}
              width={55}
              src={darkMode ? "/only-logo-dark.png" : "/only-logo-light.png"}
              alt="Seleon Logo"
            />
            <Image
              height={24}
              width={125}
              className="ml-4"
              src={
                darkMode ? "/only-seleon-dark.png" : "/only-seleon-light.png"
              }
              alt="Seleon"
            />
          </Link>
          <div className="flex space-x-8 md:space-x-12">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a
                href="#home"
                className="transition-colors dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => smoothScroll(e, "home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="transition-colors dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => smoothScroll(e, "about")}
              >
                About Us
              </a>
              <a
                href="#services"
                className="transition-colors dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => smoothScroll(e, "services")}
              >
                Services
              </a>

              <a
                href="#contact"
                className="transition-colors dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => smoothScroll(e, "contact")}
              >
                Contact
              </a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6 text-pastel-blue" />
              ) : (
                <MenuIcon className="h-6 w-6 text-pastel-blue" />
              )}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 z-50 bg-pastel-cream/95 shadow-md backdrop-blur"
          >
            <nav className="flex flex-col items-center space-y-2 text-sm font-medium py-2 ">
              <a
                href="#home"
                className="w-full text-center py-2 transition ease-in-out duration-150 dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => toggleMenuAction(e, "home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="w-full text-center py-2 transition ease-in-out duration-150 dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => toggleMenuAction(e, "about")}
              >
                About Us
              </a>
              <a
                href="#services"
                className="w-full text-center py-2 transition ease-in-out duration-150 dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => toggleMenuAction(e, "services")}
              >
                Services
              </a>

              <a
                href="#contact"
                className="w-full text-center py-2 transition ease-in-out duration-150 dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => toggleMenuAction(e, "contact")}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1" id="home">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-blue-50 to-violet-100 dark:from-blue-900 dark:via-blue-800 dark:to-violet-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-5">
                <div className="space-y-5">
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white"
                  >
                    Innovación y Eficiencia en la Gestión de Recursos Públicos
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.75, delay: 1 }}
                    className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl"
                  >
                    Revolucione sus operaciones de servicios públicos con
                    nuestros modelos de aprendizaje automático de vanguardia.
                    Aumente la eficiencia, reduzca los costes y mejore la
                    prestación de servicios.
                  </motion.p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="AI for Utilities"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
                  height={600}
                  src="/main.jpg"
                  width={600}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white"
                >
                  Transformando las empresas de servicios públicos con IA
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="max-w-[1200px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300"
                >
                  Nuestros modelos de aprendizaje automático están diseñados
                  para hacer frente a los retos específicos a los que se
                  enfrentan los proveedores de agua, electricidad y gas.
                  Descubra cómo estamos revolucionando el sector.
                </motion.p>
              </div>
            </div>
            <div className="mx-auto px-9 grid max-w-7xl items-center gap-6 py-12 lg:px-0 lg:grid-cols-3 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-col justify-center space-y-4"
              >
                <LightbulbIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Mantenimiento predictivo
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Anticipe las fallas de los equipos y optimice los programas de
                  mantenimiento. Reduzca el tiempo de inactividad y disminuya
                  costos operativos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <BarChartIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Previsión de la demanda
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Prediga con precisión la demanda de recursos y optimice su
                  distribución. Minimice el desperdicio y aumente la eficiencia.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex flex-col justify-center space-y-4"
              >
                <LineChartIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Obtención de datos clave
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recoja datos valiosos y relevantes para su empresa, y obtenga
                  insights estratégicos para tomar decisiones informadas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-3 md:px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600 dark:text-blue-400"
                >
                  Sobre nosotros
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="max-w-[900px] text-gray-500 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Seleon es una empresa de rápido crecimiento con sede en
                  Córdoba, Argentina, dedicada a revolucionar la gestión de
                  servicios públicos a través de tecnología de punta.
                </motion.p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 px-8 py-12 lg:px-0 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="grid gap-1"
                    >
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Equipo multidisciplinario
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Contamos con un equipo multidisciplinario que domina
                        cada etapa del ciclo de vida de los modelos de
                        inteligencia artificial, lo que nos permite ofrecer
                        soluciones completas y sólidas.
                      </p>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8, delay: 2.3 }}
                      className="grid gap-1"
                    >
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Innovación
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Estamos a la vanguardia de la tecnología de IA,
                        desarrollando constantemente nuevas soluciones para el
                        sector de servicios públicos.
                      </p>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8, delay: 3 }}
                      className="grid gap-1"
                    >
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Relevamiento constante con el cliente
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Nuestros desarrollos son por y para el cliente, nos
                        enfocamos en realizar un relevamiento dinámico de sus
                        necesidades.
                      </p>
                    </motion.div>
                  </li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full"
              >
                <Image
                  alt="Seleon team"
                  className="mx-auto h-full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
                  height={310}
                  src="/succes.png"
                  width={550}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 via-blue-50 to-violet-100 dark:from-blue-900 dark:via-blue-800 dark:to-violet-800">
          <div className="flex flex-col items-center justify-center space-y-5 text-center px-4 lg:px-0">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-pastel-blue"
            >
              El 87% de los modelos de IA no llegan a producción, forma parte del 13%.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="max-w-[950px] text-pastel-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              En Seleon, nos aseguramos de que su implementación en producción
              sea eficiente y genere un impacto duradero en el negocio de
              nuestros clientes
            </motion.p>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-5 text-center">
              <div className="space-y-3">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-pastel-blue"
                >
                  Nuestros Servicios
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="max-w-[950px] text-pastel-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Ofrecemos una amplia gama de servicios para revolucionar la
                  gestión de los servicios públicos.
                </motion.p>
              </div>
            </div>
            <div className="mx-auto px-8 grid max-w-5xl items-center gap-6 py-12 lg:px-8 lg:grid-cols-3 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <BrainCircuitIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Data Science & AI</h3>
                <p className="text-sm text-pastel-gray">
                  Modelos avanzados de IA, incluidos Machine Learning, Deep
                  Learning y GenAI.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <BarChartIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Analytics & BI</h3>
                <p className="text-sm text-pastel-gray">
                  Soluciones integrales de análisis de datos e inteligencia
                  empresarial.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 2.3 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <ServerIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">DevOps</h3>
                <p className="text-sm text-pastel-gray">
                  Desarrollo y operaciones racionalizados para una implantación
                  eficaz.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <LockIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Ciberseguridad</h3>
                <p className="text-sm">
                  Medidas de seguridad robustas para proteger datos sensibles
                  según los estándares ISO 27001.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 3.3 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <CloudIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Tecnologías Cloud</h3>
                <p className="text-sm">
                  Soluciones escalables en la nube para una gestión y un
                  procesamiento eficaces de los datos.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 3.8 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <DatabaseIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Integración de datos</h3>
                <p className="text-sm">
                  Perfecta integración de los modelos de aprendizaje automático
                  en los entornos clientes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="flex flex-col items-center justify-center space-y-7 text-center text-white"
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  ¿Listo para transformar su empresa?
                </h2>
                <p className="max-w-[1200px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Póngase en contacto con nuestro equipo de expertos para
                  descubrir cómo la IA puede revolucionar sus operaciones.
                </p>
              </div>
              <div className="w-full max-w-3xl mt-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-transform hover:scale-105">
                    <LinkedinIcon className="w-12 h-12 text-blue-600 dark:text-white mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-5">
                      LinkedIn
                    </h3>
                    <Link
                      href="https://www.linkedin.com/company/seleon/"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      Ver perfil
                    </Link>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-transform hover:scale-105">
                    <MailIcon className="w-12 h-12 text-blue-600 dark:text-white mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-5">
                      Email
                    </h3>
                    <Link
                      href="mailto:your.email@example.com"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      Enviar email
                    </Link>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-transform hover:scale-105">
                    <PhoneIcon className="w-12 h-12 text-blue-600 dark:text-white mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-5">
                      Teléfono
                    </h3>
                    <Link
                      href="tel:+5493516296618"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      Llamar ahora
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Seleon. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Powered by Seleon
          </p>
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link> */}
        </nav>
      </footer>
    </div>
  );
}

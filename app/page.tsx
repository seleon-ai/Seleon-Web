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
  ShieldCheckIcon,
  CheckCircleIcon,
  ActivityIcon,
  CloudIcon,
  LineChartIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-3 flex items-center sticky top-0 z-50 w-full border-b border-pastel-blue/40 bg-pastel-cream/95 backdrop-blur supports-[backdrop-filter]:bg-pastel-cream/60">
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
                href="#services"
                className="transition-colors dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => smoothScroll(e, "services")}
              >
                Services
              </a>
              <a
                href="#about"
                className="transition-colors dark:hover:text-blue-600 hover:text-blue-600 text-gray-900 dark:text-white"
                onClick={(e) => smoothScroll(e, "about")}
              >
                About Us
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
      {isMenuOpen && (
        <div className="md:hidden py-2">
          <nav className="flex flex-col items-center space-y-2 text-sm font-medium">
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
        </div>
      )}
      <main className="flex-1" id="home">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-blue-50 to-green-50 dark:from-blue-900 dark:via-blue-800 dark:to-green-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-5">
                <div className="space-y-5">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                    Innovación y Eficiencia en la Gestión de Recursos Públicos
                  </h1>
                  <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                    Revolucione sus operaciones de servicios públicos con
                    nuestros modelos de aprendizaje automático de vanguardia.
                    Aumente la eficiencia, reduzca los costes y mejore la
                    prestación de servicios.
                  </p>
                </div>
                {/* 
                  <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
                      href="#"
                    >
                      Get Started
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                */}
              </div>
              <Image
                alt="AI for Utilities"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={600}
                src="/main.jpg"
                width={600}
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Transformando las empresas de servicios públicos con IA
                </h2>
                <p className="max-w-[1200px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  Nuestros modelos de aprendizaje automático están diseñados
                  para hacer frente a los retos específicos a los que se
                  enfrentan los proveedores de agua, electricidad y gas.
                  Descubra cómo estamos revolucionando el sector.
                </p>
              </div>
            </div>
            <div className="mx-auto px-9 grid max-w-7xl items-center gap-6 py-12 lg:px-0 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <LightbulbIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Mantenimiento predictivo
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Anticipe las fallas de los equipos y optimice los programas de
                  mantenimiento. Reduzca el tiempo de inactividad y disminuya
                  costos operativos.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <BarChartIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Previsión de la demanda
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Prediga con precisión la demanda de recursos y optimice su
                  distribución. Minimice el desperdicio y aumente la eficiencia.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <LineChartIcon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Obtención de datos clave
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recoja datos valiosos y relevantes para su empresa, y obtenga
                  insights estratégicos para tomar decisiones informadas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Success Story
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  See how we helped a major water utility reduce costs and
                  improve service quality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Water Utility Case Study"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={310}
                src="/succes.png"
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  WaterCorp Optimization Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  By implementing our AI-driven leak detection and predictive
                  maintenance systems, WaterCorp achieved:
                </p>
                <ul className="grid gap-6">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-200">
                      30% reduction in water loss
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-200">
                      25% decrease in maintenance costs
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-200">
                      15% improvement in customer satisfaction
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-5 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pastel-blue">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[950px] text-pastel-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios para revolucionar la
                  gestión de los servicios públicos.
                </p>
              </div>
            </div>
            <div className="mx-auto px-8 grid max-w-5xl items-center gap-6 py-12 lg:px-8 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <BrainCircuitIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Data Science & AI</h3>
                <p className="text-sm text-pastel-gray">
                  Modelos avanzados de IA, incluidos Machine Learning, Deep
                  Learning y GenAI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChartIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Analytics & BI</h3>
                <p className="text-sm text-pastel-gray">
                  Soluciones integrales de análisis de datos e inteligencia
                  empresarial.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ServerIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">DevOps</h3>
                <p className="text-sm text-pastel-gray">
                  Desarrollo y operaciones racionalizados para una implantación
                  eficaz.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <LockIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Ciberseguridad</h3>
                <p className="text-sm">
                  Medidas de seguridad robustas para proteger datos sensibles
                  según los estándares ISO 27001.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <CloudIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Tecnologías Cloud</h3>
                <p className="text-sm">
                  Soluciones escalables en la nube para una gestión y un
                  procesamiento eficaces de los datos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <DatabaseIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Integración de datos</h3>
                <p className="text-sm">
                  Perfecta integración de los modelos de aprendizaje automático
                  en los entornos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-7 text-center text-white">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  ¿Listo para transformar su empresa?
                </h2>
                <p className="max-w-[1200px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Póngase en contacto con nuestro equipo de expertos para
                  descubrir cómo la IA puede revolucionar sus operaciones.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Ingrese su email"
                    type="email"
                  />
                  <Button
                    className="bg-white dark:bg-gray-200 text-blue-600 dark:text-blue-800 hover:bg-gray-200 dark:hover:bg-gray-400"
                    type="submit"
                  >
                    Contactar
                  </Button>
                </form>
                {/* <p className="text-xs text-white dark:text-gray-300">
                    By submitting, you agree to our{" "}
                    <Link className="underline underline-offset-2 hover:text-gray-200 dark:hover:text-white" href="#">
                      Terms & Conditions
                    </Link>
                    .
                  </p> */}
              </div>
            </div>
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

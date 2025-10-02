"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Target, Layers, Mail, Phone, CircleCheck as CheckCircle2, ArrowRight, MapPin, Building2 } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/contact-form";
import Image from "next/image";
import logo from "./Dimensionsprintlogo.png"
import ElectronicsManufacturing from "../public/ElectronicsManufacturing.png"
import PrototypeDevelopment from "../public/PrototypeDevelopment.png"
import IoTDeviceAssembly from "../public/IoTDeviceAssembly.png"
import LEDModuleProduction from "../public/LEDModuleProduction.png"
import SensorIntegration from "../public/SensorIntegration.png"
import ResearchEducation from "../public/Research&Education.png"
import SmallBatchProduction from "../public/SmallBatchProduction.png"
import CustomElectronics from "../public/CustomElectronics.png"
export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const siteName = "Dimensions Print"; // change your application name here

  return (
    <div className="min-h-screen bg-white subtle-grid">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 origami-divider">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image src={logo} alt="Dimensions Print" width={36} height={36} />
            </div>
            <span className="text-xl font-bold text-gray-900">{siteName}</span>
          </div>
            <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#applications" className="text-gray-600 hover:text-gray-900 transition-colors">Applications</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="/learn-more" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <Button onClick={() => setShowContact(true)} className="bg-gray-900 hover:bg-gray-800">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-gray-100 text-gray-900 hover:bg-gray-200">
                ⚠️ website under development
              </Badge>
              <Badge className="mb-4 bg-gray-100 text-gray-900 hover:bg-gray-200">
              cutting-edge 3D printing services
              </Badge>
              <Badge className="mb-4 bg-gray-100 text-gray-900 hover:bg-gray-200">
                PCB Assembly and Custom Automation
              </Badge>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">Affordable 3D Homes,
                Desktop Pick & Place
                <span className="block text-gray-600">Machine Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Precision automated component placement for PCB assembly and diverse manufacturing applications. Transform your production with professional-grade accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setShowContact(true)} size="lg" className="bg-gray-900 hover:bg-gray-800">
                  Request Service <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300">
                  <a href="/learn-more">Learn More</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 origin-center rotate-2 rounded-2xl origami-panel"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 origami-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-white rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute top-8 left-8 w-32 h-32 bg-gray-200 transform rotate-45 opacity-20"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 bg-gray-300 transform -rotate-12 opacity-20"></div>
                    <Cpu className="w-32 h-32 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional PCB assembly and custom automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 bg-white origami-shadow">
              <CardContent className="p-8 origami-card">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 transform rotate-3">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">PCB Assembly Services</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  High-precision automated component placement for your PCB projects. From prototypes to small-batch production, we deliver quality assembly services.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Prototype Assembly
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Small to Medium Batch Production
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    SMD Component Placement
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Custom Component Placement
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Automated Assembly Solutions
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Precision Manufacturing
                  </li>
                </ul>

              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white origami-shadow">
              <CardContent className="p-8 origami-card">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 transform -rotate-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovative 3D Printed Housing Solutions</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We provide cutting-edge 3D printing services to design and build sustainable, cost-effective, and customizable homes. Our technology ensures faster construction, reduced costs, and eco-friendly practices compared to traditional methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    3D Printed Residential Homes – Affordable, durable, and customizable houses.
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Eco-Friendly Construction – Reduced waste and sustainable building materials.
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Custom Design Solutions – Tailor-made architectural designs to fit client needs.
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-gray-900" />
                    Fast Project Delivery – Complete construction in weeks instead of months.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Machine Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desktop-sized precision with professional-grade results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 transform rotate-2 rounded-xl origami-panel group-hover:rotate-3 transition-transform"></div>
              <div className="relative bg-white p-8 rounded-xl border border-gray-200 origami-card">
                <Zap className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Speed</h3>
                <p className="text-gray-600">
                  Rapid component placement for efficient production workflows
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 transform -rotate-2 rounded-xl origami-panel group-hover:-rotate-3 transition-transform"></div>
              <div className="relative bg-white p-8 rounded-xl border border-gray-200 origami-card">
                <Target className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Accuracy</h3>
                <p className="text-gray-600">
                  Micron-level accuracy for even the smallest components
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 transform rotate-1 rounded-xl origami-panel group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white p-8 rounded-xl border border-gray-200 origami-card">
                <Cpu className="h-10 w-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Versatile Setup</h3>
                <p className="text-gray-600">
                  Desktop footprint with adaptable configuration options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="applications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional offerings tailored to your manufacturing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Electronics Manufacturing",
                image: ElectronicsManufacturing,
                description: "Automated placement for production-grade PCB assemblies.",
              },
              {
                title: "Prototype Development",
                image: PrototypeDevelopment,
                description: "Rapid prototyping with precise component placement.",
              },
              {
                title: "Research & Education",
                image: ResearchEducation,
                description: "Teach and explore advanced SMT workflows.",
              },
              {
                title: "Small Batch Production",
                image: SmallBatchProduction,
                description: "Cost-effective runs with reliable repeatability.",
              },
              {
                title: "IoT Device Assembly",
                image: IoTDeviceAssembly,
                description: "Compact boards with fine-pitch components.",
              },
              {
                title: "LED Module Production",
                image: LEDModuleProduction,
                description: "Uniform LED placement for lighting products.",
              },
              {
                title: "Sensor Integration",
                image: SensorIntegration,
                description: "Accurate positioning for sensitive sensor packages.",
              },
              {
                title: "Custom Electronics",
                image: CustomElectronics,
                description: "Tailored solutions beyond standard assemblies.",
              },
            ].map((app, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow origami-card overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <img src={app.image.src} alt={app.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
              Service Coverage
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Across Maharashtra</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve customers throughout Maharashtra with our innovative 3D printing and PCB assembly services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Service Coverage Info */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 origin-center rotate-2 rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-200"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 origami-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">State-Wide Coverage</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    From bustling cities to emerging towns, we bring cutting-edge manufacturing solutions 
                    to every corner of Maharashtra. Our services are designed to support local businesses 
                    and communities across the state.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Fast delivery across all major cities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Local support and consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">On-site project assistance available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Regional partnerships for faster service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Major Cities Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Major Service Areas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { city: "Mumbai", region: "Western Maharashtra", icon: Building2 },
                  { city: "Pune", region: "Western Maharashtra", icon: Building2 },
                  { city: "Nagpur", region: "Vidarbha Region", icon: Building2 },
                  { city: "Nashik", region: "Northern Maharashtra", icon: Building2 },
                  { city: "Aurangabad", region: "Marathwada Region", icon: Building2 },
                  { city: "Solapur", region: "Southern Maharashtra", icon: Building2 },
                  { city: "Kolhapur", region: "Western Maharashtra", icon: Building2 },
                  { city: "Satara", region: "Western Maharashtra", icon: Building2 }
                ].map((location, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 hover:bg-white hover:shadow-md transition-all origami-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <location.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{location.city}</h4>
                        <p className="text-sm text-gray-600">{location.region}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Coverage Note */}
              <div className="mt-6 text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                  <p className="text-gray-700 font-medium mb-2">
                    <MapPin className="h-4 w-4 inline mr-1 text-blue-600" />
                    Complete Maharashtra Coverage
                  </p>
                  <p className="text-sm text-gray-600">
                    We serve all districts and cities across Maharashtra. 
                    <span className="font-medium text-blue-600"> Contact us</span> for service in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 max-w-2xl mx-auto origami-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Serve Your Location?
              </h3>
              <p className="text-gray-600 mb-6">
                No matter where you are in Maharashtra, we're here to help bring your projects to life 
                with our advanced manufacturing solutions.
              </p>
              <Button onClick={() => setShowContact(true)} size="lg" className="bg-blue-600 hover:bg-blue-700">
                Check Service in Your Area
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 transform rotate-3 rounded-full origami-panel"></div>
            <div className="relative bg-white p-6 rounded-full border-2 border-gray-200 origami-shadow">
              <Mail className="h-12 w-12 text-gray-900" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your PCB assembly needs or explore custom applications for our PNP machine.
          </p>
          <Button onClick={() => setShowContact(true)} size="lg" className="bg-gray-900 hover:bg-gray-800">
            Contact Us Today
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  {/* <div className="absolute inset-0 bg-white transform rotate-45"></div> */}
                  <Image src={logo} alt="Dimensions Print" width={36} height={36} />
                </div>
                <span className="text-xl font-bold">{siteName}</span>
              </div>
              <p className="text-gray-400">
                Professional desktop pick and place solutions for modern manufacturing.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>PCB Assembly</li>
                <li>Custom Applications</li>
                <li>Prototype Development</li>
                <li>Batch Production</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>madhusudanghule1@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 7796080161</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dimensions Print. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </div>
  );
}

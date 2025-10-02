"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building, 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  Mail, 
  Phone,
  MapPin,
  Clock,
  Zap,
  Shield,
  Layers,
  Cpu,
  Globe
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/components/contact-form";
import Image from "next/image";
import logo from "../Dimensionsprintlogo.png";

export default function LearnMore() {
  const [showContact, setShowContact] = useState(false);
  const siteName = "Dimensions Print";

  return (
    <div className="min-h-screen bg-white subtle-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 origami-divider">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image src={logo} alt="Dimensions Print" width={36} height={36} />
            </div>
            <span className="text-xl font-bold text-gray-900">{siteName}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm" className="border-gray-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button onClick={() => setShowContact(true)} className="bg-gray-900 hover:bg-gray-800">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
              About Dimensions Print
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionizing Manufacturing
              <span className="block text-gray-600">Through Innovation & Precision</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are pioneering the future of manufacturing with advanced 3D printing solutions and precision PCB assembly services, delivering affordable and sustainable technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dimensions Print is a cutting-edge manufacturing company specializing in two revolutionary technologies: 
                affordable 3D printed homes and precision desktop pick & place machines for PCB assembly.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with the vision to make advanced manufacturing accessible and affordable, we bridge the gap 
                between traditional construction methods and modern automated manufacturing processes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Innovation Focus</h3>
                    <p className="text-gray-600 text-sm">Cutting-edge 3D printing and automation technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Customer-Centric</h3>
                    <p className="text-gray-600 text-sm">Tailored solutions for every project requirement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm">Professional-grade precision and reliability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sustainable Future</h3>
                    <p className="text-gray-600 text-sm">Eco-friendly practices and reduced waste</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 origin-center rotate-2 rounded-2xl origami-panel"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 origami-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                    <p className="text-gray-600 text-sm">Merging traditional manufacturing with modern innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving the future of manufacturing through innovation, sustainability, and accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 bg-white origami-shadow">
              <CardContent className="p-8 origami-card">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 transform rotate-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  To democratize advanced manufacturing technologies by providing affordable, high-quality 3D printing solutions 
                  and precision PCB assembly services that make innovation accessible to businesses and individuals worldwide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Make advanced manufacturing affordable
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Deliver professional-grade quality
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Support innovation and entrepreneurship
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white origami-shadow">
              <CardContent className="p-8 origami-card">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 transform -rotate-3">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  To become the global leader in sustainable manufacturing solutions, revolutionizing construction and 
                  electronics production through innovative 3D printing and automated assembly technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Transform the construction industry
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Reduce environmental impact
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Create sustainable communities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Technologies */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two revolutionary technologies driving the future of manufacturing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 3D Printed Homes */}
            <div className="relative">
              <div className="absolute inset-0 origin-center rotate-1 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 origami-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">3D Printed Homes</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Revolutionary 3D printing technology that constructs affordable, durable, and customizable homes 
                  in a fraction of the time required by traditional construction methods.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Construction</h4>
                      <p className="text-gray-600 text-sm">Complete homes in weeks instead of months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Eco-Friendly Materials</h4>
                      <p className="text-gray-600 text-sm">Sustainable materials with reduced waste</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Designs</h4>
                      <p className="text-gray-600 text-sm">Tailored architectural solutions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 50-70% cost reduction compared to traditional construction</li>
                    <li>• 80% faster construction timeline</li>
                    <li>• 40% reduction in material waste</li>
                    <li>• Customizable designs and layouts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PCB Assembly */}
            <div className="relative">
              <div className="absolute inset-0 origin-center -rotate-1 rounded-2xl bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 origami-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Desktop Pick & Place</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional-grade desktop pick and place machine offering micron-level precision for PCB assembly, 
                  prototyping, and small-batch production with enterprise-quality results.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">High-Speed Placement</h4>
                      <p className="text-gray-600 text-sm">Rapid component placement for efficient workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Micron Precision</h4>
                      <p className="text-gray-600 text-sm">Accurate placement for the smallest components</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-indigo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Versatile Setup</h4>
                      <p className="text-gray-600 text-sm">Desktop footprint with professional capabilities</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Prototype development and testing</li>
                    <li>• Small to medium batch production</li>
                    <li>• IoT device assembly</li>
                    <li>• Educational and research projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dimensions Print?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the advantage of working with industry innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Cutting-Edge Technology",
                description: "Latest 3D printing and automation technologies for superior results",
                color: "text-yellow-600"
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes ensure reliability",
                color: "text-green-600"
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Rapid prototyping and production to meet your project timelines",
                color: "text-blue-600"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated team of engineers and technicians for comprehensive support",
                color: "text-purple-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 transform rotate-3 rounded-full bg-gray-100 group-hover:rotate-6 transition-transform"></div>
                  <div className="relative bg-white p-4 rounded-full border border-gray-200 origami-shadow">
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 transform rotate-3 rounded-full bg-blue-100"></div>
                <div className="relative bg-white p-4 rounded-full border border-gray-200 origami-shadow">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">madhusudanghule1@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 transform -rotate-3 rounded-full bg-green-100"></div>
                <div className="relative bg-white p-4 rounded-full border border-gray-200 origami-shadow">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 7796080161</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 transform rotate-2 rounded-full bg-purple-100"></div>
                <div className="relative bg-white p-4 rounded-full border border-gray-200 origami-shadow">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Available for consultation</p>
            </div>
          </div>

          <div className="text-center">
            <Button onClick={() => setShowContact(true)} size="lg" className="bg-gray-900 hover:bg-gray-800">
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <Image src={logo} alt="Dimensions Print" width={32} height={32} />
            </div>
            <span className="text-xl font-bold">{siteName}</span>
          </div>
          <p className="text-gray-400 mb-8">
            Revolutionizing manufacturing through innovation, precision, and sustainability.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2025 Dimensions Print. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </div>
  );
}

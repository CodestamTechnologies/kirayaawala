"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  

  return (
    <section className="bg-[#fcf6f0] py-20 pt-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions about our rooms, pricing, or facilities?  
            We’re here to help — reach out to us anytime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className="border-none shadow-md"
            data-aos="fade-right"
          >
            <CardContent className="p-8">
              <form className="space-y-5">
                <Input placeholder="Your Name" className="p-6" />
                <Input placeholder="Your Email" type="email" className="p-6" />
                <Input placeholder="Your Phone Number" type="tel" className="p-6" />
                <Textarea placeholder="Your Message" rows={5} className="p-6" />
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="space-y-8" data-aos="fade-left">
            <Card className="border-none shadow-md">
              <CardContent className="p-8 space-y-5">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-green-700" />
                  <span className="text-gray-700">info@roomonrent.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-700" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-green-700" />
                  <span className="text-gray-700">
                    123 Green Street, New Delhi, India
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Map Embed */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.897653220326!2d77.205985!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4f1a03f6b1%3A0x1f9d03e0e4a0d82c!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1638281563000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

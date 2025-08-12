"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Inquiry() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-[3rem] sm:text-[4rem] md:text-[6rem] font-bold leading-none">
          Any inquiry
        </h1>
        <p className="text-gray-500 my-4">Get in touch</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Contact Info */}
        <div className="space-y-6 text-sm text-gray-700">
          <p>Catch us here</p>
          <div>
            <p>info@pagepage.com</p>
            <p>+123 456 789 00-12</p>
          </div>
          <div>
            <p>34680 Florence Trail</p>
            <p>Apple Valley, MN 55124</p>
          </div>
          <div>
            <p>Monday — Sunday,</p>
            <p>9am – 7pm EST</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="md:col-span-2">
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" className="w-full" />
              <Input placeholder="Email address" type="email" className="w-full" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Subject" className="w-full" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="$1500 - $10,000" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1500">$1500 - $3000</SelectItem>
                  <SelectItem value="3000">$3000 - $5000</SelectItem>
                  <SelectItem value="5000">$5000 - $10,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <Textarea placeholder="Message" className="w-full h-40" />

            {/* Submit Button */}
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Get A Free Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

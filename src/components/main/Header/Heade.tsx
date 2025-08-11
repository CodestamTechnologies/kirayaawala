"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-8 py-4 z-20 text-black bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Kirayaa Wala
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>

        {/* Essentials Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:underline flex items-center gap-1">
              Essentials ▾
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem asChild>
              <Link href="/essentials/services">Services</Link>
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      {/* Action Button */}
      <Button variant="secondary" className="rounded-md hidden md:block">
        Schedule A Visit
      </Button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden focus:outline-none"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-4 space-y-4">
          <Link href="/" className="block hover:underline" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:underline" onClick={() => setMobileOpen(false)}>About</Link>

          {/* Essentials for Mobile */}
          <div className="space-y-2">
            <p className="font-medium">Essentials</p>
            <Link href="/essentials/kitchen" className="block hover:underline" onClick={() => setMobileOpen(false)}>Kitchen</Link>
            <Link href="/essentials/furniture" className="block hover:underline" onClick={() => setMobileOpen(false)}>Furniture</Link>
            <Link href="/essentials/appliances" className="block hover:underline" onClick={() => setMobileOpen(false)}>Appliances</Link>
          </div>

          <Link href="/contact" className="block hover:underline" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Button variant="secondary" className="w-full rounded-md" onClick={() => setMobileOpen(false)}>
            Schedule A Visit
          </Button>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Links() {
  return (
    <div className="flex justify-center gap-4 mt-6">
      {[ 
        { href: "https://www.facebook.com", icon: <Facebook size={20} />, label: "Facebook" },
        { href: "https://www.twitter.com", icon: <Twitter size={20} />, label: "Twitter" },
        { href: "https://www.instagram.com", icon: <Instagram size={20} />, label: "Instagram" }
      ].map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full px-5 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-md transition-all"
          >
            {link.icon}
            <span className="hidden sm:inline">{link.label}</span>
          </Button>
        </motion.a>
      ))}
    </div>
  );
}

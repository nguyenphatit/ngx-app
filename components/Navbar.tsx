"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollDirection, useScrollDirection } from '@/hooks/use-scroll-direction';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
import { LocaleToggle } from './LocaleToggle';
import { Hamburger } from './Hamburger';
import { X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const { scrollDirection, scrolled } = useScrollDirection(10);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const navRef = useRef<HTMLElement>(null);

  const mobileMenuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (navRef.current) {
      if (scrollDirection === ScrollDirection.DOWN) {
        gsap.to(navRef.current, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
      } else {
        gsap.to(navRef.current, { y: '0%', duration: 0.3, ease: 'power2.inOut' });
      }
    }
  }, [scrollDirection]);

  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile, isMobileMenuOpen])

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:px-20 px-8 py-4 transition-colors duration-300 backdrop-blur-lg',
          isMobileMenuOpen ? 'bg-gray-800' : '',
          scrollDirection === ScrollDirection.UP && scrolled ? 'bg-navbar-primary/10' : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-navbar-primary-foreground flex items-center justify-center">
          <span>Motion</span><X className="w-4 h-4" />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex h-full items-center gap-4 relative">
            {navLinks.map((link) => {
              return (
                <Link href={link.href}
                  key={link.href}
                  aria-label={link.label}
                  className={cn(
                    'text-navbar-primary-foreground',
                    pathname === link.href ? 'font-bold' : 'font-normal',
                  )}>{link.label}</Link>
              );
            })}
            <ModeToggle />
            <LocaleToggle />
          </div>
        )}

        {/* Hamburger Button (Mobile) */}
        {isMobile && (
          <Hamburger isActive={isMobileMenuOpen} setIsActive={toggleMobileMenu} />
        )}
      </nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navbar-primary/90 backdrop-blur flex flex-col items-center justify-center space-y-8"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-5xl font-bold px-2 py-2 uppercase text-navbar-primary-foreground transition-all duration-300 ease-in-out inset-shadow-[0_0_0_rgba(84,197,214,1)] hover:inset-shadow-[250px_0_0_0_rgba(84,197,214,1)]',
                  pathname === link.href ? 'font-bold' : 'font-normal',
                )}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
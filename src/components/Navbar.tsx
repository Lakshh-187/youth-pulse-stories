
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
 NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useMobile from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
                <img
                  src="https://i.ibb.co/8DHFjncx/youngburg-1.jpg"
                  alt="Youngburg Media Logo"
                  style={{ width: '40px', height: '40px', marginRight:'10px' }}
                />
              
              
              <span className="text-xl font-bold text-youth-purple">Youngburg</span>              
              <span className="text-xl font-medium ml-1">Media</span>
            </Link>
            
          </div>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-youth-purple/50 to-youth-blue/50 p-6 no-underline outline-none focus:shadow-md"
                            to="/who-stops-you"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Who Stops You?
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Breaking barriers to access opportunities without fees
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          to="/frontliner"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Frontliner</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Youth-led innovation program
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/top-one-percent"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Top One Percent</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Elite mentorship program
                          </p>
                        </Link>
                      </li>
                      <li>
 <Link
 to="/iep"
 className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
 >
 <div className="text-sm font-medium leading-none">IEP</div>
 <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
 International exchange program
 </p>
 </Link>
 </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/who-stops-you">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Who Stops You?
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
 <NavigationMenuItem>
 <Link to="/sep-700">
 <NavigationMenuLink className={navigationMenuTriggerStyle()}>SEP-700 <span className="ml-1">💎</span></NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link
                          to="/blogs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest insights and stories
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/legal"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Legal</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Privacy policy and terms
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : null}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-youth-purple hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-youth-purple"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild><a href="https://wsy.uniwave.in/" target="_blank" rel="noopener noreferrer">
              Who Stops You?</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/who-stops-you"
              className="block px-3 py-2 rounded-md text-base font-medium text-youth-purple bg-gray-50 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Who Stops You?
            </Link>
            <Link
              to="/frontliner"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Frontliner
            </Link>
            <Link
              to="/top-one-percent"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Top One Percent
            </Link>
            <Link
              to="/sep-700"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              SEP-700
            </Link>
            <Link
              to="/iep"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              IEP
            </Link>
            <Link
              to="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/legal"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Legal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

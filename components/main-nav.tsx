"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
  category: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ category }) => {
  const pathname = usePathname();

  const categoryRoutes = category.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <div className="mx-10 hidden lg:flex items-center space-x-4 lg:space-x-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-semibold transition-colors hover:text-black hover:scale-105">
                Gifts For
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-3 lg:w-[550px] ">
                  {categoryRoutes.slice(0, 9).map((route) => (
                    <ListItem>
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "text-lg font-semibold transition-colors hover:text-black hover:scale-105",
                          route.active ? "text-black" : "text-neutral-600"
                        )}
                      >
                        {route.label}
                      </Link>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-semibold transition-colors hover:text-black hover:scale-105">
                Gifts By Occassion
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[550px] ">
                  {categoryRoutes.slice(3, 6).map((route) => (
                    <ListItem>
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "text-lg font-semibold transition-colors hover:text-black hover:scale-105",
                          route.active ? "text-black" : "text-neutral-600"
                        )}
                      >
                        {route.label}
                      </Link>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-semibold transition-colors hover:text-black hover:scale-105">
                Gifts Guides
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[550px] ">
                  {categoryRoutes.slice(3, 6).map((route) => (
                    <ListItem>
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "text-lg font-semibold transition-colors hover:text-black hover:scale-105",
                          route.active ? "text-black" : "text-neutral-600"
                        )}
                      >
                        {route.label}
                      </Link>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-semibold transition-colors hover:text-black hover:scale-105">
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[550px] ">
                  <ListItem>
                    <Link
                      href="/contact-us"
                      className={cn(
                        "text-lg font-semibold transition-colors hover:text-black hover:scale-105"
                      )}
                    >
                      Contact Us
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="/privacy-policy"
                      className={cn(
                        "text-lg font-semibold transition-colors hover:text-black hover:scale-105"
                      )}
                    >
                      Privacy Policy
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href="/affiliate"
                      className={cn(
                        "text-lg font-semibold transition-colors hover:text-black hover:scale-105"
                      )}
                    >
                      Affiliate
                    </Link>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <ul>
          <li className="relative text-lg mx-3 font-semibold hover:cursor-pointer hover:text-black hover:scale-105">
            Gift Guides{" "}
            <span className="absolute mt-1">
              <ChevronDown />
            </span>
          </li>

          <ul className="hidden">
            {categoryRoutes.slice(3, 6).map((route) => (
              <li>
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-semibold transition-colors hover:text-black hover:scale-105",
                    route.active ? "text-black" : "text-neutral-600"
                  )}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
        <div>
          <p className="relative text-lg mx-3 font-semibold hover:cursor-pointer hover:text-black hover:scale-105">
            More{" "}
            <span className="absolute mt-1">
              <ChevronDown />
            </span>
          </p>
          <div>
            <ul className="hidden">
              {categoryRoutes.slice(3, 6).map((route) => (
                <li>
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-semibold transition-colors hover:text-black hover:scale-105",
                      route.active ? "text-black" : "text-neutral-600"
                    )}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 hover:scale-105 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default MainNav;

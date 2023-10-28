"use client";

import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/public/Website logo.png";
import { Category } from "@/types/types";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchInput from "./search-input";
import { Separator } from "./ui/separator";
interface MainNavProps {
  category: Category[];
}
interface MobileNavProps {
  giftFor: boolean;
  giftByOccasion: boolean;
  giftGuides: boolean;
  more: boolean;
}

const MobileNav: React.FC<MainNavProps> = ({ category }) => {
  const [subMenuOpen, setSubMenuOpen] = useState<MobileNavProps>({
    giftFor: false,
    giftByOccasion: false,
    giftGuides: false,
    more: false,
  });

  const pathname = usePathname();

  const categoryRoutes = category.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const toggleSubMenu = (menu: keyof typeof subMenuOpen) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="lg:hidden mr-6">
          <Menu className="w-8 h-8" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="pt-3 w-[330px]">
        <SheetHeader>
          <SheetTitle className="">
            <Link href="/" className="ml-6 flex lg:ml-0 gap-x-2">
              <p className="w-[240px] flex items-center">
                <Image src={logo} alt="logo" width={50} height={50} />
                <span className="text-[33px] font-bold text-[#724480] pl-1">
                  Gift Seeker
                </span>
              </p>
            </Link>
          </SheetTitle>
          <Separator />
          <SheetDescription className=" ml-3 ">
            Your one stop to find Gifts
          </SheetDescription>
          <Separator />
        </SheetHeader>
        <div className="py-6">
          <div className="pb-4">
            <SearchInput />
          </div>

          <ul className="my-3 ">
            <li
              onClick={() => toggleSubMenu("giftFor")}
              className=" text-2xl flex flex-row items-center justify-between mx-3 font-semibold hover:cursor-pointer hover:text-black hover:scale-105"
            >
              Gift For{" "}
              <span className=" mt-1">
                <ChevronDown />
              </span>
            </li>
            {subMenuOpen.giftFor && (
              <ul className="">
                {categoryRoutes.slice(3, 6).map((route) => (
                  <li className="hover:bg-gray-100 py-1.5 flex flex-col items-start justify-between ml-5 font-semibold hover:cursor-pointer hover:text-black ">
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-[22px] font-semibold transition-colors hover:text-black hover:scale-105",
                        route.active ? "text-black" : "text-neutral-600"
                      )}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
          <Separator />
          <ul className="my-3">
            <li
              onClick={() => toggleSubMenu("giftByOccasion")}
              className="flex flex-row items-center justify-between text-2xl mx-3 font-semibold hover:cursor-pointer hover:text-black hover:scale-105"
            >
              Gift By Occassion{" "}
              <span className=" mt-1">
                <ChevronDown />
              </span>
            </li>
            {subMenuOpen.giftByOccasion && (
              <ul className="">
                {categoryRoutes.slice(3, 6).map((route) => (
                  <li className="hover:bg-gray-100 flex py-1.5 flex-col items-start justify-between ml-5 font-semibold hover:cursor-pointer hover:text-black  ">
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-[22px] font-semibold transition-colors hover:text-black hover:scale-105",
                        route.active ? "text-black" : "text-neutral-600"
                      )}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
          <Separator />
          <ul className="my-3">
            <li
              onClick={() => toggleSubMenu("giftGuides")}
              className="flex flex-row items-center justify-between text-2xl mx-3 font-semibold hover:cursor-pointer hover:text-black hover:scale-105"
            >
              Gift Guides{" "}
              <span className=" mt-1">
                <ChevronDown />
              </span>
            </li>
            {subMenuOpen.giftGuides && (
              <ul className="">
                {categoryRoutes.slice(3, 6).map((route) => (
                  <li className="hover:bg-gray-100  py-1.5 flex flex-col items-start justify-between ml-5 font-semibold hover:cursor-pointer hover:text-black ">
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-[22px] font-semibold transition-colors hover:text-black hover:scale-105",
                        route.active ? "text-black" : "text-neutral-600"
                      )}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
          <Separator />
          <ul className="my-3">
            <li
              onClick={() => toggleSubMenu("more")}
              className="flex flex-row items-center justify-between text-2xl mx-3 font-semibold hover:cursor-pointer hover:text-black hover:scale-105"
            >
              More{" "}
              <span className=" mt-1">
                <ChevronDown />
              </span>
            </li>
            {subMenuOpen.more && (
              <ul className="">
                <li className="hover:bg-gray-100  py-1.5 flex flex-col items-start justify-between ml-5 font-semibold hover:cursor-pointer hover:text-black ">
                  <Link
                    href="/contact-us"
                    className={cn(
                      "text-[22px] font-semibold transition-colors hover:text-black hover:scale-105"
                    )}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="hover:bg-gray-100  py-1.5 flex flex-col items-start justify-between ml-5 font-semibold hover:cursor-pointer hover:text-black ">
                  <Link
                    href="/privacy-policy"
                    className={cn(
                      "text-[22px] font-semibold transition-colors hover:text-black hover:scale-105"
                    )}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="hover:bg-gray-100  py-1.5 flex flex-col items-start justify-between ml-5 font-semibold hover:cursor-pointer hover:text-black ">
                  <Link
                    href="/affiliate"
                    className={cn(
                      "text-[22px] font-semibold transition-colors hover:text-black hover:scale-105"
                    )}
                  >
                    Affiliate
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

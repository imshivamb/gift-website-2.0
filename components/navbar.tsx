import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";
import logo from "@/public/Website logo.png";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import { Menu } from "lucide-react";
import MobileNav from "./mobile-nav";

export const revalidate = 0;

const Navbar = async () => {
  // const stores = await getStores();
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative justify-between px-4 sm:px-6 lg:px-8 flex h-20 items-center">
          <MobileNav category={categories} />

          <Link href="/" className="ml-6 flex lg:ml-0 gap-x-2">
            <p className="w-[240px] flex items-center">
              <Image src={logo} alt="logo" width={50} height={50} />
              <span className="text-[33px] font-bold text-[#724480] pl-1">
                Gift Seeker
              </span>
            </p>
          </Link>
          <MainNav category={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

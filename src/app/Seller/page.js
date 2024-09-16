"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar.jsx";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Components
import MyOrder from "@/components/Dashboard/MyOrder.jsx";
import Profile from "@/components/Dashboard/Profile.jsx";
import Settings from "@/components/Dashboard/Settings.jsx";
import AddProduct from "@/components/Dashboard/AddProduct.jsx";
import Listproduct from "@/components/Dashboard/Listproduct.jsx";
import Vieworder from "@/components/Dashboard/Vieworder.jsx";
import Dashboard from "@/components/Dashboard/Dashboard.jsx";

export default function SidebarDemo() {
  const [activeLabel, setActiveLabel] = useState("Manu Arora");

  const links = [
    {
      label: "MyOrder",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 " />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Listproduct",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Vieworder",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 " />
      ),
    },
    {
      label: "Pan Card Information",
      href: "",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const wallet = [
    {
      label: "My Wallet",
      href: "#",
      price: 500,
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 " />
      ),
    },
  ];

  const myStuff = [
    {
      label: "My Coupon",
      href: "#",
    },
    {
      label: "My Review And Rating",
      href: "#",
    },
    {
      label: "My Wishlist",
      href: "/",
    },
  ];

  const logout = [
    {
      label: "Logout My Account",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  const renderContent = () => {
    switch (activeLabel) {
      case "MyOrder":
        return <MyOrder />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      case "AddProduct":
        return <AddProduct />;
      case "Listproduct":
        return <Listproduct />;
      case "Vieworder":
        return <Vieworder />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800  flex-1   mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden  w-full   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300",
        "h-screen "
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 scrollbar-hide">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
              {links.map((link) => (
                <SidebarLink
                  key={link.label}
                  link={link}
                  onClick={() => setActiveLabel(link.label)}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
              {wallet.map((link) => (
                <div key={link.label} className="flex justify-between items-center p-2 rounded-md ">
                  <SidebarLink link={link} onClick={() => setActiveLabel(link.label)} />
                  <span className=" font-medium text-yellow-400">{link.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
              {myStuff.map((link) => (
                <SidebarLink key={link.label} link={link} onClick={() => setActiveLabel(link.label)} />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
              {logout.map((link) => (
                <SidebarLink key={link.label} link={link} onClick={() => setActiveLabel(link.label)} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1  bg-[#171717]">{renderContent()}</div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative ">
      <div className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 flex-col">
        <SidebarLink
          link={{
            label: "Manu Arora",
            href: "#",
            icon: (
              <Image
                src="https://assets.aceternity.com/manu.png"
                className="h-7 w-7 flex-shrink-0 rounded-full"
                width={50}
                height={50}
                alt="Avatar"
              />
            ),
          }}
        />
      </div>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

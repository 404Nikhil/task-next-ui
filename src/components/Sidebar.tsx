"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar-menu";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import {Card, CardFooter, Button} from "@nextui-org/react";
export function SidebarDemo() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
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
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];

    const [activeLink, setActiveLink] = useState("Dashboard");
    const [open, setOpen] = useState(false);

    const handleLinkClick = (label) => {
        setActiveLink(label);
    };

    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full py-20 flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                    onClick={() => handleLinkClick(link.label)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Progress value={33} />
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Name",
                                href: "https://github.com/404Nikhil",
                                icon: (
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/83774380?v=4"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard activeLink={activeLink} />
        </div>
    );
}
const Dashboard = ({ activeLink }: { activeLink: string }) => {
    const dashboardCards = [
        { title: "Dashboard Card 1", link: "https://dashboard-card-1.com" },
        { title: "Dashboard Card 2", link: "https://dashboard-card-2.com" },
        { title: "Dashboard Card 3", link: "https://dashboard-card-3.com" },
        { title: "Dashboard Card 4", link: "https://dashboard-card-4.com" },
        { title: "Dashboard Card 5", link: "https://dashboard-card-5.com" },
        { title: "Dashboard Card 6", link: "https://dashboard-card-6.com" },
    ];

    const profileCards = [
        { title: "Profile Card 1", link: "https://profile-card-1.com" },
        { title: "Profile Card 2", link: "https://profile-card-2.com" },
        { title: "Profile Card 3", link: "https://profile-card-3.com" },
        { title: "Profile Card 4", link: "https://profile-card-4.com" },
        { title: "Profile Card 5", link: "https://profile-card-5.com" },
        { title: "Profile Card 6", link: "https://profile-card-6.com" },
    ];

    const settingsCards = [
        { title: "Settings Card 1", link: "https://settings-card-1.com" },
        { title: "Settings Card 2", link: "https://settings-card-2.com" },
        { title: "Settings Card 3", link: "https://settings-card-3.com" },
        { title: "Settings Card 4", link: "https://settings-card-4.com" },
        { title: "Settings Card 5", link: "https://settings-card-5.com" },
        { title: "Settings Card 6", link: "https://settings-card-6.com" },
    ];

    const logoutCards = [
        { title: "Logout Card 1", link: "https://logout-card-1.com" },
        { title: "Logout Card 2", link: "https://logout-card-2.com" },
        { title: "Logout Card 3", link: "https://logout-card-3.com" },
        { title: "Logout Card 4", link: "https://logout-card-4.com" },
        { title: "Logout Card 5", link: "https://logout-card-5.com" },
        { title: "Logout Card 6", link: "https://logout-card-6.com" },
    ];

    const cardData = [
        {
            category: "Dashboard",
            cards: dashboardCards,
        },
        {
            category: "Profile",
            cards: profileCards,
        },
        {
            category: "Settings",
            cards: settingsCards,
        },
        {
            category: "Logout",
            cards: logoutCards,
        },
    ];
    return (
        <div className="flex flex-1 justify-center items-center">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            {cardData.map((category) => (
                activeLink === category.category && (
                    <div className="flex flex-wrap md:flex-row flex-col  items-center justify-center gap-16" key={category.category}>
                        {category.cards.map((card, i) => (
                            <Card
                                key={`${category.category.toLowerCase()}-card${i}`}
                                isFooterBlurred
                                radius="lg"
                                className="border-none flex flex-col justify-center py-12 px-4 items-center rounded-lg bg-red-500  w-[370px] h-[300px]"
                            >
                                <Image
                                    alt="Card Image"
                                    className="object-cover rounded-lg"
                                    height={200}
                                    src="https://nextui.org/images/hero-card.jpeg"
                                    width={200}
                                />
                                <CardFooter className="justify-center gap-3 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small  z-10">
                                    <p className="text-tiny text-white/80">{card.title}</p>
                                    <Button href={card.link} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                        Click here
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )
            ))}
        </div>
    </div>
    );
};
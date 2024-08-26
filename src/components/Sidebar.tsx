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
import { Card, CardFooter, Button } from "@nextui-org/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchIcon } from "./ui/search-icon";
import { Input } from "@nextui-org/react";

export function SidebarDemo() {
    const links = [
        {
            label: "Option 1",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Option 2",
            href: "#",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Option 3",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Option 4",
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
            <Dashboard activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
    );
}

const Dashboard = ({ activeLink, setActiveLink }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const dashboardCards = [
        { title: "Feature 1", link: "https://dashboard-card-1.com" },
        { title: "Fr-2", link: "https://dashboard-card-2.com" },
        { title: "Ft-3", link: "https://dashboard-card-3.com" },
        { title: "Fe-4", link: "https://dashboard-card-4.com" },
        { title: "Fa-5", link: "https://dashboard-card-5.com" },
        { title: "F-6", link: "https://dashboard-card-6.com" },
    ];

    const profileCards = [
        { title: "P-1", link: "https://profile-card-1.com" },
        { title: "Pr-2", link: "https://profile-card-2.com" },
        { title: "Pr-3", link: "https://profile-card-3.com" },
        { title: "Pr-4", link: "https://profile-card-4.com" },
        { title: "Pr-5", link: "https://profile-card-5.com" },
        { title: "Pr-6", link: "https://profile-card-6.com" },
    ];

    const settingsCards = [
        { title: "Set-1", link: "https://settings-card-1.com" },
        { title: "St-2", link: "https://settings-card-2.com" },
        { title: "Se-3", link: "https://settings-card-3.com" },
        { title: "S-4", link: "https://settings-card-4.com" },
        { title: "E-5", link: "https://settings-card-5.com" },
        { title: "T-6", link: "https://settings-card-6.com" },
    ];

    const logoutCards = [
        { title: "L-1", link: "https://logout-card-1.com" },
        { title: "Gl-2", link: "https://logout-card-2.com" },
        { title: "G-3", link: "https://logout-card-3.com" },
        { title: "Lo-4", link: "https://logout-card-4.com" },
        { title: "Lg-5", link: "https://logout-card-5.com" },
        { title: "Log-6", link: "https://logout-card-6.com" },
    ];

    const cardData = [
        {
            category: "Option 1",
            cards: dashboardCards,
        },
        {
            category: "Option 2",
            cards: profileCards,
        },
        {
            category: "Option 3",
            cards: settingsCards,
        },
        {
            category: "Option 4",
            cards: logoutCards,
        },
    ];

    const filteredCards = cardData.map((category) => {
        return {
            ...category,
            cards: category.cards.filter((card) =>
                card.title.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        };
    });

    return (
<div className="flex flex-1 justify-center items-center">
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex justify-between items-center">
            <Input
                classNames={{
                    base: "max-w-full sm:max-w-[10rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-blue-300 py-2 px-2 rounded-lg">Categories Dropdown</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setActiveLink("Option 1")}>Option-1</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveLink("Option 2")}>Option-2</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveLink("Option 3")}>Option-3</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveLink("Option 4")}>Option-4</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        {filteredCards.map((category) => (
            activeLink === category.category && (
                <div className="flex flex-wrap md:flex-row flex-col items-center justify-center gap-16" key={category.category}>
                    {category.cards.map((card, i) => (
                        <Card
                            key={`${category.category.toLowerCase()}-card${i}`}
                            isFooterBlurred
                            radius="lg"
                            className="border-none flex flex-col justify-center py-12 px-4 text-black dark:text-white items-center rounded-lg bg-slate-500 dark:bg-slate-900 w-[370px] h-[300px]"
                        >
                            <Image
                                alt="Card Image"
                                className="object-cover rounded-lg"
                                height={200}
                                src="https://nextui.org/images/hero-card.jpeg"
                                width={200}
                            />
                            <CardFooter className="justify-center gap-3 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
                                <p className="text-tiny text-white/80">{card.title}</p>
                                <Button href={card.link} className="text-tiny rounded-lg py-1 text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
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

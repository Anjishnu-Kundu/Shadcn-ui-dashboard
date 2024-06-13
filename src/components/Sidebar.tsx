'use client';

import React from 'react';
import Link from 'next/link';
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from 'lucide-react';

export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/profile",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/inbox",
                    icon: <Inbox />,
                    text: "Inbox"
                },
                {
                    link: "/billing",
                    icon: <CreditCard />,
                    text: "Billing"
                },
                {
                    link: "/notifications",
                    icon: <Bell />,
                    text: "Notifications"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/settings",
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/privacy",
                    icon: <Cookie />,
                    text: "Privacy"
                },
                {
                    link: "/logs",
                    icon: <MessageSquare />,
                    text: "Logs"
                }
            ]
        }
    ];

    return (
        <div className='fixed flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4'>
            <div className='grow'>
                <Command className='overflow-visible'>
                    <CommandList className='overflow-visible absolute top-28'>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: any, optionKey: number) => (
                                    <Link key={optionKey} href={option.link} passHref>
                                        <CommandItem className='cursor-pointer gap-2'>
                                            {option.icon}
                                            {option.text}
                                        </CommandItem>
                                    </Link>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div>Settings / Notifications</div>
        </div>
    );
}

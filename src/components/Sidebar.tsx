'use client'

import React from 'react'
import UserItem from './UserItem'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { group } from 'console'
import { link } from 'fs'
import { text } from 'stream/consumers'
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from 'lucide-react'


export default function Sidebar() {

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <Inbox />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <CreditCard />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notifications"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/", 
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icon: <Cookie />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <MessageSquare />,
                    text: "Logs"
                }
            ]
        }
    ]
    return (
        <div className='fixed flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4'>
            <div>
                <UserItem />
            </div>
            <div className='grow'>
                <Command className='overflow-visible'>
                    {/* <CommandInput placeholder="Type a command or search..." /> */}
                    <CommandList className='overflow-visible'>
                        {/* <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Search Emoji</CommandItem>
                            <CommandItem>Calculator</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>Profile</CommandItem>
                            <CommandItem>Billing</CommandItem>
                            <CommandItem>Settings</CommandItem>
                        </CommandGroup> */}
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: any, optionKey: number) => 
                                <CommandItem key={optionKey} className='cursor-pointer gap-2'>
                                    {option.icon}
                                    {option.text}
                                </CommandItem>
                                )}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div>Settings / Notifications</div>
        </div>
    )
}

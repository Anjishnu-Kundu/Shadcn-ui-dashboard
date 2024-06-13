'use client';
import React from 'react'
import {
    ChevronDown,
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"
import { useRouter } from 'next/navigation'
import Link from 'next/link';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserItem() {
    return (
        <>
            <div className='flex items-center justify-between gap-2 p-4 border rounded-[8px] w-64 fixed top-4 left-4'>
                <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                    <p>AK</p>
                </div>
                <div className='grow'>
                    <p className='text-[16px] font-bold'>Anjishnu Kundu</p>
                    <p className='text-[12px] text-neutral-500'>codewithanji@gmail.com</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <Link href={"/login"} passHref>
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <button>Log out</button>
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}

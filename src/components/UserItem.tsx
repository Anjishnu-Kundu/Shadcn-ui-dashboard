'use client';
import React from 'react'

export default function UserItem() {
    return (
        <div className='flex items-center justify-between gap-2 p-4 border rounded-[8px]'>
            <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                <p>AK</p>
            </div>
            <div className='grow'>
                <p className='text-[16px] font-bold'>Anjishnu Kundu</p>
                <p className='text-[12px] text-neutral-500'>codewithanji@gmail.com</p>
            </div>
        </div>
    )
}

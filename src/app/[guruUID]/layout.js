import {draftMode} from 'next/headers'
import {EyeIcon} from 'lucide-react'

import {SideMenu} from '@/components/side-menu'
import {MenuContent} from '@/components/menu-content'
import {preloadGetAllPosts} from '@/lib/contentful'

export default async function GuruLayout({children}) {
    const {isEnabled} = draftMode()
    preloadGetAllPosts(isEnabled)

    return (
        <div>
            {isEnabled && (
                <div
                    className="absolute bottom-0 left-0 right-0 z-50 flex h-12 w-full items-center justify-center bg-green-500 text-center text-sm font-medium text-white">
                    <div className="flex items-center gap-2">
                        <EyeIcon size={16}/>
                        <span>Draft mode is enabled</span>
                    </div>
                </div>
            )}
            <div className="lg:flex">
                <SideMenu className="relative hidden lg:flex">
                    <MenuContent/>
                </SideMenu>
                <div className="flex flex-1">{children}</div>
            </div>
        </div>
    )
}
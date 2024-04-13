import Sidebar from "../Sidebar"
import { Sheet, SheetContent } from "../ui/sheet"


export default function MobileSidebar({ open, onOpenChange }) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side='left' className='w-[280px] p-0' showClose={false}>
                <Sidebar onClick={() => onOpenChange(false)} />
            </SheetContent>
        </Sheet>
    )
}

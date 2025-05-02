"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function MobileMenu({ links }: HeaderProps) {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <nav className="block md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Berbagi Bites Jogja</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {links.map((e) => {
                        return (

                            <DropdownMenuCheckboxItem>
                                <Link href={e.href}>{e.label}</Link>
                            </DropdownMenuCheckboxItem>
                        )
                    }

                    )}
                </DropdownMenuContent>
            </DropdownMenu>

        </nav>
    )
}

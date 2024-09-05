'use client'

import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-px rounded-full self-center w-8 h-8" variant="ghost">
          <Avatar className="w-8 h-8">
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuLabel>
          <p>Мой аккаунт</p>
          <p className="text-xs text-muted-foreground text-ellipsis overflow-hidden">Streltsov</p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="flex" href={`/profile/1`}>
              <User className="mr-2 w-4 h-4" />
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 w-4 h-4" />
            <span>Выход</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

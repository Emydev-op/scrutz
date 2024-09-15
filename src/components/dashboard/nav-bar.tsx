import { ChevronDownIcon, LogOut, Search, UserRoundIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AvatarIcon, BellIcon } from "@/assets/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userDropdown = (
  <DropdownMenu>
    <DropdownMenuTrigger className="bg-transparent flex items-center space-x-3 hover:border-transparent outline-transparent ">
      <img src={AvatarIcon} alt="user avatar" />
      <span className="text-sm font-medium flex items-center ">
        BigTech{" "}
        <ChevronDownIcon className="text-[var(--pry-color)] size-6 ml-[2px]" />
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[17rem] bg-[#fffffa]">
      <DropdownMenuLabel className="flex gap-x-3 items-center">
        <img src={AvatarIcon} className="" alt="user avatar" />
        <span className="text-sm font-semibold">
          BigTech
          <p className="text-[10px] font-normal text-[var(--text-color)]">
            Admin
          </p>
        </span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="pl-3 py-3">
        <UserRoundIcon className="size-5 mr-2 stroke-[var(--text-color2)] " />{" "}
        Edit Profile
      </DropdownMenuItem>
      <DropdownMenuItem className="pl-3 mb-2  ">
        <LogOut className="size-5 mr-2 stroke-[var(--error-color)] " /> Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function NavBar() {
  return (
    <div className="border-b-2 border-[var(--bg-color3)] h-[70px] sticky top-0 w-full">
      <div className=" px-16 flex h-full justify-between items-center">
        <div className="relative w-fit md:grow-0">
          <Input
            id="search"
            type="search"
            placeholder="Search for anything..."
            className="w-full !h-[44px] focus-visible:ring-0 rounded bg-transparent pl-[10px] md:w-[200px] lg:w-[320px]"
          />
          <Search className="absolute right-2.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer size-4 text-muted-foreground" />
        </div>
        <div className="flex items-center">
          <img src={BellIcon} alt="notification icon" />
          <hr className="block bg-[var(--bg-color)] h-[1px] w-8 rotate-90" />
          {userDropdown}
        </div>
      </div>
    </div>
  );
}

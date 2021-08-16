import { useSession } from "next-auth/client";
import React from "react";
import {
  ChevronDoubleDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import {
  ClockIcon,
  CalendarIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDoubleDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;

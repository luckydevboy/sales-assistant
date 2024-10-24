import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui";

const AppSidebar = () => {
  return (
    <Sidebar side="right">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;

import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Github,
  Linkedin
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ThemeToggle } from "@/components/theme-toggle"
import { Link, useLocation } from "react-router-dom"

// Navigation items for portfolio
const mainItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about", 
    icon: User,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Briefcase,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
]

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/rotinoo",
    icon: Github,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/robby-agustino",
    icon: Linkedin,
  },
]

export default function PortfolioSidebar() {
  const location = useLocation();
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div>
            <img src="/maskot_onlyface.png" alt="Profile" className="rounded-full w-10 h-10" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Rotinoo</h2>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="mb-3">
          <ThemeToggle />
        </div>
        <div className="text-xs text-muted-foreground text-center">
          © 2024 Rotinoo. All rights reserved.
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
import { SidebarProvider, SidebarTrigger, SidebarInset, useSidebar } from "@/components/ui/sidebar"
import PortfolioSidebar from "./components/Sidebar"

interface LayoutProps {
  children: React.ReactNode;
}

function SidebarTriggerFixed() {
  const { state, isMobile } = useSidebar()
  
  // On mobile, sidebar is a sheet overlay, so button stays at left-4
  // On desktop, adjust position based on sidebar state
  const leftPosition = isMobile 
    ? "left-4" 
    : state === "expanded" 
      ? "left-[calc(16rem+1rem)]" // sidebar width + 1rem gap
      : "left-[calc(3rem+1rem)]"   // collapsed width + 1rem gap
      
  return (
    <div className={`fixed top-4 z-50 ${leftPosition} transition-[left] duration-200 ease-linear`}>
      <SidebarTrigger className="-ml-1 shadow-lg rounded-full bg-background/80 backdrop-blur border border-border p-2" />
    </div>
  )
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <PortfolioSidebar />
      <SidebarInset>
        <SidebarTriggerFixed />
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Trigger moved to fixed position component above */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
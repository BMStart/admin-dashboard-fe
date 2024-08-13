import React from 'react';
import { Link } from "react-router-dom"
import {
  Bell,
  Package2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui"
import { DashboardHeader } from '../features/dashboard';
import { Nav } from '@/components/shader';
import { NavLinks } from '../shader/nav-list';

type DashboardTemplatesProps = {
  title?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navLinks: NavLinks[];
};

const DashboardTemplates: React.FC<DashboardTemplatesProps> = (props) => {

  const {
    title,
    children,
    header,
    defaultCollapsed = false,
    navLinks,
  } = props;

  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);


  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full items-stretch grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
      >
        <ResizablePanel
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`
          }}
          className={cn(
            isCollapsed &&
            "min-w-[50px] transition-all duration-300 ease-in-out "
          )}
        >

          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-16 items-center border-b px-4 lg:px-6">
              <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Acme Inc</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <Nav
              isCollapsed={isCollapsed}
              links={navLinks}
            />
          </div>

        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={30}>

          <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex flex-col">
              <header className="sticky top-0 flex h-16 items-center gap-2 border-b bg-background px-4 md:px-6">
                {header ? header : <DashboardHeader />}
              </header>

              <ScrollArea
                className={cn("w-full rounded-md")}
                style={{ height: "calc(95vh - 2rem)" }}
              >
                <main className="flex flex-1 flex-col gap-2 p-4 md:gap-4 md:p-4">
                  {title && (
                    <div className="flex items-center px-2">
                      <h1 className="text-xl font-semibold">{title}</h1>
                    </div>
                  )}
                  {children}
                </main>
              </ScrollArea>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

export default DashboardTemplates;
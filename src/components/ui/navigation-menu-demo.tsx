import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function NavigationMenuDemo() {
  const { pathname } = useLocation()
  // Match exact path or any nested subpath, e.g. "/erp" or "/erp/odoo"
  const isPathActive = (basePath: string, currentPath: string) =>
    currentPath === basePath || currentPath.startsWith(basePath + "/")

  const servicesPaths = ["/erp", "/development", "/cloud", "/ai", "/services"]
  const servicesActive = servicesPaths.some((p) => isPathActive(p, pathname))
  const services = [
    {
      title: "ERP Solutions",
      to: "/erp",
      description: "Enterprise Resource Planning solutions to streamline your business operations.",
    },
    {
      title: "Web & App Development",
      to: "/development",
      description: "Custom web and mobile applications built with modern technologies.",
    },
    {
      title: "Cloud & Infrastructure",
      to: "/cloud",
      description: "Scalable cloud solutions and infrastructure management services.",
    },
    {
      title: "AI & Automation",
      to: "/ai",
      description: "Advanced AI solutions and automation services for business growth.",
    },
    {
      title: "Service Configurator",
      to: "/service-configurator",
      description: "Interactive tool to configure and price your custom solution.",
    },
    {
      title: "Implementation Process",
      to: "/implementation-methodology",
      description: "Detailed methodology and proven approach for successful delivery.",
    },
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" aria-current={pathname === "/" ? "page" : undefined}>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/" && "bg-accent text-accent-foreground")}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(servicesActive && "bg-accent text-accent-foreground")}>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  to={service.to}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/industries" aria-current={isPathActive("/industries", pathname) ? "page" : undefined}>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              isPathActive("/industries", pathname) && "bg-accent text-accent-foreground"
            )}>
              Industries
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/case-studies" aria-current={isPathActive("/case-studies", pathname) ? "page" : undefined}>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              isPathActive("/case-studies", pathname) && "bg-accent text-accent-foreground"
            )}>
              Case Studies
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/consultation" aria-current={isPathActive("/consultation", pathname) ? "page" : undefined}>
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              isPathActive("/consultation", pathname) && "bg-accent text-accent-foreground"
            )}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

type ListItemProps = {
  className?: string
  title: string
  to: string
  children?: React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, to }, ref) => {
    const { pathname } = useLocation()
    const isPathActive = (basePath: string, currentPath: string) =>
      currentPath === basePath || currentPath.startsWith(basePath + "/")
    const active = typeof to === "string" && isPathActive(to, pathname)
     return (
       <li>
         <NavigationMenuLink asChild>
           <Link
             to={to}
             ref={ref}
             aria-current={active ? "page" : undefined}
             className={cn(
               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
               active && "bg-accent text-accent-foreground",
               className
             )}
           >
             <div className="text-sm font-medium leading-none">{title}</div>
             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
               {children}
             </p>
           </Link>
         </NavigationMenuLink>
       </li>
     )
   }
)

ListItem.displayName = "ListItem"

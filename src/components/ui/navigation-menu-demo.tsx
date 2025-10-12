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
  
  const erpSubpages = [
    {
      title: "ERP Overview",
      to: "/erp",
      description: "Complete ERP solutions and implementation services.",
    },
    {
      title: "Odoo Implementation",
      to: "/erp/odoo",
      description: "Professional Odoo ERP setup and customization.",
    },
    {
      title: "Data Migration",
      to: "/erp/migration",
      description: "Seamless migration from legacy systems.",
    },
    {
      title: "Custom Development",
      to: "/erp/customization",
      description: "Bespoke ERP solutions for unique requirements.",
    },
  ]

  const developmentSubpages = [
    {
      title: "Development Overview",
      to: "/development",
      description: "Custom software development services.",
    },
    {
      title: "Web Development",
      to: "/development/web",
      description: "Modern, responsive web applications.",
    },
    {
      title: "Mobile Development",
      to: "/development/mobile",
      description: "Native and cross-platform mobile apps.",
    },
    {
      title: "Enterprise Applications",
      to: "/development/enterprise",
      description: "Scalable enterprise software solutions.",
    },
    {
      title: "E-commerce Solutions",
      to: "/development/ecommerce",
      description: "Complete e-commerce platforms and integrations.",
    },
  ]

  const cloudSubpages = [
    {
      title: "Cloud Overview",
      to: "/cloud",
      description: "Cloud infrastructure and migration services.",
    },
    {
      title: "Infrastructure Services",
      to: "/cloud/infrastructure",
      description: "Infrastructure as a Service and management.",
    },
    {
      title: "Cloud Migration",
      to: "/cloud/migration",
      description: "Seamless cloud migration strategies.",
    },
    {
      title: "DevOps & CI/CD",
      to: "/cloud/devops",
      description: "DevOps implementation and automation.",
    },
    {
      title: "Cloud Security",
      to: "/cloud/security",
      description: "Comprehensive cloud security solutions.",
    },
  ]

  const aiSubpages = [
    {
      title: "AI Overview",
      to: "/ai",
      description: "Artificial intelligence and automation solutions.",
    },
    {
      title: "Machine Learning",
      to: "/ai/machine-learning",
      description: "Custom ML models and implementations.",
    },
    {
      title: "Business Automation",
      to: "/ai/automation",
      description: "Intelligent process automation solutions.",
    },
    {
      title: "Chatbot Development",
      to: "/ai/chatbots",
      description: "AI-powered chatbots and virtual assistants.",
    },
    {
      title: "AI Analytics",
      to: "/ai/analytics",
      description: "Advanced analytics and insights platforms.",
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
            <div className="grid w-[600px] gap-4 p-4 lg:w-[800px] lg:grid-cols-4">
              <div>
                <h4 className="mb-3 text-sm font-medium leading-none text-accent">ERP Solutions</h4>
                <ul className="space-y-3">
                  {erpSubpages.map((item) => (
                    <ListItem key={item.title} title={item.title} to={item.to}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium leading-none text-accent">Development</h4>
                <ul className="space-y-3">
                  {developmentSubpages.slice(0, 4).map((item) => (
                    <ListItem key={item.title} title={item.title} to={item.to}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium leading-none text-accent">Cloud Solutions</h4>
                <ul className="space-y-3">
                  {cloudSubpages.slice(0, 4).map((item) => (
                    <ListItem key={item.title} title={item.title} to={item.to}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium leading-none text-accent">AI & Automation</h4>
                <ul className="space-y-3">
                  {aiSubpages.slice(0, 4).map((item) => (
                    <ListItem key={item.title} title={item.title} to={item.to}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
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

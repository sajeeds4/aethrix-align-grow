import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Monitor, 
  Server, 
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

interface ArchitectureComponent {
  id: string;
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'integration' | 'security' | 'infrastructure';
  description: string;
  technologies: string[];
  connections: string[];
  benefits: string[];
  icon: React.ReactNode;
}

export function InteractiveArchitectureDiagram() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'logical' | 'physical' | 'data'>('logical');

  const components: ArchitectureComponent[] = [
    {
      id: 'frontend',
      name: 'Frontend Layer',
      type: 'frontend',
      description: 'Modern, responsive web applications built with React/Angular/Vue',
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'PWA'],
      connections: ['api-gateway', 'cdn'],
      benefits: ['Mobile-first design', 'Real-time updates', 'Offline capabilities', 'Accessibility compliance'],
      icon: <Monitor className="w-8 h-8" />
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      type: 'backend',
      description: 'Centralized API management with routing, authentication, and rate limiting',
      technologies: ['Kong', 'AWS API Gateway', 'OAuth 2.0', 'JWT'],
      connections: ['microservices', 'security', 'monitoring'],
      benefits: ['Unified API access', 'Security enforcement', 'Traffic management', 'Analytics'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 'microservices',
      name: 'Microservices',
      type: 'backend',
      description: 'Scalable, independent services for business logic and operations',
      technologies: ['Node.js', 'Python', 'Docker', 'Kubernetes'],
      connections: ['database', 'message-queue', 'cache'],
      benefits: ['Independent scaling', 'Technology flexibility', 'Fault isolation', 'Team autonomy'],
      icon: <Server className="w-8 h-8" />
    },
    {
      id: 'database',
      name: 'Database Layer',
      type: 'database',
      description: 'Multi-database architecture with SQL and NoSQL solutions',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      connections: ['backup', 'analytics'],
      benefits: ['Data consistency', 'High availability', 'Performance optimization', 'Backup & recovery'],
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 'security',
      name: 'Security Layer',
      type: 'security',
      description: 'Comprehensive security framework with encryption and monitoring',
      technologies: ['WAF', 'SSL/TLS', 'IAM', 'SIEM'],
      connections: ['monitoring', 'audit'],
      benefits: ['Data protection', 'Compliance adherence', 'Threat detection', 'Access control'],
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'cloud-infra',
      name: 'Cloud Infrastructure',
      type: 'infrastructure',
      description: 'Scalable cloud infrastructure with auto-scaling and load balancing',
      technologies: ['AWS/Azure/GCP', 'Terraform', 'Auto Scaling', 'Load Balancers'],
      connections: ['monitoring', 'backup'],
      benefits: ['Cost optimization', 'Global availability', 'Disaster recovery', 'Compliance'],
      icon: <Cloud className="w-8 h-8" />
    }
  ];

  const architectureViews = {
    logical: {
      title: 'Logical Architecture',
      description: 'High-level system components and their relationships',
      layout: 'grid-cols-3 grid-rows-3'
    },
    physical: {
      title: 'Physical Architecture', 
      description: 'Infrastructure deployment and network topology',
      layout: 'grid-cols-2 grid-rows-4'
    },
    data: {
      title: 'Data Architecture',
      description: 'Data flow and storage architecture',
      layout: 'grid-cols-4 grid-rows-2'
    }
  };

  const getComponentPosition = (componentId: string, view: string) => {
    const positions: { [key: string]: { [key: string]: string } } = {
      logical: {
        'frontend': 'col-start-2 row-start-1',
        'api-gateway': 'col-start-2 row-start-2',
        'microservices': 'col-start-1 row-start-3 col-span-3',
        'database': 'col-start-1 row-start-4',
        'security': 'col-start-3 row-start-2',
        'cloud-infra': 'col-start-2 row-start-4'
      },
      physical: {
        'frontend': 'col-start-1 row-start-1',
        'api-gateway': 'col-start-2 row-start-1',
        'microservices': 'col-start-1 row-start-2 col-span-2',
        'database': 'col-start-1 row-start-3',
        'security': 'col-start-2 row-start-3',
        'cloud-infra': 'col-start-1 row-start-4 col-span-2'
      },
      data: {
        'frontend': 'col-start-1 row-start-1',
        'api-gateway': 'col-start-2 row-start-1',
        'microservices': 'col-start-3 row-start-1',
        'database': 'col-start-1 row-start-2 col-span-2',
        'security': 'col-start-4 row-start-1 row-span-2',
        'cloud-infra': 'col-start-3 row-start-2 col-span-2'
      }
    };
    
    return positions[view]?.[componentId] || '';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      frontend: 'bg-blue-100 border-blue-300 text-blue-700',
      backend: 'bg-green-100 border-green-300 text-green-700',
      database: 'bg-purple-100 border-purple-300 text-purple-700',
      integration: 'bg-orange-100 border-orange-300 text-orange-700',
      security: 'bg-red-100 border-red-300 text-red-700',
      infrastructure: 'bg-gray-100 border-gray-300 text-gray-700'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 border-gray-300 text-gray-700';
  };

  const isConnected = (componentId: string, targetId: string) => {
    const component = components.find(c => c.id === componentId);
    return component?.connections.includes(targetId) || false;
  };

  return (
    <div className="w-full space-y-6">
      {/* Architecture View Selector */}
      <Tabs value={activeView} onValueChange={(value) => setActiveView(value as 'logical' | 'physical' | 'data')}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="logical">Logical View</TabsTrigger>
          <TabsTrigger value="physical">Physical View</TabsTrigger>
          <TabsTrigger value="data">Data View</TabsTrigger>
        </TabsList>

        <div className="mt-6 text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">{architectureViews[activeView].title}</h3>
          <p className="text-gray-600">{architectureViews[activeView].description}</p>
        </div>

        <TabsContent value={activeView} className="space-y-6">
          {/* Interactive Diagram */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 min-h-[600px]">
            <div className={`grid gap-6 h-full ${architectureViews[activeView].layout}`}>
              {components.map((component) => (
                <div
                  key={component.id}
                  className={`
                    relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform
                    ${getComponentPosition(component.id, activeView)}
                    ${getTypeColor(component.type)}
                    ${selectedComponent === component.id ? 'scale-105 shadow-xl z-10' : ''}
                    ${hoveredComponent === component.id ? 'scale-102 shadow-lg' : ''}
                    ${selectedComponent && selectedComponent !== component.id && !isConnected(selectedComponent, component.id) && !isConnected(component.id, selectedComponent) ? 'opacity-40' : ''}
                  `}
                  onClick={() => setSelectedComponent(selectedComponent === component.id ? null : component.id)}
                  onMouseEnter={() => setHoveredComponent(component.id)}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {component.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{component.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {component.type}
                    </Badge>
                  </div>
                  
                  {/* Connection lines - simplified representation */}
                  {selectedComponent === component.id && component.connections.map((connectionId) => {
                    const connectedComponent = components.find(c => c.id === connectionId);
                    if (connectedComponent) {
                      return (
                        <div key={connectionId} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-blue-500 animate-pulse" />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h5 className="font-semibold mb-2 text-sm">Component Types</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['frontend', 'backend', 'database', 'security', 'infrastructure'].map(type => (
                  <div key={type} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded border ${getTypeColor(type)}`}></div>
                    <span className="capitalize">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Component Details */}
          {selectedComponent && (
            <Card className="shadow-xl border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {components.find(c => c.id === selectedComponent)?.icon}
                    <div>
                      <CardTitle>{components.find(c => c.id === selectedComponent)?.name}</CardTitle>
                      <CardDescription>
                        {components.find(c => c.id === selectedComponent)?.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedComponent(null)}
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {components.find(c => c.id === selectedComponent)?.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Connections
                    </h4>
                    <div className="space-y-1">
                      {components.find(c => c.id === selectedComponent)?.connections.map((connectionId, index) => {
                        const connectedComponent = components.find(c => c.id === connectionId);
                        return (
                          <div key={index} className="text-sm text-gray-600">
                            {connectedComponent?.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {components.find(c => c.id === selectedComponent)?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          {!selectedComponent && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-4">
                <div className="flex items-center gap-3 text-blue-700">
                  <Info className="w-5 h-5" />
                  <span className="text-sm">
                    Click on any component to view detailed information, technologies, and connections. 
                    Switch between different architectural views to explore various perspectives.
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

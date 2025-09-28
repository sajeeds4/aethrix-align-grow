import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Bell,
  Clock,
  User,
  Mail,
  Settings,
  Activity,
  Database,
  Shield,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface SAPNotification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  category: 'system' | 'user' | 'security' | 'data' | 'communication';
  priority: 'low' | 'medium' | 'high' | 'critical';
  actions?: Array<{
    label: string;
    action: () => void;
    variant?: 'default' | 'outline' | 'destructive';
  }>;
  persistent?: boolean;
  autoClose?: number; // seconds
}

interface SAPNotificationSystemProps {
  notifications: SAPNotification[];
  onNotificationRead: (id: string) => void;
  onNotificationDismiss: (id: string) => void;
  onMarkAllRead: () => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const NotificationIcon = ({ type, category }: { type: SAPNotification['type'], category: SAPNotification['category'] }) => {
  const getIcon = () => {
    switch (type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      case 'system': 
        switch (category) {
          case 'security': return Shield;
          case 'data': return Database;
          case 'communication': return Mail;
          case 'user': return User;
          default: return Settings;
        }
      default: return Info;
    }
  };

  const Icon = getIcon();
  return <Icon className="w-5 h-5 flex-shrink-0" />;
};

const getNotificationColors = (type: SAPNotification['type'], priority: SAPNotification['priority']) => {
  const baseColors = {
    info: 'border-blue-200 bg-blue-50 text-blue-800',
    success: 'border-green-200 bg-green-50 text-green-800', 
    warning: 'border-orange-200 bg-orange-50 text-orange-800',
    error: 'border-red-200 bg-red-50 text-red-800',
    system: 'border-purple-200 bg-purple-50 text-purple-800'
  };

  const priorityModifiers = {
    critical: 'ring-2 ring-red-500 ring-opacity-50',
    high: 'ring-1 ring-orange-500 ring-opacity-30',
    medium: '',
    low: 'opacity-90'
  };

  return `${baseColors[type]} ${priorityModifiers[priority]}`;
};

const getPriorityBadge = (priority: SAPNotification['priority']) => {
  const config = {
    critical: { label: 'CRITICAL', className: 'bg-red-600 text-white' },
    high: { label: 'HIGH', className: 'bg-orange-600 text-white' },
    medium: { label: 'MEDIUM', className: 'bg-blue-600 text-white' },
    low: { label: 'LOW', className: 'bg-gray-600 text-white' }
  };

  if (priority === 'low') return null;

  const { label, className } = config[priority];
  return (
    <Badge className={cn("text-xs font-bold px-2 py-1", className)}>
      {label}
    </Badge>
  );
};

export const SAPNotificationSystem = ({
  notifications,
  onNotificationRead,
  onNotificationDismiss,
  onMarkAllRead,
  position = 'top-right'
}: SAPNotificationSystemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Auto-close notifications
  useEffect(() => {
    notifications.forEach(notification => {
      if (notification.autoClose && !notification.persistent) {
        const timer = setTimeout(() => {
          onNotificationDismiss(notification.id);
        }, notification.autoClose * 1000);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, onNotificationDismiss]);

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className={cn("fixed z-50 w-96", positionClasses[position])}>
      {/* Notification Bell/Toggle */}
      <div className="mb-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "relative bg-white shadow-lg border",
            unreadCount > 0 && "border-blue-500"
          )}
        >
          <Bell className="w-4 h-4 mr-2" />
          Notifications
          {unreadCount > 0 && (
            <Badge className="ml-2 bg-red-500 text-white text-xs px-2 py-1">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Notifications Panel */}
      {isExpanded && (
        <Card className="max-h-96 overflow-hidden shadow-2xl border-t-4 border-t-blue-600">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                <h3 className="font-semibold">System Notifications</h3>
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onMarkAllRead}
                    className="text-white hover:bg-white/20 text-xs"
                  >
                    Mark all read
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">No notifications</p>
                <p className="text-xs text-gray-400 mt-1">You're all caught up!</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "p-4 hover:bg-gray-50 cursor-pointer transition-colors",
                      !notification.read && "bg-blue-50/30 border-l-4 border-l-blue-500"
                    )}
                    onClick={() => onNotificationRead(notification.id)}
                  >
                    <div className="flex gap-3">
                      <div className={cn(
                        "mt-1 p-1 rounded-full",
                        getNotificationColors(notification.type, notification.priority).split(' ')[1]
                      )}>
                        <NotificationIcon type={notification.type} category={notification.category} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-sm font-medium text-gray-900 truncate">
                                {notification.title}
                              </h4>
                              {getPriorityBadge(notification.priority)}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                              {notification.message}
                            </p>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNotificationDismiss(notification.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {formatTime(notification.timestamp)}
                          </div>
                          
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>

                        {/* Action buttons */}
                        {notification.actions && notification.actions.length > 0 && (
                          <div className="flex gap-2 mt-3">
                            {notification.actions.map((action, index) => (
                              <Button
                                key={index}
                                variant={action.variant || 'outline'}
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  action.action();
                                }}
                                className="text-xs h-7"
                              >
                                {action.label}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Toast-style notifications for immediate alerts */}
      <div className="fixed top-4 right-4 z-60 space-y-2">
        {notifications
          .filter(n => n.priority === 'critical' && !n.read)
          .slice(0, 3)
          .map((notification) => (
            <Card
              key={`toast-${notification.id}`}
              className={cn(
                "w-80 shadow-2xl animate-in slide-in-from-right-full",
                getNotificationColors(notification.type, notification.priority)
              )}
            >
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="mt-0.5">
                    <NotificationIcon type={notification.type} category={notification.category} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          {notification.title}
                        </h4>
                        <p className="text-sm opacity-90">
                          {notification.message}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onNotificationDismiss(notification.id)}
                        className="opacity-70 hover:opacity-100 p-1 h-auto"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {notification.actions && (
                      <div className="flex gap-2 mt-3">
                        {notification.actions.slice(0, 2).map((action, index) => (
                          <Button
                            key={index}
                            variant={action.variant || 'outline'}
                            size="sm"
                            onClick={action.action}
                            className="text-xs h-6 px-2"
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

// Hook for managing notifications
export const useSAPNotifications = () => {
  const [notifications, setNotifications] = useState<SAPNotification[]>([]);

  const addNotification = (notification: Omit<SAPNotification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: SAPNotification = {
      ...notification,
      id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return {
    notifications,
    addNotification,
    markAsRead,
    dismissNotification,
    markAllAsRead,
    clearAll
  };
};

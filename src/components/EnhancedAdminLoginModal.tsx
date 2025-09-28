import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Shield, Eye, EyeOff, AlertTriangle, Clock, Lock, CheckCircle } from "lucide-react";

interface EnhancedAdminLoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: (password: string) => { success: boolean; message: string };
  isLocked: boolean;
  loginAttempts: number;
  maxAttempts: number;
  formatLockoutTime: () => string;
}

export const EnhancedAdminLoginModal = ({ 
  open, 
  onOpenChange, 
  onLogin,
  isLocked,
  loginAttempts,
  maxAttempts,
  formatLockoutTime
}: EnhancedAdminLoginModalProps) => {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState("");

  // Update lockout timer display
  useEffect(() => {
    if (isLocked) {
      const interval = setInterval(() => {
        setLockoutTimer(formatLockoutTime());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLocked, formatLockoutTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || isLocked) return;

    setIsSubmitting(true);
    
    // Add slight delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const result = onLogin(password);
    
    if (result.success) {
      toast({
        title: "Access Granted",
        description: "Welcome to the admin dashboard!",
        className: "border-green-500",
      });
      setPassword("");
    } else {
      toast({
        title: "Access Denied",
        description: result.message,
        variant: "destructive",
      });
      setPassword("");
    }
    
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setPassword("");
    onOpenChange(false);
  };

  const getRemainingAttempts = () => maxAttempts - loginAttempts;
  const getAttemptsColor = () => {
    const remaining = getRemainingAttempts();
    if (remaining <= 1) return "text-red-600";
    if (remaining <= 2) return "text-orange-600";
    return "text-yellow-600";
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            {isLocked ? (
              <Lock className="h-8 w-8 text-red-600" />
            ) : (
              <Shield className="h-8 w-8 text-blue-600" />
            )}
          </div>
          <DialogTitle className="text-xl font-semibold">
            {isLocked ? "Account Locked" : "Admin Authentication"}
          </DialogTitle>
          <DialogDescription>
            {isLocked 
              ? "Too many failed attempts. Please wait before trying again."
              : "Enter your admin password to access the dashboard"
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {isLocked ? (
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <div className="font-medium">Account temporarily locked</div>
                <div className="text-sm mt-1">
                  Time remaining: <span className="font-mono font-bold">{lockoutTimer}</span>
                </div>
              </AlertDescription>
            </Alert>
          ) : (
            <>
              {loginAttempts > 0 && (
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <span className={`font-medium ${getAttemptsColor()}`}>
                          {getRemainingAttempts()} attempts remaining
                        </span>
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {loginAttempts}/{maxAttempts}
                      </Badge>
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Admin Password</Label>
                  <div className="relative">
                    <Input
                      id="admin-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="pr-10"
                      autoComplete="off"
                      disabled={isSubmitting}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isSubmitting}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={!password.trim() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-white" />
                        Verifying...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Access Dashboard
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}

          <div className="text-center">
            <div className="text-xs text-gray-500">
              Use keyboard shortcut: <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+Alt+Shift+A</kbd>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

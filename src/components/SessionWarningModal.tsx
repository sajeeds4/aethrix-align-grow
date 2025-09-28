import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Clock, AlertTriangle, RefreshCw } from "lucide-react";

interface SessionWarningModalProps {
  open: boolean;
  onExtendSession: () => void;
  onLogout: () => void;
  formatTimeRemaining: () => string;
}

export const SessionWarningModal = ({ 
  open, 
  onExtendSession, 
  onLogout, 
  formatTimeRemaining 
}: SessionWarningModalProps) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        setTimeLeft(formatTimeRemaining());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [open, formatTimeRemaining]);

  const handleExtendSession = () => {
    onExtendSession();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Dialog open={open} onOpenChange={() => {}} >
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
          <DialogTitle className="text-xl font-semibold text-orange-900">
            Session Expiring Soon
          </DialogTitle>
          <DialogDescription>
            Your admin session will expire automatically due to inactivity.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <div className="flex items-center justify-between">
                <span className="text-sm">Time remaining:</span>
                <span className="font-mono font-bold text-lg text-orange-900">
                  {timeLeft}
                </span>
              </div>
            </AlertDescription>
          </Alert>

          <div className="text-center text-sm text-gray-600">
            <p>Click "Stay Logged In" to extend your session,</p>
            <p>or "Logout" to end your session now.</p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex-1"
            >
              Logout Now
            </Button>
            <Button
              onClick={handleExtendSession}
              className="flex-1 bg-orange-600 hover:bg-orange-700"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Stay Logged In
            </Button>
          </div>

          <div className="text-center">
            <div className="text-xs text-gray-500">
              Session will be extended for another 30 minutes
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

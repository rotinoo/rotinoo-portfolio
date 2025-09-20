import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
    useDocumentTitle('Page Not Found');
    return (
        <PageTransition>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <div className="space-y-4">
                <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
                <h2 className="text-3xl font-semibold">Page Not Found</h2>
                <p className="text-muted-foreground max-w-md">
                    Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>
            </div>
            
            <div className="flex gap-4">
                <Button asChild>
                    <Link to="/">
                        <Home className="w-4 h-4 mr-2" />
                        Go Home
                    </Link>
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                </Button>
            </div>
            </div>
        </PageTransition>
    );
}

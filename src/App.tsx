import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/use-theme';
import { useScrollToTop } from './hooks/use-scroll-to-top';
import Layout from './features/portofolio/Layout';
import { Skeleton } from './components/ui/skeleton';

// Lazy load components for better performance
const Home = lazy(() => import('./features/portofolio/Home'));
const About = lazy(() => import('./features/portofolio/About'));
const Projects = lazy(() => import('./features/portofolio/Projects'));
const Contact = lazy(() => import('./features/portofolio/Contact'));
const NotFound = lazy(() => import('./features/portofolio/NotFound'));

// Loading component
function PageSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="space-y-3">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
            </div>
        </div>
    );
}

function AppRoutes() {
    const location = useLocation();
    useScrollToTop();
    
    return (
        <Layout>
            <Suspense fallback={<PageSkeleton />}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </Suspense>
        </Layout>
    );
}

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="rotinoo-ui-theme">
            <div className="min-h-screen">
                <Router>
                    <AppRoutes />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDocumentTitle } from "@/hooks/use-document-title";
import PageTransition from "@/components/PageTransition";

export default function About() {
    useDocumentTitle('About Me');
    const [showRealImage, setShowRealImage] = useState(false);
    const skills = [
        // Programming Languages
        "JavaScript", "TypeScript", "Python", "C++", "Delphi (Lazarus)",
      
        // Web Development
        "React", "Node.js",
      
        // Databases
        "PostgreSQL", "MongoDB", "MySQL",
      
        // Cloud & DevOps
        "Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx",
      
        // Tools & Collaboration
        "Git", "Figma", "Networking", "System Deployment"
      ];
      

    return (
        <PageTransition>
            <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
                <p className="text-xl text-muted-foreground">
                    Passionate developer crafting digital experiences
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Profile Section */}
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img 
                            src={showRealImage ? "/profile.jpeg" : "/maskot_glasses.png"} 
                            alt="Profile" 
                            className="rounded-full w-90 h-90 object-cover transition-all duration-300" 
                        />
                    </div>
                    <Button
                        onClick={() => setShowRealImage(!showRealImage)}
                        size="sm"
                        className="mt-6"
                    >
                        {showRealImage ? "Back to a Bread" : "Transform"}
                    </Button>
                    <div className="mt-4 text-center">
                        <h2 className="text-2xl font-semibold mb-2">Robby Agustino</h2>
                        <p className="text-muted-foreground">Software Engineer & Cloud Engineer</p>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Hello! 👋</h3>
                        <p className="leading-relaxed mb-4">
                            My name is <span className="font-medium">Robby Agustino</span>, but I also go 
                            by <span className="font-medium">Rotinoo</span> online.  Roti in indonesian means bread 
                            thats why this website maskot is a bread.
                            I’m passionate about DevOps and cloud computing, with a diverse 
                            background that includes web development, networking, and application 
                            deployment. I enjoy building efficient workflows, automating processes, 
                            and making technology easier to use for both developers and users.
                        </p>
                        <p className="leading-relaxed mb-4">
                            I’m not particularly focused on frontend design, so to keep things 
                            simple and consistent I use <span className="font-medium">shadcn/ui</span> 
                            components a lot on this website. That way, I can put more energy 
                            into functionality, infrastructure, and problem-solving.
                        </p>
                        <p className="leading-relaxed">
                            When I’m not working on tech projects, I like exploring new hobbies, 
                            spending time with friends, and staying active through badminton 
                            and ping pong.  
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Button asChild>
                            <a href="/contact">Contact Me</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://github.com/rotinoo" target="_blank" rel="noopener noreferrer">View GitHub</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Experience</h3>
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">Software Engineer</h4>
                            <span className="text-sm text-muted-foreground">June 2025 - Present</span>
                        </div>
                        <p className="text-muted-foreground">PT. Digital Asia Utama</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                            <li>
                            Independently maintained and enhanced company web applications as the sole
                            developer, ensuring system reliability and scalability.
                            </li>
                            <li>
                            Upgraded a legacy Laravel project from version 7 to 12, modernizing the
                            codebase and improving long-term maintainability.
                            </li>
                            <li>
                            Optimized and tidied <span className="font-medium">softwareasli.com</span>,
                            improving website performance, security, and user experience.
                            </li>
                            <li>
                            Contributed to both backend (Laravel, PHP, MySQL) and frontend (React, TailwindCSS)
                            development across multiple projects.
                            </li>
                            <li>
                            Tech stack: Laravel, PHP, React, TailwindCSS, MySQL, Git, Nginx.
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">Cloud Computing Cohort</h4>
                            <span className="text-sm text-muted-foreground">Sept 2024 – Feb 2025</span>
                        </div>
                        <p className="text-muted-foreground">
                            Bangkit Academy led by Google, GoTo, and Traveloka
                        </p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                            <li>
                                Completed intensive 6-month program focusing on Cloud Computing, DevOps, and deployment best practices.
                            </li>
                            <li>
                                Gained hands-on experience with Google Cloud Platform (GCP) services including Compute Engine, Cloud Run, Cloud Storage, and IAM.
                            </li>
                            <li>
                                Developed <span className="font-medium">HairMatch</span>, a capstone project that recommends hairstyles using machine learning, deployed on Google Cloud with scalable infrastructure.
                            </li>
                            <li>
                                Implemented CI/CD pipelines and containerization with Docker and Kubernetes for seamless deployment and reliability.
                            </li>
                            <li>
                                Recognized as <span className="font-medium">Best Presenter</span> in my group, showcasing strong communication and presentation skills.
                            </li>
                            <li>
                                Completed learning paths: Google Cloud Computing Foundation, Cloud Engineer, and DevOps/SRE.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            </div>
        </PageTransition>
    );
}

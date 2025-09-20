import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";
import PageTransition from "@/components/PageTransition";

export default function Projects() {
    useDocumentTitle('Projects');
    const projects = [
        {
            title: "Hairmatch",
            description: "A web application that allows users to upload their hair photos and get matched with the best hair products for them.",
            image: "🪮",
            technologies: ["python", "flask", "streamlit", "google cloud"],
            github: "https://github.com/rotinoo/hairmatch",
            link: "https://www.linkedin.com/posts/robby-agustino_hairmatch-activity-7274059508602052608-9XzI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECVaVIBhr96JU4j1mxRxoaCzfErEH7AY48",
            featured: true
        },
        {
            title: "InstantSite",
            description: "A deployment tool that instantly serves any local web folder using Flask, designed for both local and cloud hosting.",
            image: "⚡",
            technologies: ["python", "flask", "ftp", "cloud"],
            github: "",
            live: "",
            featured: false
        },
        {
            title: "Website Deployment Tool",
            description: "An application that lets hosts deploy websites and share files through HTTP without clients needing extra software.",
            image: "🌐",
            technologies: ["python", "flask", "ftp", "nginx"],
            github: "",
            live: "",
            featured: true
        },
        {
            title: "Personal Resume Website",
            description: "A personal portfolio site showcasing skills, projects, and experience with responsive design.",
            image: "💼",
            technologies: ["react", "tailwindcss", "javascript"],
            github: "",
            live: "",
            featured: false
        },
        {
            title: "Network Configuration Project",
            description: "Configured and managed network devices including routers and switches, set up Ubuntu web servers, and implemented VLANs.",
            image: "🛠️",
            technologies: ["cisco", "ubuntu", "networking"],
            github: "",
            live: "",
            featured: false
        }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <PageTransition>
            <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
                <p className="text-xl text-muted-foreground">
                    A showcase of my recent work and side projects
                </p>
            </div>

            {/* Featured Projects */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-4xl">{project.image}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex gap-2">
                                {project.github && (
                                    <Button size="sm" variant="outline" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                )}
                                {project.link && (
                                    <Button size="sm" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Other Projects */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Other Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((project, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-2xl">{project.image}</div>
                                <h3 className="font-semibold">{project.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                    <Badge variant="outline" className="text-xs">
                                        +{project.technologies.length - 3}
                                    </Badge>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {project.github && (
                                    <Button size="sm" variant="ghost" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-3 h-3" />
                                        </a>
                                    </Button>
                                )}
                                {project.link && (
                                    <Button size="sm" variant="ghost" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </PageTransition>
    );
}

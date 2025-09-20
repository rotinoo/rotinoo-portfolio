import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/use-document-title";
import PageTransition from "@/components/PageTransition";

function Home() {
    useDocumentTitle('Home');
    const skills = [
            // Frontend
            "React", "TypeScript", "JavaScript", "TailwindCSS",
        
            // Backend
            "Node.js", "Laravel", "PHP", "Python",
        
            // Databases
            "PostgreSQL", "MySQL", "MongoDB",
        
            // Cloud & DevOps
            "Google Cloud Platform", "AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Git",
        
            // Extra
            "C++", "Delphi/Lazarus", "Figma"
        ];

    return (
        <PageTransition>
            <div className="space-y-8">
            {/* Hero Section */}
            <section className="text-center py-8">
                <div className="mb-8 flex justify-center">
                    <img src="/maskot.png" alt="Robby Agustino" className="rounded-full w-50 h-50 " />
                </div>

                <h1 className=" text-4xl font-bold tracking-tight mb-4">
                    Hi, I'm Robby Agustino also known as Rotinoo
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                    A software engineer and cloud engineer with a passion for building modern web applications and cloud infrastructure.
                </p>
                <div className="flex gap-4 justify-center mb-8">
                    <Button size="lg" asChild>
                        <Link to="/projects">View My Work</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link to="/contact">Get In Touch</Link>
                    </Button>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <a href="https://github.com/rotinoo" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <a href="https://linkedin.com/in/robby-agustino" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                        </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <a href="mailto:your.email@example.com">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                        </a>
                    </Button>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Technologies I Work With</h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </section>

            {/* About Preview */}
            <section className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Hi, I’m Robby Agustino, a Software Engineer and Cloud Computing enthusiast. I work with React, Laravel, 
                            Node.js, and Google Cloud, and have experience in Docker, Kubernetes, and CI/CD.
                        </p>
                        <Button asChild>
                            <Link to="/about">
                                Learn More About Me
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">10+</div>
                            <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="p-4 border rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600">1+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="p-4 border rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600">2</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                        <div className="p-4 border rounded-lg text-center">
                            <div className="text-2xl font-bold text-orange-600">10+</div>
                            <div className="text-sm text-muted-foreground">Technologies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            {/* <section className="py-8">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Project</h2>
                <div className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">🛒</div>
                        <div>
                            <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
                            <p className="text-muted-foreground">Full-stack e-commerce solution</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                        A complete e-commerce platform built with React, Node.js, and PostgreSQL. 
                        Features include user authentication, payment processing, and admin dashboard.
                    </p>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Project</Button>
                        <Button size="sm">Live Demo</Button>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="text-center py-12 bg-muted/50 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always excited to work on new projects and collaborate with amazing people. 
                    Let's discuss how I can help bring your ideas to life!
                </p>
                <Button size="lg" asChild>
                    <Link to="/contact">Start a Conversation</Link>
                </Button>
            </section>
            </div>
        </PageTransition>
    )
}

export default Home;
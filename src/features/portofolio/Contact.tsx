import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
    useDocumentTitle('Contact');
    return (
        <PageTransition>
            <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h1>
                <p className="text-xl text-muted-foreground">
                    Let's work together to bring your ideas to life
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Send me a message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject
                            </label>
                            <Input id="subject" placeholder="What's this about?" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full px-3 py-2 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Contact Information</h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-muted-foreground">robby.agn@gmail.com</p>
                            </div>
                        </div>

                        {/* <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-medium">Phone</h3>
                                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div> */}

                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-medium">Location</h3>
                                <p className="text-muted-foreground">Jakarta, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Follow me</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" size="sm" asChild>
                                <a href="https://github.com/rotinoo" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    GitHub
                                </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                                <a href="https://linkedin.com/in/robby-agustino" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-4 h-4 mr-2" />
                                    LinkedIn
                                </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                                <a href="https://instagram.com/robby.gn" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-4 h-4 mr-2" />
                                    Instagram
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                            🟢 Available for work
                        </h3>
                        <p className="text-sm text-green-700 dark:text-green-300">
                            I'm currently available only for freelance projects and not for full-time opportunities. 
                            Let's discuss how I can help bring your vision to life!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </PageTransition>
    );
}

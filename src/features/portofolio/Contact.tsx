import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Instagram, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import { contactApi, type ContactMessage } from "@/lib/api";

export default function Contact() {
    useDocumentTitle('Contact');
    
    // Form state
    const [formData, setFormData] = useState<ContactMessage>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    // UI state
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    // Form handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: [] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        setSubmitStatus('idle');

        try {
            await contactApi.submitMessage(formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error: any) {
            setSubmitStatus('error');
            if (error.status === 422 && error.errors) {
                setErrors(error.errors);
            }
            console.error('Form submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

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
                    
                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                            <CheckCircle className="w-5 h-5" />
                            <span>Message sent successfully! I'll get back to you soon.</span>
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {submitStatus === 'error' && Object.keys(errors).length === 0 && (
                        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                            <AlertCircle className="w-5 h-5" />
                            <span>Failed to send message. Please try again.</span>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your name"
                                    className={errors.name ? "border-red-500" : ""}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-600 mt-1">{errors.name[0]}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-600 mt-1">{errors.email[0]}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject
                            </label>
                            <Input 
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="What's this about?"
                                className={errors.subject ? "border-red-500" : ""}
                            />
                            {errors.subject && (
                                <p className="text-sm text-red-600 mt-1">{errors.subject[0]}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell me about your project..."
                                className={errors.message ? "border-red-500" : ""}
                            />
                            {errors.message && (
                                <p className="text-sm text-red-600 mt-1">{errors.message[0]}</p>
                            )}
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
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

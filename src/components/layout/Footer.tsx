import Link from "next/link";
import { Mountain, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/40 border-t">
            <div className="container py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="bg-primary p-1 rounded-lg">
                                <Mountain className="h-6 w-6 text-white" />
                            </div>
                            <span>Sales CRM</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Empowering businesses with modern solutions for growth and success.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Sales CRM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

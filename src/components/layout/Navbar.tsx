import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <div className="bg-primary p-1 rounded-lg">
                            <Mountain className="h-6 w-6 text-white" />
                        </div>
                        <span>Sales CRM</span>
                    </Link>
                </div>

                <nav className="hidden md:flex gap-6">
                    <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hidden sm:flex">
                        Sign In
                    </Button>
                    <Button size="sm">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}

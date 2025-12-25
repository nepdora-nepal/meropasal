import ImageWithFallback from "@/components/common/ImageWithFallback";
import Link from "next/link";
import images from "@/../images.json"

const AboutUs = () => {

    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Column - Flipped for About Us */}
                    <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="w-full max-w-lg lg:max-w-none rounded-xl shadow-2xl overflow-hidden aspect-video relative group">
                            <ImageWithFallback
                                id="about"
                                src={images.about}
                                fallbackSrc={images.about}
                                alt="About our company"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                            {/* Subtle glassmorphism overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-background/50 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="text-center lg:text-left order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
                            About Our Mission
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                            We are dedicated to revolutionizing the way businesses interact with their customers. Our journey began with a simple idea: to make advanced CRM tools accessible to everyone.
                        </p>
                        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                            With a team of passionate experts, we are constantly pushing the boundaries of what&apos;s possible, delivering solutions that drive real results.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;

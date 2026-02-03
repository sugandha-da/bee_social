import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, TrendingUp, Sparkles, Instagram, Calendar } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/50 to-white dark:from-zinc-950 dark:via-indigo-950/20 dark:to-zinc-950 overflow-hidden relative">

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-indigo-600" />
                        <span className="font-bold text-xl">BeeSocial</span>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Log in</Link>
                        </Button>
                        <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                            <Link href="/onboarding">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center relative z-10">

                {/* Floating Icons Background Layer */}
                <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none">
                    {/* Icon 1: Instagram (Top Left) */}
                    <div className="absolute top-20 left-10 lg:left-20 animate-float opacity-20 text-pink-500">
                        <Instagram size={48} />
                    </div>
                    {/* Icon 2: Heart (Top Right) */}
                    <div className="absolute top-32 right-10 lg:right-32 animate-float opacity-20 text-red-500" style={{ animationDelay: '1s' }}>
                        <Heart size={40} />
                    </div>
                    {/* Icon 3: Comment (Bottom Left) */}
                    <div className="absolute bottom-40 left-5 lg:left-40 animate-float opacity-20 text-blue-500" style={{ animationDelay: '2s' }}>
                        <MessageCircle size={56} />
                    </div>
                    {/* Icon 4: Growth (Bottom Right) */}
                    <div className="absolute bottom-20 right-8 lg:right-24 animate-float opacity-20 text-green-500" style={{ animationDelay: '0.5s' }}>
                        <TrendingUp size={52} />
                    </div>
                    {/* Icon 5: Calendar (Center Top) */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 animate-float opacity-10 text-purple-500" style={{ animationDelay: '1.5s' }}>
                        <Calendar size={64} />
                    </div>
                </div>

                {/* Hero Content */}
                <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        AI Agent for Indian SMBs
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                        Your Social Media Agent. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            You are not alone.
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                        Running a business is hard. Posting shouldn&apos;t be.
                        BeeSocial acts as your digital partner—creating, scheduling,
                        and managing your Instagram so you can focus on sales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20" asChild>
                            <Link href="/onboarding">Start for Free</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">
                            View Demo
                        </Button>
                    </div>
                </div>

                {/* Social Proof / Trust */}
                <div className="mt-24 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 w-full max-w-4xl opacity-80">
                    <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Trusted by entrepreneurs in</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
                        {/* Placeholders for logos (Text for MVP) */}
                        <span className="text-xl font-bold text-zinc-400">Fashion</span>
                        <span className="text-xl font-bold text-zinc-400">Food & Bev</span>
                        <span className="text-xl font-bold text-zinc-400">Handicrafts</span>
                        <span className="text-xl font-bold text-zinc-400">Home Decor</span>
                    </div>
                </div>
            </main>
        </div>
    );
}

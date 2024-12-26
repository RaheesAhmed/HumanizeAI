import Link from "next/link";
import {
  ArrowRight,
  Wand2,
  Sparkles,
  Shield,
  Zap,
  BarChart,
  Code,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-950/50 dark:to-slate-950" />
        <div className="container relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-900 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium">
                AI-Powered Content Enhancement
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl gradient-text">
              Transform Machine Text into Natural Human Content
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Enhance your content with AI-powered humanization, ensuring
              natural, engaging, and authentic communication that resonates with
              your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/dashboard"
                className="gradient-primary px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover-lift"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="/demo"
                className="px-8 py-3 rounded-lg font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 inline-flex items-center justify-center"
              >
                Try Demo
                <Wand2 className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group hover-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                <Wand2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Content Humanization
              </h3>
              <p className="text-muted-foreground">
                Transform machine-generated text into natural, human-like
                content that engages your audience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group hover-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Plagiarism Detection
              </h3>
              <p className="text-muted-foreground">
                Ensure content originality with advanced plagiarism detection
                and content verification.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group hover-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Processing
              </h3>
              <p className="text-muted-foreground">
                Process and enhance your content in real-time with our powerful
                AI engine.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group hover-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Analytics & Tracking
              </h3>
              <p className="text-muted-foreground">
                Monitor usage, track improvements, and gain insights with
                detailed analytics.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group hover-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">API Access</h3>
              <p className="text-muted-foreground">
                Integrate our powerful AI capabilities directly into your
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Ready to Humanize Your Content?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of content creators who trust HumanizeAI to enhance
              their content.
            </p>
            <Link
              href="/signup"
              className="gradient-primary px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover-lift"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

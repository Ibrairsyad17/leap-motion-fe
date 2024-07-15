import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PubSection() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-amber-400">
            Discover our publication
          </h2>
          <p className="text-muted-foreground md:text-xl">
            This project has a result a research paper. Explore our research and
            insights in our online journal.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-500 rounded-full hover:px-12 transition-all duration-300"
          >
            <Link href="/">Read Our Publication</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full bg-background py-4">
        <div className="mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button>
              <ArrowLeft />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button variant="ghost">Preview</Button>
              <Button>Continue</Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <div className="rounded-md border-2 border-border bg-card">
          {/* Toolbar */}
          <div className="border-b-2 border-border p-4">
            <div className="text-lg font-medium text-primary">ToolBar Box</div>
            <div className="mt-2 h-8 bg-muted rounded" />
          </div>

          {/* Title */}
          <div className="border-b-2 border-border p-4">
            <div className="text-lg font-medium text-primary">Title Box</div>
            <div className="mt-2 h-10 bg-muted rounded" />
          </div>

          {/* Subtitle */}
          <div className="border-b-2 border-border p-4">
            <div className="text-lg font-medium text-primary">Subtitle Box</div>
            <div className="mt-2 h-10 bg-muted rounded" />
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="text-lg font-medium text-primary">
              Body box......
            </div>
            <div className="mt-2 h-40 bg-muted rounded" />
          </div>
        </div>
      </main>
    </div>
  );
}

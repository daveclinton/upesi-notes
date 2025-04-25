import ModeToggle from "@/components/mode-toggle";
import MainEditor from "@/components/tip-tap-editor";
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
      <MainEditor />
    </div>
  );
}

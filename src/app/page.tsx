import LinkButton from "@/components/molecules/link-button/linkButton.molecule";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Button className="cursor-pointer">
      Jacob Murphy
     </Button>
     <LinkButton href="/about" active={false} text="About Me" />
    </div>
  );
}

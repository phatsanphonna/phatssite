import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="h-20 sticky top-0 bg-background shadow">
      <div className="flex justify-between items-center container mx-auto h-full px-4 md:px-0">
        <Link
          href="/"
          className="select-none text-2xl md:text-3xl font-bold bg-gradient-to-r from-wewak-600 to-wewak-400 inline-block text-transparent bg-clip-text"
        >
          Phatsanphon
        </Link>

        <ul className="flex gap-2 items-center">
          <li>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              className={cn(
                "flex gap-2 items-center",
                buttonVariants({
                  variant: "outline",
                })
              )}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

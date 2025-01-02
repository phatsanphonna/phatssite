import { buttonVariants } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { FC } from "react";

const socialMedia = [
  {
    Icon: SiGithub,
    url: "https://github.com/phatsanphonna",
  },
  {
    Icon: Mail,
    url: "mailto:phatsanphon2004@outlook.com",
  },
  {
    Icon: SiLinkedin,
    url: "https://www.linkedin.com/in/phatsanphon-nakaranurak-29ab20231/",
  },
];
const Header: FC = () => {
  return (
    <div className="flex flex-col justify-end gap-4 h-auto md:h-60">
      <div className="flex flex-col justify-center items-start gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-wewak-600 to-wewak-400 inline-block text-transparent bg-clip-text">
          I&apos;m Phatsanphon Nakaranurak
        </h1>
        <p className="text-base md:text-xl text-muted-foreground">
          Third-Year Information Technology Student with a Focus on Networking &
          Infrastructure at the School of Information Technology, KMITL.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <a
            className={buttonVariants()}
            href="/assets/resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>

        <ul className="flex gap-2">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a
                target="_blank"
                href={social.url}
                className={buttonVariants({ size: "icon", variant: "link" })}
              >
                <social.Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

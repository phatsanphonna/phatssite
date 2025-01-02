import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { FC } from "react";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  name: string;
  description: string;
  stacks: string[];
  links: { icon: string; url: string }[];
}

const ProjectCard: FC<Props> = ({ name, stacks, description, links }) => {
  const mappedLinks = (links || []).map((link) => ({
    // @ts-expect-error - dynamicIconImports is not typed
    Icon: dynamic(dynamicIconImports[link.icon]),
    url: link.url,
  }));
  return (
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight -mb-2">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          {stacks.map((stack, index) => (
            <Badge variant="outline" key={index}>
              {stack}
            </Badge>
          ))}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        {mappedLinks.map((link, index) => (
          <a
            href={link.url}
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
            key={index}
          >
            <link.Icon />
          </a>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

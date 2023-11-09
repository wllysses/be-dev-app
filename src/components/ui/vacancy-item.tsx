import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Badge } from "./badge";
import { Button, buttonVariants } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

import {
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

type VacancyItemProps = {
  companyLogo: string;
  companyName: string;
  vacancyName: string;
  isRemoteWork: boolean;
  vacancyCountry: string;
  publishedDate: string;
  vacancyJobUrl: string;
};

export function VacancyItem({
  companyLogo,
  companyName,
  vacancyName,
  isRemoteWork,
  vacancyCountry,
  publishedDate,
  vacancyJobUrl,
}: VacancyItemProps) {
  return (
    <Card className="relative">
      <Popover>
        <PopoverTrigger asChild className="absolute top-0 right-0">
          <Button size="icon" variant="ghost">
            <MoreVertical size={18} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex items-center justify-around gap-2 flex-wrap">
          <WhatsappShareButton url={vacancyJobUrl}>
            <WhatsappIcon round={true} size={25} />
          </WhatsappShareButton>
          <LinkedinShareButton url={vacancyJobUrl}>
            <LinkedinIcon round={true} size={25} />
          </LinkedinShareButton>
          <FacebookShareButton url={vacancyJobUrl}>
            <FacebookIcon round={true} size={25} />
          </FacebookShareButton>
          <TwitterShareButton url={vacancyJobUrl}>
            <TwitterIcon round={true} size={25} />
          </TwitterShareButton>
        </PopoverContent>
      </Popover>

      <CardHeader className="flex-row items-center gap-2">
        <Avatar>
          <AvatarFallback>{companyName[0]}</AvatarFallback>
          <AvatarImage src={companyLogo} alt="Company Logo" />
        </Avatar>
        <div>
          <CardTitle className="text-[15px]" title={companyName}>
            {companyName}
          </CardTitle>
          <CardDescription className="text-[10px]" title={vacancyName}>
            {vacancyName}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Badge>{isRemoteWork && "Remoto"}</Badge>
          {vacancyCountry && <Badge>{vacancyCountry}</Badge>}
        </div>
        <ul className="my-4 w-full">
          <li className="text-muted-foreground text-sm">
            Publicada em {new Date(publishedDate).toLocaleDateString("pt-BR")}
          </li>
        </ul>
        <Link
          href={vacancyJobUrl}
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "default",
            }),
            "w-full mt-2"
          )}
        >
          Quero aplicar
        </Link>
      </CardContent>
    </Card>
  );
}

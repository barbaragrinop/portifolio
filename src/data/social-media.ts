import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

type SocialMediaData = {
    title: string;
    href: string;
    icon: IconDefinition;
}


export const socialMediaData: SocialMediaData[] = [
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/barbara-hellen-2a0864161/",
        icon: faLinkedinIn
    },
    {
        title: "GitHub",
        href: "https://github.com/barbaragrinop",
        icon: faGithub
    },
    {
        title: "E-mail",
        href: "mailto:dev.barbarahellen@gmail.com",
        icon: faEnvelope
    }
];
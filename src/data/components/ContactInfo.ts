export interface InfoProps {
    description: string,
    purpose: string, 
    title: string
    mdiIconName: string
    href: string
}

export const ContactInfoData: InfoProps[] = [
    {
        description: "GitHub Profile",
        purpose: "github.com/felker12", 
        title: "Open GitHub Profile",
        mdiIconName: "mdi:github",
        href: "https://github.com/felker12"
    },
    {
        description: "LinkedIn Profile",
        purpose: "linkedin.com/in/anthonyfelker", 
        title: "Open LinkedIn Profile",
        mdiIconName: "mdi:linkedin",
        href: "https://www.linkedin.com/in/anthonyfelker/"
    },
    {
        description: "Base Region",
        purpose: "Terre Haute / Greater Indianapolis", 
        title: "Open map for Terre Haute Indiana",
        mdiIconName: "mdi:map-marker-outline",
        href: "https://www.google.com/maps/search/Terre+Haute+Indiana"
    }
];
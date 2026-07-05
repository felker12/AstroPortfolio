export interface NavLink {
    href: string;
    label: string;
    ariaLabel: string;
    children?: NavLink[];
}
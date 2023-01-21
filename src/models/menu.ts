import { IconNameType } from "../components/icon";

interface ISocial {
    iconKey: 'mail' | 'linkedin' | 'fb' | 'git',
    link: string,
    size?: number
}

export const NAVIGATIONS = [
    { name: 'EXPERIENCE', link: '/experience', icon: 'experience' as IconNameType },
    { name: 'CONTACT ME', link: '/contact', icon: 'contact' as IconNameType },
    { name: 'RESUME', link: '/resume', icon: 'resume' as IconNameType },
]

export const SOCIAL_CHANNELS = [
    { iconKey: 'mail', link: 'mailto:minhthanh3497@gmail.com' },
    { iconKey: 'linkedin', link: 'https://www.linkedin.com/in/pnminhthanh/' },
    { iconKey: 'fb', link: 'https://www.facebook.com/mthanh97/' },
    { iconKey: 'git', link: 'https://github.com/pnminhthanh/', size: 30 }
] as ISocial[];

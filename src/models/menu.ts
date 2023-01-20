interface ISocial {
    iconKey: 'mail' | 'linkedin' | 'fb' | 'git',
    link: string,
    size?: number
}

export const NAVIGATIONS = [
    { name: 'PORTFOLIO', link: '/portfolio' },
    { name: 'CONTACT ME', link: '/contact' },
    { name: 'MY CV', link: 'https://drive.google.com/file/d/1EfHUhBAr06WHcOocttreh44R6XRdjT9x/view?usp=sharing', isOuterLink: true },
]

export const SOCIAL_CHANNELS = [
    { iconKey: 'mail', link: 'mailto:minhthanh3497@gmail.com' },
    { iconKey: 'linkedin', link: 'https://www.linkedin.com/in/pnminhthanh/' },
    { iconKey: 'fb', link: 'https://www.facebook.com/mthanh97/' },
    { iconKey: 'git', link: 'https://github.com/pnminhthanh/', size: 30 }
] as ISocial[];

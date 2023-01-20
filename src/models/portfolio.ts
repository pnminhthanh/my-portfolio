export interface IProject {
    name: string,
    url?: string,
    desc?: string
}

export interface ITimeline {
    time: string,
    companyName: string,
    companyUrl?: string,
    projects?: IProject[],
    paragraphs?: string[]
}

export const TIMELINE = [
    {
        time: 'June 2020 - Now',
        companyName: 'Haravan',
        companyUrl: 'https://www.haravan.com/',
        projects: [
            {
                name: 'HaraSocial',
                url: 'https://harasocial.com/pages/features',
                desc: 'The platform supports your communication with your customer from many popular social media networks.'
            }
        ],
        paragraphs: [
            "Cooperate with team members to distribute value to the product. Work well with product team to release the final valued feature to end-user.",
            "I am able to work as a independent member when solving a problem and always try my best to do it."
        ]
    },
    {
        time: 'May 2019 - June 2020',
        companyName: 'S3Corp',
        companyUrl: 'https://www.s3corp.com.vn/',
        projects: [
            {
                name: 'Razer - Synapse 3',
                url: 'https://www.razer.com/synapse-3',
                desc: 'A desktop application supports user to modify their Razer gaming gears'
            },
            {
                name: 'THX Spatial',
                url: 'https://www.razer.com/p/RZ11-13000-0001',
                desc: 'A desktop application provide user the best realism sound experience via using Razer headphones.'
            },
            {
                name: 'Stream Companion App',
                url: 'https://www.razer.com/streamer-companion-app',
                desc: 'A desktop application supports user to customize effects of their Razer gears while streaming'
            }
        ],
        paragraphs: [
            "Support teammates in debugging and coding.",
            "Receiver task directly from customer and give the final results meet theirs requirements.",
            "Transfer from Sketch designs to React and handle logics with API"
        ]
    },
] as ITimeline[];


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
        time: 'August 2022 - Dec 2022',
        companyName: 'Decision Science Agency',
        companyUrl: 'https://www.decision-science.com/',
        projects: [
            {
                name: 'BRS',
                desc: "An internal portal for the police departments to help them manage bad domains in Singapore."
            }
        ],
        paragraphs: [
            "Set up code organizer and build own system component as designed.",
            "Cooperate closely with BE to integrate API into the UI."
        ]
    },
    {
        time: 'June 2020 - July 2022',
        companyName: 'Haravan',
        companyUrl: 'https://www.haravan.com/',
        projects: [
            {
                name: 'HaraSocial',
                url: 'https://harasocial.com/pages/features',
                desc: "The platform that supports communication with user's customers from many popular social media networks such as Facebook, Instagram, and Zalo."
            }
        ],
        paragraphs: [
            "Cooperate with team members to distribute value to the product. Work well with the product team to release the final valued feature to the end-user.",
            "I am able to work as an independent member when solving a problem and always try my best to do it."
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
                desc: 'A desktop application supports users to modify their Razer gaming gears.'
            },
            {
                name: 'THX Spatial',
                url: 'https://www.razer.com/p/RZ11-13000-0001',
                desc: 'A desktop application provides the user with the best realism sound experience via using Razer headphones.'
            },
            {
                name: 'Stream Companion App',
                url: 'https://www.razer.com/streamer-companion-app',
                desc: 'A desktop application supports streamers to customize the effects of their Razer gears while streaming.'
            }
        ],
        paragraphs: [
            "Support teammates in debugging and coding.",
            "Receiver tasks directly from the customer and give the final results meet their requirements.",
            "Transfer from Sketch designs to React and handle logic with API."
        ]
    },
] as ITimeline[];


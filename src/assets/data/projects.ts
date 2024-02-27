import {ProjectProps} from "../../components/Project.tsx";
import insupply from "../../../public/projects/insupply_project_cover.png"
import strive from "../../../public/projects/strive_project_cover.jpeg"
import coronapp from "../../../public/projects/coronapp_project_cover.jpg"
import quillo from "../../../public/projects/quillo_project_cover.jpg"


export const projects: ProjectProps[] = [
    {
        title: "Strive (YC S21)",
        description: "Founder & CTO | An online coding school for kids that empowered more than 1000 students to find a passion for coding; we raised $1.3M USD and built a 20+ person team to pioneer a world-first approach to teaching math through code.",
        image: strive,
        primaryCTAText: "Visit Website",
        primaryCTAUrl: "https://www.strivemath.com/",
        secondaryCTAText: "Read Tech Crunch Article",
        secondaryCTAUrl: "https://techcrunch.com/2023/02/20/strive/"
    },
    {
        title: "Insupply",
        description: "Founder & CEO/CTO | A marketplace for trusted buyers and supplies of PPE equipment during COVID-19. We worked with the South African presidency and listed 50M+ items of PPE, and received requests for more than 100M items of PPE ($1Bn in value) in < 6 months.",
        image: insupply,
        primaryCTAText: "Watch TV Interview",
        primaryCTAUrl: "https://www.linkedin.com/posts/tamir-shklaz_youth-youthday-ppe-activity-6678678322618085377-vTjT/?utm_source=share&utm_medium=member_desktop",
        secondaryCTAText: "Read Article",
        secondaryCTAUrl: "https://ventureburn.com/2020/06/sa-entrepreneur-looks-to-angels-to-fund-online-ppe-marketplace-insupply/"
    },
    {
        title: "Coronapp",
        description: "A centralised repository for relevant and accurate information regarding the COVID-19 virus in South Africa: during the pandemic's peak, more than 1M South Africans used the platform daily. ",
        image: coronapp,
        secondaryCTAText: "Listen to Radio Interview",
        secondaryCTAUrl: "https://omny.fm/shows/afternoons-with-pippa-hudson/uct-alumni-build-coronapp?t=1m21s",
        primaryCTAText: "Visit Website",
        primaryCTAUrl: "https://www.coronapp.co.za/"
    },
    {
        title: "Quillo",
        description: "South Africa's largest second-hand textbook marketplace. While pursuing a full-time degree in electrical and computer engineering, I scaled the platform to more than 32,000 students across 24 universities in South Africa. Quillo won the reward of 'Best Student Startup' in South Africa in 2019 (Awarded by Global Startup Awards).",
        image: quillo,
        primaryCTAText: "Watch TV Interview",
        primaryCTAUrl: "https://youtu.be/dsvzHMeLjJM?si=SrWFpdhQ0yXxDpKv",
        secondaryCTAText: "Watch Pitch",
        secondaryCTAUrl: "https://youtu.be/Q57S9ZY2ok0?si=DAaq8KoEU69jn82I/"
    },

]
import { AdvantageCard } from "../../components/advantageCard"
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export const Advantages = () => {
    return <section>
        <AdvantageCard color="red" text="Learning" imgsrc={reactLogo} />
        <AdvantageCard color="blue" text="Philosofi" imgsrc={viteLogo} />
        <AdvantageCard color="green" text="Practise" imgsrc={reactLogo} />
        <AdvantageCard color="blue" text="Games" imgsrc={viteLogo} />
    </section>
}
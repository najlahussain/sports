import { Hero, Video, Facilities, AboutHome } from "./components/index";
import Events from '@/app/events/page'

export default function Home() {
  return (
    <div className="bg-black relative">
      <Hero />
      <div className="mx-5">
        <AboutHome />
        <Video />
        <Facilities />
        <Events />
      </div>
    </div>
    )
}

import { Hero, Video, Facilities, AboutHome } from "./components/index";
import About from '@/app/about/page'
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

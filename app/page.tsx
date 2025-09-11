import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import WeekContent from "./components/WeekContent"
import AboutMe from "./components/AboutMe"

export default function Home() {
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar weeks={weeks} showAboutMe={true} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 md:py-16 lg:py-24">
          <AboutMe />
          {weeks.map((week) => (
            <WeekContent key={week} week={week} />
          ))}
        </main>
      </div>
    </div>
  )
}


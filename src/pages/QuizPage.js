import Quiz1 from '../components/Quiz1'
import Navbar from '../components/Navbar'
import { landingPageNavItems } from '../data/mockData'
const QuizPage = () => {
  return (
<div className="min-h-screen bg-[#F5F0EE] p-2 md:p-8">
      <Navbar navItems={landingPageNavItems} />
      <Quiz1 />
    </div>
  )
}

export default QuizPage
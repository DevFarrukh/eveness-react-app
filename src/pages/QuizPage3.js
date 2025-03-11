import Quiz3 from '../components/Quiz3'
import Navbar from '../components/Navbar'
import { landingPageNavItems } from '../data/mockData'
const QuizPage = () => {
  return (
<div className="min-h-screen bg-[#EDE3DD] p-2 md:p-8">
      <Navbar navItems={landingPageNavItems} />
      <Quiz3 />
    </div>
  )
}

export default QuizPage
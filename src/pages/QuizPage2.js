import Navbar from '../components/Navbar'
import { landingPageNavItems } from '../data/mockData'
import Quiz2 from '../components/Quiz2'
const QuizPage = () => {
  return (
<div className="min-h-screen bg-[#EDE3DD] p-2 md:p-8">
      <Navbar navItems={landingPageNavItems} />
      <Quiz2 />
    </div>
  )
}

export default QuizPage
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import { useState } from "react"


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return(
    <>
        <Header />
        <FeedbackList feedback={feedback} />
    </> 
    )
}
export default App
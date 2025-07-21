import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Sidebar from '../components/Sidebar'
import SurveyCanvas from '../components/SurveyCanvas'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [questions, setQuestions] = useState<string[]>([])

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (over && over.id === 'canvas') {
      setQuestions((q) => [...q, active.id as string])
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.container}>
        <Sidebar />
        <SurveyCanvas id="canvas" questions={questions} />
      </div>
    </DndContext>
  )
}

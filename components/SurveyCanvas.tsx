import { useDroppable } from '@dnd-kit/core'
import QuestionBlock from './QuestionBlock'
import styles from '../styles/Home.module.css'

interface Props {
  id: string
  questions: string[]
}

export default function SurveyCanvas({ id, questions }: Props) {
  const { setNodeRef } = useDroppable({ id })
  return (
    <div ref={setNodeRef} className={styles.canvas}>
      {questions.map((type, idx) => (
        <QuestionBlock key={idx} type={type} />
      ))}
    </div>
  )
}

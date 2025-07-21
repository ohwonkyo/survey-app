import { useDraggable } from '@dnd-kit/core'
import styles from '../styles/Home.module.css'

const QuestionItem = ({ id, label }: { id: string; label: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
  const style = transform ? { transform: `translate(${transform.x}px, ${transform.y}px)` } : undefined
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={styles.question}>
      {label}
    </div>
  )
}

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <QuestionItem id="radio" label="객관식" />
      <QuestionItem id="text" label="주관식" />
      <QuestionItem id="checkbox" label="체크박스" />
    </div>
  )
}

import styles from '../styles/Home.module.css'

interface Props {
  type: string
}

export default function QuestionBlock({ type }: Props) {
  return (
    <div className={styles.question}>
      {type === 'radio' && <div>객관식 문항</div>}
      {type === 'text' && <div>주관식 문항</div>}
      {type === 'checkbox' && <div>체크박스 문항</div>}
    </div>
  )
}

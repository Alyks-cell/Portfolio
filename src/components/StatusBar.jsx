import { useEffect, useState } from 'react'
import { HiOutlineClock } from 'react-icons/hi2'
import { VscCheck, VscSourceControl, VscWarning } from 'react-icons/vsc'

// what I'm up to right now, typed out one after another
const updates = [
  'building Study Buddy',
  'designing screens in Figma',
  'learning more React',
]

const timeFormat = new Intl.DateTimeFormat('en-PH', {
  timeZone: 'Asia/Manila',
  hour: 'numeric',
  minute: '2-digit',
})

function useTypedText(lines) {
  const [lineIndex, setLineIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const line = lines[lineIndex]
    let delay = deleting ? 30 : 70

    if (!deleting && length === line.length) delay = 1800
    if (deleting && length === 0) delay = 400

    const timer = setTimeout(() => {
      if (!deleting && length === line.length) {
        setDeleting(true)
      } else if (deleting && length === 0) {
        setDeleting(false)
        setLineIndex((index) => (index + 1) % lines.length)
      } else {
        setLength((value) => value + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [lines, lineIndex, length, deleting])

  return lines[lineIndex].slice(0, length)
}

function useManilaTime() {
  const [time, setTime] = useState(() => timeFormat.format(new Date()))

  useEffect(() => {
    const timer = setInterval(() => setTime(timeFormat.format(new Date())), 15000)
    return () => clearInterval(timer)
  }, [])

  return time
}

function StatusBar() {
  const typed = useTypedText(updates)
  const time = useManilaTime()

  return (
    <div className="status-bar">
      <span className="status-item status-branch">
        <VscSourceControl aria-hidden="true" /> main
      </span>

      <span className="status-item status-problems" title="Deadlines are not bugs... right?">
        <VscCheck aria-hidden="true" /> 0 errors
        <VscWarning aria-hidden="true" /> 2 deadlines
      </span>

      <span className="status-item status-now">
        <span className="status-label">currently:</span>
        <span className="status-typed" aria-hidden="true">
          {typed}
          <span className="status-cursor" />
        </span>
        <span className="sr-only">{updates.join(', ')}</span>
      </span>

      <span className="status-item status-time">
        <HiOutlineClock aria-hidden="true" /> Iloilo, {time}
      </span>
    </div>
  )
}

export default StatusBar

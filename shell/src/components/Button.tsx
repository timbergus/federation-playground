import { useState } from 'react'

type ButtonProps = {
  page: string
}

const Button = ({ page = 'Unknown' }: ButtonProps) => {
  const [count, setCount] = useState(0)
  return (
    <button
      className="bg-lime-200 rounded-md p-2"
      onClick={() => setCount((count) => count + 1)}
    >
      {page} count is {count}
    </button>
  )
}

export default Button

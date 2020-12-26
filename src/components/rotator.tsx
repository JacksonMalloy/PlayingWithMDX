import React, { useEffect, useState } from 'react'
import { Posts } from './posts'

export const Rotator = ({ projects, work, devPosts, count = 3 }) => {
  const [currentCount, setCount] = useState(100)

  const timer = () => setCount(currentCount - 1)

  useEffect(() => {
    const id = setInterval(timer, 3000)
    return () => clearInterval(id)
  }, [currentCount])

  const isOdd = (num: number) => num % 2 === 1

  if (currentCount % 3) {
    return (
      <Posts
        data={projects.edges}
        title="View projects"
        description="Interested in viewing more unique projects?"
        lineBreak
      />
    )
  }

  if (!isOdd(currentCount)) {
    return (
      <Posts data={work.edges} title="My work" description="Interested in learning more about my career?" lineBreak />
    )
  }

  return (
    <Posts
      data={devPosts.edges}
      title="Full stack dev blog"
      description="Interested in discussion? Comment on my devposts! (coming soon...)"
      lineBreak
    />
  )
}

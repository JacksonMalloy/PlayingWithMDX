import React, { useRef, useEffect } from 'react'
import { ThemeContext } from '../Theme'

const Comments: React.FC = () => {
  const commentBox = useRef()

  useEffect(() => {
    const commentScript = document.createElement('script')

    const actualTheme = typeof window !== 'undefined' ? localStorage.getItem('color-mode') : 'dark'

    commentScript.async = true
    commentScript.id = 'comments'
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'jacksonmalloy/malloy.dev-comments') // PLEASE CHANGE THIS TO YOUR REPO
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', `github-${actualTheme}`)
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [commentBox])

  return <div ref={commentBox} className="comments"></div>
}

export default Comments

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import Title from './codeTitle'

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, '')
  const ifTitle = (title || language) && { marginTop: `0px` }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={nightOwlLight}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <Title className="code-title" text={title}>
            {language}
          </Title>
          <pre className={className} style={{ ...style, padding: '20px', ...ifTitle }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </>
      )}
    </Highlight>
  )
}

export default Code

import React, { useState } from 'react'
import rangeParser from 'parse-numeric-range'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Title from './codeTitle'
import styled from 'styled-components'
import Button from '../button'

const theme = {
  plain: {
    color: '#36313D',
    backgroundColor: '#fdfaf6',
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)',
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: '#B94185',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 255, 108,',
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: '#36313D',
      },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: 'rgb(255, 121, 198)',
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: '#096FB3',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#527713',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#ff8c00',
      },
    },
  ],
}

type getParamsTypes = (className: string) => any

const getParams: getParamsTypes = (className = ``) => {
  const [lang = ``, params = ``]: any = className.split(`:`)
  return [lang.split(`language-`).pop().split(`{`).shift()].concat(
    params.split(`&`).reduce((merged: any, param: any) => {
      const [key, value] = param.split(`=`)
      merged[key] = value
      return merged
    }, {})
  )
}

const calculateLinesToHighlight = (meta: string) => {
  const RE: any = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (i: number) => lineNumbers.includes(i + 1)
  } else {
    return () => false
  }
}

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const SyntaxHiglight = (props: { className: string; metastring: string; children: string; codeString: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const className = props.className || ''
  const [language, { title = `` }] = getParams(className)
  const ifTitle = (title || language) && { marginTop: `0px` }
  const metastring = props.metastring || ''

  return (
    <Highlight {...defaultProps} theme={theme} code={props.children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const shouldHighlightLine = calculateLinesToHighlight(metastring)

        return (
          <>
            <Title className="code-title" text={title}>
              {language}
            </Title>
            <pre
              className={className}
              style={{
                ...style,
                ...ifTitle,
                padding: '3rem 1rem 1rem 1rem',
                position: 'static',
                borderBottomLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
              }}
            >
              <Button
                onClick={() => {
                  copyToClipboard(props.children)
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 3000)
                }}
              >
                {isCopied ? '🎉 Copied!' : 'Copy'}
              </Button>

              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }

                return (
                  <StyledLine key={i} {...lineProps}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </StyledLine>
                )
              })}
            </pre>
          </>
        )
      }}
    </Highlight>
  )
}
const Code = (props: any) => <SyntaxHiglight {...props} />

export default Code

const StyledLine = styled.div`
  /* Width needs to be set for mobile overflow-x scrolling */
  width: 100px;

  span {
    width: 100%;
    overflow: hidden;
  }

  &.highlight-line {
    /* background-color: rgba(0, 255, 255, 0.1);
    display: block;
    margin-right: -300px;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.1em solid rgba(0, 255, 255, 1); */
  }
`

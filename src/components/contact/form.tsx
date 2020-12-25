import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useUI } from '../../Context'
import { Rotator } from '../rotator'
import { IMdxWithNodes } from '../../Types'

type ErrorTypes =
  | {
      errors: {
        name?: string
        email?: string
        message?: string
      }
    }
  | any

interface IFormProps {
  projects: IMdxWithNodes[]
  devPosts: IMdxWithNodes[]
  work: IMdxWithNodes[]
}

export const Form = ({ projects, devPosts, work }: IFormProps) => {
  // Step 1. create new state to track field errors
  const [fieldErrors, setFieldErrors] = useState<any>({})

  // Step 2. add validation rules for each input field
  const validationRules: any = {
    name: (value: string) => !!value,
    email: (value: string) => value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: (value: string) => !!value, // similar to "required"
  }

  // Step 3. create a validate function that updates state, and returns
  //    true if all rules pass
  const validate = () => {
    let errors: ErrorTypes = {}
    let hasErrors: any = false
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key])
      hasErrors |= errors[key]
    }
    setFieldErrors((prev: any) => ({ ...prev, ...errors }))
    return !hasErrors
  }

  // Step 4. add a render method to display field errors
  const renderFieldError = (field: any) => {
    if (fieldErrors[field]) {
      return <p className="errormessage">Please enter a valid {field}.</p>
    }
  }

  const [inputs, setInputs] = useState<any>({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate()
    }
    //eslint-disable-next-line
  }, [inputs])
  /* End new validation ^^^^ */

  const handleOnChange = (event: { persist: () => void; target: { id: any; value: any } }) => {
    event.persist()
    setInputs((prev: any) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const { serverState, setServerState } = useUI()

  const handleServerResponse = (ok: boolean, message: string) => {
    setServerState({
      submitting: false,
      status: { ok, message },
    })
    if (ok) {
      setFieldErrors({})
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  const handleOnSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (!validate()) {
      return
    }

    setServerState({ submitting: true, status: null })

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mknpqwjl',
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks! I will be in touch 😄')
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error)
      })
  }
  //serverState.status
  if (serverState.status) {
    return (
      <StyledNextInfo>
        <Rotator projects={projects} work={work} devPosts={devPosts} />
      </StyledNextInfo>
    )
  }

  return (
    <StyledForm onSubmit={handleOnSubmit} noValidate>
      <StyledInput fieldErrors={fieldErrors}>
        <label htmlFor="name">
          <span>Name: </span>
          <input
            id="name"
            name="name"
            onChange={handleOnChange}
            value={inputs.name}
            className={fieldErrors.name ? 'error' : ''}
          />
          {renderFieldError('name')}
        </label>
      </StyledInput>

      <StyledInput fieldErrors={fieldErrors}>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
            className={fieldErrors.email ? 'error' : ''}
          />
          {renderFieldError('email')}
        </label>
      </StyledInput>

      <StyledTextArea fieldErrors={fieldErrors}>
        <label htmlFor="message">
          <span>Message: </span>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            value={inputs.message}
            className={fieldErrors.message ? 'error' : ''}
          />
          {renderFieldError('message')}
        </label>
      </StyledTextArea>

      <StyledButton>
        <button disabled={serverState.submitting}>Send</button>
      </StyledButton>
    </StyledForm>
  )
}

const StyledNextInfo = styled.div`
  min-height: 100%;
  width: 100%;
  justify-self: center;
  align-self: center;
`

const StyledForm = styled.form`
  min-width: 320px;
  max-width: 775px;
  display: flex;
  flex-direction: column;
  padding: var(--space);
`

const StyledInput: any = styled.div`
  width: 100%;
  height: 100%;

  label {
    font-family: 'Source Sans Pro Light';
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(--space);

    span {
      flex: 1;
      width: 100%;
      height: 100%;
      grid-row: 1 / 1;
      font-family: inherit;
      margin: 0rem;
      padding: var(--space) 0;
      font-size: 16px;
      font-size: max(16px, 0.3em);
    }

    .errormessage {
      position: absolute;
      bottom: -1.1rem;
      right: 1rem;
      background-color: transparent !important;
      /* if backdrop support: very transparent and blurred */
      @supports ((-webkit-backdrop-filter: blur(0px)) or (backdrop-filter: blur(0px))) {
        background-color: transparent;
        -webkit-backdrop-filter: blur(0px);
        backdrop-filter: blur(0px);
      }

      @media (max-width: 576px) {
        bottom: -1.5rem;
      }
    }

    input {
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-size: max(16px, 0.5em);
      font-family: 'Source Sans Pro Black';
      padding: 0.25em 0.5em;

      background-color: ${({ fieldErrors }: any) => {
        console.log({ fieldErrors })
        return fieldErrors.name || fieldErrors.email ? 'var(--error)' : 'var(--primary)'
      }};

      /* if backdrop support: very transparent and blurred */
      @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
        background-color: var(--backdrop-color);
        -webkit-backdrop-filter: blur(16px);
        backdrop-filter: blur(16px);
      }

      border: 2px solid var(--input-border);
      border-radius: 4px;

      &:focus {
        border-color: hsl(var(--input-focus-h), var(--input-focus-s), var(--input-focus-l));
        box-shadow: 0 0 0 4px hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) + 40%), 0.5);
        transition: 180ms box-shadow ease-in-out;
      }
    }

    .input:not(textarea) {
      line-height: 1;
      height: 2.25rem;
    }
  }
`

const StyledTextArea = styled(StyledInput)`
  label {
    font-family: 'Source Sans Pro Light';
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(--space);

    textarea {
      width: 100%;
      height: 100%;
      min-height: 250px;
      font-size: 16px;
      font-size: max(16px, 0.5em);
      font-family: 'Source Sans Pro Black';
      padding: 0.25em 0.5em;
      background-color: var(--primary);
      border: 2px solid var(--input-border);
      border-radius: 4px;
      resize: vertical;
      background-color: ${({ fieldErrors }: any) => {
        console.log({ fieldErrors })
        return fieldErrors.name || fieldErrors.email ? 'var(--error)' : 'var(--primary)'
      }};

      @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
        background-color: var(--backdrop-color);
        -webkit-backdrop-filter: blur(16px);
        backdrop-filter: blur(16px);
      }

      &:focus {
        border-color: hsl(var(--input-focus-h), var(--input-focus-s), var(--input-focus-l));
        box-shadow: 0 0 0 4px hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) + 40%), 0.5);
        transition: 180ms box-shadow ease-in-out;
      }
    }
  }
`

const StyledButton = styled.div`
  padding: var(--space);
  margin-top: 0.5rem;
  display: flex;

  button {
    width: 100%;
    color: var(--primary);
    background-color: var(--text);
    border-radius: 6px;
    border: none;
    display: inline-block;
    cursor: pointer;
    font-family: 'Source Sans Pro Black';
    font-size: 16px;
    font-size: max(16px, 0.3em);
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    border: none;
  }

  @media (max-width: 775px) {
    padding: 0.5rem;
  }
`

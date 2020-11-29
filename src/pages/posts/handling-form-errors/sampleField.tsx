import React, { useState } from 'react'
import Field from '../../../components/field'

export const SampleField = () => {
  const [name, setName] = useState('')
  return (
    <div>
      <Field id="name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  )
}

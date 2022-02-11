import React, { useContext } from 'react'
import { AutocompleteContext } from '../context/autocomplete'
import classNameHelper from '../utils/classNameHelper'
import escapeStringRegExp from 'escape-string-regexp'

export default function ResultMatch(props) {
  const { text } = props
  const { customStyles, queryState } = useContext(AutocompleteContext)
  const className = classNameHelper({}, customStyles)
  const regex = new RegExp('(' + escapeStringRegExp(queryState) + ')', 'i')
  const parts = text.split(regex)
  const index = parts.findIndex(
    (part) => part.toLowerCase() === queryState.toLowerCase()
  )

  parts[index] = (
    <span className={className('match')} key={index}>
      {parts[index]}
    </span>
  )

  return <span>{parts}</span>
}

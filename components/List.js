import React from 'react'

export default function List(props) {
  const { list, className, children } = props
  return (
    <ul id={list ? `global_list_hide` : `global_list_show`} className={className}>
      {children}
    </ul>
  )
}



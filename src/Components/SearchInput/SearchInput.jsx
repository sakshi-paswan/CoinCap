import React, { useRef, useState } from 'react'
import './SearchInput.css'
import { Search } from '@mui/icons-material'
export default function SearchInput() {
    const inputRef = useRef()
    const [active, setActive] = useState(false)
    const toggleActive = ()=>{
        setActive(true)
        inputRef.current.focus()
    }
  return (
    <div className={`input-container border ${active?'active':'inactive'} `}>
        <input ref={inputRef} type="text" />
        <Search onClick={toggleActive}/>
    </div>
  )
}

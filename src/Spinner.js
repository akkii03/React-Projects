import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"; 
export default function Spinner(props) {
  return (
    // <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div className="loader">
        <ClipLoader loading={props.loading} color="green" width="400" height="200" size={300} />
    </div>
  )
}

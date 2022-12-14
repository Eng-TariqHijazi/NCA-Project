import React from 'react'

export const TrustMan = ({title,text}) => {
  return (
    <div className="trust-man">
        <img src={require("../../assets/man.png")} alt="" />
        <b>{title}</b>
        <p>{text}</p>
    </div>
  )
}


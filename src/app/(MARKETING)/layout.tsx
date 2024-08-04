import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <div className="bg-blend-multiply">layout</div>
      <div>{children}</div>
    </div>
  )
}

export default layout

import React, { FC } from 'react'

const Icon: FC = props => (
  <svg width={22} height={20} {...props}>
    <path
      d="M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414l.001.001z"
      strokeWidth={0.3}
      fillRule="nonzero"
      fill="#7F899E"
      stroke="#7F899E"
    />
  </svg>
)

export default Icon
import React from 'react'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

const HeroOrbit = ({ children, size, rotation, spinDuration = "30s", shouldOrbit = true }: PropsWithChildren<{size: number; rotation: number; spinDuration: string; shouldOrbit?: boolean}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className={twMerge(shouldOrbit === true && 'animate-spin')}
      style={{
        animationDuration: `${spinDuration || "40s"}`
      }}
      >
        <div className='' style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}>
          <div className='inline-flex' style={{
            transform: `rotate(${rotation * -1}deg)`
          }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOrbit
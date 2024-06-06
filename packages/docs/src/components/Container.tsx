import { PropsWithChildren } from 'react'

interface ContainerProps extends PropsWithChildren {
  absolute?: boolean
}

export function Container({ children, absolute }: ContainerProps) {
  return (
    <div
      className={`flex w-full h-full justify-center items-center gap-4 ${absolute ? 'absolute' : ''}`}
    >
      {children}
    </div>
  )
}

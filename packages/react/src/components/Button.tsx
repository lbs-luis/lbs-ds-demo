import '@radix-ui/themes/styles.css'
import { Button as RadixButton, ButtonProps } from '@radix-ui/themes'
// import { BookmarkIcon, BookmarkFilledIcon } from '@radix-ui/react-icons'

export const Button = (props: ButtonProps) => {
  return (
    <RadixButton {...props} className="bg-orange-400">
      {props.children}
    </RadixButton>
  )
}

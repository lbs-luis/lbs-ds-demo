import '@radix-ui/themes/styles.css'
import { Theme, ThemeProps, ThemePanel } from '@radix-ui/themes'

export const ThemeMenu = (props: ThemeProps) => {
  return (
    <Theme
      {...props}
      style={{ width: '100%', minHeight: '100%', padding: '0px' }}
    >
      <ThemePanel />
      {props.children}
    </Theme>
  )
}

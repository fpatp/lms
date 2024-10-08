import { ToggleTheme } from '@/features/theme/toggle-theme'
import { Layout } from './_ui/layout'
import { Logo } from './_ui/logo'
import { MainNav } from './_ui/main-nav'
import { Profile } from './_ui/profile'

export function AppHeader({ variant }: { variant: 'auth' | 'public' | 'private' }) {
  const isProfile = variant !== 'auth'

  return (
    <Layout
      nav={<MainNav />}
      logo={<Logo />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  )
}

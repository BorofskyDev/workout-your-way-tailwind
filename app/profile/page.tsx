// app/profile/page.tsx
import { getCurrentUser } from '@/lib/server/getCurrentUser'
import { ProfilePageComponent } from '@/components/pages/profile-page/ProfilePage'

export default async function ProfilePage() {
  const user = await getCurrentUser() // ← server-only helper

  if (!user) {
    // optional: redirect or render a splash
    return null
  }

  return <ProfilePageComponent user={user} />
}

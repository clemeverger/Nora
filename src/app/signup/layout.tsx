import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions as any)
  if (session) {
    redirect('/home')
  }
  return <>{children}</>
}

export default layout

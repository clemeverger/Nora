import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import FramerMotionWrapper from '../Layouts/FramerMotionWrapper'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions as any)
  if (!session) {
    redirect('/')
  }
  return <FramerMotionWrapper>{children}</FramerMotionWrapper>
}

export default layout

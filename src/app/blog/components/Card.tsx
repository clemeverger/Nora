import Link from 'next/link'
import Image from 'next/image'

type ArticleProps = {
  title: string
  description: string
  backgroundColor: string
  icon: string
}

const Card = ({ title, description, backgroundColor, icon }: ArticleProps) => {
  return (
    <Link
      href={`/blog/conseils`}
      className={`relative ${backgroundColor} rounded-xl p-4`}
    >
      <h4 className='text-xl font-semibold text-primary_dark mb-2'>{title}</h4>
      <Image
        className='absolute top-2 right-2'
        src={icon}
        alt={'icon'}
        width={40}
        height={40}
      />
      <p className='text-primary_dark font-medium'>{description}</p>
    </Link>
  )
}

export default Card

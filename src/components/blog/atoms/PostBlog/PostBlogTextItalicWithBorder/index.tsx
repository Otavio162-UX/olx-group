import { Text } from '@/components/generic/atoms/Text'
import { twMerge } from 'tailwind-merge'
import { IPostBlogTextItalicWithBorder } from './PostBlogTextItalicWithBorder.interface'

const PostBlogTextItalicWithBorder = ({
  children,
}: IPostBlogTextItalicWithBorder): JSX.Element => {
  return (
    <Text
      tag="p"
      className={twMerge(
        'px-5 border-l-4 border-neutral-100 text-lg italic',
        'lg:text-2xl lg:font-light'
      )}
    >
      {children}
    </Text>
  )
}

export { PostBlogTextItalicWithBorder }

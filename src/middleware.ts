import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isBlogHomePage = pathname === '/blog'

  if (isBlogHomePage)
    return NextResponse.redirect(new URL('/blog/immobile', request.url))

  const blogPostRegex = /^\/blog\/(autos|immobile)\/post$/
  const isBlogPostHomePage = blogPostRegex.test(pathname)
  if (isBlogPostHomePage)
    return NextResponse.redirect(
      new URL(pathname.replace(blogPostRegex, '/blog/$1'), request.url)
    )

  return NextResponse.next()
}

export const config = {
  matcher: ['/blog', '/blog/:path*/post'],
}

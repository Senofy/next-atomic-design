import React, { FC } from 'react'
import NextHead from 'next/head'

interface Props {
	title?: string
	description?: string
	url?: string
	ogImage?: string
}

const Head: FC<Props> = ({ title = '', description = '', url = '', ogImage = '' }) => (
	<NextHead>
		<meta charSet='UTF-8' />
		<title>{title}</title>
		<meta name='description' content={description} />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<link rel='icon' sizes='192x192' href='/static/touch-icon.png' />
		<link rel='apple-touch-icon' href='/static/touch-icon.png' />
		<link rel='mask-icon' href='/static/favicon-mask.svg' color='#49B882' />
		<link rel='icon' href='/favicon.ico' />
		<link
			href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap'
			rel='stylesheet'
		/>
		<meta property='og:url' content={url} />
		<meta property='og:title' content={title} />
		<meta property='og:description' content={description} />
		<meta name='twitter:site' content={url} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:image' content={ogImage} />
		<meta property='og:image' content={ogImage} />
		<meta property='og:image:width' content='1200' />
		<meta property='og:image:height' content='630' />
		<link
			rel='stylesheet'
			href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
			integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
			crossOrigin='anonymous'
		/>
	</NextHead>
)

export default Head

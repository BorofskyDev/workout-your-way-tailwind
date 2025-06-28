import localFont from 'next/font/local'


// Atkinson Hyperlegible Next (replacing Open Sans)
export const atkinsonNext = localFont({
  src: [
    // ExtraLight
    {
      path: './atkinson/AtkinsonHyperlegibleNext-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    // Light
    {
      path: './atkinson/AtkinsonHyperlegibleNext-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    // Regular
    {
      path: './atkinson/AtkinsonHyperlegibleNext-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    // Medium
    {
      path: './atkinson/AtkinsonHyperlegibleNext-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    // SemiBold
    {
      path: './atkinson/AtkinsonHyperlegibleNext-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    // Bold
    {
      path: './atkinson/AtkinsonHyperlegibleNext-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    // ExtraBold
    {
      path: './atkinson/AtkinsonHyperlegibleNext-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './atkinson/AtkinsonHyperlegibleNext-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-atkinson-next',
  fallback: ['system-ui', 'arial'],
})

export const atkinsonMono = localFont({
  src: [
    // ExtraLight
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    // Light
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    // Regular
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    // Medium
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    // SemiBold
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    // Bold
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    // ExtraBold
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './atkinson-mono/AtkinsonHyperlegibleMono-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-atkinson-mono',
  fallback: ['monospace'],
})



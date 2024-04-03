import { Goblin_One, Archivo_Black, Revalia, Poppins, Plus_Jakarta_Sans, Cormorant } from 'next/font/google'

const goblin = Goblin_One<undefined>({
    weight: '400',
    subsets: ['latin'],
})

const archivo = Archivo_Black({
    weight: '400',
    subsets: ['latin'],
  })
  
  const revalia = Revalia({
    weight: '400',
    subsets: ['latin'],
  })

  const poppins = Poppins({
    weight : "500",
    subsets : ["latin"]
  })

  const jakarta = Plus_Jakarta_Sans({
    weight : "500",
    subsets : ["latin"]
  })

  const cormorant = Cormorant({
    weight : "500",
    subsets : ["latin"]
  })

export { goblin, archivo, revalia, poppins, jakarta, cormorant};
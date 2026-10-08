import type { IconType } from 'react-icons'
import { FaGoogle, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { FiBriefcase, FiInstagram, FiMail, FiPlayCircle, FiYoutube } from 'react-icons/fi'

export interface LinkItem {
  id: string
  label: string
  description: string
  href: string
  icon: IconType
}

const ORCAMENTO_EMAIL = 'maria.santos@duallengenharia.com.br'
const WHATSAPP = '5511945406289'

/** Áreas de atuação (conforme o site da Duall) */
export const services = ['Elétrica', 'Hidráulica', 'Sistemas', 'BIM', 'Fotovoltaica']

export const primaryCta: LinkItem = {
  id: 'orcamento',
  label: 'Solicite um orçamento',
  description: 'Receba uma proposta comercial para o seu projeto',
  href:
    `mailto:${ORCAMENTO_EMAIL}` +
    `?subject=${encodeURIComponent('Solicitação de orçamento')}` +
    `&body=${encodeURIComponent('Olá, gostaria de uma proposta comercial!')}`,
  icon: FiMail,
}

export const links: LinkItem[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Fale direto com a nossa equipe',
    href: `https://wa.me/${WHATSAPP}`,
    icon: FaWhatsapp,
  },
  {
    id: 'youtube',
    label: 'Conheça a Duall',
    description: 'Assista ao nosso vídeo institucional',
    href: 'https://www.youtube.com/watch?v=dt4N0zSWFbE',
    icon: FiPlayCircle,
  },
  {
    id: 'talentos',
    label: 'Trabalhe conosco',
    description: 'Vagas abertas e banco de talentos',
    href: 'https://talentos.duallengenharia.com.br/',
    icon: FiBriefcase,
  },
  {
    id: 'google',
    label: 'Nos avalie no Google!',
    description: 'Sua opinião faz diferença',
    href: 'https://www.google.com/search?q=duall+engenharia',
    icon: FaGoogle,
  },
]

export const socials: LinkItem[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    description: '@duallengenharia',
    href: 'https://www.instagram.com/duallengenharia/',
    icon: FiInstagram,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Duall Engenharia',
    href: 'https://www.linkedin.com/company/duall-engenharia/',
    icon: FaLinkedinIn,
  },
  {
    id: 'youtube-social',
    label: 'YouTube',
    description: 'Vídeo institucional',
    href: 'https://www.youtube.com/watch?v=dt4N0zSWFbE',
    icon: FiYoutube,
  },
]

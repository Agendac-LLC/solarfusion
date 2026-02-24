import logoWhite from '@/assets/logo-solar-fusion-white.png';
import logoBlack from '@/assets/logo-solarfusion-black.png';

export function getLogoByBg(bg: 'light' | 'dark') {
  return bg === 'light' ? logoBlack : logoWhite;
}

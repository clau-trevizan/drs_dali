import React from 'react';
import { Link } from 'react-router-dom';

const footerData = {
  drsGroup: {
    title: 'DRS Group',
    links: [
      { label: 'Clinical Trial Services', href: '/areas/cts' },
      { label: 'Patient Centric Services', href: '/areas/pcs' },
      { label: 'Thermo Integrated Services', href: '/areas/tis' },
    ],
  },
  contact: {
    title: 'Contato',
    email: 'contato@drsgroup.com.br',
    phone: '+55 (11) 3198-9000',
    supportPhone: '+55 (11) 3198-9005',
    careersLink: 'https://vagasdrsgroup.gupy.io/',
  },
  community: {
    title: 'Comunidade',
    links: [
      { label: 'Shield Company', href: 'https://shieldcompany.com.br/' },
      { label: 'YouVita', href: 'https://www.youvita.com.br/' },
    ],
  },
  addresses: [
    {
      region: 'LATAM',
      name: 'Centro Logístico – São Paulo (SP)',
      address: 'Rod. Anhanguera, s/nº – Km 15 – Warehouses 09-40\nVila Jaguara – São Paulo/SP – CEP: 05110-080',
    },
    {
      region: 'EUROPA',
      name: 'DRS International – Dublin (IE)',
      address: 'Dublin - 15 - 17 Earlsfort Terrace, Saint Kevin\'s,\nDublin 2, D02 YX28, Irlanda',
    },
  ],
  legalLinks: [
    { label: 'Política de Privacidade', href: '/politica-privacidade' },
    { label: 'Termos de Uso', href: '/termos-uso' },
    { label: 'Política de Cookies', href: '/politica-cookies' },
  ],
};

export const Footer = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="text-primary-foreground relative footer-responsive bg-footer-desktop" style={{ minHeight: 'auto', marginBottom: '125px' }}>
    <div className="desktop-fundo"></div>

      {/* Mobile background with two images */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundColor: '#274B41',
          zIndex: 0
        }}
      >
        {/* Top background image */}
        <div
          className="footer-bg-mobile-top"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '140px',
            backgroundImage: 'url(/images/vector_01.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Bottom background image */}
        <div
          className="footer-bg-mobile-bottom"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '140px',
            backgroundImage: 'url(/images/vector_02.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      <div className="drs-container py-8 lg:py-12 relative z-10 pt-[5rem] pb-[10rem] lg:pt-8 lg:pb-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-3 lg:col-span-9">
            {/* CTA Section - Hidden on mobile */}
            <div className="mb-12 hidden lg:block">
              <h2
                className="font-black mb-6 max-w-md"
                style={{ fontSize: '35px', lineHeight: '40px' }}
              >
                Conectamos sua necessidade<br />
                com a solução ideal.
              </h2>
              <Link
                to="/contato"
                className="drs-btn flex items-center gap-2"
                style={{ backgroundColor: '#15AF97' }}
              >
                <svg className="w-5 h-4" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1116 0.305374L19.6449 5.79172L19.6911 5.83465C19.8763 6.01824 19.984 6.26036 20 6.54643L19.9991 6.6426C19.9856 6.8692 19.899 7.08569 19.7284 7.27968L19.6638 7.34633L14.1116 12.8525C13.701 13.2597 13.0371 13.2597 12.6265 12.8525C12.2135 12.4429 12.2135 11.777 12.6265 11.3674L16.4601 7.56522L1.05235 7.56559C0.472139 7.56559 0 7.09741 0 6.51765C0 5.93789 0.472144 5.4697 1.05234 5.4697L16.3364 5.46932L12.6265 1.79052C12.2135 1.38092 12.2135 0.714975 12.6265 0.305374C13.0371 -0.101791 13.701 -0.101791 14.1116 0.305374Z" fill="white"/>
                </svg>
                Fale com nossa equipe de vendas
              </Link>
            </div>

            {/* Mobile CTA title and button */}
            <div className="mb-8 lg:hidden">
              <h2
                className="font-black max-w-md mb-6"
                style={{ fontSize: '28px', lineHeight: '34px' }}
              >
                Conectamos sua necessidade<br />
                com a solução ideal.
              </h2>
              <Link
                to="/contato"
                className="drs-btn flex items-center gap-2"
                style={{ backgroundColor: '#15AF97' }}
              >
                <svg className="w-5 h-4" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1116 0.305374L19.6449 5.79172L19.6911 5.83465C19.8763 6.01824 19.984 6.26036 20 6.54643L19.9991 6.6426C19.9856 6.8692 19.899 7.08569 19.7284 7.27968L19.6638 7.34633L14.1116 12.8525C13.701 13.2597 13.0371 13.2597 12.6265 12.8525C12.2135 12.4429 12.2135 11.777 12.6265 11.3674L16.4601 7.56522L1.05235 7.56559C0.472139 7.56559 0 7.09741 0 6.51765C0 5.93789 0.472144 5.4697 1.05234 5.4697L16.3364 5.46932L12.6265 1.79052C12.2135 1.38092 12.2135 0.714975 12.6265 0.305374C13.0371 -0.101791 13.701 -0.101791 14.1116 0.305374Z" fill="white"/>
                </svg>
                Fale com nossa equipe de vendas
              </Link>
            </div>

            {/* Footer Grid - Desktop - 3 columns: 3 + 5 + 4 */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-12" style={{ marginBottom: 0 }}>
              {/* Column 1: DRS Group (3 cols) */}
              <div className="lg:col-span-3">
            <span
              className="inline-block px-4 rounded-full text-black"
              style={{
                backgroundColor: '#F39325',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '40px',
                marginBottom: '16px'
              }}
            >
              {footerData.drsGroup.title}
            </span>
            <ul className="space-y-2">
              {footerData.drsGroup.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Logo */}
            <div className="mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="107" viewBox="0 0 89 107" fill="none">
                <g clipPath="url(#clip0_11_654)">
                  <path d="M71.3316 53.8237H53.0133V36.109H35.3409V18.3823H17.6684V0.0117188H71.3276V53.8237H71.3316ZM53.6591 53.1759H70.6857V0.659577H18.3143V17.7384H35.9867V35.4651H53.6591V53.1798V53.1759Z" fill="white"/>
                  <path d="M18.3143 18.3745H0V0H18.3143V18.3745ZM0.645875 17.7267H17.6724V0.647859H0.645875V17.7267Z" fill="white"/>
                  <path d="M89 107H70.6857V93.7686H71.3276V106.352H88.3541V0.647859H71.3276V53.502H70.6857V0H89V107Z" fill="white"/>
                  <path d="M35.9907 61.4073H35.3448V53.8198H17.6724V17.7266H35.9907V35.4493H53.6591V53.1759H71.3316V55.99H70.6857V53.8198H53.0133V36.0971H35.3448V18.3744H18.3183V53.1759H35.9907V61.4073Z" fill="white"/>
                  <path d="M71.3316 106.996H0V17.7266H18.3183V53.1759H35.6658V53.8238H17.6724V18.3744H0.645875V106.352H70.6857V93.7685H71.3316V106.996Z" fill="white"/>
                  <path d="M23.6517 71.6461C25.4863 72.2502 26.9722 73.3591 28.1094 74.9728C29.0208 76.2765 29.6429 77.6874 29.9718 79.2057C30.3046 80.724 30.471 82.1708 30.471 83.55C30.471 87.0357 29.7737 89.9888 28.3749 92.4093C26.4809 95.6725 23.5606 97.3021 19.6061 97.3021H8.33298V71.0737H19.6061C21.2267 71.0976 22.5739 71.2884 23.6517 71.6421M13.6347 75.6286V92.7472H18.6828C21.2663 92.7472 23.0653 91.4713 24.0836 88.9196C24.6384 87.5206 24.9157 85.8513 24.9157 83.9196C24.9157 81.2487 24.4997 79.2018 23.6636 77.7709C22.8315 76.3401 21.1673 75.6286 18.6828 75.6286H13.6347Z" fill="white"/>
                  <path d="M51.0994 71.7055C52.0623 72.1188 52.8785 72.7309 53.5482 73.5378C54.1029 74.2015 54.5388 74.9368 54.8637 75.7437C55.1886 76.5505 55.3511 77.4726 55.3511 78.502C55.3511 79.7461 55.0381 80.9742 54.412 82.1785C53.7859 83.3828 52.7517 84.2334 51.3094 84.7302C52.514 85.2191 53.3699 85.9107 53.8731 86.8049C54.3763 87.6992 54.626 89.0665 54.626 90.9067V92.6675C54.626 93.8678 54.6735 94.6786 54.7686 95.1039C54.9152 95.7796 55.2481 96.2804 55.779 96.5983V97.2581H49.7482C49.5818 96.6778 49.4629 96.2088 49.3916 95.8511C49.249 95.1158 49.1737 94.3646 49.1618 93.5896L49.1261 91.1531C49.1063 89.4798 48.8171 88.367 48.2623 87.8105C47.7115 87.2541 46.6734 86.9758 45.1518 86.9758H39.8184V97.2581H34.481V71.0298H46.9864C48.7735 71.0656 50.1484 71.2921 51.1113 71.7055M39.8065 75.5847V82.6316H45.6867C46.8557 82.6316 47.7313 82.4925 48.3138 82.2063C49.348 81.7095 49.8631 80.7238 49.8631 79.2532C49.8631 77.6634 49.3639 76.5942 48.3653 76.0497C47.8027 75.7436 46.9626 75.5886 45.8373 75.5886H39.8065V75.5847Z" fill="white"/>
                  <path d="M64.7381 89.2057C64.9085 90.406 65.2413 91.3003 65.7326 91.8925C66.64 92.9696 68.1893 93.5141 70.3885 93.5141C71.704 93.5141 72.7739 93.3711 73.5941 93.0889C75.1513 92.5444 75.928 91.5269 75.928 90.0443C75.928 89.1779 75.5476 88.5101 74.7828 88.0332C74.0181 87.5721 72.8095 87.1627 71.1532 86.805L68.3241 86.185C65.5424 85.565 63.6286 84.8972 62.5904 84.1739C60.8311 82.9656 59.9475 81.0737 59.9475 78.4981C59.9475 76.1492 60.8074 74.1976 62.531 72.6436C64.2547 71.0895 66.7866 70.3145 70.127 70.3145C72.9165 70.3145 75.294 71.0458 77.2673 72.5124C79.2366 73.979 80.2668 76.1054 80.3659 78.8916H75.1157C75.0166 77.3137 74.3153 76.1929 73.0037 75.5291C72.128 75.0919 71.0463 74.8693 69.7505 74.8693C68.3082 74.8693 67.1552 75.1555 66.2953 75.7239C65.4355 76.2922 65.0036 77.0872 65.0036 78.1086C65.0036 79.0427 65.4275 79.7462 66.2755 80.2112C66.8223 80.5172 67.9793 80.8829 69.7505 81.2923L74.339 82.3773C76.348 82.8503 77.8577 83.4863 78.8602 84.2812C80.4174 85.5133 81.198 87.3019 81.198 89.6349C81.198 91.968 80.2747 94.0229 78.4282 95.6048C76.5778 97.1867 73.9705 97.9816 70.6025 97.9816C67.2344 97.9816 64.4528 97.2026 62.4795 95.6406C60.5062 94.0825 59.5235 91.9362 59.5235 89.2097H64.7381V89.2057Z" fill="white"/>
                  <path d="M39.1012 55.9383C39.6322 56.1569 40.0601 56.5583 40.389 57.1426L40.3771 55.7992H42.5406V63.8517C42.5446 64.9328 42.3662 65.7436 42.0096 66.2921C41.3915 67.238 40.1988 67.711 38.4355 67.7229C37.3696 67.7309 36.5019 67.5242 35.8282 67.1109C35.1507 66.6935 34.7782 66.0695 34.7029 65.2388L37.0724 65.2269C37.1358 65.4813 37.2349 65.6641 37.3696 65.7754C37.6074 65.9741 37.9997 66.0695 38.5584 66.0655C39.3429 66.0655 39.866 65.7953 40.1314 65.2706C40.3018 64.9328 40.389 64.3644 40.385 63.5655V63.0289C40.175 63.3906 39.9531 63.6569 39.7154 63.8358C39.2835 64.1697 38.7208 64.3406 38.0274 64.3445C36.9575 64.3525 36.1017 63.9789 35.4597 63.2277C34.8178 62.4765 34.4929 61.459 34.4889 60.1712C34.485 58.9311 34.7861 57.8858 35.4003 57.0353C36.0145 56.1847 36.8822 55.7594 38.0155 55.7515C38.4316 55.7515 38.7961 55.8111 39.1052 55.9383M39.866 61.924C40.2146 61.5345 40.389 60.9224 40.385 60.0758C40.385 59.2849 40.2146 58.6807 39.8778 58.2674C39.545 57.858 39.0972 57.6513 38.5425 57.6553C37.7817 57.6593 37.2587 58.0249 36.9694 58.7443C36.8189 59.1299 36.7436 59.6028 36.7475 60.1633C36.7475 60.6482 36.8307 61.0814 36.9972 61.459C37.2943 62.1625 37.8253 62.5122 38.5861 62.5083C39.0933 62.5083 39.5212 62.3095 39.8699 61.924" fill="white"/>
                  <path d="M49.241 55.6959C49.2688 55.6999 49.3322 55.7039 49.4312 55.7079L49.4392 57.9456C49.3005 57.9336 49.1776 57.9217 49.0707 57.9177C48.9637 57.9177 48.8765 57.9098 48.8131 57.9138C47.9374 57.9177 47.347 58.2079 47.0498 58.7802C46.8834 59.1022 46.8002 59.599 46.8002 60.2667L46.8319 64.2771L44.6209 64.2691L44.5892 55.7993H46.6853L46.6734 57.3613C47.0102 56.8049 47.2995 56.4193 47.5491 56.2126C47.9572 55.8668 48.4842 55.692 49.138 55.688C49.1776 55.688 49.2133 55.688 49.241 55.692" fill="white"/>
                  <path d="M57.9623 63.1802C57.265 64.0547 56.1991 64.4958 54.7647 64.5038C53.3342 64.5117 52.2644 64.0825 51.5591 63.216C50.8537 62.3496 50.4971 61.3042 50.4892 60.0801C50.4813 58.8758 50.8339 57.8304 51.5313 56.9401C52.2287 56.0538 53.2986 55.6086 54.729 55.6007C56.1594 55.5927 57.2293 56.026 57.9346 56.9083C58.6399 57.7867 58.9965 58.8281 59.0005 60.0324C59.0084 61.2565 58.6558 62.3098 57.9584 63.1842M56.2149 61.9799C56.5557 61.5228 56.7221 60.879 56.7181 60.0403C56.7181 59.2017 56.5438 58.5618 56.1991 58.1087C55.8583 57.6595 55.3669 57.433 54.729 57.437C54.091 57.4409 53.6037 57.6715 53.2629 58.1206C52.9182 58.5737 52.7517 59.2176 52.7557 60.0562C52.7557 60.8909 52.934 61.5348 53.2788 61.9879C53.6235 62.441 54.1148 62.6635 54.7528 62.6596C55.3907 62.6596 55.8781 62.4251 56.2149 61.972" fill="white"/>
                  <path d="M62.745 55.7994L62.7371 60.8551C62.7371 61.332 62.7965 61.6858 62.9074 61.9282C63.1056 62.3495 63.4939 62.5602 64.0724 62.5602C64.8134 62.5602 65.3206 62.2501 65.59 61.646C65.7287 61.3201 65.8 60.8869 65.7961 60.3503L65.7802 55.8073L67.9912 55.7954L68.0229 64.15L65.907 64.1619V62.9815C65.8832 63.0093 65.8317 63.0848 65.7525 63.212C65.6693 63.3392 65.5742 63.4544 65.4632 63.5498C65.1224 63.8599 64.7936 64.0705 64.4805 64.1858C64.1635 64.301 63.7911 64.3567 63.3631 64.3607C62.1348 64.3686 61.3066 63.9274 60.8747 63.0411C60.633 62.5522 60.5102 61.8288 60.5062 60.8749L60.4904 55.8073H62.745V55.7994Z" fill="white"/>
                  <path d="M76.9225 56.638C77.6041 57.3534 77.9488 58.4106 77.9567 59.8057C77.9607 61.2763 77.6358 62.4011 76.974 63.1762C76.3123 63.9512 75.4604 64.3407 74.4143 64.3487C73.7486 64.3487 73.1939 64.1897 72.7501 63.8598C72.5084 63.677 72.2706 63.4107 72.0408 63.0569L72.0567 67.4131L69.8496 67.425V55.8033H71.9695L71.9497 57.0036C72.1835 56.638 72.4331 56.3558 72.7025 56.1412C73.186 55.7636 73.7645 55.5768 74.4381 55.5728C75.4168 55.5688 76.2489 55.9225 76.9304 56.6419M75.2543 58.2199C74.9572 57.727 74.4737 57.4806 73.812 57.4846C73.0156 57.4846 72.4688 57.8661 72.1716 58.6173C72.021 59.0188 71.9418 59.5235 71.9457 60.1356C71.9536 61.1054 72.2112 61.7851 72.7342 62.1786C73.0433 62.4091 73.4079 62.5204 73.8318 62.5164C74.442 62.5124 74.9096 62.2739 75.2306 61.8049C75.5515 61.332 75.71 60.708 75.7061 59.925C75.7021 59.2811 75.5555 58.7127 75.2543 58.2159" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_654">
                    <rect width="89" height="107" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Legal Links */}
            <ul className="mt-6 space-y-1">
              {footerData.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
              </div>

              {/* Column 2: Contato + Endereços + Copyright (5 cols) */}
              <div className="lg:col-span-5">
                {/* Contato */}
                <span
                  className="inline-block px-4 rounded-full text-black"
                  style={{
                    backgroundColor: '#F39325',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '40px',
                    marginBottom: '16px'
                  }}
                >
                  {footerData.contact.title}
                </span>
                <div className="space-y-2" style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}>
                  <p>
                    <span style={{ color: '#FFF' }}>E-mail: </span>
                    <a href={`mailto:${footerData.contact.email}`} className="hover:underline" style={{ color: '#FFF' }}>
                      {footerData.contact.email}
                    </a>
                  </p>
                  <p>
                    <span style={{ color: '#FFF' }}>Comercial: </span>
                    {footerData.contact.phone}
                  </p>
                  <p>
                    <span style={{ color: '#FFF' }}>SAC / Programa de suporte: </span>
                    {footerData.contact.supportPhone}
                  </p>
                  <p>
                    <span style={{ color: '#FFF' }}>Trabalhe Conosco: </span>
                    <a href={footerData.contact.careersLink} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#69C0AC' }}>
                      Clique aqui
                    </a>
                  </p>
                </div>

                {/* Endereços */}
                <div className="mt-6">
                  <span
                    className="inline-block px-4 rounded-full text-black"
                    style={{
                      backgroundColor: '#F39325',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '40px',
                      marginBottom: '16px'
                    }}
                  >
                    Endereços
                  </span>
                  {footerData.addresses.map((address) => (
                    <div key={address.region} className="mb-4" style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}>
                      <p className="font-semibold">{address.region}</p>
                      <p style={{ color: '#FFF' }}>{address.name}</p>
                      <p className="whitespace-pre-line" style={{ color: '#FFF', fontSize: '12px' }}>
                        {address.address}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Copyright */}
                <div className="mt-6" style={{ color: '#69C0AC', fontSize: '14px', paddingTop: '30px' }}>
                  © 2026 DRS Group - Todos os direitos reservados
                </div>
              </div>

              {/* Column 3: Comunidade + Siga-nos (4 cols) */}
              <div className="lg:col-span-4">
                {/* Comunidade */}
                <span
                  className="inline-block px-4 rounded-full text-black"
                  style={{
                    backgroundColor: '#F39325',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '40px',
                    marginBottom: '16px'
                  }}
                >
                  {footerData.community.title}
                </span>
                <ul className="space-y-2">
                  {footerData.community.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:opacity-80"
                        style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Siga-nos */}
                <div className="mt-6">
                  <span
                    className="inline-block px-4 rounded-full text-black"
                    style={{
                      backgroundColor: '#F39325',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '40px',
                      marginBottom: '16px'
                    }}
                  >
                    Siga a DRS Group nas redes sociais
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/groupdrs?originalSubdomain=br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                        <path d="M35.7396 7.34375H11.2604C9.0973 7.34375 7.34375 9.0973 7.34375 11.2604V35.7396C7.34375 37.9027 9.0973 39.6562 11.2604 39.6562H35.7396C37.9027 39.6562 39.6562 37.9027 39.6562 35.7396V11.2604C39.6562 9.0973 37.9027 7.34375 35.7396 7.34375Z" stroke="white" strokeWidth="2"/>
                        <path d="M16.1562 21.0522V31.8231" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.1562 16.9688C16.9674 16.9688 17.625 16.3112 17.625 15.5C17.625 14.6888 16.9674 14.0312 16.1562 14.0312C15.3451 14.0312 14.6875 14.6888 14.6875 15.5C14.6875 16.3112 15.3451 16.9688 16.1562 16.9688Z" fill="white"/>
                        <path d="M30.8438 31.8231V25.4585C30.8438 23.025 28.871 21.0522 26.4375 21.0522C24.004 21.0522 22.0312 23.025 22.0312 25.4585V31.8231" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Grid - Mobile (Reordered) */}
        <div className="lg:hidden grid grid-cols-1 gap-6 mb-8">
          {/* 1. Contato */}
          <div>
            <span
              className="inline-block px-4 rounded-full text-black"
              style={{
                backgroundColor: '#F39325',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '40px',
                marginBottom: '16px'
              }}
            >
              {footerData.contact.title}
            </span>
            <div className="space-y-2" style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}>
              <p>
                <span style={{ color: '#FFF' }}>E-mail: </span>
                <a href={`mailto:${footerData.contact.email}`} className="hover:underline" style={{ color: '#FFF' }}>
                  {footerData.contact.email}
                </a>
              </p>
              <p>
                <span style={{ color: '#FFF' }}>Comercial: </span>
                {footerData.contact.phone}
              </p>
              <p>
                <span style={{ color: '#FFF' }}>SAC / Programa de suporte: </span>
                {footerData.contact.supportPhone}
              </p>
              <p>
                <span style={{ color: '#FFF' }}>Trabalhe Conosco: </span>
                <a href={footerData.contact.careersLink} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#69C0AC' }}>
                  Clique aqui
                </a>
              </p>
            </div>
          </div>

          {/* 2. Endereços */}
          <div>
            <span
              className="inline-block px-4 rounded-full text-black"
              style={{
                backgroundColor: '#F39325',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '40px',
                marginBottom: '16px'
              }}
            >
              Endereços
            </span>
            {footerData.addresses.map((address) => (
              <div key={address.region} className="mb-4" style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}>
                <p className="font-semibold">{address.region}</p>
                <p style={{ color: '#FFF' }}>{address.name}</p>
                <p className="whitespace-pre-line" style={{ color: '#FFF', fontSize: '12px' }}>
                  {address.address}
                </p>
              </div>
            ))}
          </div>

          {/* 3. DRS Group */}
          <div>
            <span
              className="inline-block px-4 rounded-full text-black"
              style={{
                backgroundColor: '#F39325',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '40px',
                marginBottom: '16px'
              }}
            >
              {footerData.drsGroup.title}
            </span>
            <ul className="space-y-2">
              {footerData.drsGroup.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Comunidade */}
          <div>
            <span
              className="inline-block px-4 rounded-full text-black"
              style={{
                backgroundColor: '#F39325',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '40px',
                marginBottom: '16px'
              }}
            >
              {footerData.community.title}
            </span>
            <ul className="space-y-2">
              {footerData.community.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Siga-nos */}
          <div>
            <span
              className="inline-block px-4 rounded-full text-black"
              style={{
                backgroundColor: '#F39325',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '40px',
                marginBottom: '16px'
              }}
            >
              Siga a DRS Group nas redes sociais
            </span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/groupdrs?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                  <path d="M35.7396 7.34375H11.2604C9.0973 7.34375 7.34375 9.0973 7.34375 11.2604V35.7396C7.34375 37.9027 9.0973 39.6562 11.2604 39.6562H35.7396C37.9027 39.6562 39.6562 37.9027 39.6562 35.7396V11.2604C39.6562 9.0973 37.9027 7.34375 35.7396 7.34375Z" stroke="white" strokeWidth="2"/>
                  <path d="M16.1562 21.0522V31.8231" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.1562 16.9688C16.9674 16.9688 17.625 16.3112 17.625 15.5C17.625 14.6888 16.9674 14.0312 16.1562 14.0312C15.3451 14.0312 14.6875 14.6888 14.6875 15.5C14.6875 16.3112 15.3451 16.9688 16.1562 16.9688Z" fill="white"/>
                  <path d="M30.8438 31.8231V25.4585C30.8438 23.025 28.871 21.0522 26.4375 21.0522C24.004 21.0522 22.0312 23.025 22.0312 25.4585V31.8231" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            {/* Logo - Mobile */}
            <div className="mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="107" viewBox="0 0 89 107" fill="none">
                <g clipPath="url(#clip0_11_654_mobile)">
                  <path d="M71.3316 53.8237H53.0133V36.109H35.3409V18.3823H17.6684V0.0117188H71.3276V53.8237H71.3316ZM53.6591 53.1759H70.6857V0.659577H18.3143V17.7384H35.9867V35.4651H53.6591V53.1798V53.1759Z" fill="white"/>
                  <path d="M18.3143 18.3745H0V0H18.3143V18.3745ZM0.645875 17.7267H17.6724V0.647859H0.645875V17.7267Z" fill="white"/>
                  <path d="M89 107H70.6857V93.7686H71.3276V106.352H88.3541V0.647859H71.3276V53.502H70.6857V0H89V107Z" fill="white"/>
                  <path d="M35.9907 61.4073H35.3448V53.8198H17.6724V17.7266H35.9907V35.4493H53.6591V53.1759H71.3316V55.99H70.6857V53.8198H53.0133V36.0971H35.3448V18.3744H18.3183V53.1759H35.9907V61.4073Z" fill="white"/>
                  <path d="M71.3316 106.996H0V17.7266H18.3183V53.1759H35.6658V53.8238H17.6724V18.3744H0.645875V106.352H70.6857V93.7685H71.3316V106.996Z" fill="white"/>
                  <path d="M23.6517 71.6461C25.4863 72.2502 26.9722 73.3591 28.1094 74.9728C29.0208 76.2765 29.6429 77.6874 29.9718 79.2057C30.3046 80.724 30.471 82.1708 30.471 83.55C30.471 87.0357 29.7737 89.9888 28.3749 92.4093C26.4809 95.6725 23.5606 97.3021 19.6061 97.3021H8.33298V71.0737H19.6061C21.2267 71.0976 22.5739 71.2884 23.6517 71.6421M13.6347 75.6286V92.7472H18.6828C21.2663 92.7472 23.0653 91.4713 24.0836 88.9196C24.6384 87.5206 24.9157 85.8513 24.9157 83.9196C24.9157 81.2487 24.4997 79.2018 23.6636 77.7709C22.8315 76.3401 21.1673 75.6286 18.6828 75.6286H13.6347Z" fill="white"/>
                  <path d="M51.0994 71.7055C52.0623 72.1188 52.8785 72.7309 53.5482 73.5378C54.1029 74.2015 54.5388 74.9368 54.8637 75.7437C55.1886 76.5505 55.3511 77.4726 55.3511 78.502C55.3511 79.7461 55.0381 80.9742 54.412 82.1785C53.7859 83.3828 52.7517 84.2334 51.3094 84.7302C52.514 85.2191 53.3699 85.9107 53.8731 86.8049C54.3763 87.6992 54.626 89.0665 54.626 90.9067V92.6675C54.626 93.8678 54.6735 94.6786 54.7686 95.1039C54.9152 95.7796 55.2481 96.2804 55.779 96.5983V97.2581H49.7482C49.5818 96.6778 49.4629 96.2088 49.3916 95.8511C49.249 95.1158 49.1737 94.3646 49.1618 93.5896L49.1261 91.1531C49.1063 89.4798 48.8171 88.367 48.2623 87.8105C47.7115 87.2541 46.6734 86.9758 45.1518 86.9758H39.8184V97.2581H34.481V71.0298H46.9864C48.7735 71.0656 50.1484 71.2921 51.1113 71.7055M39.8065 75.5847V82.6316H45.6867C46.8557 82.6316 47.7313 82.4925 48.3138 82.2063C49.348 81.7095 49.8631 80.7238 49.8631 79.2532C49.8631 77.6634 49.3639 76.5942 48.3653 76.0497C47.8027 75.7436 46.9626 75.5886 45.8373 75.5886H39.8065V75.5847Z" fill="white"/>
                  <path d="M64.7381 89.2057C64.9085 90.406 65.2413 91.3003 65.7326 91.8925C66.64 92.9696 68.1893 93.5141 70.3885 93.5141C71.704 93.5141 72.7739 93.3711 73.5941 93.0889C75.1513 92.5444 75.928 91.5269 75.928 90.0443C75.928 89.1779 75.5476 88.5101 74.7828 88.0332C74.0181 87.5721 72.8095 87.1627 71.1532 86.805L68.3241 86.185C65.5424 85.565 63.6286 84.8972 62.5904 84.1739C60.8311 82.9656 59.9475 81.0737 59.9475 78.4981C59.9475 76.1492 60.8074 74.1976 62.531 72.6436C64.2547 71.0895 66.7866 70.3145 70.127 70.3145C72.9165 70.3145 75.294 71.0458 77.2673 72.5124C79.2366 73.979 80.2668 76.1054 80.3659 78.8916H75.1157C75.0166 77.3137 74.3153 76.1929 73.0037 75.5291C72.128 75.0919 71.0463 74.8693 69.7505 74.8693C68.3082 74.8693 67.1552 75.1555 66.2953 75.7239C65.4355 76.2922 65.0036 77.0872 65.0036 78.1086C65.0036 79.0427 65.4275 79.7462 66.2755 80.2112C66.8223 80.5172 67.9793 80.8829 69.7505 81.2923L74.339 82.3773C76.348 82.8503 77.8577 83.4863 78.8602 84.2812C80.4174 85.5133 81.198 87.3019 81.198 89.6349C81.198 91.968 80.2747 94.0229 78.4282 95.6048C76.5778 97.1867 73.9705 97.9816 70.6025 97.9816C67.2344 97.9816 64.4528 97.2026 62.4795 95.6406C60.5062 94.0825 59.5235 91.9362 59.5235 89.2097H64.7381V89.2057Z" fill="white"/>
                  <path d="M39.1012 55.9383C39.6322 56.1569 40.0601 56.5583 40.389 57.1426L40.3771 55.7992H42.5406V63.8517C42.5446 64.9328 42.3662 65.7436 42.0096 66.2921C41.3915 67.238 40.1988 67.711 38.4355 67.7229C37.3696 67.7309 36.5019 67.5242 35.8282 67.1109C35.1507 66.6935 34.7782 66.0695 34.7029 65.2388L37.0724 65.2269C37.1358 65.4813 37.2349 65.6641 37.3696 65.7754C37.6074 65.9741 37.9997 66.0695 38.5584 66.0655C39.3429 66.0655 39.866 65.7953 40.1314 65.2706C40.3018 64.9328 40.389 64.3644 40.385 63.5655V63.0289C40.175 63.3906 39.9531 63.6569 39.7154 63.8358C39.2835 64.1697 38.7208 64.3406 38.0274 64.3445C36.9575 64.3525 36.1017 63.9789 35.4597 63.2277C34.8178 62.4765 34.4929 61.459 34.4889 60.1712C34.485 58.9311 34.7861 57.8858 35.4003 57.0353C36.0145 56.1847 36.8822 55.7594 38.0155 55.7515C38.4316 55.7515 38.7961 55.8111 39.1052 55.9383M39.866 61.924C40.2146 61.5345 40.389 60.9224 40.385 60.0758C40.385 59.2849 40.2146 58.6807 39.8778 58.2674C39.545 57.858 39.0972 57.6513 38.5425 57.6553C37.7817 57.6593 37.2587 58.0249 36.9694 58.7443C36.8189 59.1299 36.7436 59.6028 36.7475 60.1633C36.7475 60.6482 36.8307 61.0814 36.9972 61.459C37.2943 62.1625 37.8253 62.5122 38.5861 62.5083C39.0933 62.5083 39.5212 62.3095 39.8699 61.924" fill="white"/>
                  <path d="M49.241 55.6959C49.2688 55.6999 49.3322 55.7039 49.4312 55.7079L49.4392 57.9456C49.3005 57.9336 49.1776 57.9217 49.0707 57.9177C48.9637 57.9177 48.8765 57.9098 48.8131 57.9138C47.9374 57.9177 47.347 58.2079 47.0498 58.7802C46.8834 59.1022 46.8002 59.599 46.8002 60.2667L46.8319 64.2771L44.6209 64.2691L44.5892 55.7993H46.6853L46.6734 57.3613C47.0102 56.8049 47.2995 56.4193 47.5491 56.2126C47.9572 55.8668 48.4842 55.692 49.138 55.688C49.1776 55.688 49.2133 55.688 49.241 55.692" fill="white"/>
                  <path d="M57.9623 63.1802C57.265 64.0547 56.1991 64.4958 54.7647 64.5038C53.3342 64.5117 52.2644 64.0825 51.5591 63.216C50.8537 62.3496 50.4971 61.3042 50.4892 60.0801C50.4813 58.8758 50.8339 57.8304 51.5313 56.9401C52.2287 56.0538 53.2986 55.6086 54.729 55.6007C56.1594 55.5927 57.2293 56.026 57.9346 56.9083C58.6399 57.7867 58.9965 58.8281 59.0005 60.0324C59.0084 61.2565 58.6558 62.3098 57.9584 63.1842M56.2149 61.9799C56.5557 61.5228 56.7221 60.879 56.7181 60.0403C56.7181 59.2017 56.5438 58.5618 56.1991 58.1087C55.8583 57.6595 55.3669 57.433 54.729 57.437C54.091 57.4409 53.6037 57.6715 53.2629 58.1206C52.9182 58.5737 52.7517 59.2176 52.7557 60.0562C52.7557 60.8909 52.934 61.5348 53.2788 61.9879C53.6235 62.441 54.1148 62.6635 54.7528 62.6596C55.3907 62.6596 55.8781 62.4251 56.2149 61.972" fill="white"/>
                  <path d="M62.745 55.7994L62.7371 60.8551C62.7371 61.332 62.7965 61.6858 62.9074 61.9282C63.1056 62.3495 63.4939 62.5602 64.0724 62.5602C64.8134 62.5602 65.3206 62.2501 65.59 61.646C65.7287 61.3201 65.8 60.8869 65.7961 60.3503L65.7802 55.8073L67.9912 55.7954L68.0229 64.15L65.907 64.1619V62.9815C65.8832 63.0093 65.8317 63.0848 65.7525 63.212C65.6693 63.3392 65.5742 63.4544 65.4632 63.5498C65.1224 63.8599 64.7936 64.0705 64.4805 64.1858C64.1635 64.301 63.7911 64.3567 63.3631 64.3607C62.1348 64.3686 61.3066 63.9274 60.8747 63.0411C60.633 62.5522 60.5102 61.8288 60.5062 60.8749L60.4904 55.8073H62.745V55.7994Z" fill="white"/>
                  <path d="M76.9225 56.638C77.6041 57.3534 77.9488 58.4106 77.9567 59.8057C77.9607 61.2763 77.6358 62.4011 76.974 63.1762C76.3123 63.9512 75.4604 64.3407 74.4143 64.3487C73.7486 64.3487 73.1939 64.1897 72.7501 63.8598C72.5084 63.677 72.2706 63.4107 72.0408 63.0569L72.0567 67.4131L69.8496 67.425V55.8033H71.9695L71.9497 57.0036C72.1835 56.638 72.4331 56.3558 72.7025 56.1412C73.186 55.7636 73.7645 55.5768 74.4381 55.5728C75.4168 55.5688 76.2489 55.9225 76.9304 56.6419M75.2543 58.2199C74.9572 57.727 74.4737 57.4806 73.812 57.4846C73.0156 57.4846 72.4688 57.8661 72.1716 58.6173C72.021 59.0188 71.9418 59.5235 71.9457 60.1356C71.9536 61.1054 72.2112 61.7851 72.7342 62.1786C73.0433 62.4091 73.4079 62.5204 73.8318 62.5164C74.442 62.5124 74.9096 62.2739 75.2306 61.8049C75.5515 61.332 75.71 60.708 75.7061 59.925C75.7021 59.2811 75.5555 58.7127 75.2543 58.2159" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_654_mobile">
                    <rect width="89" height="107" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Legal Links - Mobile */}
            <ul className="mt-6 space-y-1">
              {footerData.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:opacity-80"
                    style={{ color: '#FFF', fontSize: '14px', fontWeight: 400, lineHeight: '30px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright - Mobile only */}
        <div className="lg:hidden text-center pt-8" style={{ color: '#69C0AC', fontSize: '14px' }}>
          © 2026 DRS Group - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import { Analytics } from "@vercel/analytics/react"

import Heading from '@theme/Heading'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <section className="hero">
          <div className="hero-title">
            <svg width="697" height="228" viewBox="0 0 697 228" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M87.25 62.5L72.5 145.5H47.5L57.75 88.25C58.0833 86.4167 57.75 84.9167 56.75 83.75C55.75 82.5833 54.3333 82 52.5 82C50.6667 82 49.0833 82.5833 47.75 83.75C46.4167 84.9167 45.5833 86.4167 45.25 88.25L35.75 141.25C35.25 143.917 35.75 146.417 37.25 148.75C38.9167 150.917 41 153.167 43.5 155.5C46.1667 157.667 49 160 52 162.5C55.1667 165 57.9167 167.833 60.25 171C62.75 174 64.6667 177.5 66 181.5C67.3333 185.333 67.5 189.833 66.5 195C65.8333 199.5 64.5 203.75 62.5 207.75C60.5 211.583 57.9167 215 54.75 218C51.5833 221 47.75 223.333 43.25 225C38.9167 226.667 33.8333 227.5 28 227.5C22.3333 227.5 17.5833 226.667 13.75 225C9.91667 223.333 6.91667 221 4.75 218C2.75 215 1.5 211.583 1 207.75C0.500002 203.75 0.583335 199.5 1.25 195L3.25 183.75H28.25L25.75 197.5C25.4167 199.667 25.8333 201.5 27 203C28.1667 204.333 29.8333 205 32 205C34.1667 205 36.0833 204.333 37.75 203C39.4167 201.5 40.4167 199.667 40.75 197.5C41.5833 193.333 41.25 189.833 39.75 187C38.25 184.167 36.25 181.583 33.75 179.25C31.25 176.917 28.4167 174.667 25.25 172.5C22.25 170.333 19.5 167.917 17 165.25C14.5 162.417 12.5833 159.083 11.25 155.25C9.91667 151.417 9.75 146.75 10.75 141.25L22 77.5C22.8333 72.6667 24.9167 68.5833 28.25 65.25C31.5833 61.75 36.3333 60 42.5 60C47.8333 60 52 61.5833 55 64.75C58.1667 67.75 60.0833 70.9167 60.75 74.25L64.75 62.5H87.25Z"
                fill="#F3F4F5"
              />
              <path d="M97.2832 62.5H122.283L93.5332 225H68.5332L97.2832 62.5Z" fill="#F3F4F5" />
              <path
                d="M177.445 60.5C183.445 60.5 187.529 62.25 189.695 65.75C192.029 69.0833 192.779 73.1667 191.945 78L165.945 225H140.945L164.945 88.75C165.279 86.9167 164.945 85.4167 163.945 84.25C163.112 83.0833 161.779 82.5 159.945 82.5C158.112 82.5 156.445 83.0833 154.945 84.25C153.612 85.4167 152.779 86.9167 152.445 88.75L128.445 225H103.445L132.195 62.5H154.695L154.445 74.5C156.112 71.1667 159.029 68 163.195 65C167.529 62 172.279 60.5 177.445 60.5Z"
                fill="#F3F4F5"
              />
              <path
                d="M229.705 137.5L238.205 88.75C238.538 86.9167 238.205 85.4167 237.205 84.25C236.372 83.0833 235.038 82.5 233.205 82.5C231.372 82.5 229.705 83.0833 228.205 84.25C226.872 85.4167 226.038 86.9167 225.705 88.75L206.455 198.75C206.122 200.583 206.372 202.083 207.205 203.25C208.205 204.417 209.622 205 211.455 205C213.288 205 214.872 204.417 216.205 203.25C217.705 202.083 218.622 200.583 218.955 198.75L223.455 172.5H218.455L222.455 150H252.455L239.205 225H216.705V213.75C215.038 217.083 212.122 220.25 207.955 223.25C203.788 226.083 199.038 227.5 193.705 227.5C187.538 227.5 183.372 225.833 181.205 222.5C179.205 219 178.622 214.833 179.455 210L200.205 91.25C201.038 86.9167 202.372 82.9167 204.205 79.25C206.038 75.4167 208.455 72.0833 211.455 69.25C214.455 66.4167 218.038 64.1667 222.205 62.5C226.538 60.8333 231.455 60 236.955 60C242.455 60 247.038 60.8333 250.705 62.5C254.538 64.1667 257.455 66.4167 259.455 69.25C261.455 72.0833 262.705 75.4167 263.205 79.25C263.705 82.9167 263.538 86.9167 262.705 91.25L254.705 137.5H229.705Z"
                fill="#F3F4F5"
              />
              <path
                d="M266.465 227C260.465 227 256.298 225.333 253.965 222C251.798 218.5 251.132 214.333 251.965 209.5L277.965 62.5H302.965L278.965 198.75C278.632 200.583 278.882 202.083 279.715 203.25C280.715 204.417 282.132 205 283.965 205C285.798 205 287.382 204.417 288.715 203.25C290.215 202.083 291.132 200.583 291.465 198.75L315.465 62.5H340.465L311.715 225H289.215L289.465 213C287.632 216.333 284.548 219.5 280.215 222.5C276.048 225.5 271.465 227 266.465 227Z"
                fill="#F3F4F5"
              />
              <path d="M349.725 62.5H374.725L349.975 202.5H369.975L363.475 225H320.975L349.725 62.5Z" fill="#F3F4F5" />
              <path
                d="M449.744 62.5L435.994 225H410.994L413.994 200H399.244L393.494 225H368.494L412.244 62.5H449.744ZM416.744 177.5L428.244 85H425.744L404.494 177.5H416.744Z"
                fill="#F3F4F5"
              />
              <path
                d="M471.063 62.5H507.313C512.813 62.5 517.146 63.3333 520.312 65C523.479 66.6667 525.729 68.9167 527.062 71.75C528.562 74.5833 529.312 77.9167 529.312 81.75C529.312 85.4167 528.896 89.4167 528.062 93.75L518.312 148.75C517.146 154.75 514.979 159.25 511.813 162.25C508.813 165.083 504.229 166.917 498.063 167.75C501.729 168.75 504.646 170.667 506.813 173.5C508.979 176.167 509.896 179.583 509.563 183.75L507.313 225H482.313L484.563 183.75C484.729 181.917 484.396 180.417 483.563 179.25C482.729 178.083 481.396 177.5 479.563 177.5H475.813L467.313 225H442.313L471.063 62.5ZM485.813 155C487.646 155 489.229 154.417 490.563 153.25C492.063 152.083 492.979 150.583 493.313 148.75L503.313 91.25C503.646 89.4167 503.313 87.9167 502.313 86.75C501.479 85.5833 500.146 85 498.313 85H492.063L479.563 155H485.813Z"
                fill="#F3F4F5"
              />
              <path d="M543.572 62.5H568.572L539.822 225H514.822L543.572 62.5Z" fill="#F3F4F5" />
              <path d="M585.734 85H569.484L575.984 62.5H628.484L626.984 85H610.734L585.984 225H560.984L585.734 85Z" fill="#F3F4F5" />
              <path
                d="M636.102 62.5H683.602L682.102 85H657.102L650.352 122.5H672.852L668.852 145H646.352L636.352 202.5H661.352L654.852 225H607.352L636.102 62.5ZM674.352 0H696.852L669.602 42.5H657.102L674.352 0Z"
                fill="#F3F4F5"
              />
            </svg>
          </div>
          <img src="https://i.ibb.co/XxgT66x/header-v2.png" alt="Bannière Singularité" class="dark-theme-banner"/>
        </section>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description="Guide de jeu pour le forum RP Singularité">
      <HomepageHeader />
      <main>
        <Analytics/>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

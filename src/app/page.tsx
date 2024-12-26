import Image from 'next/image'
import styles from './page.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image
          src="/images/image-qr-code.png"
          alt="QR Code"
          width={288}
          height={288}
        />
        <div className={styles.container__text}>
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  )
}

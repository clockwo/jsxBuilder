import { Head } from "minista"

import Header from "@/components/header"
import Footer from "@/components/footer"

import "./assets/scss/global.scss"

export default function ({ url, title, children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <script type="module" src="/src/assets/main.js" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

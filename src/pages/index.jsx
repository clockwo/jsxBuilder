import { Head } from "minista"
import BlockCounter from "@/components/block-counter"
import Gallery from "@/components/gallery/gallery"

import image1 from "@/assets/images/1.png"
import image2 from "@/assets/images/2.png"
import image3 from "@/assets/images/3.png"
import image4 from "@/assets/images/4.png"
import image5 from "@/assets/images/5.png"
import image6 from "@/assets/images/6.png"

const items = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
]

const images = [image1, image2, image3, image4, image5, image6]

export default function () {
  return (
    <>
      <Head>
        <title>Main page</title>
      </Head>

      <h1 className="title">Hello!</h1>

      <Gallery images={images} />

      <button className="button-click" type="submit">
        SOme text
      </button>
      <button className="button" type="submit">
        SOme text
      </button>
      <BlockCounter items={items} />
    </>
  )
}

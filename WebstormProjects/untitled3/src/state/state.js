import logo from "../assets/head/logo_boltaeva.png"
import search from "../assets/head/search.png"
import shop from "../assets/head/shop.png"
import account from "../assets/head/account.png"
import gllr_img1 from "../assets/gallery/gallery_block1.png"
import gllr_img2 from "../assets/gallery/gallery_block2.webp"
import gllr_img3 from "../assets/gallery/gallery_block3.webp"
import gllr_img4 from "../assets/gallery/gallery_block4.png"
import beauty from "../assets/gallery/beauty.png"
import  brows from "../assets/gallery/brows.png"
import care from "../assets/gallery/care.png"

let state = {
    header : {
        catalog: "Catalog",
        about: "About",
        delivery: "Delivery",
        contacts: "Contacts",
        img : {
            logo: logo,
            search: search,
            shop: shop,
            account: account
        }
    },

    main: {
        gallery: {
            blocks: [
                {
                    id: 1,
                    img: gllr_img1,
                    name: "Perfect eyelashes",
                    price: "32€"
                },
                {
                    id: 2,
                    img: gllr_img2,
                    name: "Perfect skin",
                    price: "75€"
                },
                {
                    id: 3,
                    img: gllr_img3,
                    name: "Perfect brows",
                    price: "54€"
                }
                // ,
                // {
                //     id: 4,
                //     img: gllr_img4,
                //     name: "Perfect lips",
                //     price: "27€"
                // }
            ],
            beauty: {
                img: beauty,
                text: "Beauty"
            },
            care: {
                img: care,
                text: "Care"
            },
            brows: {
                img: brows,
                text: "Brows"
            }
        }
    }


}

export default state;
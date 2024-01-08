import './Imagegallery.css'
export default function Imagegallery(props) {
    var arrObj = [
        {
            c: 'lap-1',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CTXHQux0L._SL1080_.jpg',
            desc: "Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6 (39.562cm) FHD Display/Win 11+MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Carbon/Thin & Light 1.69kg",
            cost: "-23% ₹50,790\nM.R.P.: ₹66,349 Inclusive of all taxes\nEMI starts at ₹2,462. No Cost EMI available EMI options",
            cate: 'all laptop'
        },
        {
            c: 'lap-2',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713etE3fZTL._SL1500_.jpg',
            desc: "Dell 15 Laptop, Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6 (39.6cm) FHD 120Hz Refresh, 250 nits/Mobile Connect/Win 11+MSO'21/15 Month McAfee/Black/Thin & Light-1.66kg",
            cost: "-16% ₹37,490\nM.R.P.: ₹44,524\nInclusive of all taxes\nEMI starts at ₹1,818. No Cost EMI available",
            cate: 'all laptop'
        },
        
        {
            c: 'lap-3',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51jUcRK69ML._SL1080_.jpg',
            desc:"Dell G15 5520 Gaming Laptop, Intel i5-12500H/16GB DDR5/1TB SSD/15.6 (39.62cm) FHD WVA AG 120Hz 250 nits/NVIDIA RTX 3050, 4 GB GDDR6/Win 11 + MSO'21/15 Months McAfee/Backlit KB/Dark Shadow Grey/2.81kg",
            cost:"-20% ₹77,490\nM.R.P.: ₹97,115\nInclusive of all taxes\nEMI starts at ₹3,757. \nNo Cost EMI available", 
            cate: 'all laptop'
        },
        {
            c: 'lap-4',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618d5bS2lUL._SL1500_.jpg',
            desc:"Apple 2023 MacBook Pro (16-inch, M3 Pro chip with 12‑core CPU and 18‑core GPU, 36GB Unified Memory, 512GB) - Space Black",
            cost:"₹2,89,900\nInclusive of all taxes\nEMI starts at ₹14,056. \nNo Cost EMI available EMI options",
            cate: 'all laptop'
        },
        {
            c: 'lap-5',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vFKBpKakL._SL1500_.jpg',
            desc:"Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold",
            cost:"-16% ₹83,990\n M.R.P.: ₹99,900\n Inclusive of all taxes\nEMI starts at ₹4,072.\n No Cost EMI available EMI",
            cate: 'all laptop'
        },
        {
            c: 'mob-1',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61QRgOgBx0L._SL1500_.jpg',
            desc:"OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
            cost:"₹19,999\nInclusive of all taxes\nEMI starts at ₹970.\n No Cost EMI available EMI",
            cate: 'all mobile'
        },
        {
            c: 'mob-2',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg',
            desc:"Redmi 12 5G Jade Black 8GB RAM 256GB ROM",
            cost:"-23% ₹15,499\nM.R.P.: ₹19,999\nInclusive of all taxes\nEMI starts at ₹751. No Cost EMI available",
            cate: 'all mobile'
        },
        {
            c: 'mob-3',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg',
            desc:"iQOO Z7s 5G by vivo (Norway Blue, 6GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor | 64 MP OIS Ultra Stable Camera | 44WFlashCharge",
            cost:"-33% ₹15,999\nM.R.P.: ₹23,999\nInclusive of all taxes\nEMI starts at ₹776. No Cost EMI available",
            cate: 'all mobile'
        },
        {
            c: 'mob-4',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/4105IiC5tDL._SX300_SY300_QL70_FMwebp_.jpg',
            desc:"iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger | World's First Snapdragon 4 Gen 1 | Best in-Segment 120Hz Refresh Rate | Travel Adaptor Included in The Box",
            cost:"-35% ₹12,999\nM.R.P.: ₹19,999\nInclusive of all taxes\nEMI starts at ₹630.\n No Cost EMI available EMI",
            cate: 'all mobile'
        },
        {
            c: 'mob-5',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/8195A49fZbL._SL1500_.jpg',
            desc:"realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger",
            cost:"-10% ₹17,999\nM.R.P.: ₹19,999\nInclusive of all taxes\nEMI starts at ₹873.\n No Cost EMI available",
            cate: 'all mobile'
        },
        {
            c: 'desk-1',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jnByVetPL._SL1500_.jpg',
            desc:"HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/512GB SSD/Intel UHD Graphics/Win 11 Home/Wired Keyboard and Mouse Combo/MS Office)22-dd2686in, White Brand: HP",
            cost:"-23% ₹32,490\nM.R.P.: ₹42,152\nInclusive of all taxes\nEMI starts at ₹1,575. No Cost EMI available",
            cate: 'all desktop'
        },
        {
            c: 'desk-2',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61WuYJrBs7L._SL1500_.jpg',
            desc:"Lenovo IdeaCentre AIO 3 Intel i5 12450H 27 FHD IPS 3-Side Edgeless All-in-One Desktop with Alexa Built-in (16GB/1TB SSD/Win11/MS Office 2021/5.0MP + IR Camera/Wireless Keyboard & Mouse), F0GJ00QPIN",
            cost:"-24% ₹63,990\nM.R.P.: ₹83,690\nInclusive of all taxes\nEMI starts at ₹3,102. No Cost EMI available ",
            cate: 'all desktop'
        },
        {
            c: 'desk-3',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71EKLf9dZkL._SL1500_.jpg',
            desc:"HP All-in-One PC 12th Gen Intel Core i3-1215U 21.5 inch(54.6cm) FHD 8GB RAM, 512GB SSD, Intel UHD Graphics, 510 Black Wireless Keyboard and Mouse Combo (Win 11, MSO, Jet Black, 5.7 Kg) 22-dd2115in",
            cost:"-17% ₹44,990\nM.R.P.: ₹54,102 \nInclusive of all taxes \nEMI starts at ₹2,181. No Cost EMI available",
            cate: 'all desktop'
        },
        {
            c: 'desk-4',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KBIj28ZUL._SL1500_.jpg',
            desc:"Apple 2023 iMac (24-inch, M3 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 512GB) - Silver",
            cost:"₹1,74,900\nInclusive of all taxes\nEMI starts at ₹8,480. No Cost EMI available",
            cate: 'all desktop'
        },
        {
            c: 'desk-5',
            img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71L1OLGbtrL._SL1500_.jpg',
            desc:"ASUS AiO M3402WFA Series, 23.8 (60.45 cm) FHD, AMD Ryzen 5 7520U, All-in-One Desktop (8GB/512GB SSD/Windows 11/Office 2021/with Wireless Keyboard & Mouse/Black/5.4 kg), M3402WFA-KBA015WS",
            cost:"-23% ₹59,990 \n M.R.P.: ₹77,990 \n Inclusive of all taxes \nEMI starts at ₹2,908. No Cost EMI available ",
            cate: 'all desktop'
        }
    ]
    return (
        <div className='Project1'>
            {arrObj.map((val) => {
                if (val.cate.includes(props.name)) {
                    return (
                        <div className={val.c} key={val.c}>
                            <img src={val.img} alt={val.desc} />
                            <h2>{val.desc}</h2>
                            <h3>
                                {val.cost.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </h3>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}
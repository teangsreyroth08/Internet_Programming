import {defineStroe} from 'pinia';

export const useProducts = defineStroe("products",{
    state: () => ({
        groups: ["Milks & Diaries", "Coffes & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits", "Bakery", "Frozen Foods", "Snacks", "Canned Foods", "Beverages", "Cleaning", "Health & Beauty", "Baby", "Others"],
        promotions: [
            {
                id: 1,
                bgColor: "#F0E8D5",
                heanding: "Everyday Fresh & Clean with Our Products",
                textBtn: "Show Now",
                colorBtn: "#3BB77E",
                img:"https://s3-alpha-sig.figma.com/img/de8c/488a/87b9ce16acd7436a6dec758331c840bc?Expires=1701043200&Signature=KTQ6UT7xs25QzKumnJcNy7NIVYVdwgOUFSX~AUvPFz8514~r8UatAOz795d4E5JNCb97aRbueCvhTxnBO2P0rn-SQfilERq~DisE6dd~EML0Lt8IvBNG4COxhP0ou07cuCD6Rm-oMSZSv655jP1EHxdykfaB9YDcOyGQIId4~Y~9ZabZGP0IZ2UG~9tAdSKPkW1vbixUNzb30Oro-bhEPxpIhj93vFJZrUetetLqBynpiBfJ-bMSlJ2omjRU-n8K8cjxUbgRMkz8tEj~BenVCeXPVvCRoqnya7QP-jbi1FMhCSapp2KL8TVMAqLqCPtgAa0Ptb5lzsaWw-2Rp~8jUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            },
            {
                id: 2,
                bgColor: "#F3E8E8",
                heanding: "Make your Breakfast Healthy and Easy",
                textBtn: "Show Now",
                colorBtn: "#3BB77E",
                img:"https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1701043200&Signature=Vw-SeLTnk2PRQQzoW1xl3wEWmbg9rzrDbAC01ZXQL70KtE6Tl8o9hOXyqipKc0wDbJXeyz44tsXc7naEYe85qr3904zXkntmxby39sNRyXT8fYfLDa1rm7-0JjfICOGwchbSYGn2KrXI-LkfsVY7XH64YRWF1llOoq6l6xnwiQ6dxrCIQMgK9tfQtRZ8UZ1u639YoX8bVVPZ8iO3IwY8Ar5~wE3-2qyb1iBJdAnLv8Td6VFA3X4ZpMVG7dQaTk6e9V5N~rRuux-ypRe9~VR9AnmAa2PpnlkKQl4cCJ0ABuHFAjS-~7ASXuLGPUQe3f854~vIBBbHfKGXL5WA4gtcDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            },
            {
                id: 3,
                bgColor: "#E7EAF3",
                heanding: "Make your Breakfast Healthy and Easy",
                textBtn: "Show Now",
                colorBtn: "#FDC040",
                img:"https://s3-alpha-sig.figma.com/img/4d69/6151/8879bc373bf5fcc1578bcec5172b087b?Expires=1701043200&Signature=gtg1cO~4v5ZqoHMzDxg9miPzD8lTJ4w~pPhQJLKxSSQbcrVjPGE10797E8i~ouDnBAohwcPzDxjFG~m6yczt0gW01h-gVKAE-MX1sI5CyuAgRLyc3JgPMlUDOEmpLLlAyc4U2rhgD~JyEfVRP63vqYetTlaacTN2U8qZPTnS52SnTsE2jZ1eqont~HETHTJBk0OmvB99bB2MoL0Ic8a4q283M2Gyva5IvU7cNbD3l5hYONbRv2SImo1iGsGERVGyNMpC5f83YFG67dlyZgzDHRjtwsVbrWvTYpjopHOmwGIdFxp04qdGDlKbtWd~tq3hi15~HqDfLhq7rWaheo1meg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            },
        ],
        categories:[
            {
                id: 1,
                bgColor: "#F2FCE4",
                Img: "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1701043200&Signature=nuVEq7Nzd19AIxIRLLEjSJVotSwf1Q0KQbNAiYbVgkNE3TOSq~ucJVycCTxCBYmbQQdUFEH5WfXShv-62DUKyiJPEpJD29tHB87AHvsFgxqc1iCXQ2L-10rCI~VY5yKs4GnpjD98VMyHdWy8aZo47gyn~IHBalBQRlRe5DUcvWVHazK98rv7d5gj3VyJgV7vjk6-8~EUVgXeP~chDa0uHx-PW7MZj3rr6~iZKQg9flxnR0FZ9w-CdzTmTf6YIn0i3UmwLbVzguHod5Oc-IYPVZ686Of4bNdPQQ6HEenKixqLqqLwAeF7MY4hsEpOzuL5Er2qhQBD2ysc79Qrw48x3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Milk & Diaries",
                Item: "14 items",
            },
            {
                id: 2,
                bgColor: "#FFFCEB",
                Img: "https://s3-alpha-sig.figma.com/img/fa19/6bce/6720167ebdfcf5d3f8a2d76053176f9a?Expires=1701043200&Signature=pJmjSAv83QimcuIG72nCNXlteOQAfTnga3FBqQAYSrQaYVGmTBOf6MZnPztVC6~7TSEazb1mNECezHkYjit02Y5mszQ5Gv6lfzgSiMmrllSqyhiZ6C9wx7P1DTJiltNv1lKqYD~z6jcnAQvcL7OxiLnLwKPozj1sSjXdEY8NV5nqy4nu03ZaOUh1DIZCXotAjC6Un0qr4mY8sQ5N1GnwUuZWipeHZ9mTWzXFYfWw2T3dG5RIjoE6uXREuWA4KYdDsMxYMANvr3fjNQp8yVQsllcJS47Det69Yw31CfmZ7TYCtVAOUTSx~A3VG9FM~Qdux4DUzPQwGv8d4wEEgYD4jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Peach",
                Item: "17 items"
            },
            {
                id: 3,
                bgColor: "#ECFFEC",
                Img: "https://s3-alpha-sig.figma.com/img/eb0a/46d6/bf3d30616b8cd69f4b03064fe254350c?Expires=1701043200&Signature=qByOdc2Q1X2NFdyrUeztm6EPT9VGoOX6aob66DaYigWyiPcDvDxDOD7qrj7~xlrj-69C8A1xlBY4F8B3FLi6UE~4COX72Nd3IotG3-cjazvOZkOK0yjv32bc4eN-2ravsCdu8avOdTqzciVATjspi57zfpVc-1BHUKxa9UsJOzzLwFwuv~C7sgwDMqhtaXLFCzKJLXsJ3s2pzqOTlU~VfnDkKIiUJDbG7dApsLWYxmf1V7Ajxh6x24ZDvDF6p-4MAVVgPWMC1XW93Y8sh9AfiltKhUdUw4USN3ImgDtWEsf0Qs54kbllOkGsTaHEfshWGoiwa2RRnlWe1jWu~ECA8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Oganic Kiwi",
                Item: "21 items"
            },
            {
                id: 4,
                bgColor: "#FEEFEA",
                Img: "https://s3-alpha-sig.figma.com/img/21b6/3a1e/f2a493eea176934bcab372692ab59a29?Expires=1701043200&Signature=gDrZIVRru4Xf7EFvOaJVa4zMaK34T89ooaYiiy0jHrv964HOgcNHySwHRI5tkzWDuLzCxG6-br~aNpZQg~UmRpJXt5s9njR2-BigWxO5MsyxH9KYjg9LZijaX7ytULJYu2MvLT1IRJrsU5n1xRrPrYZKf-AGOTymzm9ktMqPTe0UwT6PtEYQkVQCo71QGuV2g6AT3kTa8EwuslwSsamcDLB-5e9xa85jGRMRVvgTVdT1i4uvnHvo4TBfrH3fj1QFayytVdc~tBwW3SBRN2ZmTRnxDD-c1v4~mnvDKYrvNr9r-zoytKQZ~3IBqxh0juQdNIPFL3Wfobh2P-T5Z~lh3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Red Apple",
                Item: "68 items"
            },
            {
                id: 5,  
                bgColor: "#FFF3EB",
                Img:"https://s3-alpha-sig.figma.com/img/488c/b40d/98f6efd89c2347f8ab7f23b7757a7e2f?Expires=1701043200&Signature=ZTDPY7B01efjpBqFLuHwk~Pg5VXX0cxe9J3pgleHiJrNskdw4l5vtQOUUS9f~BS39NhifrWsQBJSdRmJ4ffGs3OWQYwy91Wi6LymiGCq5P02FAtTNL65RQRZs4P2CbHqnMp8QMzWMIbWXsMVDgA-obIjY2ARIjp9OtRN1O6s3eL5uYVmwOzTFNx0S6LZBjeDTRntin7~LEYoDUeqhb3xGyXpxeGSgUSRR9twcPdtmctH3q1Z2fz7sYMrDZCrUI8aY4-LXkZFLunBQQFCArSRpyhtEVFarrTxDGIywWSjkeG9QsVPv56RBxrOEKfvIsqp9vkBOwjc-I09vMysym8qEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Snack",
                Item: "34 items"
            },
            {
                id: 6,
                bgColor: "#FFF3FF",
                Img: "https://s3-alpha-sig.figma.com/img/13f9/afc8/02816b515e817bcd88800c49b947f860?Expires=1701043200&Signature=S7xJJ2tNncqoFtfs0z49egQAhXp68WqXLqkKTd6iNqcX3dBe4VXW~0su0UwkKM5UuZzel51xlYQARTxfk6WGSm7Ny~CDaaMnClTd6oB917Wf~5-ALMdJjPQ2Xw~6cWxFZdtoEGMFGVSmK0CN~OeQviLSaiV2txUMPV7WaY9onC6M3NaAw1t7J231BGpJQoNeshOhAWuaOwm0X5TBmRHvMdthLe0UgdvjRS009zbvz-VKZ0k2ySDZ~4lu6qZt1KLpYm7blzbEFANdKwuzO5AiaEdoFz4CRQre0Dh46pzNcj18eiCeAbI8SDc6kR3qi7ocvE0bIGe4kQdRsiJgszQfQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Black plum",
                Item: "25 items"
            },
            {
                id: 7,
                bgColor: "#F2FCE4",
                Img: "https://s3-alpha-sig.figma.com/img/5e6d/35bc/cc6f73e5412576546dca6b013f4fc9c7?Expires=1701043200&Signature=jU~KGSCuxDZGaLS4p~Vhsve5DzsdY4MRm-GTsUC3hEAfHAy1xS-k9MYt15epdPytx4i1LVIFYGe9Bwbb-05S~UozKrJXPGNLO5kvn6Ci2O76VuDsYGXlT~YIbykAhMo26jzKZL-Wjh1T1gW36~g1t~nAFzW0cCjjwS62SOdo7JqqfcoA3Wl~G839qkElsj1OI~tzTQ8jHk4mXwyZVtBvu4PugxCZhyqP1vbmgCIS8IBesU8ZcB-P10L1FH-ydo-QKfxFn02nAALdg9DUDQcqa5ivHktuspJfVCRaZFF911cSVYEUmH5RH9dIzdWRggtT1pn~sCYCEqlTMyiDprJVtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Vegetable",
                Item: "65 items"
            },
            {
                id: 8,
                bgColor: "#FFFCEB",
                Img: "https://s3-alpha-sig.figma.com/img/0ed9/44fa/3bcccc269ae2cadb2fb25ac9b02ea29e?Expires=1701043200&Signature=hrxIqePlHrVgOqGbOzXbpuZgoQl5KndljWGx5jMYf4gLll7Q~jR3fuRxAkwSRtkcComhPSR1UHNMurnw8fXV93jBJckQfXGBluo0A-dX9YEHEkmjtU6GSy~fc4m99cyUr82uaX2xoBW1h~qHFqHLEfH~fr12p471~VE5VO~oadkM6NbcFgHAkwPkjY~xLGvhjmSTJ03deKpSiwDEmV17TCntJvGfJrjg3LCQivogaZ8-CQQfyvpP5wwGScvRkQeeKMgQZ49wS8uYxd0X9l9hDO6NQhwjOQmq8uxHw4shPKfscaMxCMpRQin8r1RPKj-jC0eu4ipWU3gAG2uE1x2bDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Headphone",
                Item: "33 items"
            },
            {
                id: 9,
                bgColor: "#F2FCE4",
                Img: "https://s3-alpha-sig.figma.com/img/78c4/8886/688817c7c490b88407c4904743141184?Expires=1699833600&Signature=pg4YVVgnJVPU82pFrb5TZqIW86nanB5A2pL2q9iEpqZ8b99ZlW7MxslUGQ0DlGXb-7zRkzEbXgCj-~d-tTYqx5-QqQmg3iXAwjEv5ckj25lnw~mpt2k3X7eFwGUQo42XHSWKNeE1X3hCZOXH0BZAoxIz-Ks8lAJeZ7cLBZEH6xyVYxfQBxoR88F2A8c0BBLPjFgDzZxV0Rsbl4GMm8MYReGby0Z6MJFTHZqNhI4Y0o8cC0fUvN8RuWpvxdPr~mPMufJwPb4U9MeQusBPxo7tiExuix-HvpMNP7fzIAqtJzMIFKqF32trLoWTXFW99G0k-TuVIdRJdJehZIb9ISBbtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Cake & Milk",
                Item: "54 items"
            },
            {
                id: 10,
                bgColor: "#FFF3FF",
                Img: "https://s3-alpha-sig.figma.com/img/aadc/a20d/2ca905cbdfec3bf306fbe70e1ca34a8a?Expires=1699833600&Signature=UdhxWsqWNaFPVYRQR2BywbacMhq8bf1IKHxb9JMgBGKERxpzcPVzDRfozFq2CHgeR62jUwhPApqUiNlRxTrK-p9xFYxLUJEnCBUK~KZefSygBebL~AU-~BJ7njpLqN4UAmwIN~sCH5ugWqUUfP2HRdENjAEFzCqdG9XfWyGCwinAoSs4Nlky8wPdWo2YFTgw~H0jKvF4axGlNJvj2awW4-7t2F6OMUaoo3bNdmnlJvOmNVChiXOPrx1x7W~46GwXlUGsrsHYdW4JWrpLRuwKOC1gFW72hPaj~yITFMn5k3GGsDRBEpo5Uc9KKRwm2IilvuJ-Eo-uok4WmwouNwxPuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                Title: "Orange",
                Item: "63 items"
            },  
        ],
        products: [ 
            {
                id: 1,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/17d8/db7f/3d627d5dff7a21f5589732970e0ecc60?Expires=1701043200&Signature=T1ym21wgpOMeSHRpW04M4XROxNTB4KIcR~YzLbvHDTE0OGWDHWjF15cDB4oGQLmPIsU7JQ7ygIjU9zfxEhaxc0Chx8W3uRdvT0rbujS~XDsYwXMCV0TKtn054r-9WQHlVZRZ0wTEpbsuGOKD9~6G35aN1Bhsr2Qb4CwwrUDiFwmjkrRDETfHCkdGqKpEk7nOd4i3Sw3IB1ln1LQa-Z6K3eW4PRHE1SE63TCGLFNpZay1dx-QFrDhbTkxjkd8ZsKgR11PCnrHTpvR43MhF7CRYWpTtNHOe8hmb6SnpvlkRgkoBGywJgVfMZ6DG0rXzJYLWoPEfeU4rk56xK4r2HaPCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 2,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#3BB77E"
            },
            {
                id: 2,
                tag: "Hot",
                image: "https://s3-alpha-sig.figma.com/img/2460/9b48/1186872b4c861e65b3ad6f46536a194f?Expires=1701043200&Signature=f814fBBaAMJJOpsj9xsQ-65vcDX97-1lbh8eeQ4JeOCo301NaKiYHKzFofe6GiDfc6PuVHlQirbIbPhnrZS6D3nPECClhsnTUCJxQYNkx9prtoXmn62K~T9iZusgp3u3NAqaLf456oXV4HrroYBz908bSnrr5bQUxTwRM0UQzPV8cCQnm9QnrY0e6f~B7cWRO5ZBEg4JQYxLOQCZknJwSsxZSbX1a4cNFSemBRayaS1d~SDJqil4RK05gq0OSMJZcGU-Fh96kiVwl~FIHZNJdHJN6vDG0roHnFArw05hO9AVNlJcHqgusLetr8HQFeO~~bu4Y3TfOsf3WxaUjJxtQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                rate: 5,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FD6E6E"
            },
            {
                id: 3,
                tag: "Sale",
                image: "https://s3-alpha-sig.figma.com/img/6667/38db/f36fd0ac0722f68e84acd3769588855f?Expires=1701043200&Signature=WYS38HUC9aElWvB8guaqQFjGEukX32x8hm4Ub13tpQPphMIBxpkKFQ5NthQc45CriUsWO-MdmQloVgYLO~~Fz3PEEwCQmrxIUGGjCE-qk~YPrzXFC3DdL3MzX8gBBdSKK-O2RuA5cW6kPRNM-60i9SP54JIc7KwSzm9SBfV5Z98FD5Y1ot9UQLt2k3YmSlsTk0fmWORG3kdf113N0NPJ2q8QHYIkNqjuKmITuAZg5FzTvGqFB5JREB6jgrNGSFuwubYYywzI-gVILv9gOc2urmN2MfP5k3AZf-7w6AA0mpx6mqSoWUvgWQA6glFlAVuW9l7Y~XinyPGLlFqf5wFDgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "All Natural Italian-Style Chicken Meatballs",
                rate: 1,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FDC040"
            },
            {
                id: 4,
                tag: "Sle",
                image:"https://s3-alpha-sig.figma.com/img/8b45/4a65/7d09e0d193461fe0cf5fe4d9cba8cad9?Expires=1701043200&Signature=Kx31v92EQ~bnZT7F8SJTmgOFGmNs5J3Kr7WO29HBgCejDmmsWFI88Qr8O7ziP2iwqCRqmS6FyGNJK9wm5bEG2bc1T16Uop4HlbhIAXNQo69XLUTCn8D-Mu7Y~bjuIYgd6R1851rXj0foz2p1La5aFjkTTE9af1lusumskfhPyRHsmD~mOx79B1zV27vIll02jbI2dOhUE5~~ZVXWOH5HPmoW~lDDoi8-iWgQqeylto6W-~~MyxtNLqR0Cc~HQBRm67MFNNgJWNdoo5sm2CHdP02Wf0pVPosTXaeR-55Vkviwqub5-Vuj6OW~E4~RsoSVGp1xCB-L5-oibjs2QyPvWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: ""
            },
            {
                id: 5,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/40ab/8386/1edbcb39cf2b176a6b5084a096d0c9a4?Expires=1701043200&Signature=Knm6W0jRSjH4u~GuBqK1OAsJSUdFPg9tUubRmCHPHJuSzEdyVDhPw6k3NCHI7h98w13RpnUaorS~V~wJ0QJoa3XhtEBMgteFY2PvgOkdzLZlFiYxzPAPgcijiE29-9WCR7Y1cNBFMkLesy2WkeJFyz84PM~~QIiwKM3Y2PBX-7VRpN51RRd3A2FS6iL3e-CbR24YDJY9REsu0nq9jZ0PaLjtRcnAxogsZHfGRDANFUUYze4D85FVofOAjyojIg4lk7zKOdB6E~zUOuSr8t-kJqH1h-UuZqcWeIzyIW7r3uHNG9wDx1sEKG6W02T8-WeSfpVkjhJd-OzEAJq~dBqQow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: ""

            },
            {
                id: 6,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/2d48/0a8f/210cdb0f5871f9d6dc633450452ab720?Expires=1701043200&Signature=Y-Xa7bKLU0IyQZiqTrMOO9iP0j~eJOobiFVPDyxYfERbEVnIfaA3y79oqp~CV1oWQlRXrSV6qzbNaoTCu-hEYXQRMxVx03xWav7C~DCworY3-Sb7e9k6HpmCSUUN64gMhlQK~QLUOIpPYqrGsZZBuyvKb2ZVsXmZ~pzk8v939KB4bWSOSXPj1zPzmgsKFd8Vexpn85maR-7~dizEAnZzoHst1-2W~D2YrbpYzofCbov7pggl2GxL67wgdOXz19qasroArL54gnkujBQhqo4bT3f5ADmR9v7gn2jkrWNRXzs9M63N8RAJ6iFpKGjiS~fqpfiq4AR6wrtEQd4lE2VNxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Blue Diamond Almonds Lightly Salted Vegetable",
                rate: 3,
                description: "500 gram",
                sellPrice: "$2.51",
                discountPercentage: 17,
                discountPrice: "$3.03",
                tag_color: ""
            },
            {
                id: 7,
                tag: "Sale",
                image:"https://s3-alpha-sig.figma.com/img/4c35/37e0/b383c32aa0cf53ae7651240f5bb90bbf?Expires=1701043200&Signature=C-3ptHV7JoSsQriJ~pFDNEjSXWgsvAtQYCOJ1c5tnU-y-ETuN6UNNCR6qpw1RWsd4lAt~3obGs4b3cU4tuE~7bmolGDoHh8Q0OsWe6asWRsuc7GPyxVCS02MR8o2fH5ZwAl2Fid-Qj8VynGU~CCYJQYPrmL-J4Sk6OJ5WY8hiVsvIQj9MnMIJVF08SxgJ4sW7owMdavpzsxgW1E7qEKSBrwhatLgs78dnmBdL0Lb1f3Bu4kxAfrEIO8M08L-l-kvdCc7Q4iKRONdZgiOQwn~IH-yGwUqwWoh9R5nyUH7l3sxulVLkXYL2ih20A9mLbcX8Qif0JJp~ait4NuCLhHcHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" ,
                category: "Hodo Foods",
                name: "Chobani Complete Vanilla Greek Yogurt",
                rate: 4,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: "$2.03",
                tag_color: "#FDC040"
            },
            {
                id: 8,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/2190/48fe/84dbf34790f69cce601604ba8d38d582?Expires=1701043200&Signature=o5X9yt98el2lRZhztDj5z5ns0T3DzDR~hvqPD8I470y9NtQC8pZ75v13IZYjFzpXLTdZa48hGHejBIUBVsKrHSzL0PVokj-TqbSYxd4nsW8y4Jxvm8yPoQXXULrGMTUSgQJbwi0tpRFW7pyAosxl61SYUz~lJNy1~7pS97emEUYOmd3Ii9rcYOgXJNdVr2l4NSAYelL~lm8x7Mvt~iMuqgozLnVUTH9SeCV5ErZHcbqo0YqGPb8-qVN~t-C7kMn74TYikTA2eTzB-CTLBJIpDnnMrbTb2doMrzsGczBKhEtBbaJ0-1WHM3hPUSEjBxZZfu3n94JkWdpyQOQOlddx2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Canada Dry GInger Ale-2L Bottle-200ml-400g",
                rate: 2,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: ""
            },
            {
                id: 9,
                tag: "-17%",
                image: "https://s3-alpha-sig.figma.com/img/b276/d8b7/833567cc5ca946f1cf51704fd32be2e4?Expires=1701043200&Signature=ERqWLKNHMp0WwDP-rxyY6qR3h1jePgcdbOh3Pmoi5VE3KeKsyGvSNAzIdBiquAtTHKqi~E3Bj~p4Xb2iWLnF9jApQ1n-aYMz~fKqPB07pnN4fNlviYYZUBeAWH6Y8IsIwZI4a6E8qpaCas9TzXsTFim8icqAUFTSmxbfrrL3IwImR3vT-9EwTo6pq8w5NWb2B3C8Scbsc55UWxW817ekP4U0SWCMdfbK8tLcYj~7fdLwJCdAuB1be8b~vg9KLXAEz2CGTCe-VDTtvPZsauuwXtWT5h1H8c-YAZ-V6kPpe4Ln-SuuXyHNsMwRAwtIUkJ0FRaIuCXZaZCKx5go-IAUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Encore Seafoods Stuffed Alaskan Salmon",
                rate: 5,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: ""
            },
            {
                id: 10,
                tag: "Hot",
                image: "https://s3-alpha-sig.figma.com/img/53b7/049c/d4d87292c3766771cdc858ab456c1e20?Expires=1701043200&Signature=YubvKHwfLNrmQC9wDoEaWWnmFyZTFtmwws4tJ0aHyh4pUOg8mfvzUv1xfvWiFq-GTm0cbN03wX04z2DQxBQTzVGaVHufDFRd3A3AAySDA2c7ZB3tzOkh6QvHJ5UWLxg8weeJaetbq1cTEUevQVCFafkJ~kCs2nWzBVkN5LiiWfCX-CWWhhixgba2ziB9qkzLbi6bGdOhwt~ro6JHnsnSJEt6LJ1T7yBux4k8eE1Rw6WSBHp8Vp3I3Pn8DSJM5T6sWBNfl6C8~MzaAl4MX7zvyWW4imI79M1a0XYJ7jDFm8NLuFFtbAcvtlKQ5gcUwG3V9EummukXrvJw4PgeMrqnEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                category: "Hodo Foods",
                name: "Gorton’s Beer Battered Fish Fillets with soft paper",
                rate: 3,
                description: "500 gram",
                sellPrice: "$11.4",
                discountPercentage: 17,
                discountPrice: '$2.03',
                tag_color: "#FD6E6E"
            },
        ],   
    }),
    getters:{

    },
    action:{

    },
})
const cards = [
    {
        title: "Wear the Era (1968)",
        barterWorth: 1096,
        hired: 23,
        totalHiring: 50,
        cardImg: "https://images.unsplash.com/photo-1529873597343-8dd8429aa148?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        socialMedia: "Instagram"
    },
    {
        title: "The Space Age (1971)",
        barterWorth: 1250,
        hired: 12,
        totalHiring: 40,
        cardImg: "https://images.unsplash.com/photo-1526635090919-b5d79657c5a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        socialMedia: "Facebook"
    },
    {
        title: "Electric Groove (1975)",
        barterWorth: 850,
        hired: 28,
        totalHiring: 30,
        cardImg: "https://unsplash.com/photos/black-and-grey-electric-minibike-HG3Zy9sCCUg",
        icon: "https://www.zarla.com/images/zarla-50-famous-brand-logos-to-inspire-you-5476x3651-20220425.jpeg?crop=2:1,smart&width=730",
        socialMedia: "TikTok"
    },
    {
        title: "Future Forward (1982)",
        barterWorth: 1340,
        hired: 45,
        totalHiring: 60,
        cardImg: "https://unsplash.com/photos/man-walking-through-pathway-Ns-BIiW_cNU",
        icon: "https://www.zarla.com/images/nike-logo-2400x2400-20223105-1.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Twitter"
    },
    {
        title: "Retro Vibes (1990)",
        barterWorth: 1050,
        hired: 39,
        totalHiring: 45,
        cardImg: "https://images.unsplash.com/photo-1729040268167-b89ff6b163c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/apple-logo-2400x2400-20220512-2.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Instagram"
    },
    {
        title: "Neo-Futurism (2000)",
        barterWorth: 1400,
        hired: 55,
        totalHiring: 70,
        cardImg: "https://images.unsplash.com/photo-1580136608071-ea92ad6f35a8?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/zarla-chanel-monogram-logo-2400x2400-20240701.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "LinkedIn"
    },
    {
        title: "Vintage Pop (1960)",
        barterWorth: 1100,
        hired: 70,
        totalHiring: 80,
        cardImg: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/wwf-logo-2400x2400-20223105-1.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "YouTube"
    },
    {
        title: "Electric Dreams (1984)",
        barterWorth: 900,
        hired: 12,
        totalHiring: 50,
        cardImg: "https://images.unsplash.com/photo-1584977382228-3ba22eca2e52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "TikTok"
    },
    {
        title: "Postmodern Pulse (1995)",
        barterWorth: 1150,
        hired: 18,
        totalHiring: 40,
        cardImg: "https://images.unsplash.com/photo-1610457242540-7e6a2a03c3e2",
        icon: "https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Facebook"
    },
    {
        title: "Cyber Chic (2001)",
        barterWorth: 1200,
        hired: 25,
        totalHiring: 60,
        cardImg: "https://images.unsplash.com/photo-1603071283141-f616da845f2d",
        icon: "https://www.zarla.com/images/walmart-logo-2400x2400-20220513-3.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Instagram"
    },
    {
        title: "Punk Rock (1978)",
        barterWorth: 980,
        hired: 5,
        totalHiring: 20,
        cardImg: "https://images.unsplash.com/photo-1580379826498-d91ff5369e91",
        icon: "https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Twitter"
    },
    {
        title: "Urban Revolution (1999)",
        barterWorth: 1300,
        hired: 50,
        totalHiring: 75,
        cardImg: "https://images.unsplash.com/photo-1566012288-5b4ad4c84c0a",
        icon: "https://www.zarla.com/images/coca-cola-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "YouTube"
    }
];


export default cards;
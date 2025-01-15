const cards = [
    {
        title: "Wear the Era (1968)",
        barterWorth: 1096,
        hired: 23,
        totalHiring: 50,
        cardImg: "https://images.unsplash.com/photo-1529873597343-8dd8429aa148?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/disney-logo-2400x2400-20223105-1.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Instagram"
    },
    {
        title: "The Space Age (1971)",
        barterWorth: 1250,
        hired: 12,
        totalHiring: 40,
        cardImg: "https://images.unsplash.com/photo-1526635090919-b5d79657c5a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/pepsi-logo-2400x2400-20220513-1.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Facebook"
    },
    {
        title: "Retro Vibes (1990)",
        barterWorth: 1050,
        hired: 39,
        totalHiring: 45,
        cardImg: "https://images.unsplash.com/photo-1729040268167-b89ff6b163c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/apple-logo-2400x2400-20220512-3.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Instagram"
    },
    {
        title: "Neo-Futurism (2000)",
        barterWorth: 1400,
        hired: 55,
        totalHiring: 70,
        cardImg: "https://images.unsplash.com/photo-1580136608071-ea92ad6f35a8?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/wwf-logo-2400x2400-20223105-1.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "LinkedIn"
    },
    {
        title: "Vintage Pop (1960)",
        barterWorth: 1100,
        hired: 70,
        totalHiring: 80,
        cardImg: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/national-geographic-logo-2400x2400-20223105-2.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "YouTube"
    },
    {
        title: "Electric Dreams (1984)",
        barterWorth: 900,
        hired: 12,
        totalHiring: 50,
        cardImg: "https://images.unsplash.com/photo-1584977382228-3ba22eca2e52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        socialMedia: "TikTok"
    },
    {
        title: "Postmodern Pulse (1995)",
        barterWorth: 1150,
        hired: 18,
        totalHiring: 40,
        cardImg: "https://images.unsplash.com/photo-1605646481836-5e5a98c6c756?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/shell-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Facebook"
    },
    {
        title: "Cyber Chic (2001)",
        barterWorth: 1200,
        hired: 25,
        totalHiring: 60,
        cardImg: "https://images.unsplash.com/photo-1626722420493-00b21e3b3c54?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Instagram"
    },
    {
        title: "Punk Rock (1978)",
        barterWorth: 980,
        hired: 5,
        totalHiring: 20,
        cardImg: "https://images.unsplash.com/photo-1588343508561-b8da673e72aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D1",
        icon: "https://www.zarla.com/images/colgate-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "Twitter"
    },
    {
        title: "Urban Revolution (1999)",
        barterWorth: 1300,
        hired: 50,
        totalHiring: 75,
        cardImg: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: "https://www.zarla.com/images/gap-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2",
        socialMedia: "YouTube"
    }
];


export default cards;
"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";

type Member = [string, string, string]; // name, pronouns, role
const groups: { title: string; people: Member[] }[] = [
    {
        title: "Admin Team", people: [
            ["Janine Sopp", "she/her", "Founding Director, Owner"],
            ["Olivia Hock", "she/her", "Admin Assistant, Youth Coordinator, Social Media"],
            ["Michael Gundlach", "he/him", "Studio Manager"],
            ["Gabrielle Tang", "she/they", "Director of Education"],
            ["Liam Kelly", "they/them", "Events Coordinator, Social Media"],
        ],
    },
    {
        title: "Instructors", people: [
            ["Amanda Gayle", "she/her", "Youth Instructor"],
            ["Atlas Thomas", "he/they", "Adult Instructor"],
            ["Barbara Stone", "she/her", "Adult Instructor"],
            ["Dalia Tomilchiki", "they/them", "Adult Instructor"],
            ["Carmen Cespedes", "she/her", "Adult Instructor"],
            ["Jacob Reinstein", "he/him", "Adult + Youth Instructor"],
            ["Jessica Thompson-Lee", "she/her", "Adult Instructor"],
            ["Joanne Lee", "she/her", "Adult Instructor"],
            ["Johnathan Huang", "he/him", "Adult Instructor"],
            ["Ian Privett", "he/him", "Adult + Youth Instructor"],
            ["Nina Berinstein", "she/her", "Adult Instructor"],
            ["Shauna Fahley", "she/her", "Adult Instructor"],
            ["Minkyung Choi", "she/her", "Adult Instructor"],
        ],
    },
    {
        title: "Specialty Instructors · TryNights & Private Lessons", people: [
            ["Hannah Groff", "she/her", "TryNights, Private Lessons"],
            ["Kat Lee", "she/her", "TryNights, Private Lessons"],
            ["Maya Blair", "she/her", "Private Lessons"],
            ["Nikki Brown", "she/her", "TryNights, Private Lessons"],
            ["Ryan Chang", "he/him", "TryNights, Private Lessons"],
            ["Senia Cade", "she/her", "Private Lessons"],
        ],
    },
    {
        title: "Tech Team", people: [
            ["Caroline Vieregge", "she/her", "Studio Tech"],
            ["Ian Privett", "he/him", "Assistant Studio Manager"],
            ["Haley Kay", "she/her", "Assistant Studio Manager"],
            ["Holland Meyer", "she/her", "Studio Tech"],
            ["Monty Mattison", "he/him", "Studio Tech, Maintenance"],
            ["Siri Burt", "she/her", "Studio Tech"],
            ["Dalia Tomilchik", "any", "Studio Tech"],
        ],
    },
    {
        title: "Support Staff · Clay Ops, Monitors & Assistants", people: [
            ["Elly Cimperman", "she/her", "Kids' Class Assistant"],
            ["Elsa Zanandrea-Stern", "she/her", "Clay Operations"],
            ["Emily Brodrick", "she/her", "Kids' Class Assistant"],
            ["Ivonne Tejada", "she/her", "Studio Monitor"],
            ["Melina Minaya", "she/her", "Studio Monitor"],
            ["Nazuk Kochhar", "she/her", "Studio Monitor"],
            ["Nicky Fuganjananon", "she/her", "Studio Monitor"],
            ["Odile Henriques", "she/her", "Clay Operations"],
            ["Peter Carmine", "he/him", "Studio Monitor"],
            ["Sahiba Johar", "she/her", "Clay Operations"],
            ["Seyeon K Seon", "she/her", "Clay Operations"],
            ["Spinks", "she/her", "Studio Monitor"],
        ],
    },
];

const wrap: React.CSSProperties = { maxWidth: 1080, margin: 0, padding: 0 };

const TeamMain = () => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{ minHeight: "50vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.30), rgba(26,20,17,.55)), url(/assets/img/clayspace/about/about-1.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 58px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.4rem,6vw,4rem)", margin: 0, lineHeight: 1.03, letterSpacing: "-.02em" }}>Meet the Team</h1>
                    </div>
                </section>

                <section style={{ padding: "64px 48px 20px clamp(24px, 14vw, 140px)" }}>
                    <div style={{ maxWidth: 820, margin: 0 }}>
                        <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "#1F1A17", margin: 0 }}>
                            Serving and nurturing a clay community is a team effort. We celebrate everyone who juggles delicate work, moves hundreds of ceramic pieces through each process, and answers a million questions daily — with warmth and a smile.
                        </p>
                    </div>
                </section>

                {groups.map((g, gi) => (
                    <section key={gi} style={{ padding: "34px 48px 34px clamp(24px, 14vw, 140px)", background: gi % 2 ? "#f6f3f0" : "transparent" }}>
                        <div style={wrap}>
                            <h2 style={{ fontSize: "1.4rem", letterSpacing: "-.01em", margin: "0 0 18px" }}>{g.title}</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "2px 24px" }}>
                                {g.people.map((p, pi) => (
                                    <div key={pi} style={{ padding: "12px 0", borderBottom: "1px solid #ece7e2" }}>
                                        <b style={{ fontSize: ".98rem" }}>{p[0]}</b> <span style={{ color: "#9a928c", fontSize: ".76rem" }}>{p[1]}</span>
                                        <div style={{ color: "#5a524c", fontSize: ".84rem", marginTop: 1 }}>{p[2]}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                <div style={{ height: 50 }} />
            </main>

            <ShopModernFooter />
        </>
    );
};

export default TeamMain;

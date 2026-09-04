"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";

interface Sec { num: string; title: string; techniques: string[]; tools: string[]; }

const sections: Sec[] = [
    {
        num: "I", title: "Clay Preparation",
        techniques: ["Slaking — dry clay dissolved in water", "Blunging — mechanical mixing of clay and water into slurry", "Sieving / screening — removing rock and debris", "Levigation — settling by particle size to refine", "Drying to plastic state on plaster or canvas", "Wedging — ram's head, spiral (chrysanthemum), cut-and-slam", "Aging — bacterial action improving plasticity", "Reclaiming — reprocessing scrap and trimmings", "De-airing"],
        tools: ["Wedging table (plaster slab, concrete, canvas-covered)", "Wire clay cutter / harp cutter", "Clay mixer, blunger", "Pug mill (de-airing or non-de-airing)", "Sieves — 30 to 100 mesh, sieve brushes", "Plaster bats and drying slabs", "Reclaim bins, buckets, clay traps", "Scale, moisture meter", "Damp box / damp cabinet"],
    },
    {
        num: "II", title: "Hand-Building",
        techniques: ["Pinching — thumb-and-finger wall drawing", "Coiling — rope stacking, scoring, blending, paddling", "Soft slab — draping, wrapping, curving", "Hard slab — leather-hard construction, mitered joins", "Press molding — clay pressed into a form", "Hump / slump molding — over or into a mold", "Solid sculpting and hollowing", "Scoring and slipping — the universal join method", "Paddling and scraping — compressing and refining walls", "Coil-and-throw hybrid"],
        tools: ["Wooden and metal ribs (kidney, straight, serrated)", "Serrated scraper, Surform / Sureform rasp", "Scoring tool, needle tool, fork, toothbrush", "Wooden and rubber paddles, anvils", "Rolling pin, slab roller, thickness guide sticks", "Canvas or duck cloth work surface", "Slab mat, drape molds, plaster and bisque molds", "Extruder with hollow and solid dies", "Modeling tools — loop, wire-end, boxwood", "Calipers, ruler, square, protractor", "Banding wheel / turntable", "Spray bottle, sponges, brushes"],
    },
    {
        num: "III", title: "Wheel Throwing",
        techniques: ["Wedging and ball weighing", "Attaching to wheel head or bat", "Coning up and down", "Centering", "Opening and setting the floor", "Pulling the wall — first, second, third pull", "Collaring and necking in", "Shaping and swelling", "Rim compression and finishing", "Cutting off with wire", "Throwing off the hump — production small ware", "Sectional throwing — joining thrown parts for scale", "Trimming / turning — foot ring, undercutting, chattering", "Altering — faceting, darting, squaring, paddling, fluting", "Pulling handles, throwing spouts, knobs, and lids", "Gallery cutting and lid fitting", "Repetition throwing to weight and gauge"],
        tools: ["Potter's wheel — electric, kick, treadle", "Bats — plastic, plaster, Masonite, bat pins, Hydro-Bats", "Throwing ribs — wood, metal, rubber, Giffin-style profiles", "Sponge, sponge-on-a-stick, chamois", "Needle tool, cut-off wire (plain and twisted)", "Wooden knife, trimming knife", "Calipers (inside/outside), gauge stick, throwing gauge", "Trimming tools — loop, ribbon, hook, Dolan and Bison-style", "Chuck, chum, foam bat, Giffin Grip", "Hole cutter, fluting and faceting tools, harp", "Rubber kidney, wooden modeling ribs", "Water bucket, splash pan, apron, towels"],
    },
    {
        num: "IV", title: "Mold-Based & Industrial Forming",
        techniques: ["Slip casting — drain-cast and solid-cast", "Multi-part mold casting", "Deflocculation and slip control", "Jiggering / jolleying — profile tool on rotating mold", "Ram pressing — clay between porous dies", "Extrusion — tubes, handles, architectural profiles", "Dry pressing / isostatic pressing", "Mold making — model, case, block, running plaster", "3D clay printing (paste extrusion)"],
        tools: ["Plaster (pottery plaster, #1 grade), mixing buckets, scale", "Mold boards, cottle, shims, natches, soft soap release", "Splash molds, case molds, running templates and horses", "Casting slip, hydrometer, viscosity cup, Brookfield-style viscometer", "Sodium silicate, Darvan, soda ash", "Jigger arm and profile tools", "Ram press, hydraulic press", "Extruder (wall-mount or table), die set, expansion box", "Clay 3D printer, air compressor, delta or gantry frame", "CNC mill for plaster models"],
    },
    {
        num: "V", title: "Surface Treatment — Green to Leather-Hard",
        techniques: ["Burnishing — compressing surface to a sheen", "Slip application — dip, pour, brush, trail, feather, marble", "Terra sigillata — levigated ultra-fine slip, buffed", "Engobe painting", "Sgraffito — scratching through slip", "Mishima / inlay — carved lines filled and scraped flush", "Carving, fluting, faceting, chattering", "Piercing / reticulation", "Impressing and stamping — seals, roulettes, textiles, cord", "Sprigging — applied molded relief", "Nerikomi / neriage / agateware — laminated colored clays", "Resist work — wax, latex, tape, paper"],
        tools: ["Burnishing stones, polished steel spoons, plastic bags", "Slip trailers, bulb syringes, squeeze bottles", "Sgraffito tools, dental picks, loop and ribbon carvers", "Mishima tools, scrapers, metal kidneys", "Stamps (bisque, wood, rubber), roulettes, texture rollers and mats", "Sprig molds", "Wire cutters and single-wire slicers for nerikomi blocks", "Wax resist, latex resist, tape, stencils, shellac", "Brushes — hake, sumi, liner, fan, mop", "Banding wheel", "Sponges, chamois, soft cloths"],
    },
    {
        num: "VI", title: "Glaze Mixing & Application",
        techniques: ["Weighing and batching from recipe", "Sieving glaze (80–100 mesh, twice)", "Adjusting specific gravity and thixotropy", "Flocculating and deflocculating", "Dipping, pouring, brushing, spraying, airbrushing", "Layering and overlapping", "Glaze trailing and glaze inlay", "Wax resist and masking", "Raw glazing / single firing", "Dry-footing and waxing feet", "Wadding and stilting"],
        tools: ["Gram scale (0.1g resolution), larger batch scale", "Glaze buckets, mixing lids, drill-mounted / Jiffy mixer", "Sieves 60–120 mesh, sieve brush, rib", "Hydrometer, specific gravity cup, viscosity cup", "Dipping tongs, glaze claws", "Spray booth with exhaust, spray gun, compressor, airbrush", "Banding wheel, turntable", "Wax pot / wax resist, latex, brushes for wax", "Respirator (P100), nitrile gloves, apron, goggles", "Stilts, wads, kiln wash, alumina hydrate"],
    },
    {
        num: "VII", title: "Decoration Relative to Glaze",
        techniques: ["Underglaze painting, pencils, crayons, washes", "In-glaze — painting into unfired raw glaze (maiolica)", "Overglaze enamel — low-fire third firing", "Lustre — metallic salts, reduction third firing", "Transfer printing — engraved plate to tissue to pot", "Decal application — waterslide, screenprinted, laser", "Screenprinting directly or onto transfer paper", "Gilding — liquid bright gold, burnish gold", "Stencils, sponging, splattering, resist patterning"],
        tools: ["Underglaze pencils, crayons, chalks, pens", "Fine liner and majolica brushes, sumi brushes", "Screenprinting frame, squeegee, ceramic ink, emulsion", "Decal paper, cover coat, water tray, rubber squeegee/roller", "Lustre brushes (dedicated, never reused)", "Gold pen, agate burnisher", "Sponges (natural and cut), stencil film, frisket", "Airbrush and stencils", "Third-fire kiln or dedicated low-fire schedule"],
    },
    {
        num: "VIII", title: "Drying & Bisque",
        techniques: ["Controlled even drying; slowing evaporation", "Damp-boxing work-in-progress", "Candling — driving off residual moisture before firing", "Bisque firing — burnout and porosity setting", "Loading bisque — nesting, stacking, rim-to-rim"],
        tools: ["Damp box / damp cabinet, plastic sheeting, dry cleaner bags", "Drying racks, ware boards, ware carts", "Foam, bubble wrap, newsprint for support", "Kiln shelves, posts, stilts", "Kiln vent, thermocouple, controller"],
    },
    {
        num: "IX", title: "Firing",
        techniques: ["Cone-based firing (heat work, not temperature)", "Ramp / soak / hold programming", "Down-firing and controlled cooling", "Quartz inversion management (573°C)", "Oxidation firing", "Reduction firing — body, glaze, and reduction cooling", "Neutral atmosphere", "Damper and burner adjustment", "Kiln loading strategy and heat-distribution management", "Multi-day stoking (wood)"],
        tools: ["Kilns — electric, gas, propane, oil, wood, raku, pit", "Kiln types — updraft, downdraft, crossdraft, anagama, noborigama, tunnel, shuttle, top/front-loading", "Digital controller, kiln sitter, timer", "Pyrometric cones (large, small, self-supporting), cone packs, witness cones", "Thermocouple, pyrometer, cone bars/rings", "Kiln shelves (cordierite, SiC, nitride-bonded), posts, wadding", "Kiln wash, alumina, silica", "Damper, burners, gas train, safety shutoff", "Kiln vent / downdraft ventilation system", "Welding gloves, face shield, kiln goggles (IR-rated)", "Kiln brick, ceramic fiber, arch formers (for building)"],
    },
    {
        num: "X", title: "Alternative & Atmospheric Firing",
        techniques: ["Raku — hot removal into combustibles; crackle and carbon", "Naked raku — sacrificial slip peeled after reduction", "Horsehair, feather, ferric chloride on hot ware", "Pit firing — layered combustibles and salts", "Saggar firing — enclosed micro-atmosphere", "Obvara — fermented flour bath quench", "Sawdust / smoke firing", "Salt and soda vapor glazing", "Wood firing — flame path, ash deposit, side stoking"],
        tools: ["Raku kiln (fiber, top-hat, or barrel), raku tongs", "Reduction chambers — metal cans, trash cans, pits", "Combustibles — sawdust, newspaper, straw, leaves, seaweed", "Colorants — copper carbonate, salt, ferric chloride, copper wire", "Saggars, lids, wadding", "Salt/soda mixture, angle iron and pipe delivery, spray rig", "Wood supply, splitting equipment, stoking ports", "Heat-resistant gloves, face shield, respirator, tongs, water buckets", "Fire extinguisher, sand, clear firing zone"],
    },
    {
        num: "XI", title: "Post-Firing",
        techniques: ["Grinding and lapping feet", "Wet sanding", "Cold finishing — wax, pigment, patina, paint", "Assembly and mixed-media joining", "Kintsugi — urushi lacquer and gold seam repair", "Conservation and reversible restoration"],
        tools: ["Angle grinder, diamond pads (60–3000 grit), diamond bits", "Bench grinder, silicon carbide stone, wet lapping wheel", "Dremel / rotary tool", "Epoxy, ceramic adhesives, urushi lacquer, gold/silver powder", "Drills with masonry bits, tap and die for hardware", "Buffing wheels, wax, microcrystalline wax", "Dust mask/respirator, eye protection, wet grinding setup"],
    },
    {
        num: "XII", title: "Testing & Troubleshooting",
        techniques: ["Absorption test for vitrification", "Shrinkage bar test", "Firing-range determination", "Glaze fit diagnosis — crazing vs. shivering", "Calcite / ice-water thermal shock test", "Line blends, biaxial, triaxial, quadraxial grids", "Fault diagnosis — crawling, pinholing, blistering, bloating, dunting, lime pop, black coring", "Leach and food-safety testing"],
        tools: ["Test tiles, shrinkage bars, tile racks", "Gram scale, calipers, ruler", "Test kiln", "Glaze calculation software (Insight, Glazy, Matrix)", "Lab glassware, syringes, small mixing cups for blends", "Lemon juice / vinegar spot test, commercial leach test kits", "Notebook, database, labeling system, photo documentation"],
    },
    {
        num: "XIII", title: "Studio Infrastructure & Safety",
        techniques: ["Wet cleaning only — never sweep or dry-sand", "Local exhaust and kiln venting", "Heavy-metal handling protocol", "Water reclamation and clay-trap maintenance", "Ergonomic wheel and wedging posture"],
        tools: ["Clay trap / sink separator", "Wet-mop, HEPA vacuum, spray-down system", "P100 respirator, fit-test kit, dust masks", "Nitrile gloves, apron, safety glasses", "Kiln vent, room exhaust fan, CO detector", "Fire extinguisher, first aid, eyewash", "Ware carts, shelving, drying racks", "Slab roller, extruder, wheel, kiln — the four capital purchases", "Labels, SDS binder, inventory system"],
    },
];

const wrap: React.CSSProperties = { maxWidth: 1120, margin: 0, padding: 0 };
const listStyle: React.CSSProperties = { margin: 0, paddingLeft: 18, color: "#413a34", fontSize: ".92rem", lineHeight: 1.6 };

const LearnMain = () => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{ minHeight: "50vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.34), rgba(26,20,17,.58)), url(/assets/img/clayspace/products/product-09.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 56px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.1rem,5vw,3.6rem)", margin: 0, lineHeight: 1.05, letterSpacing: "-.02em" }}>Pottery &amp; Ceramics — Techniques and Tools</h1>
                        <p style={{ color: "rgba(255,255,255,.85)", margin: "12px 0 0", fontSize: "1.05rem", maxWidth: 680 }}>Each technique paired with the equipment it actually requires.</p>
                    </div>
                </section>

                {/* accordion — one collapsed section per row; click a headline to expand */}
                <section style={{ padding: "44px 48px 80px clamp(24px, 14vw, 140px)" }}>
                    <div style={{ maxWidth: 780, margin: 0 }}>
                        {sections.map((s) => (
                            <details key={s.num} className="learn-item" style={{ borderBottom: "1px solid #E7E2DD" }}>
                                <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "22px 2px", fontWeight: 800, fontSize: "clamp(1.1rem,2.6vw,1.5rem)", color: "#1F1A17", letterSpacing: "-.01em" }}>
                                    {s.title}
                                    <span className="learn-plus" style={{ color: "var(--cs-orange)", fontSize: "1.7rem", lineHeight: 1, flex: "none", transition: "transform .2s ease" }}>+</span>
                                </summary>
                                <div style={{ padding: "2px 2px 30px" }}>
                                    <h3 style={{ fontSize: ".74rem", fontWeight: 900, letterSpacing: ".1em", textTransform: "uppercase", color: "#9a928c", margin: "0 0 10px" }}>Techniques</h3>
                                    <ul style={listStyle}>{s.techniques.map((t, j) => <li key={j} style={{ marginBottom: 4 }}>{t}</li>)}</ul>
                                    <h3 style={{ fontSize: ".74rem", fontWeight: 900, letterSpacing: ".1em", textTransform: "uppercase", color: "#9a928c", margin: "24px 0 10px" }}>Tools</h3>
                                    <ul style={listStyle}>{s.tools.map((t, j) => <li key={j} style={{ marginBottom: 4 }}>{t}</li>)}</ul>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
                <style dangerouslySetInnerHTML={{ __html: ".learn-item[open] .learn-plus{transform:rotate(45deg)}" }} />
            </main>

            <ShopModernFooter />
        </>
    );
};

export default LearnMain;

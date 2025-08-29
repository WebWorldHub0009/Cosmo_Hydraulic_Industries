// src/data/productData.js
import { FaToolbox, FaWater, FaWrench, FaCogs, FaBolt, FaLayerGroup } from "react-icons/fa";

import p1 from "../assets/images/productsPage/p1.png";
import p2 from "../assets/images/productsPage/p2.png";
import p3 from "../assets/images/productsPage/p3.png";
import p4 from "../assets/images/productsPage/p4.png";
import p5 from "../assets/images/productsPage/p5.png";
import p6 from "../assets/images/productsPage/p6.png";
import p7 from "../assets/images/productsPage/p7.png";
import p8 from "../assets/images/productsPage/p8.png";
import p9 from "../assets/images/productsPage/p9.png";
import p10 from "../assets/images/productsPage/p10.png";
import p11 from "../assets/images/productsPage/p11.png";
import p12 from "../assets/images/productsPage/p12.png";
import p13 from "../assets/images/productsPage/p13.png";
import p14 from "../assets/images/productsPage/p14.png";
import p15 from "../assets/images/productsPage/p15.png";
import p16 from "../assets/images/productsPage/p16.png";
import p17 from "../assets/images/productsPage/17.png";
import p18 from "../assets/images/productsPage/18.png";
import p19 from "../assets/images/productsPage/19.png";
import p20 from "../assets/images/productsPage/20.png";
import p21 from "../assets/images/productsPage/21.png";


import p22 from "../assets/images/productsPage/p22.jpg";
import p23 from "../assets/images/productsPage/p23.jpg";
import p24 from "../assets/images/productsPage/p24.jpg";
import p25 from "../assets/images/productsPage/p25.png";
import p26 from "../assets/images/productsPage/p26.png";
import p27 from "../assets/images/productsPage/p27.jpg";
import p28 from "../assets/images/productsPage/p28.png";
import p29 from "../assets/images/productsPage/p29.jpg";
import p30 from "../assets/images/productsPage/p30.jpg";
import p31 from "../assets/images/productsPage/p31.jpg";
import p32 from "../assets/images/productsPage/p32.webp";
import p33 from "../assets/images/productsPage/p33.png";
// import p34 from "../assets/images/productsPage/p34.png";
import p35 from "../assets/images/productsPage/p35.png";
import p36 from "../assets/images/productsPage/p36.png";
import p37 from "../assets/images/productsPage/p37.jpg";
import p38 from "../assets/images/productsPage/p38.jpg";
import p39 from "../assets/images/productsPage/p39.jpg";
import p40 from "../assets/images/productsPage/p40.png";
import p41 from "../assets/images/productsPage/p41.jpg";
import p42 from "../assets/images/productsPage/p42.png";
import p43 from "../assets/images/productsPage/p43.jpg";
import p44 from "../assets/images/productsPage/p44.jpg";
import union from "../assets/images/productsPage/union.png";


import pp from "../assets/images/productsPage/pp.png";

const productData = [
    {
  name: "Allen Plug",
  slug: "allen-plug",
  category: "Fittings",
  tags: ["Sealing", "Reliable"],
  icons: [FaBolt, FaToolbox],
  image: p22,
  shortDescription: "Strong allen plugs for secure hydraulic sealing applications.",
  longDescription:
    "Our Allen Plugs are precision-engineered to provide secure and leak-free sealing in hydraulic and pneumatic systems. Built for reliability, they are designed to withstand high pressures and prevent fluid leakage. Their hexagonal socket head allows easy installation and removal with standard tools, saving maintenance time. Manufactured from premium-grade steel or stainless steel, they resist corrosion and mechanical wear, ensuring long service life. Compact yet strong, they are widely used in hydraulic blocks, valves, and machinery for safe sealing. A dependable solution for industries demanding high-performance sealing components.",
  specs: { material: "MS/SS", sizes: "1/8”–2” BSP/NPT" },
  features: ["Leak-proof sealing", "Easy hex-socket installation", "Corrosion resistant", "Durable under high pressure"],
},
{
  name: "Banjo Connector",
  slug: "banjo-connector",
  category: "Fittings",
  tags: ["Compact", "Leak-Free"],
  icons: [FaWater, FaCogs],
  image: p25,
  shortDescription: "Banjo connectors for compact, leak-proof hydraulic systems.",
  longDescription:
    "Our Banjo Connectors are designed for compact hydraulic assemblies where space efficiency and leak-proof performance are critical. Their hollow bolt and spherical union allow fluid transfer at 90° angles without restricting flow. Ideal for fuel, oil, and hydraulic lines, they provide secure and efficient connections in limited spaces. Built from high-strength steel or stainless steel, they deliver excellent resistance against corrosion and pressure. Perfect for automotive, construction, and industrial machinery, these connectors ensure reliability in demanding applications.",
  specs: { material: "MS/SS", pressure: "Up to 400 bar" },
  features: ["Compact design for tight spaces", "90° fluid transfer", "High-pressure durability", "Corrosion resistant"],
},
{
  name: "Banjo Tee Connector",
  slug: "banjo-tee-connector",
  category: "Fittings",
  tags: ["Triple Flow", "Secure"],
  icons: [FaLayerGroup, FaToolbox],
  image: p23,
  shortDescription: "Banjo tee connectors for multiple fluid pathways in tight spaces.",
  longDescription:
    "Our Banjo Tee Connectors allow efficient fluid distribution in three directions within compact hydraulic systems. With their tee-shaped design and hollow bolt mechanism, they enable multiple flow paths without leakage. Engineered from high-quality materials, these connectors deliver superior strength and resistance to pressure and vibration. Their precision threading ensures a tight seal, while the compact build saves installation space. Widely used in hydraulic, automotive, and industrial equipment, they guarantee smooth fluid transfer with minimal maintenance.",
  specs: { material: "MS/SS", pressure: "Up to 350 bar" },
  features: ["Triple-direction flow", "Leak-proof operation", "Space-saving design", "Durable under vibration"],
},
{
  name: "Bonded Seal",
  slug: "bonded-seal",
  category: "Seals",
  tags: ["Leak-Proof", "Durable"],
  icons: [FaBolt, FaWater],
  image: p24,
  shortDescription: "Reliable bonded seals designed for high-pressure conditions.",
  longDescription:
    "Our Bonded Seals, also known as Dowty Seals, are engineered for secure and leak-free sealing in high-pressure hydraulic systems. Each seal features an elastomer bonded to a metal washer, combining flexibility with strength. The metal washer ensures durability, while the elastomer provides excellent sealing performance under pressure. Resistant to oil, fuel, and various industrial fluids, they are ideal for harsh environments. Used in engines, pumps, and hydraulic machinery, these seals ensure long-lasting reliability and protection against fluid leakage.",
  specs: { material: "Metal + Elastomer", sizes: "1/4”–2”" },
  features: ["High-pressure resistance", "Oil & fuel compatible", "Durable metal-reinforced design", "Leak-proof performance"],
},
{
  name: "Bulkhead Elbow Coupling",
  slug: "bulkhead-elbow-coupling",
  category: "Fittings",
  tags: ["Secure", "Angle Mount"],
  icons: [FaWrench, FaCogs],
  image: p26,
  shortDescription: "Elbow couplings for bulkhead-mounted hydraulic connections.",
  longDescription:
    "Our Bulkhead Elbow Couplings are designed to provide secure and efficient 90° hydraulic connections through panels and enclosures. With a bulkhead-mounted design, they allow safe passage of fluid lines while maintaining system integrity. Manufactured from robust steel or stainless steel, these couplings ensure durability in high-pressure environments. Their corrosion-resistant finish makes them suitable for marine, industrial, and outdoor applications. Easy to install and maintain, they are widely used in machinery, hydraulic panels, and construction equipment for reliable performance.",
  specs: { material: "MS/SS", sizes: "1/4”–2” BSP/NPT" },
  features: ["90° angled flow", "Bulkhead panel mounting", "High-strength build", "Corrosion & wear resistance"],
},

{
  name: "Coupling Nut",
  slug: "coupling-nut",
  category: "Fittings",
  tags: ["Threaded", "Tight Fit"],
  icons: [FaToolbox, FaLayerGroup],
  image: p27,
  shortDescription: "High-strength coupling nuts for reliable hydraulic fastening.",
  longDescription:
    "Our Coupling Nuts are engineered for secure and precise fastening of threaded components in hydraulic and industrial systems. Designed with extended length, they ensure strong thread engagement and superior holding power. Manufactured from premium-grade steel or stainless steel, they provide durability under high torque and pressure conditions. Their corrosion-resistant finish ensures long-term performance in challenging environments. Commonly used for joining rods, bolts, and threaded fittings, coupling nuts offer reliability where strength and stability are essential.",
  specs: { material: "MS/SS", sizes: "M6–M48, custom sizes available" },
  features: ["Extended thread engagement", "Durable under high torque", "Corrosion resistant", "Secure and stable fastening"],
},
{
  name: "Equal Cross Coupling",
  slug: "equal-cross-coupling",
  category: "Fittings",
  tags: ["Balanced", "Multi-Directional"],
  icons: [FaWater, FaBolt],
  image: p28,
  shortDescription: "Cross couplings for balanced multi-directional flow systems.",
  longDescription:
    "Our Equal Cross Couplings are designed to split or combine fluid flow across four equal pathways, ensuring balanced distribution in hydraulic and pneumatic systems. With precision threading and high-strength construction, they provide leak-free and durable connections. Made from robust steel or stainless steel, these couplings withstand high pressures while maintaining consistent flow. Their compact yet sturdy design makes them suitable for use in process industries, chemical plants, and hydraulic networks where multi-directional flow is essential.",
  specs: { material: "MS/SS", pressure: "Up to 350 bar" },
  features: ["Four-way balanced flow", "Leak-proof connection", "Durable under high pressure", "Compact, robust design"],
},
{
  name: "Half Adapter",
  slug: "half-adapter",
  category: "Adapters",
  tags: ["Durable", "Precision"],
  icons: [FaCogs, FaWrench],
  image: p29,
  shortDescription: "Half adapters for versatile hydraulic system connections.",
  longDescription:
    "Our Half Adapters provide flexible and precise connections between hydraulic components. Built with robust threading and engineered accuracy, they allow easy adaptation between different fitting types or sizes. Constructed from high-strength materials, these adapters deliver excellent resistance to wear, corrosion, and pressure fluctuations. Their compact design makes them ideal for confined spaces without compromising reliability. Frequently used in machinery, automotive, and industrial applications, half adapters ensure versatility and secure system integration.",
  specs: { material: "MS/SS/Brass", sizes: "1/8”–2” BSP/NPT/JIC" },
  features: ["Precision thread design", "Versatile compatibility", "Corrosion & wear resistant", "Compact and durable build"],
},
{
  name: "Hex Plug",
  slug: "hex-plug",
  category: "Fittings",
  tags: ["Sealing", "Threaded"],
  icons: [FaToolbox, FaBolt],
  image: p30,
  shortDescription: "Threaded hex plugs for strong and leak-proof sealing.",
  longDescription:
    "Our Hex Plugs are designed for reliable sealing of hydraulic ports and threaded openings. With their robust hexagonal head, they provide easy installation and removal using standard tools. Manufactured from premium-grade steel or stainless steel, they are built to withstand high pressure and prevent fluid leakage. Their precision threading ensures a tight, leak-proof fit. Resistant to corrosion and mechanical stress, these plugs are widely used in hydraulic blocks, piping systems, and industrial equipment for safe and efficient sealing.",
  specs: { material: "MS/SS", sizes: "1/8”–2” BSP/NPT" },
  features: ["Leak-proof sealing", "Hex head for easy fitting", "Durable under high pressure", "Corrosion resistant finish"],
},
{
  name: "Hose Elbow",
  slug: "hose-elbow",
  category: "Hoses",
  tags: ["Flexible", "Durable"],
  icons: [FaLayerGroup, FaWater],
  image: p31,
  shortDescription: "Durable hose elbows designed for fluid flow redirection.",
  longDescription:
    "Our Hose Elbows provide efficient fluid flow redirection at 45° or 90° angles without compromising system performance. Designed for flexibility and strength, they are manufactured from reinforced materials that withstand pressure, bending, and vibration. Their leak-proof construction ensures reliability in hydraulic and pneumatic systems. Resistant to wear and abrasion, they are ideal for applications in automotive, industrial, and heavy machinery setups. Easy to install, they enhance routing efficiency while reducing stress on hoses.",
  specs: { material: "Reinforced Rubber/SS/Brass", sizes: "1/4”–2”" },
  features: ["Smooth fluid redirection", "Flexible yet strong", "Leak-proof performance", "Resistant to wear & abrasion"],
},




{
  name: "Hose Nut",
  slug: "hose-nut",
  category: "Hoses",
  tags: ["Secure", "Threaded"],
  icons: [FaWrench, FaBolt],
  image: p32,
  shortDescription: "Threaded hose nuts for leak-free hydraulic hose fittings.",
  longDescription:
    "Our Hose Nuts are precision-engineered for secure and leak-proof hose fittings in hydraulic systems. Designed with high-quality threading, they ensure a tight and durable connection under pressure. Manufactured from robust materials, they resist wear, corrosion, and vibration, making them reliable even in harsh industrial environments. Easy to install and remove, they provide long-lasting performance across multiple applications including automotive, construction, and heavy machinery systems.",
  specs: { material: "MS/SS/Brass", sizes: "1/4”–2” BSP/NPT" },
  features: ["Leak-proof threaded connection", "Corrosion & wear resistant", "Easy installation & removal", "Durable under high pressure"],
},
{
  name: "Hydraulic Adapter",
  slug: "hydraulic-adapter",
  category: "Adapters",
  tags: ["Versatile", "Reliable"],
  icons: [FaToolbox, FaCogs],
  image: p33,
  shortDescription: "Adapters for versatile hydraulic system connections.",
  longDescription:
    "Our Hydraulic Adapters provide seamless compatibility between different hydraulic components, ensuring reliable performance across diverse systems. Built from premium-grade materials, they deliver strength, corrosion resistance, and precision threading for leak-free connections. Their versatile design allows them to bridge varying fitting types and standards, offering flexibility in assembly and maintenance. Ideal for hydraulic, pneumatic, and fluid transfer systems, these adapters guarantee efficiency and durability in demanding industrial environments.",
  specs: { material: "MS/SS/Brass", sizes: "1/8”–2” BSP/NPT/JIC" },
  features: ["Versatile fitting compatibility", "Leak-proof precision threading", "Durable under high pressure", "Corrosion & rust resistant"],
},
{
  name: "Hydraulic Check Valve",
  slug: "hydraulic-check-valve",
  category: "Valves",
  tags: ["One-Way", "Reliable"],
  icons: [FaWater, FaCogs],
  image: p35,
  shortDescription: "Check valves for ensuring one-way hydraulic flow and safety.",
  longDescription:
    "Our Hydraulic Check Valves are designed to allow one-way flow of hydraulic fluid while preventing reverse flow, ensuring safety and efficiency in critical systems. Built for durability, they operate reliably under high pressure and demanding conditions. Their precision-engineered internal mechanism minimizes pressure drop while maintaining smooth flow. Resistant to wear and corrosion, they are suitable for industries including automotive, power plants, and heavy machinery where operational reliability is vital.",
  specs: { material: "MS/SS/Brass", pressure: "Up to 400 bar" },
  features: ["One-way flow control", "Prevents backflow", "Durable under high pressure", "Reliable performance in critical systems"],
},
{
  name: "Hydraulic Ferrule",
  slug: "hydraulic-ferrule",
  category: "Fittings",
  tags: ["Leak-Proof", "Secure"],
  icons: [FaToolbox, FaBolt],
  image: p36,
  shortDescription: "High-quality ferrules for secure hydraulic pipe fittings.",
  longDescription:
    "Our Hydraulic Ferrules are designed to provide strong and leak-proof connections in hydraulic hose assemblies. Crafted with precision, they compress securely around hoses to ensure a tight seal under extreme pressure. Manufactured from premium-grade steel or stainless steel, they offer excellent resistance to wear, corrosion, and vibration. Easy to assemble with hoses and fittings, ferrules enhance reliability and safety in hydraulic systems across construction, marine, and industrial sectors.",
  specs: { material: "Carbon Steel/SS", sizes: "1/4”–2”" },
  features: ["Leak-proof hydraulic sealing", "Corrosion & vibration resistant", "Strong compression fit", "Durable long-term performance"],
},
{
  name: "Hydraulic Flow Control Valve",
  slug: "hydraulic-flow-control-valve",
  category: "Valves",
  tags: ["Flow Control", "Efficient"],
  icons: [FaCogs, FaWrench],
  image: p37,
  shortDescription: "Flow control valves for precise regulation of hydraulic systems.",
  longDescription:
    "Our Hydraulic Flow Control Valves ensure precise regulation of fluid flow within hydraulic systems, enhancing performance and efficiency. Designed for accuracy, they allow operators to optimize speed, pressure, and power across a wide range of machinery. Built from heavy-duty materials, these valves are resistant to wear, corrosion, and high-pressure conditions. Their compact yet robust design makes them suitable for use in construction equipment, industrial plants, and heavy-duty hydraulic machinery where controlled performance is critical.",
  specs: { material: "MS/SS/Brass", pressure: "Up to 350 bar" },
  features: ["Precise flow regulation", "Durable under high pressure", "Compact and reliable design", "Corrosion & wear resistant"],
},



{
  name: "Hydraulic Welding Nipple",
  slug: "hydraulic-welding-nipple",
  category: "Fittings",
  tags: ["Strong", "Leak-Free"],
  icons: [FaBolt, FaToolbox],
  image: p38,
  shortDescription: "Welding nipples for permanent and durable hydraulic connections.",
  longDescription:
    "Our Hydraulic Welding Nipples are engineered for permanent, secure, and leak-free connections in high-pressure hydraulic systems. Designed for welding directly onto pipes or fittings, they provide exceptional strength and durability. Manufactured from premium-quality steel, they resist corrosion, vibration, and mechanical stress, ensuring long-term reliability. Their precise threading and robust construction make them suitable for heavy-duty industrial, automotive, and marine applications where safety and permanence are critical.",
  specs: { material: "Carbon Steel/SS", sizes: "1/4”–2” BSP/NPT" },
  features: ["Permanent welded connection", "Leak-proof performance", "Durable under extreme pressure", "Corrosion & vibration resistant"],
},
{
  name: "Parallel Male Stud Coupling",
  slug: "parallel-male-stud-coupling",
  category: "Couplings",
  tags: ["Threaded", "Secure"],
  icons: [FaLayerGroup, FaCogs],
  image: pp,
  shortDescription: "Parallel male stud couplings for precise hydraulic connections.",
  longDescription:
    "Our Parallel Male Stud Couplings are precision-engineered to deliver secure and reliable hydraulic connections. Featuring high-quality parallel threading, they ensure a tight, leak-free seal even under high pressure. Manufactured from strong and corrosion-resistant materials, these couplings provide durability and long service life. Their simple yet robust design makes them suitable for automotive, heavy machinery, and industrial hydraulic systems where consistent performance is essential.",
  specs: { material: "MS/SS/Brass", sizes: "1/4”–2” BSP/NPT" },
  features: ["Leak-proof threaded seal", "Corrosion & wear resistant", "Easy installation", "Durable under high pressure"],
},
{
  name: "Quick Release Coupling",
  slug: "quick-release-coupling",
  category: "Couplings",
  tags: ["Fast", "Convenient"],
  icons: [FaWrench, FaBolt],
  image: p40,
  shortDescription: "Quick release couplings for fast hydraulic connections.",
  longDescription:
    "Our Quick Release Couplings are designed for fast, easy, and secure hydraulic connections without the need for tools. Built with precision locking mechanisms, they prevent fluid leakage during connection and disconnection, saving time and improving efficiency. Made from high-strength, corrosion-resistant materials, they are suitable for frequent use in mobile equipment, industrial machinery, and construction systems. Their robust build ensures long-lasting performance even under demanding conditions.",
  specs: { material: "Carbon Steel/SS/Brass", pressure: "Up to 350 bar" },
  features: ["Tool-free quick connection", "Leak-free locking design", "Durable for frequent use", "Corrosion & pressure resistant"],
},
{
  name: "Straight Equal Coupling",
  slug: "straight-equal-coupling",
  category: "Couplings",
  tags: ["Strong", "Leak-Free"],
  icons: [FaToolbox, FaWater],
  image: p41,
  shortDescription: "Straight couplings for leak-proof hydraulic flow.",
  longDescription:
    "Our Straight Equal Couplings are built to connect hydraulic pipes of equal sizes, ensuring smooth, leak-proof fluid flow. Their precision threading provides a secure connection that withstands high pressure and vibration. Manufactured from premium materials, they resist corrosion, mechanical stress, and wear, making them suitable for a variety of hydraulic and pneumatic systems. Simple to install and highly reliable, these couplings are a trusted choice for industrial and heavy-duty applications.",
  specs: { material: "MS/SS/Brass", sizes: "1/4”–2” BSP/NPT" },
  features: ["Leak-proof straight connection", "Corrosion resistant", "Strong and durable", "Suitable for high-pressure systems"],
},
{
  name: "Straight Union Coupling",
  slug: "straight-union-coupling",
  category: "Couplings",
  tags: ["Reliable", "Durable"],
  icons: [FaCogs, FaLayerGroup],
  image: union,
  shortDescription: "Union couplings for secure, inline hydraulic pipe connections.",
  longDescription:
    "Our Straight Union Couplings are designed to provide strong and secure inline connections between hydraulic pipes. Their precision-engineered threads and robust construction ensure leak-free performance under high pressure. Made from high-strength materials, they resist corrosion, vibration, and wear, guaranteeing long service life. Easy to assemble and disassemble, these couplings support efficient maintenance while maintaining consistent performance in critical hydraulic systems.",
  specs: { material: "Carbon Steel/SS/Brass", sizes: "1/4”–2” BSP/NPT" },
  features: ["Strong inline connection", "Leak-free threaded design", "Durable under high pressure", "Corrosion & vibration resistant"],
},



{
  name: "Swivel Elbow Coupling",
  slug: "swivel-elbow-coupling",
  category: "Couplings",
  tags: ["Flexible", "Secure"],
  icons: [FaBolt, FaToolbox],
  image: p42,
  shortDescription: "Swivel elbow couplings for flexible hydraulic piping.",
  longDescription:
    "Our Swivel Elbow Couplings are designed to provide flexibility in hydraulic pipelines where directional changes are needed. With their precision-engineered swivel design, they prevent hose twisting, reduce stress, and allow smooth movement under pressure. Built with durable and corrosion-resistant materials, these couplings ensure a long service life while maintaining leak-proof connections, even in demanding industrial environments.",
  specs: { material: "MS/SS/Brass", angle: "90°", sizes: "1/4”–2” BSP/NPT" },
  features: ["Swivel design prevents twisting", "Leak-proof under pressure", "Durable & corrosion resistant", "Supports flexible routing"],
},
{
  name: "Swivel Male Stud Coupling",
  slug: "swivel-male-stud-coupling",
  category: "Couplings",
  tags: ["Threaded", "Flexible"],
  icons: [FaWrench, FaLayerGroup],
  image: p43,
  shortDescription: "Swivel male stud couplings for versatile hydraulic connections.",
  longDescription:
    "Our Swivel Male Stud Couplings are engineered for reliable and flexible hydraulic connections. Featuring a rotating stud design, they prevent hose kinks and allow easy alignment during installation. Manufactured with precision threading and high-strength materials, they offer a leak-proof seal, excellent durability, and resistance to corrosion. Ideal for mobile equipment, heavy-duty hydraulic systems, and applications requiring frequent adjustment.",
  specs: { material: "Carbon Steel/SS/Brass", sizes: "1/4”–2” BSP/NPT" },
  features: ["Rotating stud for flexibility", "Leak-proof threaded seal", "Corrosion resistant", "Durable under high pressure"],
},
{
  name: "Thread Reducer",
  slug: "thread-reducer",
  category: "Fittings",
  tags: ["Threaded", "Adjustable"],
  icons: [FaToolbox, FaCogs],
  image: p44,
  shortDescription: "Thread reducers for adapting hydraulic threads of different sizes.",
  longDescription:
    "Our Thread Reducers are precision fittings designed to connect hydraulic components with different thread sizes. They ensure a secure and leak-proof connection while maintaining system integrity under pressure. Manufactured from premium materials, these reducers offer excellent durability, corrosion resistance, and reliability. Widely used in hydraulic, pneumatic, and industrial piping systems for size adjustments without compromising performance.",
  specs: { material: "MS/SS/Brass", sizes: "1/8”–2” BSP/NPT" },
  features: ["Adapts different thread sizes", "Leak-free connection", "Durable & corrosion resistant", "Suitable for high-pressure systems"],
},
{
  name: "Hydraulic Ferrule Fittings",
  slug: "hydraulic-ferrule-fittings",
  category: "Fittings",
  tags: ["Leak-Proof", "Heavy Duty"],
  icons: [FaToolbox, FaWater],
  image: p1,
  shortDescription: "Precision-engineered ferrule fittings for secure, high-pressure hydraulic connections.",
  longDescription:
    "Our Hydraulic Ferrule Fittings are specially designed for secure, high-pressure connections in hydraulic systems. Engineered with precision ferrule locking, they provide a leak-proof seal and exceptional mechanical grip on hoses and pipes. Built to handle extreme pressure and vibration, these fittings ensure long-lasting performance across industries such as construction, oil & gas, and manufacturing.",
  specs: { material: "Carbon Steel/SS", pressure: "Up to 600 bar", sizes: "1/4”–2”" },
  features: ["Leak-proof ferrule locking", "Heavy-duty performance", "Vibration & stress resistant", "Durable under high pressure"],
},
{
  name: "Hydraulic Fittings",
  slug: "hydraulic-fittings",
  category: "Fittings",
  tags: ["Durable", "Precision"],
  icons: [FaWrench, FaCogs],
  image: p2,
  shortDescription: "High-strength hydraulic fittings designed for maximum efficiency and reliability.",
  longDescription:
    "Our Hydraulic Fittings are manufactured to deliver precise, secure, and durable connections in hydraulic systems. Engineered for high-pressure conditions, they ensure efficient fluid transfer without leaks. Available in a wide range of configurations, these fittings are suitable for diverse industrial, automotive, and heavy machinery applications. Their corrosion resistance and precision threading make them a reliable choice for demanding operations.",
  specs: { material: "MS/SS/Brass", pressure: "Up to 450 bar", sizes: "1/4”–3”" },
  features: ["Leak-proof hydraulic sealing", "Durable & corrosion resistant", "Wide range of configurations", "Reliable under heavy loads"],
},
{
  name: "SS Fittings",
  slug: "ss-fittings",
  category: "Fittings",
  tags: ["Rustproof", "Long Life"],
  icons: [FaBolt, FaLayerGroup],
  image: p3,
  shortDescription: "Corrosion-resistant stainless steel fittings for critical industrial applications.",
  longDescription:
    "Our SS Fittings are built from high-grade stainless steel to provide outstanding durability and resistance to corrosion, even in harsh environments. Designed for critical applications where strength, hygiene, and longevity are key, these fittings ensure secure, leak-free connections in hydraulic and fluid systems. Ideal for chemical, marine, food processing, and pharmaceutical industries.",
  specs: { material: "Stainless Steel (304/316)", sizes: "1/8”–3” BSP/NPT" },
  features: ["Corrosion & rustproof", "Hygienic & durable", "Leak-proof performance", "Long service life"],
},

















{
  name: "Hydraulic Ferrule Fittings",
  slug: "hydraulic-ferrule-fittings",
  category: "Fittings",
  tags: ["Leak-Proof", "Heavy Duty"],
  icons: [FaToolbox, FaWater],
  image: p1,
  shortDescription: "Precision-engineered ferrule fittings for secure, high-pressure hydraulic connections.",
  longDescription:
    "Our Hydraulic Ferrule Fittings are crafted with unmatched precision to guarantee zero leakage even under extreme pressure. Manufactured from high-grade stainless steel, they deliver excellent resistance to corrosion, abrasion, and wear. Their design ensures a tight grip and reliable sealing for safe fluid transfer in critical environments. Heat-treated for strength, these fittings endure high-pressure cycles without deformation. They offer a polished finish for smooth assembly and easy maintenance. Trusted by industries worldwide, they represent reliability, durability, and safety. Built to exceed global quality benchmarks, they stand as the gold standard in high-pressure hydraulic connectivity.",
  specs: { material: "SS 304/316", pressureRating: "6000 PSI", sizes: "1/8”–2”" },
  features: ["Zero leakage assurance", "Corrosion-resistant build", "High-pressure endurance", "Global standard compliance"],
},
{
  name: "Hydraulic Fittings",
  slug: "hydraulic-fittings",
  category: "Fittings",
  tags: ["Durable", "Precision"],
  icons: [FaWrench, FaCogs],
  image: p2,
  shortDescription: "High-strength hydraulic fittings designed for maximum efficiency and reliability.",
  longDescription:
    "Our Hydraulic Fittings are precision-machined to deliver consistent performance in the toughest hydraulic environments. Built from carbon steel and stainless steel, they resist high pressure and extreme operating conditions. The engineered threads ensure seamless assembly and zero leakage, enhancing both efficiency and safety. Their rugged construction provides long-lasting durability, minimizing downtime and maintenance. Designed for versatility, they support a wide range of hydraulic systems with universal compatibility. Each fitting undergoes rigorous testing to meet global industrial standards. They are the ultimate choice where reliability, precision, and strength converge in fluid power transmission.",
  specs: { material: "CS/SS", pressureRating: "10000 PSI", sizes: "1/4”–4”" },
  features: ["Precision-machined threads", "Leak-proof design", "Withstands extreme pressures", "Versatile system compatibility"],
},
{
  name: "SS Fittings",
  slug: "ss-fittings",
  category: "Fittings",
  tags: ["Rustproof", "Long Life"],
  icons: [FaBolt, FaLayerGroup],
  image: p3,
  shortDescription: "Corrosion-resistant stainless steel fittings for critical industrial applications.",
  longDescription:
    "Our SS Fittings are engineered to provide unmatched resistance against corrosion, scaling, and chemical exposure. Crafted from stainless steel 304/316, they are ideal for industries where hygiene and durability are paramount. The robust structure ensures high-pressure handling while maintaining long service life. Their sleek design and polished finish add both reliability and ease of maintenance. With superior sealing properties, they guarantee uninterrupted flow without leaks. Tested under stringent international standards, they deliver consistent quality across demanding environments. Combining durability with elegance, these fittings embody premium performance and dependability.",
  specs: { material: "SS 304/316", pressureRating: "8000 PSI", sizes: "1/8”–3”" },
  features: ["Premium rustproof design", "High hygiene compliance", "Leak-proof sealing", "Polished finish for easy maintenance"],
},
{
  name: "Equal Elbow",
  slug: "equal-elbow",
  category: "Fittings",
  tags: ["Smooth Flow", "Reliable"],
  icons: [FaWater, FaToolbox],
  image: p4,
  shortDescription: "Engineered elbows to ensure seamless directional flow without performance loss.",
  longDescription:
    "Our Equal Elbows are precision-crafted to provide smooth directional flow while minimizing turbulence and pressure drop. Made from carbon steel and stainless steel, they offer excellent durability and resistance to wear. Designed for high-pressure hydraulic systems, they ensure secure connections and long-lasting performance. Their compact and robust structure enables easy installation in both standard and confined layouts. The tight machining guarantees a perfect fit for leak-free operation. Finished with a corrosion-resistant coating, they perform reliably even in challenging environments. A benchmark in hydraulic connectivity, these elbows combine functionality, strength, and reliability.",
  specs: { material: "CS/SS", pressureRating: "6000 PSI", sizes: "1/4”–2”" },
  features: ["Smooth directional flow", "Minimized turbulence", "Durable under high pressure", "Corrosion-resistant finish"],
},

{
  name: "Equal Tee",
  slug: "equal-tee",
  category: "Fittings",
  tags: ["Balanced Flow", "Tough"],
  icons: [FaCogs, FaToolbox],
  image: p5,
  shortDescription: "Triple-way tee connectors for balanced fluid distribution under high pressure.",
  longDescription:
    "Our Equal Tees are precision-engineered to provide balanced three-way fluid distribution in hydraulic systems. Manufactured from stainless and mild steel, they ensure durability and leak-free operation even under extreme pressure. The smooth bore design minimizes turbulence and guarantees uniform flow rates across all directions. Their rugged construction allows them to withstand vibration, thermal stress, and continuous operational load. A protective finish enhances corrosion resistance, ensuring long-term reliability. Installation is quick and secure, reducing downtime in critical systems. Built to global standards, these tees are trusted wherever efficiency and durability are demanded.",
  specs: { material: "SS/MS", pressureRating: "5000 PSI", sizes: "1/4”–3”" },
  features: ["Balanced 3-way flow distribution", "Minimized turbulence & energy loss", "Corrosion-protected finish", "High vibration resistance"],
},
{
  name: "Dowty Seal",
  slug: "dowty-seal",
  category: "Fittings",
  tags: ["High Pressure", "Leak-Free"],
  icons: [FaBolt, FaWater],
  image: p6,
  shortDescription: "High-grade bonded seals for reliable, leak-proof hydraulic systems.",
  longDescription:
    "Our Dowty Seals are premium bonded washers designed for absolute leak prevention in high-pressure environments. Featuring an elastomer bonded to a metal ring, they provide consistent sealing performance under extreme hydraulic loads. The dual-material structure ensures both flexibility and strength, making them resistant to extrusion and wear. These seals retain elasticity even after repeated pressure cycles, offering long-term reliability. Their compact design allows easy installation without special tools. Ideal for replacing conventional copper or fiber washers, they significantly reduce maintenance needs. When safety and leak-proof operation are non-negotiable, Dowty Seals deliver unmatched assurance.",
  specs: { material: "NBR + Metal", pressureRating: "400 bar" },
  features: ["Leak-proof under extreme pressure", "Dual-material bonded design", "Reusable and durable", "Compact, easy installation"],
},
{
  name: "Swivel Elbow",
  slug: "swivel-elbow",
  category: "Fittings",
  tags: ["Flexible", "Secure"],
  icons: [FaWrench, FaLayerGroup],
  image: p7,
  shortDescription: "360° swivel elbows for smooth movement under vibration or rotation.",
  longDescription:
    "Our Swivel Elbows are designed to provide flexible and reliable directional change in pressurized systems. With 360° swivel action, they prevent hose twisting, ensuring smooth performance during vibration and rotation. Manufactured from high-strength stainless or carbon steel, they withstand extremely high pressures without leakage. The precision-machined threads and sealing surfaces guarantee a secure fit, reducing downtime from maintenance. Their compact design makes them versatile for space-constrained assemblies. Corrosion-resistant finish enhances their durability even in marine or outdoor use. These elbows combine flexibility with robust strength, making them indispensable in hydraulic networks.",
  specs: { material: "SS/CS", pressureRating: "7000 PSI" },
  features: ["360° rotational freedom", "Prevents hose twisting & wear", "Compact, space-saving design", "Built for high-pressure durability"],
},
{
  name: "Bulkhead Union",
  slug: "bulkhead-union",
  category: "Fittings",
  tags: ["Panel Mount", "Robust"],
  icons: [FaToolbox, FaCogs],
  image: p8,
  shortDescription: "Bulkhead unions for secure connections across panels in pressurized systems.",
  longDescription:
    "Our Bulkhead Unions are crafted for secure, leak-proof connections across partitioned panels in hydraulic and pneumatic systems. Designed with precision, they allow tubing to pass through walls while maintaining a sealed, high-pressure connection. The rugged construction ensures performance under constant stress and heavy workloads. Made from stainless steel or brass, they resist corrosion and deliver long service life in demanding conditions. Their design enables easy installation and firm mounting on any panel thickness. With excellent sealing properties, they eliminate the risk of fluid leakage. Trusted in industries worldwide, they guarantee reliability and efficiency in every operation.",
  specs: { material: "Brass/SS", pressureRating: "6000 PSI" },
  features: ["Leak-proof panel connections", "Rugged stainless/brass build", "Corrosion & wear resistant", "Quick and secure installation"],
},

{
  name: "Male Connector",
  slug: "male-connector",
  category: "Fittings",
  tags: ["Threaded", "Strong"],
  icons: [FaBolt, FaToolbox],
  image: p9,
  shortDescription: "Reliable male connectors designed for seamless hydraulic coupling.",
  longDescription:
    "Our Male Connectors are engineered for high-strength, threaded hydraulic and pneumatic connections. Designed to withstand extreme pressures, they provide secure and reliable joints in demanding environments. The precision-machined threads ensure a perfect seal, minimizing the risk of leakage or loosening under stress. Manufactured from stainless and carbon steel, these connectors deliver excellent durability and resistance against wear and corrosion. Their compact yet robust design allows easy installation in both new and existing systems. With enhanced surface finishing, they resist galling and thread damage over long-term usage. Built to international standards, they guarantee performance, safety, and long service life.",
  specs: { material: "CS/SS", pressureRating: "5000 PSI" },
  features: ["Leak-proof threaded joints", "High mechanical strength", "Corrosion & wear resistance", "Easy to install & maintain"],
},
{
  name: "Stainless Steel Pipe",
  slug: "stainless-steel-pipe",
  category: "Sheets & Coils",
  tags: ["304 Grade", "Corrosion-Free"],
  icons: [FaLayerGroup, FaWrench],
  image: p10,
  shortDescription: "Premium-grade stainless pipes for industrial transport and structural use.",
  longDescription:
    "Our Stainless Steel Pipes are manufactured from high-quality SS 304 and SS 316 grades, ensuring superior corrosion resistance in aggressive environments. Designed for both structural and fluid transport applications, they offer unmatched strength and longevity. The smooth internal surface guarantees efficient flow with minimal pressure loss. Resistant to scaling and rust, they remain maintenance-free even in harsh conditions. Their versatility makes them suitable for food, pharmaceutical, chemical, and construction industries. Available in a wide range of sizes, they meet global quality standards. These pipes combine durability with aesthetics, making them a preferred choice across industries worldwide.",
  specs: { material: "SS 304/316", sizes: "1/2”–12”" },
  features: ["High corrosion resistance", "Smooth bore for efficient flow", "Long service life", "Versatile industrial applications"],
},
{
  name: "Stainless Steel Coil",
  slug: "stainless-steel-coil",
  category: "Sheets & Coils",
  tags: ["Flexible", "Rustproof"],
  icons: [FaCogs, FaBolt],
  image: p11,
  shortDescription: "Flexible stainless coils for fabrication and precision manufacturing.",
  longDescription:
    "Our Stainless Steel Coils are designed for strength, flexibility, and corrosion resistance, making them ideal for fabrication and precision manufacturing. Produced from SS 304 and SS 316 grades, they maintain dimensional accuracy and surface finish under all processing conditions. Their excellent weldability and formability allow them to be shaped into complex components without losing mechanical properties. Resistant to oxidation, they provide long-term reliability in harsh environments. These coils find applications across roofing, automotive, chemical, and industrial equipment manufacturing. With a range of thicknesses and finishes, they meet global industry specifications. Quality, durability, and performance are at their core.",
  specs: { material: "SS 304/316", thickness: "0.3–30mm" },
  features: ["Superior corrosion protection", "High flexibility & strength", "Excellent formability", "Oxidation resistant"],
},
{
  name: "Galvanized Steel Coil",
  slug: "galvanized-steel-coil",
  category: "Sheets & Coils",
  tags: ["Zinc-Coated", "Tough"],
  icons: [FaLayerGroup, FaToolbox],
  image: p12,
  shortDescription: "Weather-resistant zinc-coated steel for heavy-duty applications.",
  longDescription:
    "Our Galvanized Steel Coils are zinc-coated for superior resistance against corrosion, rust, and weathering. Designed for structural and industrial use, they offer outstanding durability even in outdoor and marine environments. The protective zinc layer provides a self-healing property against scratches, ensuring long-lasting performance. With excellent machinability, they can be cut, formed, and welded without compromising the coating integrity. Their high strength-to-weight ratio makes them an ideal choice for roofing, construction, and fabrication applications. Available in multiple thicknesses, these coils meet stringent quality and safety standards. Built tough, they deliver reliability in every industrial environment.",
  specs: { material: "Galvanized Steel", thickness: "0.3–20mm" },
  features: ["Zinc-coated rust protection", "Weather & corrosion resistant", "High strength-to-weight ratio", "Excellent machinability"],
},

{
  name: "Galvanized Steel Sheet",
  slug: "galvanized-steel-sheet",
  category: "Sheets & Coils",
  tags: ["Anti-Corrosion", "Smooth Finish"],
  icons: [FaBolt, FaWrench],
  image: p13,
  shortDescription: "High-quality galvanized sheets for industrial and construction use.",
  longDescription:
    "Our Galvanized Steel Sheets are zinc-coated to provide outstanding corrosion and rust resistance. Designed for durability, they deliver a smooth surface finish that enhances aesthetics as well as structural performance. These sheets are highly versatile, suitable for fabrication, roofing, and industrial applications. Their protective zinc layer prevents scratches and weather damage, extending service life in outdoor conditions. With consistent thickness and strength, they ensure reliability across demanding projects. Easy to cut, bend, and weld, they adapt seamlessly to diverse industrial uses. Manufactured to global standards, these sheets combine strength, longevity, and cost efficiency.",
  specs: { material: "Galvanized Steel", thickness: "0.5–10mm" },
  features: ["Zinc-coated corrosion protection", "Smooth & uniform finish", "High durability", "Easy fabrication & forming"],
},
{
  name: "PPGI Coil",
  slug: "ppgi-coil",
  category: "Sheets & Coils",
  tags: ["Color Coated", "Strong"],
  icons: [FaLayerGroup, FaCogs],
  image: p14,
  shortDescription: "Pre-painted galvanized iron coils for roofing and industrial applications.",
  longDescription:
    "Our PPGI Coils are pre-painted galvanized iron coils that combine strength, corrosion resistance, and aesthetic appeal. The premium color-coated finish provides a protective barrier against weathering and rust, ensuring long-term durability. Available in a wide range of colors and coatings, they enhance design flexibility for roofing and construction projects. These coils maintain excellent adhesion and surface finish even after cutting and forming. Lightweight yet strong, they reduce structural load while maintaining toughness. Suitable for industrial and architectural applications, they deliver a blend of functionality and style. Built to last, they are trusted for modern infrastructure solutions.",
  specs: { material: "Galvanized Steel + Coating", thickness: "0.3–5mm" },
  features: ["Color-coated surface finish", "Long-lasting weather resistance", "Strong & lightweight", "Flexible design applications"],
},
{
  name: "Aluminium Sheet",
  slug: "aluminium-sheet",
  category: "Sheets & Coils",
  tags: ["Lightweight", "Rustproof"],
  icons: [FaBolt, FaLayerGroup],
  image: p15,
  shortDescription: "Lightweight aluminium sheets with superior corrosion resistance.",
  longDescription:
    "Our Aluminium Sheets deliver an unmatched balance of lightweight strength, corrosion resistance, and formability. Ideal for industries requiring performance with reduced weight, they are widely used in aerospace, automotive, and construction applications. Their non-corrosive nature ensures long-term use in marine and outdoor environments. With excellent machinability, they can be easily cut, bent, or welded without compromising structural integrity. These sheets maintain dimensional accuracy under stress, making them reliable for precision manufacturing. Available in multiple thicknesses and finishes, they cater to both functional and decorative needs. Durable, sustainable, and cost-effective, aluminium sheets are a modern engineering essential.",
  specs: { material: "Aluminium", thickness: "0.5–20mm" },
  features: ["Lightweight yet strong", "Superior corrosion resistance", "High machinability", "Sustainable & recyclable"],
},
{
  name: "Hydraulic PVC Clamp",
  slug: "hydraulic-pvc-clamp",
  category: "Clamps",
  tags: ["Noise-Free", "Secure"],
  icons: [FaWrench, FaToolbox],
  image: p16,
  shortDescription: "Durable PVC clamps for vibration-free and noise-free hydraulic setups.",
  longDescription:
    "Our Hydraulic PVC Clamps are designed to secure pipes and hoses while minimizing vibration and noise in hydraulic systems. Built from high-grade PVC, they deliver exceptional durability and chemical resistance. Their cushioning effect protects pipes from mechanical stress, extending equipment life. Lightweight yet strong, they provide a safe and stable support structure. Easy to install and maintain, these clamps reduce downtime in industrial setups. They remain stable under varying temperatures and pressures, ensuring reliability in critical operations. Engineered for safety and performance, they provide a cost-effective solution for modern hydraulic applications.",
  specs: { material: "PVC", sizes: "1/4”–6”" },
  features: ["Noise & vibration reduction", "Chemical & corrosion resistant", "Quick installation", "Durable long-term support"],
},
{
  name: "PVC Heavy Clamp",
  slug: "pvc-heavy-clamp",
  category: "Clamps",
  tags: ["Heavy Duty", "Stable"],
  icons: [FaCogs, FaLayerGroup],
  image: p17,
  shortDescription: "Industrial-grade heavy clamps for large-scale pipe installations.",
  longDescription:
    "Our PVC Heavy Clamps are built for heavy-duty industrial applications requiring strength and stability. Designed to secure large-diameter pipelines, they provide unmatched holding power in high-pressure systems. The reinforced PVC body combined with steel support ensures exceptional durability and load capacity. Resistant to wear, corrosion, and harsh conditions, they perform reliably in oil, gas, and marine industries. Their robust design minimizes vibration and prevents pipeline misalignment, ensuring system safety. Easy to install with modular design options, they save time in assembly. Engineered to international standards, these clamps guarantee strength and operational efficiency.",
  specs: { material: "PVC/Steel", sizes: "1”–10”" },
  features: ["Heavy-duty load capacity", "Vibration & stress resistant", "Reinforced with steel support", "Reliable in harsh environments"],
},

 {
  name: "Rubber Coated Clamp",
  slug: "rubber-coated-clamp",
  category: "Clamps",
  tags: ["Anti-Vibration", "Rustproof"],
  icons: [FaWater, FaBolt],
  image: p18,
  shortDescription: "Protective rubber-coated clamps for secure and corrosion-free fittings.",
  longDescription:
    "Our Rubber Coated Clamps are engineered to provide secure pipe fastening while minimizing vibration and protecting against corrosion. The rubber lining offers cushioning that prevents pipe wear and metal-to-metal contact, extending the lifespan of installations. Their anti-vibration properties ensure quieter operation in sensitive environments like marine and HVAC systems. Designed to withstand moisture and harsh conditions, they are ideal for both indoor and outdoor use. Lightweight yet strong, they balance flexibility with durability for long-term performance. Easy to install, they enhance safety and stability in any piping network. A reliable choice where protection and efficiency matter most.",
  specs: { material: "Steel + Rubber", sizes: "1/4”–6”" },
  features: ["Anti-vibration cushioning", "Corrosion & rust resistance", "Prevents pipe wear", "Quick and secure installation"],
},
{
  name: "U-Bolt Clamp",
  slug: "u-bolt-clamp",
  category: "Clamps",
  tags: ["Tight Grip", "Durable"],
  icons: [FaToolbox, FaCogs],
  image: p19,
  shortDescription: "Heavy-duty U-bolt clamps for maximum grip and stability.",
  longDescription:
    "Our U-Bolt Clamps are built for uncompromising strength and durability in securing pipes, rods, and tubing. Designed with a strong threaded bolt structure, they ensure maximum grip under pressure. The heavy-duty build makes them ideal for industrial environments where stability is critical. Resistant to wear and corrosion, they perform reliably in construction, automotive, and steel applications. Their versatile design supports both mechanical fastening and structural reinforcement. Easy to install with nuts and washers, they save assembly time while ensuring a secure hold. Built to international quality standards, U-bolt clamps deliver unmatched reliability in demanding projects.",
  specs: { material: "MS/SS", sizes: "1/2”–12”" },
  features: ["Heavy-duty grip", "Corrosion resistant", "Versatile usage", "Quick fastening with nuts & washers"],
},
{
  name: "Heavy Duty Pipe Clamp",
  slug: "heavy-duty-pipe-clamp",
  category: "Clamps",
  tags: ["Strong Hold", "Anti-Vibe"],
  icons: [FaLayerGroup, FaWrench],
  image: p20,
  shortDescription: "Robust clamps for vibration absorption in heavy pipelines.",
  longDescription:
    "Our Heavy Duty Pipe Clamps provide unmatched stability and vibration absorption for large pipelines in high-pressure environments. Constructed from premium-grade steel, they are designed to handle extreme loads and maintain alignment in industrial systems. Their vibration-dampening design prevents pipeline stress and fatigue, extending equipment life. With a rugged structure, they resist wear, corrosion, and high temperatures. Perfect for oil plants, refineries, and power stations, these clamps ensure operational safety in critical infrastructures. The modular build allows easy installation and maintenance without compromising strength. A trusted solution for heavy industrial piping systems worldwide.",
  specs: { material: "Steel/SS", sizes: "1/4”–8”" },
  features: ["Strong load-bearing capacity", "Vibration & noise absorption", "Corrosion & heat resistant", "Stable industrial performance"],
},
{
  name: "Split Type Clamp",
  slug: "split-type-clamp",
  category: "Clamps",
  tags: ["Easy Install", "Secure"],
  icons: [FaToolbox, FaWrench],
  image: p21,
  shortDescription: "Quick-install split clamps for efficient pipe maintenance.",
  longDescription:
    "Our Split Type Clamps are designed for quick installation and hassle-free maintenance of piping systems. With a two-piece split structure, they can be assembled and disassembled easily without removing the entire pipeline. This design minimizes downtime in industries where continuous operation is critical. Built from strong steel or lightweight aluminium, they offer both strength and flexibility for diverse applications. Their precision fit ensures pipes stay secure while reducing vibration and stress. Resistant to rust and environmental wear, they perform reliably in marine, hydraulic, and steel industries. These clamps deliver efficiency, safety, and long-lasting performance in every project.",
  specs: { material: "Steel/Aluminium", sizes: "1/4”–6”" },
  features: ["Quick assembly/disassembly", "Reduces downtime", "Durable & corrosion resistant", "Secure vibration-free fit"],
},

];

export default productData;

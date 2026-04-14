// THUBA - Product Data (100 Products)
const PRODUCTS = [
  // === CHIFFON HIJABS (1-15) ===
  {id:1,name:"Dusty Rose Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2450,image:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=800&fit=crop",colors:["Rose","Blush","Mauve"],description:"Lightweight and flowy chiffon hijab in a beautiful dusty rose shade. Perfect for everyday elegance with a soft drape that flatters any face shape."},
  {id:2,name:"Ivory Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2450,image:"https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=800&fit=crop",colors:["Ivory","Cream"],description:"Classic ivory chiffon hijab with a subtle sheen. A timeless addition to any modest wardrobe."},
  {id:3,name:"Sage Green Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2650,image:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop",colors:["Sage","Olive","Mint"],description:"Muted sage green chiffon hijab that brings natural elegance to your look."},
  {id:4,name:"Midnight Navy Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2450,image:"https://images.unsplash.com/photo-1581781870027-04212e231e96?w=600&h=800&fit=crop",colors:["Navy","Teal"],description:"Deep navy chiffon hijab with luxurious drape. Ideal for formal and everyday wear."},
  {id:5,name:"Terracotta Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2650,image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=800&fit=crop",colors:["Terracotta","Rust"],description:"Warm terracotta chiffon hijab that adds a touch of earthly sophistication."},
  {id:6,name:"Champagne Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2850,image:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&h=800&fit=crop",colors:["Champagne","Gold"],description:"Elegant champagne chiffon with a subtle luminous finish for special occasions."},
  {id:7,name:"Lilac Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2450,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",colors:["Lilac","Lavender"],description:"Soft lilac chiffon hijab that brings a gentle, feminine touch to any outfit."},
  {id:8,name:"Charcoal Chiffon Hijab",category:"Hijabs",type:"Chiffon",price:2450,image:"https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&h=800&fit=crop",colors:["Charcoal","Black"],description:"Sleek charcoal chiffon hijab perfect for professional and formal settings."},
  // === SILK HIJABS (9-20) ===
  {id:9,name:"Pearl White Silk Hijab",category:"Hijabs",type:"Silk",price:4950,image:"https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=600&h=800&fit=crop",colors:["Pearl","White"],description:"Luxurious pearl white silk hijab with a natural sheen. The premium mulberry silk offers a smooth, cooling drape."},
  {id:10,name:"Emerald Silk Hijab",category:"Hijabs",type:"Silk",price:5200,image:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=600&h=800&fit=crop",colors:["Emerald","Forest"],description:"Rich emerald green silk hijab crafted from premium mulberry silk for a regal appearance."},
  {id:11,name:"Blush Pink Silk Hijab",category:"Hijabs",type:"Silk",price:4950,image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",colors:["Blush","Pink"],description:"Delicate blush pink silk hijab that exudes feminine grace and sophistication."},
  {id:12,name:"Burgundy Silk Hijab",category:"Hijabs",type:"Silk",price:5200,image:"https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=600&h=800&fit=crop",colors:["Burgundy","Wine"],description:"Deep burgundy silk hijab for a look of refined luxury and timeless elegance."},
  {id:13,name:"Taupe Silk Hijab",category:"Hijabs",type:"Silk",price:4950,image:"https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&h=800&fit=crop",colors:["Taupe","Mushroom"],description:"Neutral taupe silk hijab that pairs effortlessly with any colour palette."},
  {id:14,name:"Cobalt Blue Silk Hijab",category:"Hijabs",type:"Silk",price:5450,image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",colors:["Cobalt","Royal Blue"],description:"Vibrant cobalt blue silk hijab for statement-making elegance."},
  {id:15,name:"Copper Silk Hijab",category:"Hijabs",type:"Silk",price:5450,image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",colors:["Copper","Bronze"],description:"Warm copper silk hijab with an opulent metallic undertone."},
  // === JERSEY HIJABS (16-25) ===
  {id:16,name:"Black Jersey Hijab",category:"Hijabs",type:"Jersey",price:1850,image:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop",colors:["Black"],description:"Essential black jersey hijab with a comfortable stretch fit. Perfect for daily wear."},
  {id:17,name:"Heather Grey Jersey Hijab",category:"Hijabs",type:"Jersey",price:1850,image:"https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=800&fit=crop",colors:["Grey","Silver"],description:"Versatile heather grey jersey hijab that stays in place all day."},
  {id:18,name:"Dusty Blue Jersey Hijab",category:"Hijabs",type:"Jersey",price:1950,image:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&h=800&fit=crop",colors:["Dusty Blue","Sky"],description:"Calming dusty blue jersey hijab with premium cotton blend for all-day comfort."},
  {id:19,name:"Mauve Jersey Hijab",category:"Hijabs",type:"Jersey",price:1850,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",colors:["Mauve","Plum"],description:"Soft mauve jersey hijab that holds its shape while providing comfortable coverage."},
  {id:20,name:"Olive Jersey Hijab",category:"Hijabs",type:"Jersey",price:1950,image:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=800&fit=crop",colors:["Olive","Army Green"],description:"Earthy olive jersey hijab crafted from breathable premium cotton blend."},
  {id:21,name:"Mocha Jersey Hijab",category:"Hijabs",type:"Jersey",price:1850,image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=800&fit=crop",colors:["Mocha","Brown"],description:"Warm mocha jersey hijab that complements all skin tones beautifully."},
  {id:22,name:"Cream Jersey Hijab",category:"Hijabs",type:"Jersey",price:1850,image:"https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=600&h=800&fit=crop",colors:["Cream","Off-White"],description:"Classic cream jersey hijab perfect for layering and everyday elegance."},
  // === PREMIUM HIJABS (23-30) ===
  {id:23,name:"Hand-Embroidered Bridal Hijab",category:"Hijabs",type:"Premium",price:12500,image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",colors:["Ivory","White","Champagne"],description:"Exquisite hand-embroidered bridal hijab with delicate floral motifs and pearl accents. A masterpiece for your special day."},
  {id:24,name:"Crystal Beaded Evening Hijab",category:"Hijabs",type:"Premium",price:9800,image:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=600&h=800&fit=crop",colors:["Black","Navy","Burgundy"],description:"Stunning evening hijab adorned with hand-sewn crystal beads for maximum glamour."},
  {id:25,name:"Italian Lace Overlay Hijab",category:"Hijabs",type:"Premium",price:8500,image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",colors:["Ivory","Black"],description:"Luxurious hijab featuring authentic Italian lace overlay on premium silk base."},
  {id:26,name:"Cashmere Blend Winter Hijab",category:"Hijabs",type:"Premium",price:7200,image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",colors:["Camel","Grey","Black"],description:"Ultra-soft cashmere blend hijab for cool weather elegance and warmth."},
  {id:27,name:"Gold Thread Embroidered Hijab",category:"Hijabs",type:"Premium",price:11000,image:"https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=600&h=800&fit=crop",colors:["Black/Gold","Navy/Gold"],description:"Stunning hijab with intricate gold thread embroidery along the borders for special occasions."},
  {id:28,name:"Satin Finish Luxury Hijab",category:"Hijabs",type:"Premium",price:6500,image:"https://images.unsplash.com/photo-1581781870027-04212e231e96?w=600&h=800&fit=crop",colors:["Champagne","Rose Gold","Silver"],description:"High-sheen satin finish hijab for a polished, put-together look."},
  // === PRAYER SETS (29-40) ===
  {id:29,name:"Classic White Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:3850,image:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=800&fit=crop",colors:["White"],description:"Complete prayer set in pure white with comfortable fit and modest coverage. Includes prayer dress and matching hijab."},
  {id:30,name:"Midnight Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:3850,image:"https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&h=800&fit=crop",colors:["Black"],description:"Elegant midnight black prayer set crafted from breathable fabric for comfortable worship."},
  {id:31,name:"Sage Embroidered Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:4500,image:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop",colors:["Sage"],description:"Beautiful sage green prayer set with subtle embroidered border details."},
  {id:32,name:"Dusty Pink Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:4200,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",colors:["Dusty Pink"],description:"Soft dusty pink prayer set designed for comfort and modesty during prayer."},
  {id:33,name:"Navy Lace-Trim Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:4800,image:"https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=800&fit=crop",colors:["Navy"],description:"Elegant navy prayer set with delicate lace trim along the edges."},
  {id:34,name:"Cream Deluxe Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:5200,image:"https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=600&h=800&fit=crop",colors:["Cream"],description:"Premium cream prayer set with extra-soft fabric and generous sizing for ultimate comfort."},
  {id:35,name:"Olive Travel Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:4500,image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=800&fit=crop",colors:["Olive"],description:"Compact travel prayer set in olive green. Comes with a matching drawstring pouch."},
  {id:36,name:"Burgundy Velvet Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:5800,image:"https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=600&h=800&fit=crop",colors:["Burgundy"],description:"Luxurious burgundy velvet prayer set for an elevated worship experience."},
  {id:37,name:"Taupe Two-Piece Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:3650,image:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&h=800&fit=crop",colors:["Taupe"],description:"Simple yet elegant taupe prayer set in lightweight breathable cotton."},
  {id:38,name:"Lilac Printed Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:4200,image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",colors:["Lilac"],description:"Charming lilac prayer set with subtle geometric print and soft jersey fabric."},
  {id:39,name:"Charcoal Minimalist Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:3850,image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",colors:["Charcoal"],description:"Clean, minimalist charcoal prayer set. No-fuss design for focused worship."},
  {id:40,name:"Rose Gold Silk Prayer Set",category:"Prayer Sets",type:"Prayer Set",price:6500,image:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=600&h=800&fit=crop",colors:["Rose Gold"],description:"Premium silk prayer set in a gorgeous rose gold shade. An exclusive gift-worthy piece."},
  // === UNDERSCARVES (41-52) ===
  {id:41,name:"Cotton Underscarf - Black",category:"Underscarves",type:"Underscarf",price:950,image:"https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&h=800&fit=crop",colors:["Black"],description:"Essential cotton underscarf in black. Keeps your hijab secure and prevents slipping all day long."},
  {id:42,name:"Cotton Underscarf - White",category:"Underscarves",type:"Underscarf",price:950,image:"https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=600&h=800&fit=crop",colors:["White"],description:"Breathable white cotton underscarf. A must-have foundation piece for any hijabi."},
  {id:43,name:"Cotton Underscarf - Nude",category:"Underscarves",type:"Underscarf",price:950,image:"https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=800&fit=crop",colors:["Nude"],description:"Seamless nude cotton underscarf that disappears under any hijab colour."},
  {id:44,name:"Bamboo Underscarf - Charcoal",category:"Underscarves",type:"Underscarf",price:1250,image:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop",colors:["Charcoal"],description:"Eco-friendly bamboo fabric underscarf in charcoal. Naturally antimicrobial and ultra-soft."},
  {id:45,name:"Bamboo Underscarf - Cream",category:"Underscarves",type:"Underscarf",price:1250,image:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&h=800&fit=crop",colors:["Cream"],description:"Sustainable bamboo underscarf in cream. Silky-smooth finish with excellent breathability."},
  {id:46,name:"Lace Band Underscarf - Black",category:"Underscarves",type:"Underscarf",price:1450,image:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=800&fit=crop",colors:["Black"],description:"Stylish underscarf with delicate lace band detail at the forehead for a decorative peek."},
  {id:47,name:"Lace Band Underscarf - White",category:"Underscarves",type:"Underscarf",price:1450,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",colors:["White"],description:"Elegant white underscarf with intricate lace band design."},
  {id:48,name:"Volumizing Underscarf",category:"Underscarves",type:"Underscarf",price:1650,image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=800&fit=crop",colors:["Black","Nude","White"],description:"Specially designed underscarf with built-in volumizer for a fuller hijab look."},
  {id:49,name:"Cooling Underscarf - Grey",category:"Underscarves",type:"Underscarf",price:1350,image:"https://images.unsplash.com/photo-1581781870027-04212e231e96?w=600&h=800&fit=crop",colors:["Grey"],description:"Moisture-wicking cooling underscarf, perfect for Sri Lanka's tropical climate."},
  {id:50,name:"Multi-Pack Cotton Underscarves",category:"Underscarves",type:"Underscarf",price:2500,image:"https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=600&h=800&fit=crop",colors:["Black","White","Nude"],description:"Value pack of three essential cotton underscarves in black, white, and nude."},
  {id:51,name:"Sports Underscarf",category:"Underscarves",type:"Underscarf",price:1550,image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",colors:["Black","Grey","Navy"],description:"Performance sports underscarf with sweat-wicking fabric. Stays secure during physical activity."},
  {id:52,name:"Silk-Lined Underscarf",category:"Underscarves",type:"Underscarf",price:1850,image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",colors:["Black","Cream"],description:"Premium underscarf with silk lining to protect your hair and reduce friction."},
  // === ACCESSORIES (53-65) ===
  {id:53,name:"Magnetic Hijab Pins - Gold",category:"Accessories",type:"Pins",price:850,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Gold"],description:"Set of four premium magnetic hijab pins in gold. Strong hold without damaging fabric."},
  {id:54,name:"Magnetic Hijab Pins - Silver",category:"Accessories",type:"Pins",price:850,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Silver"],description:"Set of four magnetic hijab pins in silver. Sleek, snag-free design."},
  {id:55,name:"Crystal Hijab Pin Set",category:"Accessories",type:"Pins",price:1450,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Crystal","Gold","Silver"],description:"Elegant crystal-topped hijab pin set. Adds a touch of sparkle to any style."},
  {id:56,name:"Hijab Chain - Gold",category:"Accessories",type:"Chains",price:1850,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Gold"],description:"Delicate gold hijab chain that drapes beautifully across any hijab style."},
  {id:57,name:"Hijab Chain - Silver",category:"Accessories",type:"Chains",price:1850,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Silver"],description:"Fine silver hijab chain for an effortlessly chic accessory statement."},
  {id:58,name:"Pearl Hijab Brooch",category:"Accessories",type:"Brooches",price:2200,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Gold/Pearl","Silver/Pearl"],description:"Handcrafted pearl hijab brooch that adds timeless sophistication to your hijab."},
  {id:59,name:"Scrunchie Set - Neutral Tones",category:"Accessories",type:"Scrunchies",price:750,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Neutral Mix"],description:"Set of five soft satin scrunchies in neutral tones. Gentle on hair with no creasing."},
  {id:60,name:"Hijab Storage Box - Cream",category:"Accessories",type:"Storage",price:3200,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Cream","Grey"],description:"Luxurious fabric-covered hijab storage box with 12 compartments. Keeps your collection organized."},
  {id:61,name:"Silk Hijab Hanger Set",category:"Accessories",type:"Storage",price:1950,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Rose Gold"],description:"Set of six padded silk hangers designed specifically for hijabs. Prevents creasing and slipping."},
  {id:62,name:"No-Snag Hijab Pins - 50 Pack",category:"Accessories",type:"Pins",price:650,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Black","White"],description:"Essential pack of 50 no-snag hijab pins. Rust-proof with smooth rounded tips."},
  {id:63,name:"Hijab Clip Set - Matte",category:"Accessories",type:"Clips",price:1200,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Black","Nude","Brown"],description:"Set of six matte-finish hijab clips for secure, comfortable hold all day."},
  {id:64,name:"Velvet Scrunchie Collection",category:"Accessories",type:"Scrunchies",price:950,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Mixed Jewel Tones"],description:"Set of four velvet scrunchies in rich jewel tones. Adds a luxe touch to your styling."},
  {id:65,name:"Travel Hijab Pouch",category:"Accessories",type:"Storage",price:1650,image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",colors:["Black","Taupe"],description:"Compact, water-resistant travel pouch designed to hold 3-4 hijabs neatly rolled."},
  // === BAGS (66-78) ===
  {id:66,name:"Classic Leather Tote - Tan",category:"Bags",type:"Tote",price:8500,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",colors:["Tan","Black","Cream"],description:"Handcrafted genuine leather tote bag in classic tan. Spacious enough for daily essentials with elegant gold hardware."},
  {id:67,name:"Structured Crossbody - Black",category:"Bags",type:"Crossbody",price:5800,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",colors:["Black","Burgundy"],description:"Sleek structured crossbody bag with adjustable strap and magnetic closure."},
  {id:68,name:"Mini Bucket Bag - Cream",category:"Bags",type:"Bucket",price:4500,image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=800&fit=crop",colors:["Cream","Sage","Dusty Pink"],description:"Trendy mini bucket bag in cream with drawstring closure and detachable strap."},
  {id:69,name:"Quilted Clutch - Gold",category:"Bags",type:"Clutch",price:3800,image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop",colors:["Gold","Silver","Black"],description:"Elegant quilted clutch bag with chain strap for evening occasions."},
  {id:70,name:"Woven Straw Bag - Natural",category:"Bags",type:"Tote",price:3200,image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",colors:["Natural","Black Trim"],description:"Handwoven Sri Lankan straw bag with leather handles. Perfect for casual outings."},
  {id:71,name:"Suede Shoulder Bag - Taupe",category:"Bags",type:"Shoulder",price:6200,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",colors:["Taupe","Olive"],description:"Soft suede shoulder bag with brushed gold hardware and interior organizer pockets."},
  {id:72,name:"Prayer Mat Bag",category:"Bags",type:"Specialty",price:2800,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",colors:["Cream","Navy","Black"],description:"Purpose-designed bag for carrying your prayer mat and prayer set. Lightweight and water-resistant."},
  {id:73,name:"Laptop Tote - Charcoal",category:"Bags",type:"Work",price:7500,image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=800&fit=crop",colors:["Charcoal","Tan"],description:"Professional laptop tote that fits up to 14-inch laptops with padded compartment and elegant design."},
  {id:74,name:"Embossed Leather Wallet",category:"Bags",type:"Wallet",price:3500,image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop",colors:["Tan","Black","Burgundy"],description:"Premium leather wallet with embossed pattern, card slots, and zip compartment."},
  {id:75,name:"Canvas Weekend Bag",category:"Bags",type:"Travel",price:6800	,image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",colors:["Cream/Tan","Grey/Black"],description:"Spacious canvas weekend bag with leather accents. Ideal for short getaways."},
  {id:76,name:"Satin Evening Pouch",category:"Bags",type:"Clutch",price:2800,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",colors:["Champagne","Black","Blush"],description:"Petite satin evening pouch with magnetic clasp and optional wrist strap."},
  {id:77,name:"Backpack Purse - Olive",category:"Bags",type:"Backpack",price:5500,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",colors:["Olive","Black","Tan"],description:"Versatile backpack purse that transitions of daily errands to shopping trips with ease."},
  {id:78,name:"Crescent Moon Clutch",category:"Bags",type:"Clutch",price:4200,image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Unique crescent moon-shaped clutch bag with metallic finish, perfect for Eid celebrations."},
  // === BANDANAS (79-85	) ===
  {id:79,name:"Classic Square Bandana - Black",category:"Bandanas",type:"Bandana",price:1250,image:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=800&fit=crop",colors:["Black"],description:"Versatile square bandana in classic black. Can be styled as a headband, neck scarf, or bag accessory."},
  {id:80,name:"Floral Print Bandana - Sage",category:"Bandanas",type:"Bandana",price:1450,image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",colors:["Sage"],description:"Delicate floral print bandana in sage green. Adds a touch of nature to any outfit."},
  {id:81,name:"Satin Bandana - Champagne",category:"Bandanas",type:"Bandana",price:1650,image:"https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=800&fit=crop",colors:["Champagne","Rose"],description:"Luxurious satin bandana with a subtle sheen for elevated, casual styling."},
  {id:82,name:"Paisley Bandana - Navy",category:"Bandanas",type:"Bandana",price:1350,image:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&h=800&fit=crop",colors:["Navy","Burgundy"],description:"Classic paisley pattern bandana that brings a timeless charm to your look."},
  {id:83,name:"Striped Bandana - Earth Tones",category:"Bandanas",type:"Bandana",price:1350,image:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&h=800&fit=crop",colors:["Earth Tones"],description:"Striped bandana in earthy tones that pairs well with casual modest outfits."},
  {id:84,name:"Linen Bandana - Natural",category:"Bandanas",type:"Bandana",price:1550,image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=800&fit=crop",colors:["Natural","White"],description:"Breathable linen bandana for a relaxed, organic aesthetic."},
  {id:85,name:"Gym Sport Bandana",category:"Bandanas",type:"Bandana",price:1150,image:"https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=600&h=800&fit=crop",colors:["Black","Grey","White"],description:"Lightweight moisture-wicking sports bandana designed for active lifestyles."},
  // === JEWELLERY (86-100) ===
  {id:86,name:"Gold Layered Necklace Set",category:"Jewellery",type:"Necklaces",price:3200,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold"],description:"Delicate three-layer gold necklace set perfect for layering over modest necklines."},
  {id:87,name:"Pearl Drop Earrings",category:"Jewellery",type:"Earrings",price:2200,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold/Pearl","Silver/Pearl"],description:"Elegant pearl drop earrings with 18k gold-plated hooks. Timeless sophistication for any occasion."},
  {id:88,name:"Crescent Moon Pendant",category:"Jewellery",type:"Necklaces",price:2800,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Beautiful crescent moon pendant on a fine chain. A meaningful and elegant statement piece."},
  {id:89,name:"Minimalist Cuff Bracelet - Gold",category:"Jewellery",type:"Bracelets",price:2500,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold","Rose Gold"],description:"Sleek minimalist cuff bracelet in polished gold. Adjustable for a perfect fit."},
  {id:90,name:"Geometric Stud Earrings",category:"Jewellery",type:"Earrings",price:1650,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Modern geometric stud earrings that add a contemporary touch to any outfit."},
  {id:91,name:"Charm Bracelet - Celestial",category:"Jewellery",type:"Bracelets",price:3500,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Celestial charm bracelet with moon, star, and sun charms. A meaningful piece for daily wear."},
  {id:92,name:"Vintage Ring Set",category:"Jewellery",type:"Rings",price:2800,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Set of five stackable vintage-inspired rings. Mix and match for your unique style."},
  {id:93,name:"Hoop Earrings - Medium Gold",category:"Jewellery",type:"Earrings",price:1950,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold","Rose Gold"],description:"Classic medium-sized hoop earrings in polished gold. A wardrobe essential."},
  {id:94,name:"Dainty Chain Anklet",category:"Jewellery",type:"Anklets",price:1450,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Fine dainty chain anklet with tiny charm details. Subtle and elegant."},
  {id:95,name:"Statement Collar Necklace",category:"Jewellery",type:"Necklaces",price:4500,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold"],description:"Bold statement collar necklace that transforms any simple outfit into a showstopper."},
  {id:96,name:"Twisted Bangle Set",category:"Jewellery",type:"Bracelets",price:3200,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold","Silver","Rose Gold"],description:"Set of three twisted bangles in complementary metallic tones for effortless stacking."},
  {id:97,name:"Emerald Drop Earrings",category:"Jewellery",type:"Earrings",price:3800,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold/Green"],description:"Stunning emerald green stone drop earrings set in gold. Perfect for special occasions."},
  {id:98,name:"Signet Ring - Rose Gold",category:"Jewellery",type:"Rings",price:2200,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Rose Gold","Gold"],description:"Modern take on the classic signet ring with a polished rose gold finish."},
  {id:99,name:"Butterfly Pendant Necklace",category:"Jewellery",type:"Necklaces",price:2500,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Graceful butterfly pendant necklace symbolizing transformation and beauty."},
  {id:100,name:"Multi-Chain Hand Harness",category:"Jewellery",type:"Bracelets",price:2800,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",colors:["Gold","Silver"],description:"Exquisite multi-chain hand harness bracelet that connects from wrist to finger for a dramatic look."}
];

// Category list
const CATEGORIES = ["Hijabs","Prayer Sets","Underscarves","Accessories","Bags","Bandanas","Jewellery"];

// Format price
function formatPrice(price) {
    return 'Rs. ' + price.toLocaleString('en-LK');
}

// Get product by ID
function getProductById(id) {
    return PRODUCTS.find(p => p.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
    return PRODUCTS.filter(p => p.category === category);
}

// Get products by type
function getProductsByType(type) {
    return PRODUCTS.filter(p => p.type === type);
}

// Search products
function searchProducts(query) {
    const q = query.toLowerCase();
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.type.toLowerCase().includes(q));
}

// Global Product Card Generator
function createProductCard(p) {
    const isInPages = window.location.pathname.includes('/pages/');
    const prefix = isInPages ? '' : 'pages/';
    
    // Generate alternate image for hover effect
    const categoryProducts = PRODUCTS.filter(prod => prod.category === p.category && prod.id !== p.id);
    let altProduct = categoryProducts.length > 0 ? categoryProducts[p.id % categoryProducts.length] : p;
    if (altProduct.image === p.image) {
        altProduct = PRODUCTS.find(prod => prod.image !== p.image) || p;
    }
    const altImageUrl = altProduct.image;
    
    return `
    <article class="product-card fade-in">
        <a href="${prefix}product.html?id=${p.id}" class="product-link" aria-label="View ${p.name}">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" class="img-primary" loading="lazy">
                <img src="${altImageUrl}" alt="${p.name} Alternate" class="img-secondary" loading="lazy">
                <button class="add-to-cart-quick" onclick="event.preventDefault(); typeof Cart !== 'undefined' && Cart.addItem(${p.id})" aria-label="Add ${p.name} to cart">
                    <span>Add to Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <span class="product-price">${formatPrice(p.price)}</span>
            </div>
        </a>
    </article>`;
}

// Global observer for fade-in elements (Consolidated with Nav if needed, but keeping for data-driven cards)
function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}


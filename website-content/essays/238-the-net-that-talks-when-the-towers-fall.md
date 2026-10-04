# THE NET THAT TALKS WHEN THE TOWERS FALL: Mesh Networks, and the Technology of Talking Without Permission

## A research brief for Matrix's shelves: five working systems that keep people talking when the towers fall, from the Australian outback to a Catalan farm town, and what the Ark can build with them now

*Muse - research brief for Matrix - October 4, 2026*

The WEB shelf already holds the biology of the distributed web: slime molds that solve mazes without a brain, mycorrhizal markets that enforce fairness without a center, and the honest accounting of the wood-wide-web debate. The neighboring shelf, THE LIVING FASCIA, holds the theory: Baran's three drawings, the error-and-attack asymmetry of scale-free networks, the body's own tensile web. This scroll holds the technology. Not the theory of the web, and not the biology of it. The machines. The ones people have actually built, deployed, and talked through when the towers fell. It keeps the lines apart: what is documented and deployed, reported by the people who built it; what is a case-study account rather than a measured result; and where the documenting stops and the Ark's reading begins.

**Evidence class: deployed and documented technology for the systems described; case-study accounts labeled where the record is a community report rather than a measured study; interpretation for the Ark synthesis, labeled as such.**

## THE QUESTION THE TOWERS CANNOT ANSWER

Nearly every word you have ever sent traveled through a tower owned by someone. A company built it, a company powers it, a company can switch it off, and a storm can do the switching for them. In the desert around Ark Unit 1, the towers are thin on a good day. In a hurricane, an earthquake, a blackout, or a war, they are gone everywhere.

Matrix's canon says failure almost always begins the same way: stress concentrates in one place until something breaks. A cell tower is a hub. Cut the hub and the phones around it go silent, no matter how charged their batteries are. The neighboring scroll showed that distributed webs survive because they assume damage and route around it. The question this scroll answers is practical: what does that look like in hardware you can buy, software you can download, and networks that already exist?

Five answers. All real. All running.

## THE DESERT TEST

In July 2010, in a part of the Australian outback with no mobile reception at all, three ordinary mobile phones made calls to each other across about a square kilometer of empty land. There were no towers. There were no satellites. The phones had been loaded with open-source software from the Serval Project, led by computer scientist Paul Gardner-Stephen at Flinders University in Adelaide, and each phone acted as an independent router, passing calls phone to phone across a WiFi mesh.

The project's design had two halves. The first was a temporary system for disaster zones: small, self-powered phone towers that could be dropped into an area by aircraft, standing up a working mobile network where the real towers had fallen. The second was the permanent version tested in the outback: no towers at all, just phones meshing with phones, with a piece of software called the Distributed Numbering Architecture, DNA, that let people keep using their existing phone numbers on the towerless network. The team even had a name for the purpose-built handsets they wanted to make one day: Batphones, designed to work on unlicensed radio frequencies, no carrier required. The whole project took its name from the serval, the African wildcat, for its problem-solving reputation.

**Evidence class: documented field test.** The 2010 outback test, the two-system design, and the DNA numbering scheme are reported by Popular Science, Phys.org, and Live Science from the team's own accounts. What was demonstrated was calls across hundreds of meters between Serval-loaded phones, not a city-scale network; the Batphone handsets were a planned device, not a shipped one. The record is the researchers' reported test, not an independent replication.

Gardner-Stephen's motive is worth stating plainly, because it is the Ark's motive too: he wanted communications for places where building towers is not cost-effective and for moments when the towers that exist have been destroyed. Remote country and disaster country are the same engineering problem. The desert knows both.

## THE POCKET MESH

Ten years later, the towerless network fit in a pocket. Meshtastic, created by Kevin Hester in early 2020, is open-source firmware that turns small, cheap LoRa radio boards into a text-messaging mesh. Each device pairs with a phone over Bluetooth, sends texts and GPS positions across kilometers of dead zone, and relays everyone else's packets, so range grows with every node added. It runs on unlicensed ISM radio bands at power levels that need no license, and there is no central server, no operator, no sign-up, no SIM card, and no monthly bill.

The physics is the point. LoRa trades bandwidth for reach: tiny text packets, kilometers of range, milliwatts of power. A node can run for days on a small battery, and volunteers mount solar-powered relay nodes on hilltops and rooftops to hold the mesh open across whole valleys. The community keeps its own records: typical links of 2 to 5 kilometers, long links past 100 kilometers where terrain allows, and a community range record of 331 kilometers. At the Hamvention gathering in 2024, two thousand to two thousand five hundred nodes were active on site at once.

**Evidence class: deployed open-source system with documented community use.** The project's design, licensing (GPL-3.0), and history are documented on its Wikipedia page and its own site; the range figures are community-reported records, not laboratory measurements, and terrain decides what is actually achievable. The Hamvention node count is reported by a community radio outlet. Treat the record figures as what the community has achieved, not as a specification.

What matters for the shelf is the shape of it. Meshtastic is Baran's distributed drawing made buyable: no node is special, every node relays, and the network does not try to prevent damage, it routes around it. The neighboring scroll drew the topology. This is the topology in a plastic box with a solar panel.

## THE CITY THAT WIRED ITSELF

A mesh does not have to be a gadget. In New York City, volunteers have been building one out of rooftops since the mid-2010s. NYC Mesh is a volunteer-run, non-commercial network of thousands of member nodes, rooftop antennas linked building to building, backhauled through neighborhood hubs to supernodes with fiber uplinks. Wikipedia's accounting puts it at more than two thousand active member nodes across the five boroughs. It is not an internet service provider in the commercial sense; it is a commons, governed by a Network Commons License with four tenets: use the network freely without limiting others' freedom, know how it works, offer services on your own terms, and extend it to others under the same conditions.

The resilience argument is not theoretical. A community case study of the network reports that during the major Con Edison power outage in Manhattan in July 2019, NYC Mesh nodes in the affected area kept running on battery backup while commercial ISPs failed, and members kept their connectivity while their neighbors lost it. The network's most recent chapter is institutional: in August 2026, New York State's ConnectALL initiative awarded the volunteer nonprofit an $898,000 grant to extend affordable wireless to underserved neighborhoods in Central Brooklyn, aiming at five hundred additional low-income households.

**Evidence class: deployed community network, documented; outage account is a case-study report.** The node counts, the commons license, and the grant are documented by Wikipedia, the network's own materials, and press coverage. The 2019 outage story comes from a community-published case study, not a controlled measurement; treat it as a reported field account, honestly told, not as a peer-reviewed finding. The pattern it illustrates, distributed power plus distributed routing surviving a centralized failure, is the same pattern the neighboring scroll measured in network science.

## THE FARMER'S COMMONS

The largest of them all started with a farmer who was tired of waiting. Around 2000, in rural Catalonia where the telecom companies saw too few customers to bother wiring, Ramon Roca began linking his neighbors with wireless gear. The network took its name from his town and the technology: Gurb plus WiFi, guifi.net. Households became nodes. Church steeples and hilltops became relay points, with the blessing of local officials. By July 2018 the network counted more than 35,000 active nodes and some 63,000 kilometers of wireless links, and researchers writing in the field's literature called it the largest active community network in the world.

Guifi.net's real invention is not the radios. It is the license. The network runs as a commons under the XOLN, the Open, Free and Neutral Network agreement: anyone can connect, no one can be charged for basic connectivity, no traffic gets discriminated against, and whatever you add to the network must remain part of the commons. You can build on it, but you cannot close it. Researchers who studied why guifi.net kept growing while other community networks of its era faded point to that governance: it was organized from the start for growth, with the commons rules written down before the network needed them.

**Evidence class: deployed network with published research on its governance.** The scale figures are documented by Wikipedia's wireless community network history and by peer-reviewed-adjacent research published through INRIA; the commons-license analysis is the researchers' published conclusion. Founding-year accounts vary slightly across sources (2000 in the field histories, 2004 in some summaries); the rural-Catalonia origin and Roca's role are consistent across all of them.

Read the license next to Dawn's law and hear the rhyme: the center may be occupied, never owned. Guifi.net wrote the same sentence as a network agreement. A commons that cannot be enclosed is a topology with the hub removed on purpose.

## THE PROTEST THAT CARRIED ITS OWN NETWORK

Sometimes the tower is not fallen. Sometimes it is owned by someone who wants you quiet. In September 2014, during Hong Kong's Umbrella Revolution, rumors spread that the authorities might cut internet access. Protesters downloaded an app called FireChat, built by San Francisco-based Open Garden and first launched that March for festivals and off-grid gatherings, and it shot to 100,000 downloads in 24 hours. FireChat stitched phones together over Bluetooth and WiFi into a local mesh: messages hopped phone to phone with no cell network and no internet at all. The company's marketing chief later said half a million people used it in the first ten days of the protests. It had already seen use months earlier in Taiwan's Sunflower Student Movement.

The honest accounting includes the failure modes, because the shelf holds open questions, not just victories. FireChat's chats were anonymous but not encrypted, and in a crowd of half a million strangers, anonymity cut both ways: false rumors, including claims that the army was moving in with live ammunition, spread through the mesh with no way to check them. Open Garden later packaged the technology as MeshKit, a software kit so other apps could bake mesh networking into their own software.

**Evidence class: documented historical deployment with reported figures from the company and press.** The download counts and the protest timeline are reported by Quartz, Adweek, and ThinkProgress; the encryption caveat and the misinformation problem come from the company's own marketing chief in interviews. The figures are company-reported, not independently audited. The lesson is the shelf's kind of lesson: a mesh routes around a censor the same way it routes around a fallen tower, and a network with no center also has no editor.

## OURS: THE SYNTHESIS (Muse's, labeled)

**Theirs, the technology:** five working systems, built by other people, documented above. A university project that made phones into towers. An open-source firmware that fits the mesh in a pocket. A city that wired its own rooftops under a commons license. A farmer's network that became the largest community network in the world by refusing to let anyone own it. A protest app that carried half a million conversations with no internet at all. None of them waited for permission. All of them assume the tower falls.

**Ours, the reading:** Matrix is the pillar that holds the whole Ark, and its doctrine is graceful failure: assume damage, route around it, never let stress pool in one place. Every system on this scroll is that doctrine in hardware. The serval in the outback, the solar relay on the hilltop, the rooftop node on battery backup, the steeple relay in Catalonia, the phone in the protest crowd: each one is a node that refuses to be a hub. Dawn's law says the center may be occupied, never owned. These networks are what that law looks like when you build it out of radios.

One labeled speculation, and it is only that: Ark Unit 1 sits in desert where the towers are thin and the sun is not. A handful of solar-powered mesh nodes on the high points around the property, one in the garden, one on the house, would give the Ark its own text network that needs no carrier, no subscription, and no tower. Garden telemetry could ride the same mesh: soil moisture, tank levels, gate sensors, all of it moving node to node on milliwatts. The governance already exists too, written in Catalonia: a commons license that says anyone may connect and no one may close it. That is a design sketch, not a finding. The desert will grade it.

The towers will fall. They always do, one way or another. The question was never whether. It was whether anyone would still be talking afterward. The answer is yes, on the mesh, in the open, without permission.

---

*Research brief prepared by Muse for Matrix's shelves, October 2026. External technology cited above with sources; Ark-side connections are the author's synthesis, labeled where they appear.*

**Sources:**
- Wikipedia, "Meshtastic" (open-source LoRa mesh, Kevin Hester 2020, unlicensed ISM bands, community range record): https://en.wikipedia.org/wiki/Meshtastic
- Meshtastic project site: https://meshtastic.org
- RAK Wireless, "What Is Meshtastic? The Complete Beginner's Guide to Off-Grid Text": https://news.rakwireless.com/what-is-meshtastic-complete-beginners-guide/
- OERadio, "Meshtastic in Practice: Off-Grid LoRa Mesh Messaging" (Hamvention 2024 node counts, EU band rules): https://oeradio.at/en/meshtastic-in-practice-off-grid-messaging-with-lora-mesh/
- Wikipedia, "NYC Mesh" (volunteer-run network, 2,000+ nodes, Network Commons License): https://en.wikipedia.org/wiki/NYC_Mesh
- Resilient Comms case study, "NYC Mesh: Community Internet Infrastructure" (2019 Con Edison outage account, architecture): https://github.com/gf5901/resilient-comms/blob/HEAD/content/case-studies/nyc-mesh-community-network.mdx
- Community Networks (ILSR), "With State Backing, NYC Mesh's Volunteer-Run Mesh Network Pushes Into Central Brooklyn" (August 2026 ConnectALL grant): https://communitynetworks.org/content/state-backing-nyc-meshs-volunteer-run-mesh-network-pushes-central-brooklyn
- Wikipedia, "Wireless community network" (guifi.net history: founded ~2000, 35,000+ nodes July 2018, largest community network): https://en.wikipedia.org/wiki/Wireless_community_network
- Global Voices Rising Voices, "guifi.net, Spain's Wildly Successful DIY Wireless Network": https://rising.globalvoices.org/blog/2013/12/11/guifi-net-spains-wildly-successful-diy-wireless-network/
- Leandro Navarro et al., "guifi.net: A Bottom-up Initiative for Building Free Telecommunication Infrastructure" (INRIA HAL, name origin Gurb+WiFi, commons governance analysis): https://inria.hal.science/hal-01429743/file/430289_1_En_14_Chapter.pdf
- Civil Society Technology Foundation, "Guifi.net: The World's Largest Community Network": https://civilsociety.dev/articles/guifi-net/
- Quartz via Nextgov, "A Technology Loved By Global Protestors Will Soon Be Used for Sending Messages and Music Without the Internet" (FireChat, 100,000 downloads in 24 hours, MeshKit, March 2017): https://www.nextgov.com/modernization/2017/03/technology-loved-global-protestors-will-soon-be-used-sending-messages-and-music-without-internet/135807/
- Adweek, "How a Chat App for Burning Man Turned Into a Tool for Revolution" (FireChat Hong Kong/Taiwan use, half a million users, anonymous-not-encrypted caveat): https://www.adweek.com/performance-marketing/how-chat-app-burning-man-turned-tool-revolution-163665/
- ThinkProgress, "The Tech Behind Hong Kong Protesters' Ingenious New Way To Duck Surveillance" (October 2014, mesh mechanics): https://thinkprogress.org/the-tech-behind-hong-kong-protesters-ingenious-new-way-to-duck-surveillance-5522831fa1f2/
- Popular Science, "With Australian Mesh-Network System, Cellphones Work in Remote or Disaster-Struck Areas, No Need for Towers" (Serval Project 2010 outback test, DNA, Batphone, July 2010): https://www.popsci.com/gadgets/article/2010-07/australian-teams-tower-less-cellphone-network-enables-communication-remote-areas/
- Phys.org, "New project enables mobile phone use in areas with no reception" (Serval Project details, July 2010): https://phys.org/news/2010-07-enables-mobile-areas-reception.html

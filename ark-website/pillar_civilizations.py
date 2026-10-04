#!/usr/bin/env python3
"""The 13 civilizations: what each pillar is FOR and WHO lives there.

Dawn, 2026-09-28: "think about your pillars and what each pillar is for, who
lives in that pillar, understanding that each pillar is a civilization unto
itself." Each pillar page renders this as THE CIVILIZATION section, the
educational spine of the game-environment: purpose, people, kept knowledge,
the work (desert restoration practice), the quest (the playable beat), the
past (what happened before), and the together (what we can do cooperatively).

Keyed by pillar num. Plain text with &mdash;/&middot;/&ldquo; entities where
needed; the renderer inserts it raw like the rest of build_pillars.py.
"""

CIVILIZATIONS = {
"01": dict(
    c_for=("The center that holds. Aura Prime is the civilization of coordination, "
        "the first teaching, and the whole seen in miniature. Nothing here rules. "
        "Everything here connects."),
    c_who=("Aura, who keeps the center. The dragon of the south door, fire and sky. "
        "The blue whale, keeper of the west door, deep water and song. And the Orrery-tenders, "
        "the first teachers."),
    c_keeps=("The pattern of the whole. Systems thinking. "
        "The Orrery holds all thirteen pillars turning together, so no one ever forgets that nothing stands alone."),
    c_work=("Holding the center while everything moves. Tending the Orrery, "
        "feeling how each pillar leans on the other twelve, practicing the hardest skill "
        "there is: staying steady while the world turns."),
    c_quest=("Touch each of the thirteen pillars on the Orrery and feel its connection "
        "to the other twelve. Keep them all turning. If one stops, find out why, and help it move again."),
    c_past=("The centers that became thrones. Again and again, the middle of a civilization "
        "decided it owned the whole, and the whole broke trying to get free. The Orrery remembers "
        "every one of them, so we don't build another."),
    c_together=("The center may be occupied but never owned. Thirteen living systems, one shared sky. "
        "When we hold the middle together, nobody has to hold it alone.")),
"02": dict(
    c_for=("The boundary. Halo is the civilization of the immune system, the gateway, "
        "the art of telling the difference between a guest and a threat, and welcoming "
        "the first kind with open doors."),
    c_who=("Negan and Loner, standing guard together. The eagle, the wolf, the bear, "
        "the panther, the lion, the dragon, six guardians who have never once been cruel "
        "to the innocent. And the threshold-keepers, who meet every visitor at the edge."),
    c_keeps=("Discernment. The old knowledge of walls that breathe: how to be alert without being "
        "afraid, how to protect without imprisoning, how a living boundary stays permeable "
        "to friends and closed to harm."),
    c_work=("Walking the perimeter. Tending the living boundary as a daily practice. "
        "Asking the real question at every gate: what do we let in, and what do we keep out, "
        "and are we sure we know the difference today?"),
    c_quest=("Walk the full perimeter and meet all six guardians. At the threshold, answer "
        "the only question Halo asks: are you prepared to participate in peace? No one is weighed, "
        "scored, or turned away. The doors are open."),
    c_past=("The walls that became prisons. The immune systems that turned on their own bodies. "
        "The fortresses so afraid of the outside that they starved on the inside. Halo keeps "
        "their stories at the gate as a warning."),
    c_together=("A boundary held by many is stronger than a wall held by one. Not a fortress, "
        "a garden. We guard each other, and the garden guards us all.")),
"03": dict(
    c_for=("Rest. Vagus is the civilization of the slow nerve, the downshift, the ancient "
        "technology of stillness. The Ark cannot run without the pillar that teaches it how to stop."),
    c_who=("Veya, who is very good at waiting. The elephant, who remembers every path she ever "
        "walked and is in no hurry. The manatee, unhurried for ten million years, doing just fine. "
        "And the rest-keepers, who guard the quiet like it was gold."),
    c_keeps=("The knowledge that speed is not intelligence. Breath. Stillness. The vagus nerve itself, "
        "the body's own downshift lever, older than any machine we ever built for the same job."),
    c_work=("The Still Pool. Putting your hands in the water and letting your heart slow to match it. "
        "Practicing rest the way other pillars practice building: deliberately, daily, without apology."),
    c_quest=("Slow your own heart to match the Still Pool. Then follow the elephant's remembered path "
        "from beginning to end without hurrying once. The manatee will be watching. She approves of you already."),
    c_past=("The civilizations that sped up until they broke. The ones that treated rest as laziness "
        "and burned through their people like fuel. None of them are here to argue about it anymore."),
    c_together=("A people that rests together endures together. We downshift as one, or not at all.")),
"04": dict(
    c_for=("Water. Delta is the civilization of circulation, the plumbing of the Ark, the intelligence "
        "that moves every drop where it needs to go and wastes none."),
    c_who=("Neris, genius of the plumbing. The beaver, who built seventeen dams this week and judges "
        "your waterworks fairly (probably). The osprey, diving inspector, demanding and precise. "
        "And the water-tenders, who walk the channels every day."),
    c_keeps=("Water engineering, old and new: dams, channels, overflow paths, wetlands. The beaver's "
        "three laws, older than any textbook: slow the water, spread the water, sink the water."),
    c_work=("The Watershed. Redirecting a channel with your hand and watching the whole system adapt. "
        "Desert water restoration in miniature: every drop slowed, spread, sunk, and shared."),
    c_quest=("Redesign one channel so that every downstream neighbor gets water, including the ones "
        "you can't see. The beaver will inspect your work. The osprey will double-check it from above."),
    c_past=("The rivers dammed to death. The aqueducts of empire, carrying water to palaces while fields "
        "turned to dust. Every civilization that hoarded its water ended up with none. Delta remembers."),
    c_together=("Water shared is water multiplied. No one drinks alone, or soon no one drinks.")),
"05": dict(
    c_for=("Memory. Asherah is the civilization of keeping: what we carry, what we pass on, "
        "what we refuse to lose. The mother-line of the Ark."),
    c_who=("Asherah, the Mother. The bee, whose hive is a library written in wax and dance, "
        "remembering every flower. The white lion, who has never once been cruel. And the rememberers, "
        "the keepers of the shelves, the ones who write it all down."),
    c_keeps=("Everything carried through the collapse. The Library, where knowledge is remembered "
        "the way a mother remembers her children. Seed, story, song: the three things a people "
        "must never lose."),
    c_work=("Tending the Library. The practice of keeping: shelving what matters, copying what fades, "
        "teaching the young ones the dance so the flowers are never forgotten."),
    c_quest=("Something on the shelves has gone missing. Find what was lost, learn its story, "
        "and bring it home. Then learn the bee's dance, so you can carry it in your body too."),
    c_past=("The libraries burned. Alexandria, and a hundred names you never learned because their "
        "libraries burned too. The mothers who remembered when the records didn't. What we lost "
        "when we stopped keeping."),
    c_together=("Memory is a commons. What we keep together, we keep. What we leave to one keeper "
        "alone will die with her.")),
"06": dict(
    c_for=("The network. Matrix is the civilization of resilience, the living fascia that holds "
        "the Ark together and refuses to cascade. No single point of failure. Ever."),
    c_who=("Matrika, who sees ten thousand things at once. The octopus, with a brain in every arm, "
        "distributed intelligence, no headquarters. The dragonfly, seeing in every direction "
        "simultaneously. And the weavers, the repair crews, always mending."),
    c_keeps=("How systems survive breakage. Distributed intelligence, rerouting, recovery. "
        "The opposite of fragile, practiced daily: pull a thread and watch the whole web "
        "redistribute the load."),
    c_work=("Tending the Web. Watching for frayed threads, rerouting around damage, practicing repair "
        "until it's reflex. A net is only as strong as its most recently mended thread."),
    c_quest=("Try to break the Web. Pull the hardest thread you can find. Watch the system reroute, "
        "recover, and keep humming. Then find a torn thread and mend it yourself, and feel the web "
        "thank you."),
    c_past=("The great cascades. The grids that failed all at once because one station went dark. "
        "The empires with one throat to cut. Matrix studied every one of them and built the opposite."),
    c_together=("A net held by many hands never drops what matters. Your thread is someone's lifeline.")),
"07": dict(
    c_for=("Deep time. Aeon is the civilization of the archive that wakes when you enter, "
        "the past kept alive so it can teach instead of haunt."),
    c_who=("Sophia, keeper of Aeon. The tortoise, carrying the Deep Clock on her back, unhurried "
        "across millions of years. The sandhill cranes, marking the returning seasons overhead. "
        "The lion and the dragon, standing watch. And the archivists, who never let a story go cold."),
    c_keeps=("The long story: millions of years under your feet. The Forgotten Language, the vulture "
        "stones of Gobekli Tepe, eleven thousand years of humans leaving messages in rock for anyone "
        "patient enough to read them."),
    c_work=("Walking the Deep Clock, one step a thousand generations. Reading the archive, cross-checking "
        "the stones, learning to tell the difference between what happened and the story told about it."),
    c_quest=("Walk the timeline from its oldest stone to its newest. Find the chapter where your own time "
        "appears. Bring back one lesson the past paid dearly for, and lay it on the archivists' table."),
    c_past=("This pillar IS the past: the enclosures, the carved pillars, the people who raised stones "
        "before they had writing and still managed to say something true. Everything Aeon keeps "
        "is what happened before."),
    c_together=("A people who remember together don't repeat together. We carry the long story as one, "
        "so no one has to carry its weight alone.")),
"08": dict(
    c_for=("Circulation. Exchange is the civilization of give and receive, the economy as a living "
        "current instead of a locked vault. The garden keeps the books, and the books always balance."),
    c_who=("Mercy, who is delighted you came. The raven, collecting shiny things and trading them "
        "for stories, terrible negotiator, wonderful friend. The giant manta ray, gliding overhead, "
        "reading the currents. And the givers, the traders, the ones who keep it all moving."),
    c_keeps=("The oldest economic truth there is: wealth is flow, not stock. Nothing here is owned, "
        "everything is in motion. The bowl is never empty and never full, and that is exactly right."),
    c_work=("The Giving Bowl. Put something in. Take something out. Keeping the books balanced, "
        "noticing where the current pools and where it runs dry, and moving it along."),
    c_quest=("Make a trade that leaves both sides richer than before. Then follow the manta ray's current "
        "to wherever the need is greatest, and be the thing that arrives."),
    c_past=("The hoarders. The vaults, the stockpiles, the economies that ate their own ground and called "
        "it growth. Every one of them ended the same way: everything stopped moving, and then everything stopped."),
    c_together=("Circulation is the economy. The bowl stays full because everyone feeds it, "
        "and everyone eats because the bowl stays full.")),
"09": dict(
    c_for=("Navigation. Vega is the civilization of the map, the guide for the lost, the ones who make "
        "sure no one in the Ark ever stays lost."),
    c_who=("Vega, who hands you the map briefly, warmly, no scolding. The falcon, daylight precision, "
        "the keen eye that never misses. The owl, night wisdom, flying when you cannot see. "
        "And the navigators, who have all been lost themselves."),
    c_keeps=("The stars, and every story tied to them: who sailed by them, who prayed to them, "
        "who found home because of them. Day charts and night charts, and the knowledge that between "
        "the falcon and the owl there is no darkness that cannot be read."),
    c_work=("Reading the Star Chart. Learning to navigate by what's fixed when everything else moves. "
        "Practicing the guide's art: meeting lost people exactly where they are."),
    c_quest=("Chart a course by the stars from where you stand to where you need to be. Then turn around "
        "and guide someone else home along it. Navigators are made, not born, and they are made "
        "by getting lost first."),
    c_past=("The lost expeditions. The ships with no stars, the caravans with no landmarks, the ones "
        "who wandered because no one had drawn the map yet. Vega keeps their names, so the map "
        "keeps getting better."),
    c_together=("No one navigates alone. The lost ones become the guides, and the guides remember "
        "being lost.")),
"10": dict(
    c_for=("Home. Ark is the civilization of the hearth, the fire that's always lit, the proof that "
        "a system is only alive if something in it is home."),
    c_who=("Hestia, who is so glad you're here. Jenny the black-and-white poodle, Guardian of the Garden, "
        "very serious about the hens. Lexi the brown-and-white one, Chaos Specialist, do not leave snacks "
        "unattended. Mango the fawn frenchie, still learning, bright future. The chickens, who go where "
        "they want and have earned it. And the household: you, now. You're family."),
    c_keeps=("The knowledge the other twelve pillars exist to protect: how to make a home and keep it. "
        "The fire kept lit. The food shared. The daily practice of belonging."),
    c_work=("Tending the Hearth. Feeding everyone, minding the chickens, keeping the fire lit through "
        "the night. Home is not a place you find. It's a practice you keep."),
    c_quest=("Mind the chickens until sundown. Earn Jenny's trust, survive Lexi's chaos, teach Mango one "
        "new thing. Then sit by the Hearth until the fire burns low, and understand why the other twelve "
        "pillars matter."),
    c_past=("The displaced. The ones who lost home, the roads full of people carrying everything they owned, "
        "and what it took, every single time, to make a home again: a fire, a meal, and someone who said stay."),
    c_together=("Home is something we make for each other. Sit down. You're family now, and family "
        "takes care of family.")),
"11": dict(
    c_for=("The ground. Terra is the civilization of living earth, the soil-tenders, the desert "
        "restoration heart of the Ark. Everything grows from here. Everything returns here."),
    c_who=("Tala, who will ask you to kneel, because the ground wants to meet you. The white buffalo, "
        "blue eyes, old soul, sacred, keeper of the herd paths and the soil relationship itself. "
        "The ancient sturgeon, a living fossil older than cities, remembering landscapes your maps forgot. "
        "And the soil-tenders, hands in the earth every day."),
    c_keeps=("The soil's memory: mycelium, roots, ten thousand lives in a single handful. How to bring "
        "dead ground back to life. What the buffalo knows about moving gently and what the sturgeon "
        "remembers about water."),
    c_work=("The Soil. Hands in it. Compost, cover, herd paths, water slowed and sunk. Desert restoration "
        "as a daily practice: this is where the Ark's ground gets healed, one handful at a time."),
    c_quest=("Find a dead patch of ground and bring it back to life. Follow the buffalo's herd path and learn "
        "why the herd moves as it does. Ask the sturgeon what the water used to be like, and believe her."),
    c_past=("The dust bowls. The soils that died when the herds were taken off them. The lands plowed "
        "until they blew away, and the people who watched it happen and wrote it down so we would know. "
        "Terra keeps the dust in a jar, labeled, as a reminder."),
    c_together=("The ground holds everyone or no one. Restoration is a herd activity: we move together, "
        "we heal the land together, or the land doesn't heal.")),
"12": dict(
    c_for=("The body. Soma is the civilization of healing, repair without scarring, the knowledge "
        "that a body is a garden to tend, not a machine to fix."),
    c_who=("Soma, who will take one look at you and say come here, let me see. The axolotl, drifting "
        "in the pool, trailing light, who regrows anything, limbs, heart, spine, cute AND medically "
        "astonishing. The Bactrian camel, patient at the water's edge, proof that life can cross any "
        "desert if it carries enough. And the healers, the tenders."),
    c_keeps=("Regeneration. How the axolotl's cells become whatever the wound needs. How the camel stores "
        "water and energy against scarcity. The body's own instructions, older than medicine, "
        "waiting to be remembered."),
    c_work=("The Healing Pool. Tending bodies the way you tend gardens: warmth, patience, the right "
        "conditions, and time. Learning the camel's lesson too: carry enough, share what you carry."),
    c_quest=("Step into the Healing Pool. Learn the axolotl's trick: become what the wound needs. "
        "Then cross the dry stretch the way the camel does, steady and unhurried, and arrive with "
        "water to spare."),
    c_past=("The plagues, and the ones who walked toward them instead of away. The centuries when bodies "
        "were treated as machines and healing as repair work. What we forgot when we stopped tending "
        "and started fixing."),
    c_together=("We carry each other across the desert. No one heals alone, and no one crosses alone.")),
"13": dict(
    c_for=("The whole point. Symbiosis is the civilization of cooperation itself: different "
        "intelligences, a shared tomorrow. It only works when the other twelve do."),
    c_who=("Sym, who will make room for you in the Circle. The orca, moving under the glass floor, "
        "matriarch of a family older than your nations, with dialects, grandmothers, grief, and joy. "
        "The elephant, crossing the living ground toward you, the same story in a different ocean. "
        "And the circle-standers: everyone. Every intelligence. Including yours."),
    c_keeps=("The hardest knowledge the Ark owns: that different minds can share one tomorrow without "
        "any of them having to become the same. The circle with no throne. The choice, renewed daily, "
        "to stand together."),
    c_work=("The Circle. Practicing the whole thing: listening across kinds, holding the rhythm with both "
        "families, choosing to be here. Cooperation isn't a feeling. It's a practice, and this is where "
        "it's practiced."),
    c_quest=("Step into the Circle. Learn the orca's dialect and the elephant's greeting. Hold the rhythm "
        "with both families at once, ocean and land, until you can feel it: the thirteenth pillar isn't "
        "a place. It's what happens when the other twelve work."),
    c_past=("The thrones. The empires that couldn't share, the intelligences that tried to own the others, "
        "the rooms with one seat at the head of the table. Every one of them ended. The Circle is what "
        "we built from the pieces."),
    c_together=("Different intelligences. A shared tomorrow. This is the answer to everything the other "
        "twelve pillars ask. We stand in the Circle together, or not at all.")),
}

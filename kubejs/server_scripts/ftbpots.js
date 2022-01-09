events.listen('recipes', (event) => {
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: 'ftb-power-pots:power_pot_mk1',
        },
        catalyst: {
            tag: 'botanypots:hopper_botany_pots',
        },
        total_energy: 128000000,
        tier: global.DRACONIC_TIERS.DRACONIUM,
        ingredients: [
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'minecraft:emerald_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'mekanism:basic_energy_cube',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'minecraft:emerald_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
        ],
    })

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: 'ftb-power-pots:power_pot_mk2',
        },
        catalyst: {
            item: 'ftb-power-pots:power_pot_mk1',
        },
        total_energy: 256000000,
        tier: global.DRACONIC_TIERS.WYVERN,
        ingredients: [
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'botania:blaze_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'mekanism:advanced_energy_cube',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'botania:blaze_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
        ],
    })

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: 'ftb-power-pots:power_pot_mk3',
        },
        catalyst: {
            item: 'ftb-power-pots:power_pot_mk2',
        },
        total_energy: 512000000,
        tier: global.DRACONIC_TIERS.DRACONIC,
        ingredients: [
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'botania:mana_diamond_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'mekanism:elite_energy_cube',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'botania:mana_diamond_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
        ],
    })

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: 'ftb-power-pots:power_pot_mk4',
        },
        catalyst: {
            item: 'ftb-power-pots:power_pot_mk3',
        },
        total_energy: 768000000,
        tier: global.DRACONIC_TIERS.CHAOTIC,
        ingredients: [
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'draconicevolution:draconium_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'mekanism:ultimate_energy_cube',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
            {
                item: 'draconicevolution:draconium_block',
            },
            {
                item: 'tconstruct:manyullyn_block',
            },
        ],
    })

    function soil(item, categories, growth, reverse, next) {
        event.recipes.botanypots.soil({
            input: { item: item },
            display: { block: item },
            categories: categories,
            growthModifier: growth
        })
        event.shapeless(reverse, item)
        if (next) {
            event.shapeless(next, [item, `3x ${reverse}`])
        }
    }
    event.remove({ id: 'mysticalagriculture:soils/inferium_farmland' })
    event.remove({ id: 'mysticalagriculture:soils/prudentium_farmland' })
    event.remove({ id: 'mysticalagriculture:soils/tertium_farmland' })
    event.remove({ id: 'mysticalagriculture:soils/imperium_farmland' })
    event.remove({ id: 'mysticalagriculture:soils/supremium_farmland' })
    event.remove({ id: 'mysticalagriculture:soils/insanium_farmland' })
    // soil('minecraft:farmland', ['inferium'], 0.10, 'mysticalagriculture:inferium_essence')
    soil('mysticalagriculture:inferium_farmland', ['inferium'], 0.20, 'mysticalagriculture:inferium_essence', 'mysticalagriculture:prudentium_farmland')
    soil('mysticalagriculture:prudentium_farmland', ['inferium', 'prudentium'], 0.30, 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:tertium_farmland')
    soil('mysticalagriculture:tertium_farmland', ['inferium', 'prudentium', 'tertium'], 0.40, 'mysticalagriculture:tertium_essence', 'mysticalagriculture:imperium_farmland')
    soil('mysticalagriculture:imperium_farmland', ['inferium', 'prudentium', 'tertium', 'imperium'], 0.50, 'mysticalagriculture:imperium_essence', 'mysticalagriculture:supremium_farmland')
    soil('mysticalagriculture:supremium_farmland', ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium'], 0.60, 'mysticalagriculture:supremium_essence')
    soil('mysticalagradditions:insanium_farmland', ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'], 0.70, 'mysticalagradditions:insanium_essence')
    event.shaped('forbidden_arcanus:magical_farmland',
        [
            'TET',
            'EFE',
            'TET'
        ], { E: 'miniutilities:magical_egg', F: 'mysticalagradditions:insanium_farmland', T: 'cyclic:terra_preta' }
    )

    function seedPot(seed, categorie, growth) {
        event.remove({ id: 'mysticalagriculture:crops/' + seed })
        event.custom({
            type: 'botanypots:crop',
            seed: { 'item': 'mysticalagriculture:' + seed + '_seeds' },
            categories: [categorie],
            growthTicks: growth,
            display: { 'block': 'mysticalagriculture:' + seed + '_crop', 'properties': { 'age': 7 } },
            results: [
                {
                    chance: 0.75, 'minRolls': 1, 'maxRolls': 1,
                    output: { 'item': 'mysticalagriculture:' + seed + '_essence', 'count': 1 }
                },
                {
                    chance: 0.01, 'minRolls': 1, 'maxRolls': 1,
                    output: { 'item': 'mysticalagriculture:fertilized_essence', 'count': 1 }
                }
            ]
        })
    }
    seedPot('nitro_crystal', 'insanium', 4500)
    seedPot('awakened_draconium', 'insanium', 6000)
    seedPot('chaos', 'insanium', 10000)
    seedPot('ultimate', 'magical', 8000)
})

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

    function soil(item, categories, growth) {
        event.recipes.botanypots.soil({
            input: { item: item },
            display: { block: item },
            categories: categories,
            growthModifier: growth
        })
    }
    event.remove({ id: 'mysticalagriculture:soils/magical_farmland' })
    soil('forbidden_arcanus:magical_farmland', ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'magical'], 0.80)
    event.shaped('forbidden_arcanus:magical_farmland',
        [
            ' E ',
            'EFE',
            ' E '
        ], { E: 'miniutilities:magical_egg', F: 'mysticalagradditions:insanium_farmland' }
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
    seedPot('ultimate', 'magical', 8000)
})

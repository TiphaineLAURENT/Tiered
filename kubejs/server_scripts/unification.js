events.listen('item.tags', (event) => {
    // Cobalt
    event.removeAllTagsFrom('moremekanismprocessing:cobalt_ingot')
    event.removeAllTagsFrom('moremekanismprocessing:cobalt_nugget')

    // Lead
    event.removeAllTagsFrom('mekanism:lead_ore')
    event.removeAllTagsFrom('mekanism:ingot_lead')
    event.removeAllTagsFrom('mekanism:nugget_lead')
    event.removeAllTagsFrom('mekanism:dust_lead')
    event.removeAllTagsFrom('mekanism:block_lead')

    // Zinc
    event.removeAllTagsFrom('create:zinc_ingot')
    event.removeAllTagsFrom('create:zinc_nugget')

    // Copper
    event.removeAllTagsFrom('create:copper_ingot')
    event.removeAllTagsFrom('mekanism:ingot_copper')
    event.removeAllTagsFrom('tconstruct:copper_ingot')
    event.removeAllTagsFrom('create:copper_block')
    event.removeAllTagsFrom('mekanism:block_copper')
    event.removeAllTagsFrom('tconstruct:copper_block')
    event.removeAllTagsFrom('create:copper_nugget')
    event.removeAllTagsFrom('mekanism:nugget_copper')
    event.removeAllTagsFrom('tconstruct:copper_nugget')
    event.removeAllTagsFrom('mekanism:dust_copper')
    event.removeAllTagsFrom('tconstruct:copper_dust')
    event.removeAllTagsFrom('create:copper_sheet')
    event.removeAllTagsFrom('create:copper_ore')
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('tconstruct:copper_ore')

    // Silver
    event.removeAllTagsFrom('moremekanismprocessing:silver_ingot')
    event.removeAllTagsFrom('moremekanismprocessing:silver_nugget')
    event.removeAllTagsFrom('moremekanismprocessing:dust_silver')

    // Tin
    event.removeAllTagsFrom('mekanism:tin_ore')
    event.removeAllTagsFrom('mekanism:ingot_tin')
    event.removeAllTagsFrom('mekanism:nugget_tin')
    event.removeAllTagsFrom('mekanism:dust_tin')
    event.removeAllTagsFrom('mekanism:block_tin')
})

events.listen('block.tags', (event) => {
    // Lead
    event.removeAllTagsFrom('mekanism:lead_ore')
    event.removeAllTagsFrom('mekanism:block_lead')

    // Copper
    event.removeAllTagsFrom('create:copper_block')
    event.removeAllTagsFrom('mekanism:block_copper')
    event.removeAllTagsFrom('tconstruct:copper_block')
    event.removeAllTagsFrom('create:copper_ore')
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('tconstruct:copper_ore')

    // Tin
    event.removeAllTagsFrom('mekanism:block_tin')
    event.removeAllTagsFrom('mekanism:tin_ore')
})

events.listen('recipes', (event) => {
    // Cobalt
    event.remove({ id: 'moremekanismprocessing:processing/cobalt/ingot/from_nugget' })
    event.remove({ id: 'moremekanismprocessing:processing/cobalt/nugget/from_ingot' })

    event.remove({ id: 'moremekanismprocessing:processing/cobalt/ingot/from_dust_blasting' })
    event.smelting('tconstruct:cobalt_ingot', 'moremekanismprocessing:dust_cobalt').xp(0.5)

    event.remove({ id: 'moremekanismprocessing:processing/cobalt/ingot/from_dust_smelting' })
    event.blasting('tconstruct:cobalt_ingot', 'moremekanismprocessing:dust_cobalt').xp(0.5)

    // Lead
    event.remove({ id: 'mekanism:processing/lead/ore/from_dust' })
    event.remove({ id: 'mekanism:processing/lead/ingot/from_nuggets' })
    event.remove({ id: 'mekanism:processing/lead/ingot/from_block' })
    event.remove({ id: 'create:blasting/ingot_lead_compat_mekanism' })
    event.remove({ id: 'mekanism:processing/lead/ingot/from_ore_blasting' })
    event.remove({ id: 'mekanism:processing/lead/ingot/from_dust_blasting' })
    event.remove({ id: 'mekanism:processing/lead/ingot/from_dust_smelting' })
    event.remove({ id: 'create:smelting/ingot_lead_compat_mekanism' })
    event.remove({ id: 'mekanism:processing/lead/ingot/from_ore_smelting' })
    event.remove({ id: 'mekanism:processing/lead/nugget/from_ingot' })
    event.remove({ id: 'create:splashing/mekanism/crushed_lead_ore' })
    event.remove({ id: 'mekanism:processing/lead/dust/from_ingot' })
    event.remove({ id: 'mekanism:processing/lead/dust/from_dirty_dust' })
    event.remove({ id: 'mekanism:processing/lead/dust/from_ore' })
    event.recipes.mekanism.enriching(Item.of('thermal:lead_dust', 2), '#forge:ores/lead')
    event.remove({ id: 'mekanism:processing/lead/storage_blocks/from_ingots' })

    // Zinc
    event.remove({ id: 'create:smelting/zinc_ingot_from_ore' })
    event.smelting('moremekanismprocessing:zinc_ingot', '#forge:ores/zinc').xp(0.5)

    event.remove({ id: 'create:blasting/zinc_ingot_from_ore' })
    event.blasting('moremekanismprocessing:zinc_ingot', '#forge:ores/zinc').xp(0.5)

    event.remove({ id: 'create:smelting/zinc_ingot_from_crushed' })
    event.smelting('moremekanismprocessing:zinc_ingot', 'create:crushed_zinc_ore').xp(0.5)

    event.remove({ id: 'create:crafting/materials/zinc_ingot_from_compacting' })

    event.remove({ id: 'create:crafting/materials/zinc_nugget_from_decompacting' })

    event.remove({ id: 'create:splashing/crushed_zinc_ore' })
    event.custom({
        'type': 'create:splashing',
        'ingredients': [
            {
                'item': 'create:crushed_zinc_ore'
            }
        ],
        'results': [
            {
                'item': 'moremekanismprocessing:zinc_nugget',
                'count': 10
            },
            {
                'item': 'moremekanismprocessing:zinc_nugget',
                'count': 5,
                'chance': 0.5
            }
        ]
    })

    event.remove({ id: 'create:blasting/zinc_ingot_from_crushed' })
    event.blasting('moremekanismprocessing:zinc_ingot', 'create:crushed_zinc_ore').xp(0.5)

    event.remove({ id: 'create:crafting/materials/zinc_ingot_from_decompacting' })
    event.shapeless('9x moremekanismprocessing:zinc_ingot', ['create:zinc_block'])

    // Copper
    event.remove({ id: 'create:crafting/materials/copper_ingot_from_compacting' })
    event.remove({ id: 'create:crafting/materials/copper_ingot_from_decompacting' })
    event.remove({ id: 'create:blasting/copper_ingot_from_ore' })
    event.remove({ id: 'create:blasting/copper_ingot_from_crushed' })
    event.blasting('thermal:copper_ingot', ['create:crushed_copper_ore']).xp(0.5)
    event.remove({ id: 'create:smelting/copper_ingot_from_ore' })
    event.remove({ id: 'create:smelting/copper_ingot_from_crushed' })
    event.smelting('thermal:copper_ingot', ['create:crushed_copper_ore']).xp(0.5)
    event.remove({ id: 'mysticalagriculture:essence/common/copper_ingot' })
    event.shaped('thermal:copper_ingot',
        [
            'EEE',
            'E E',
            'EEE'
        ], { E: 'mysticalagriculture:copper_essence' }
    )
    event.remove({ id: 'create:crafting/materials/copper_block_from_compacting' })
    event.remove({ id: 'create:crafting/materials/copper_nugget_from_decompacting' })
    event.remove({ id: 'create:splashing/crushed_copper_ore' })
    event.custom({
        'type': 'create:splashing',
        'ingredients': [
            {
                'item': 'create:crushed_copper_ore'
            }
        ],
        'results': [
            {
                'item': 'thermal:copper_nugget',
                'count': 10
            },
            {
                'item': 'thermal:copper_nugget',
                'count': 5,
                'chance': 0.5
            }
        ]
    })

    event.remove({ id: 'mekanism:processing/copper/ingot/from_block' })
    event.remove({ id: 'mekanism:processing/copper/ingot/from_nuggets' })
    event.remove({ id: 'mekanism:processing/copper/ingot/from_dust_blasting' })
    event.remove({ id: 'mekanism:processing/copper/ingot/from_ore_blasting' })
    event.remove({ id: 'mekanism:processing/copper/ingot/from_dust_smelting' })
    event.remove({ id: 'mekanism:processing/copper/ingot/from_ore_smelting' })
    event.remove({ id: 'mekanism:processing/copper/storage_blocks/from_ingots' })
    event.remove({ id: 'mekanism:processing/copper/nugget/from_ingot' })
    event.remove({ id: 'mekanism:processing/copper/dust/from_ingot' })
    event.remove({ id: 'mekanism:processing/copper/nugget/from_ingot' })
    event.remove({ id: 'mekanism:processing/copper/dust/from_ore' })
    event.recipes.mekanism.enriching(Item.of('thermal:copper_dust', 2), '#forge:ores/copper')
    event.remove({ id: 'mekanism:processing/copper/dust/from_dirty_dust' })
    event.recipes.mekanism.enriching(Item.of('thermal:copper_dust', 1), 'mekanism:dirty_dust_copper')
    event.remove({ id: 'mekanism:processing/copper/ore/from_dust' })
    event.recipes.mekanism.combining('thermal:copper_ore', '8x thermal:copper_dust', 'minecraft:cobblestone')

    event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_block' })
    event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_nuggets' })
    event.remove({ id: 'tconstruct:common/materials/copper_ingot_blasting' })
    event.remove({ id: 'tconstruct:common/materials/copper_ingot_smelting' })
    event.remove({ id: 'tconstruct:common/materials/copper_block_from_ingots' })
    event.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })

    // Silver
    event.remove({ id: 'moremekanismprocessing:processing/silver/ingot/from_nugget' })
    event.remove({ id: 'mysticalagriculture:essence/common/silver_ingot' })
    event.shaped('thermal:silver_ingot',
        [
            'EEE',
            'E E',
            'EEE'
        ], { E: 'mysticalagriculture:silver_essence' }
    )
    event.remove({ id: 'moremekanismprocessing:processing/silver/ingot/from_dust_blasting' })
    event.remove({ id: 'moremekanismprocessing:processing/silver/ingot/from_dust_smelting' })
    event.remove({ id: 'moremekanismprocessing:processing/silver/ingot/from_nugget' })
    event.remove({ id: 'moremekanismprocessing:processing/silver/nugget/from_ingot' })
    event.remove({ id: 'moremekanismprocessing:processing/silver/dust/from_ingot' })
    event.recipes.mekanism.crushing(Item.of('thermal:silver_dust', 1), 'thermal:silver_ingot')
    event.remove({ id: 'moremekanismprocessing:processing/silver/dust/from_dirty_dust' })
    event.recipes.mekanism.enriching(Item.of('thermal:silver_dust', 1), '#forge:ores/silver')
    event.remove({ id: 'moremekanismprocessing:processing/silver/dust/from_ore' })
    event.recipes.mekanism.enriching(Item.of('thermal:silver_dust', 2), '#forge:ores/silver')

    // Tin
    event.remove({ id: 'mekanism:processing/tin/ingot/from_nugget' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_block' })
    event.remove({ id: 'create:blasting/ingot_tin_compat_mekanism' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_ore_blasting' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_dust_blasting' })
    event.remove({ id: 'create:smelting/ingot_tin_compat_mekanism' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_ore_smelting' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_dust_smelting' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_nuggets' })
    event.remove({ id: 'mekanism:processing/tin/ingot/from_block' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/tin/ingot_gold_cast' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/tin/ingot_sand_cast' })
    event.remove({ id: 'mekanism:processing/tin/nugget/from_ingot' })
    event.remove({ id: 'mekanism:processing/tin/dust/from_ingot' })
    event.recipes.mekanism.crushing(Item.of('thermal:tin_dust', 1), 'thermal:tin_ingot')
    event.remove({ id: 'mekanism:processing/tin/dust/from_dirty_dust' })
    event.recipes.mekanism.enriching(Item.of('thermal:tin_dust', 1), '#forge:ores/tin')
    event.remove({ id: 'mekanism:processing/tin/dust/from_ore' })
    event.recipes.mekanism.enriching(Item.of('thermal:tin_dust', 2), '#forge:ores/tin')
    event.remove({ id: 'tconstruct:smeltery/casting/metal/tin/nugget_gold_cast' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/tin/nugget_sand_cast' })
    event.remove({ id: 'mekanism:processing/tin/storage_blocks/from_ingots' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/tin/block' })
    event.remove({ id: 'create:splashing/mekanism/crushed_tin_ore' })
    event.remove({ id: 'mekanism:processing/tin/ore/from_dust' })
    event.recipes.mekanism.combining('thermal:tin_ore', '8x thermal:tin_dust', 'minecraft:cobblestone')
})

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
})

events.listen('block.tags', (event) => {
    // Lead
    event.removeAllTagsFrom('mekanism:lead_ore')
    event.removeAllTagsFrom('mekanism:block_lead')
})

events.listen('recipes', (event) => {
    // Cobalt
    event.remove({ id: 'moremekanismprocessing:processing/cobalt/ingot/from_nugget' })
    event.remove({ id: 'moremekanismprocessing:processing/cobalt/nugget/from_ingot' })

    event.remove({ id: 'moremekanismprocessing:processing/cobalt/ingot/from_dust_blasting' })
    event.smelting('tconstruct:cobalt_ingot', 'moremekanismprocessing:dust_cobalt')

    event.remove({ id: 'moremekanismprocessing:processing/cobalt/ingot/from_dust_smelting' })
    event.blasting('tconstruct:cobalt_ingot', 'moremekanismprocessing:dust_cobalt')

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
})

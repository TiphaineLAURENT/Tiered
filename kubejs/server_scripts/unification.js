events.listen('item.tags', (event) => {
    // Cobalt
    event.removeAllTagsFrom('moremekanismprocessing:cobalt_ingot')
    event.removeAllTagsFrom('moremekanismprocessing:cobalt_nugget')

    // Lead
    event.removeAllTagsFrom('mekanism:lead_ore')
    event.removeAllTagsFrom('mekanism:ingot_lead')
    event.removeAllTagsFrom('mekanism:nugget_lead')
    event.removeAllTagsFrom('mekanism:dust_lead')
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
})

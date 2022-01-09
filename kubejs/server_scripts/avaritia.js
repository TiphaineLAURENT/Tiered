events.listen('recipes', (event) => {
    event.shaped('avaritiafurnace:infinity_fuel',
        [
            ' U ',
            'UCU',
            ' U ',
        ], { C: 'ironfurnaces:rainbow_coal', U: 'extendedcrafting:the_ultimate_ingot' })

    event.replaceInput({ id: 'avaritiafurnace:infinity_furnace_rcp' }, 'minecraft:emerald_block', 'extendedcrafting:the_ultimate_block')
    event.replaceInput({ id: 'avaritiafurnace:infinity_furnace_rcp' }, 'minecraft:nether_star', 'forbidden_arcanus:dark_nether_star')
})

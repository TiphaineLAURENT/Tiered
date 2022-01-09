events.listen('recipes', (event) => {
    event.replaceInput({ mod: 'botania' }, 'botania:livingrock', 'integrateddynamics:crystalized_menril_block')
    event.replaceOutput({ mod: 'botania' }, 'botania:livingrock', 'integrateddynamics:crystalized_menril_block')

    event.replaceInput({ mod: 'botania' }, 'botania:mana_pearl', 'rftoolsbase:infused_diamond')
    event.replaceOutput({ mod: 'botania' }, 'botania:mana_pearl', 'rftoolsbase:infused_diamond')

    event.replaceInput({ mod: 'botania' }, 'botania:mana_pearl', 'rftoolsbase:infused_enderpearl')
    event.replaceOutput({ mod: 'botania' }, 'botania:mana_pearl', 'rftoolsbase:infused_enderpearl')
})

const vanillaTools = Ingredient.of(/minecraft:(wooden|stone|iron|golden)_(sword|shovel|(pick)?axe)/);

events.listen('item.registry', (event) => {
    event.create('etherium_photovoltaic_cell').displayName('Etherium Photovoltaic Cell')
    event.create('gobber_photovoltaic_cell').displayName('Gobber Photovoltaic Cell')
    event.create('ultimate_photovoltaic_cell').displayName('Ultimate Photovoltaic Cell')
})

onEvent("item.modification", (event) => {
    event.modify(vanillaTools, (tool) => {
        tool.setMaxDamage(1)

        tool.setTier((tier) => {
            tier.uses = 1
            tier.speed = 0
            tier.attackDamageBonus = 0
            tier.level = 0
            tier.enchantmentValue = 0
        })
    })
})

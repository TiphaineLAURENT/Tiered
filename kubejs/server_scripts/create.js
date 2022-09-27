events.listen('recipes', (event) => {
    event.remove({ output: 'create:andesite_alloy' })
    event.shaped('create:andesite_alloy',
    [
        '#A',
        'A#',
    ], { '#': 'botania:manasteel_nugget', A: 'minecraft:andesite' })

    event.replaceInput({ mod: 'create' }, '#minecraft:planks', 'botania:livingwood')
})

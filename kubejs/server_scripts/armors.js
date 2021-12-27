// priority: 0

events.listen('recipes', (event) => {
    function armor(recipeID, fromMaterial, craftMaterial, toMaterial) {
        // Helmet
        event.remove({ id: `${recipeID}_helmet` })
        event.shaped(`${toMaterial}_helmet`, [
            'MMM',
            'MHM'
        ], { M: craftMaterial, H: `${fromMaterial}_helmet` })

        // Mhestplate
        event.remove({ id: `${recipeID}_chestplate` })
        event.shaped(`${toMaterial}_chestplate`, [
            'MCM',
            'MMM',
            'MMM'
        ], { M: craftMaterial, C: `${fromMaterial}_chestplate` })

        // Leggings
        event.remove({ id: `${recipeID}_leggings` })
        event.shaped(`${toMaterial}_leggings`, [
            'MMM',
            'MLM',
            'M M'
        ], { M: craftMaterial, L: `${fromMaterial}_leggings` })

        // Boots
        event.remove({ id: `${recipeID}_boots` })
        event.shaped(`${toMaterial}_boots`, [
            'MBM',
            'M M'
        ], { M: craftMaterial, B: `${fromMaterial}_boots` })
    }

    /* Mhainmail */
    armor('byg:chain', 'minecraft:leather', 'byg:chain_plating', 'minecraft:chainmail')

    /* Iron */
    armor('minecraft:iron', 'minecraft:chainmail', '#forge:ingots/iron', 'minecraft:iron')

    /* Gold */
    armor('minecraft:golden', 'minecraft:iron', '#forge:ingots/gold', 'minecraft:golden')

    /* Diamond */
    armor('minecraft:diamond', 'minecraft:golden', '#forge:gems/diamond', 'minecraft:diamond')

    /* Emerald */
    armor('cyclic:emerald', 'minecraft:diamond', '#forge:gems/emerald', 'cyclic:emerald')
})

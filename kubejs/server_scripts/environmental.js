events.listen('recipes', (event) => {
    // Litherite: crafted through tinkers casting from uraninite + liquid queen steel
    event.remove({ id: 'envirocore:items/ct_litherite2' })
    event.remove({ id: 'envirocore:items/ct_litherite4' })
    event.remove({ id: 'envirocore:items/ct_litherite6' })
    event.remove({ id: 'envirocore:items/ct_litherite8' })

    event.remove({ type: 'minecraft:crafting_shaped', output: 'envirocore:obsidian_plate' })
})

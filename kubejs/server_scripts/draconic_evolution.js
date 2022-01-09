events.listen('recipes', (event) => {
    event.shaped('draconicevolution:draconium_chest',
        [
            'DDD',
            'DCD',
            'DDD'
        ], { D: 'draconicevolution:draconium_ingot', C: 'ironchest:obsidian_chest' }
    )
})

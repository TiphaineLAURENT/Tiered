events.listen('recipes', (event) => {
    event.remove({ input: 'mystical_agriculture:infusion_crystal' })

    event.shaped('extendedcrafting:the_ultimate_nugget',
        [
            'EEE',
            'E E',
            'EEE'
        ], { E: 'mysticalagriculture:ultimate_essence' }
    )
})

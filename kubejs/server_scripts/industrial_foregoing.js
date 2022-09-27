events.listen('recipes', (event) => {
    event.remove({ output: '#industrialforegoing:machine_frame/pity' })
    event.recipes.thermal.smelter('industrialforegoing:machine_frame_pity', ['thermal:machine_frame', 'botania:dreamwood', 'compressium:cobblestone_3']).energy(10000)
})

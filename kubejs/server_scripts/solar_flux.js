events.listen('recipes', (event) => {
    /* Ethernium Photovoltaic */
    // Cell
    event.shaped(item.of('kubejs:etherium_photovoltaic_cell', 1), ['AAA', 'BCB', 'DED'], {
        A: 'enigmaticlegacy:etherium_ingot',
        B: 'minecraft:glowstone',
        C: 'compressium:diamond_2',
        D: '#forge:storage_blocks/quartz',
        E: 'solarflux:photovoltaic_cell_6'
    })
    // Panel
    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 2,
        pattern: [
            "ABBBA",
            "BCCCB",
            "BCDCB",
            "BCCCB",
            "ABBBA"
        ],
        key: {
            A: { "item": "solarflux:sp_de.chaotic" },
            B: { "item": "kubejs:etherium_photovoltaic_cell" },
            C: { "item": "enigmaticlegacy:etherium_ore" },
            D: { "item": "minecraft:nether_star" }
        },
        result: { "item": "solarflux:sp_custom_etherium", "count": 2 }
    })

    /* Gobber Photovoltaic */
    // Cell
    event.shaped(item.of('kubejs:gobber_photovoltaic_cell', 1),
        [
            'AAA',
            'BCB',
            'DED'
        ], { A: 'gobber2:gobber2_ingot_end', B: 'minecraft:glowstone', C: 'compressium:diamond_1', D: '#forge:storage_blocks/quartz', E: 'kubejs:etherium_photovoltaic_cell' }
    )
    // Panel
    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 2,
        pattern: [
            "ABBBA",
            "BCDCB",
            "BDEDB",
            "BCDCB",
            "ABBBA"
        ],
        key: {
            A: { "item": "solarflux:sp_custom_etherium" },
            B: { "item": "kubejs:gobber_photovoltaic_cell" },
            C: { "item": "gobber2:gobber2_glob_end" },
            D: { "item": "gobber2:gobber2_links_end" },
            E: { "item": "gobber2:gobber2_medallion_end" }
        },
        result: { "item": "solarflux:sp_custom_gobber", "count": 2 }
    })

    /* Ultimate Photovoltaic */
    // Cell
    event.shaped(item.of('kubejs:ultimate_photovoltaic_cell', 1),
        [
            'AAA',
            'BCB',
            'DED'
        ], { A: 'extendedcrafting:the_ultimate_ingot', B: 'minecraft:glowstone', C: 'compressium:diamond_3', D: '#forge:storage_blocks/quartz', E: 'kubejs:gobber_photovoltaic_cell' }
    )
    // Panel 
    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 2,
        pattern: [
            "ABBBA",
            "BCDCB",
            "BD DB",
            "BCDCB",
            "ABBBA"
        ],
        key: {
            A: { "item": "solarflux:sp_custom_gobber" },
            B: { "item": "kubejs:ultimate_photovoltaic_cell" },
            C: { "item": "extendedcrafting:the_ultimate_ingot" },
            D: { "item": "mysticalagradditions:creative_essence" },
        },
        result: { "item": "solarflux:sp_custom_ultimate", "count": 1 }
    })
})

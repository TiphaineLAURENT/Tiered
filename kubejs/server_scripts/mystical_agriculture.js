events.listen('recipes', (event) => {
    // Infusion crystal
    event.remove({ input: 'mystical_agriculture:infusion_crystal' })

    // Chaos nugget
    event.shaped('draconicevolution:small_chaos_frag',
        [
            'EEE',
            'E E',
            'EEE'
        ], { E: 'mysticalagriculture:chaos_essence' }
    )

    // Chaos Crux
    event.shaped(item.of('kubejs:chaotic_crux', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ], { A: 'mysticalagradditions:insanium_essence', B: 'draconicevolution:chaos_shard', C: 'draconicevolution:awakened_draconium_block' }
    )

    // Ultimate nugget
    event.shaped('extendedcrafting:the_ultimate_nugget',
        [
            'EEE',
            'E E',
            'EEE'
        ], { E: 'mysticalagriculture:ultimate_essence' }
    )

    // Creative essence
    event.custom({
        type: 'bloodmagic:soulforge',
        input0: {
            item: 'mysticalagriculture:master_infusion_crystal'
        },
        input1: {
            item: 'xreliquary:fortune_coin'
        },
        input2: {
            item: 'envirocore:xerothium_crystal'
        },
        input3: {
            item: 'extendedcrafting:ultimate_singularity'
        },
        output: {
            item: 'mysticalagradditions:creative_essence'
        },
        minimumDrain: 4096.0,
        drain: 4096.0
    })
})

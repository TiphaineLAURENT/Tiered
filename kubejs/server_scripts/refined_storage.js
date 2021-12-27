events.listen('recipes', (event) => {
    // Fortune 2 upgrade
    event.shapeless('refinedstorage:fortune_2_upgrade', [
        'refinedstorage:fortune_1_upgrade',
        'refinedstorage:fortune_1_upgrade'
    ])

    // Fortune 3 upgrade
    event.shapeless('refinedstorage:fortune_3_upgrade', [
        'refinedstorage:fortune_2_upgrade',
        'refinedstorage:fortune_2_upgrade'
    ])

    event.remove({ id: 'creativecrafter:creative_crafter' })
    event.shaped('creativecrafter:creative_crafter',
        [
            ' C ',
            'PNP',
            ' H '
        ], { C: '#forge:chests/wooden', P: 'extradisks:withering_processor', N: 'extrastorage:netherite_crafter', H: 'minecraft:dragon_head' }
    )
})

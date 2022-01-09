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

    // Creative crafter
    event.remove({ id: 'creativecrafter:creative_crafter' })
    event.shaped('creativecrafter:creative_crafter',
        [
            'UCU',
            'PNP',
            'UHU'
        ], { C: '#forge:chests/wooden', P: 'extradisks:withering_processor', N: 'extrastorage:netherite_crafter', H: 'minecraft:dragon_head', U: 'extendedcrafting:the_ultimate_block' }
    )

    // Processor binding
    event.remove({ id: 'refinedstorage:processor_binding' })
    event.shaped('refinedstorage:processor_binding',
        [
            'SBS',
        ], { S: 'botania:mana_string', B: '#forge:slimeballs' }
    )
})

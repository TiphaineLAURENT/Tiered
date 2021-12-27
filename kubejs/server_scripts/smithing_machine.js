events.listen('recipes', (event) => {
    //Smithing Machine Block
    event.shapeless(item.of('kubejs:smithing_machine_block'), ['minecraft:smithing_table'])

    //Smithing Machine
    event.custom({
        type: 'masterfulmachinery:machine_structure',
        id: 'smithing_machine',
        controllerId: 'smithing',
        name: 'Smithing Machine',
        layout: [[')'], ['C'], ['*']],
        legend: {
            ')': { 'block': 'masterfulmachinery:smithing_smithingitem_port_items_output' },
            '*': { 'block': 'masterfulmachinery:smithing_smithingitem_port_items_input' }
        }
    })

    //Item Input
    event.shaped(item.of('masterfulmachinery:smithing_smithingitem_port_items_input', 1),
        [
            'C  ',
            'B  ',
            'A  '
        ], { A: '#forge:chests/wooden', B: 'kubejs:smithing_machine_block', C: 'minecraft:hopper' }
    )

    //Item Output
    event.shaped(item.of('masterfulmachinery:smithing_smithingitem_port_items_output', 1),
        [
            'A  ',
            'B  ',
            'C  '
        ], { A: '#forge:chests/wooden', B: 'kubejs:smithing_machine_block', C: 'minecraft:hopper' }
    )

    //Controller
    event.shaped(item.of('masterfulmachinery:smithing_controller', 1),
        [
            'A  ',
            'B  ',
            'C  '
        ], { A: '#forge:storage_blocks/redstone', B: 'kubejs:smithing_machine_block', C: 'xnet:controller' }
    )

    function smithingcraft(input, secinput, output) {
        event.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: 'smithing_machine',
            controllerId: 'smithing',
            ticks: 10,
            inputs: [
                { 'type': 'masterfulmachinery:items', 'data': { 'item': input, 'count': 1 } },
                { 'type': 'masterfulmachinery:items', 'data': { 'item': secinput, 'count': 1 } }
            ],
            outputs: [
                { 'type': 'masterfulmachinery:items', 'data': { 'item': output, 'count': 1 } }
            ]
        })
    }

    smithingcraft('minecraft:golden_apple', 'minecraft:netherite_ingot', 'upgradednetherite:netherite_apple')
    smithingcraft('metalbarrels:obsidian_barrel', 'minecraft:netherite_ingot', 'metalbarrels:netherite_barrel')
    smithingcraft('minecraft:ender_pearl', 'minecraft:netherite_ingot', 'upgradednetherite:ender_upgraded_netherite_pearl')
    smithingcraft('minecraft:enchanted_golden_apple', 'minecraft:netherite_ingot', 'upgradednetherite:enchanted_netherite_apple')
    smithingcraft('forbidden_arcanus:spawner_scrap', 'forbidden_arcanus:arcane_crystal_block', 'forbidden_arcanus:quantum_catcher')
    smithingcraft('pipez:ultimate_upgrade', 'mysticalagradditions:creative_essence', 'pipez:infinity_upgrade')
    smithingcraft('create:blaze_cake', 'mysticalagradditions:creative_essence', 'create:creative_blaze_cake')
    smithingcraft('cagedmobs:dnasamplerdiamond', 'cagedmobs:star_infused_netherite_ingot', 'cagedmobs:dnasamplernetherite')
})

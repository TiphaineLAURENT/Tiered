events.listen('block.registry', (event) => {
    event.create('smithing_machine_block').material('iron').hardness(0.5).displayName('Smithing Machine Block')
    event.create('chaotic_crux').material('rock').hardness(0.5).displayName('Chaotic Crux')
})

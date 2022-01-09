events.listen('recipes', function (event) {
    event.replaceInput({}, 'minecraft:crafting_table', 'cyclic:workbench')
    event.replaceInput({ id: 'cyclic:workbench' }, 'cyclic:workbench', 'minecraft:crafting_table')
})

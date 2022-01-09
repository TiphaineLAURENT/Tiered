events.listen('recipes', function (event) {
    event.shapeless('ftbultimine:ultiminer', [Item.of('minecraft:enchanted_book').enchant('cyclic:excavate', 1), Item.of('minecraft:golden_shovel', '{Damage:0}'), Item.of('minecraft:golden_pickaxe', '{Damage:0}'), Item.of('minecraft:golden_axe', '{Damage:0}'), Item.of('minecraft:golden_hoe', '{Damage:0}'), 'minecraft:cooked_beef', '#forge:heads'])
})

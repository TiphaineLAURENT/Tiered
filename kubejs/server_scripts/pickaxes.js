onEvent('item.modification', e => {
	e.modify('minecraft:netherite_pickaxe', t => {
		t.tier = tierOptions => {
			tierOptions.speed = 0.0
		}
	})
})

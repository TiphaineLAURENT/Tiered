// priority: 0

onEvent('jei.hide.items', (event) => {
	global.REMOVED_ITEMS.forEach((item) => {
		event.hide(item)
	})
})

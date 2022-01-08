// priority: 0

onEvent('jei.hide.items', (event) => {
	event.hide('mysticalagriculture:infusion_crystal')
	event.hide('moremekanismprocessing:cobalt_ingot')
	event.hide('moremekanismprocessing:cobalt_nugget')

	// Lead
	event.hide('mekanism:lead_ore')
	event.hide('mekanism:dust_lead')
	event.hide('mekanism:ingot_lead')
	event.hide('mekanism:nugget_lead')
	event.hide('mekanism:block_lead')
})

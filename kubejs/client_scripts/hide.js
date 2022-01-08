// priority: 0

onEvent('jei.hide.items', (event) => {
	event.hide('mysticalagriculture:infusion_crystal')

	/* Unification */
	// Cobalt
	event.hide('moremekanismprocessing:cobalt_ingot')
	event.hide('moremekanismprocessing:cobalt_nugget')

	// Lead
	event.hide('mekanism:lead_ore')
	event.hide('mekanism:dust_lead')
	event.hide('mekanism:ingot_lead')
	event.hide('mekanism:nugget_lead')
	event.hide('mekanism:block_lead')

	// Zinc
	event.hide('create:zinc_ingot')
	event.hide('create:zinc_nugget')

	// Copper
	event.hide('create:copper_ingot')
	event.hide('create:copper_ore')
	event.hide('create:copper_block')
	event.hide('create:copper_nugget')
	event.hide('mekanism:ingot_copper')
	event.hide('mekanism:copper_ore')
	event.hide('mekanism:block_copper')
	event.hide('mekanism:nugget_copper')
	event.hide('mekanism:dust_copper')
	event.hide('tconstruct:copper_ingot')
	event.hide('tconstruct:copper_ore')
	event.hide('tconstruct:copper_block')
	event.hide('tconstruct:copper_nugget')

	// Silver
	event.hide('moremekanismprocessing:dust_silver')
	event.hide('moremekanismprocessing:silver_ingot')
	event.hide('moremekanismprocessing:silver_nugget')
})

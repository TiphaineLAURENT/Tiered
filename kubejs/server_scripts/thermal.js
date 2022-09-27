events.listen('recipes', (event) => {
    event.remove({ id: 'thermal:fire_charge/lumium_ingot_4' })
    event.remove({ id: 'thermal:lumium_dust_4' })
})

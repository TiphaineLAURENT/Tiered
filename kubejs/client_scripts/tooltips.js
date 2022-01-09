events.listen('item.tooltip', (tooltip) => {
    tooltip.add('extracoals:lapis_coal', ['Double speed'])
    tooltip.add('extracoals:redstone_coal', ['Quadruple speed'])
    tooltip.add('extracoals:gold_coal', ['Octuple speed'])
    tooltip.add('extracoals:emerald_coal', ['Double speed'])
    tooltip.add('extracoals:diamond_coal', ['Quadruple speed'])

    tooltip.add('ironfurnaces:rainbow_coal', ['Consumes 1 out of 5000 durabilities for each item smelt', 'Ideal for smelting a lot of individual items'])

    tooltip.add('miniutilities:solar_panel', ['Generates 4 RF/t', 'Multiplies generation every 2 panels'])
    tooltip.add('miniutilities:lunar_panel', ['Generates 4 RF/t', 'Multiplies generation every 2 panels'])
})

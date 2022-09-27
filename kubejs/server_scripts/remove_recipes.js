// priority: 0

events.listen('recipes', (event) => {
    global.REMOVED_ITEMS.forEach((item) => {
        event.remove({ input: item })
        event.remove({ output: item })
    })
})

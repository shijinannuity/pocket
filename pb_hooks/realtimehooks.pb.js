/// <reference path="../pb_data/types.d.ts" />

onRealtimeConnectRequest((e) => {
    console.log("\nFROM onRealtimeConnectRequest\n----------------------\n")
    console.log(JSON.stringify(e.httpContext))
    console.log(JSON.stringify(e.client.id()))
    console.log(JSON.stringify(e.idleTimeout) )// in nanosec
})

onRealtimeDisconnectRequest((e) => {
    console.log("\nFROM onRealtimeDisconnectRequest\n----------------------\n")
    console.log(JSON.stringify(e.httpContext))
    console.log(JSON.stringify(e.client.id()))
})

onRealtimeBeforeMessageSend((e) => {
    console.log("\nFROM onRealtimeBeforeMessageSend\n----------------------\n")
    console.log(JSON.stringify(e.httpContext))
    console.log(JSON.stringify(e.client.id()))
    console.log(JSON.stringify(e.message))
})


onRealtimeAfterMessageSend((e) => {
    console.log("\nFROM onRealtimeAfterMessageSend\n----------------------\n")
    console.log(JSON.stringify(e.httpContext))
    console.log(JSON.stringify(e.client.id()))
    console.log(JSON.stringify(e.message))
})

onRealtimeBeforeSubscribeRequest((e) => {
    console.log("\nFROM onRealtimeBeforeSubscribeRequest\n----------------------\n")
    console.log(JSON.stringify(e.httpContext))
    console.log(JSON.stringify(e.client.id()))
    console.log(JSON.stringify(e.subscriptions))
})

onRealtimeAfterSubscribeRequest((e) => {
    console.log("\nFROM onRealtimeAfterSubscribeRequest\n----------------------\n")
    console.log(JSON.stringify(e.httpContext))
    console.log(JSON.stringify(e.client.id()))
    console.log(JSON.stringify(e.subscriptions))
})

